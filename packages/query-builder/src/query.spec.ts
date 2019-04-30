import { QueryBuilder } from "./";
import { Member, OperationModel } from "@aws-sdk/types";
import { minimalOperation } from "./operations.fixtures";
import {
  blobShape,
  booleanShape,
  floatShape,
  integerShape,
  listOfStringsShape,
  listOfStringsFlattenedShape,
  listOfStringsWithLocationNameShape,
  listOfStringsWithLocationNameFlattenedShape,
  mapOfStringsToIntegersShape,
  mapOfStringsToIntegersFlattenedShape,
  mapOfStringsToIntegersWithLocationNameShape,
  stringShape,
  timestampShape
} from "./shapes.fixtures";

describe("QueryBuilder", () => {
  describe("structures", () => {
    const operation: OperationModel = {
      ...minimalOperation,
      input: {
        shape: {
          type: "structure",
          required: [],
          members: {
            foo: {
              shape: stringShape
            },
            bar: {
              shape: stringShape
            },
            baz: {
              shape: stringShape,
              locationName: "quux"
            }
          }
        }
      }
    };
    const queryBody = new QueryBuilder(jest.fn(), jest.fn());

    it("should serialize known properties of a structure", () => {
      const toSerialize = { foo: "fizz", bar: "buzz" };
      expect(queryBody.build({ operation, input: toSerialize })).toEqual(
        "bar=buzz&foo=fizz"
      );
    });

    it("should ignore unknown properties", () => {
      const toSerialize = { foo: "fizz", bar: "buzz", pop: "weasel" };
      expect(queryBody.build({ operation, input: toSerialize })).toEqual(
        "bar=buzz&foo=fizz"
      );
    });

    it("should serialize properties to the locationNames", () => {
      const toSerialize = { baz: "value" };
      expect(queryBody.build({ operation, input: toSerialize })).toEqual(
        "quux=value"
      );
    });

    it("should throw if a scalar value is provided", () => {
      for (let scalar of ["string", 123, true, null, void 0]) {
        expect(() => queryBody.build({ operation, input: scalar })).toThrow();
      }
    });

    it("should searialize nested structure", () => {
      const operation: OperationModel = {
        ...minimalOperation,
        input: {
          shape: {
            type: "structure",
            required: [],
            members: {
              foo: {
                shape: {
                  type: "structure",
                  required: [],
                  members: {
                    bar: {
                      shape: stringShape
                    },
                    pop: {
                      shape: booleanShape
                    }
                  }
                }
              }
            }
          }
        }
      };
      const toSerialize = { foo: { bar: "buzz", pop: false } };
      expect(queryBody.build({ operation, input: toSerialize })).toEqual(
        "foo.bar=buzz&foo.pop=false"
      );
    });
  });

  describe("lists", () => {
    const operation: OperationModel = {
      ...minimalOperation,
      input: {
        shape: {
          type: "structure",
          required: [],
          members: {
            nah: {
              shape: listOfStringsShape
            }
          }
        }
      }
    };
    const queryBody = new QueryBuilder(jest.fn(), jest.fn());

    it("should serialize non-flattened list", () => {
      const toSerialize = { nah: ["foo", "bar", "baz"] };
      expect(queryBody.build({ operation, input: toSerialize })).toEqual(
        "nah.member.1=foo&nah.member.2=bar&nah.member.3=baz"
      );
    });

    it("should serialize empty list", () => {
      const toSerialize = { nah: [] };
      expect(queryBody.build({ operation, input: toSerialize })).toEqual(
        "nah="
      );
    });

    it("should serialize iterators", () => {
      const iterator = function*() {
        yield "foo";
        yield "bar";
        yield "baz";
      };
      const toSerialize = { nah: iterator() };
      expect(queryBody.build({ operation, input: toSerialize })).toEqual(
        "nah.member.1=foo&nah.member.2=bar&nah.member.3=baz"
      );
    });

    it("should throw if a non-iterable value is provided", () => {
      for (let nonIterable of [{}, 123, true, null, void 0]) {
        const toSerialize = { nah: nonIterable };
        expect(() =>
          queryBody.build({ operation, input: toSerialize })
        ).toThrow();
      }
    });

    it("should serialize non-flattened list with locationName", () => {
      const operation: OperationModel = {
        ...minimalOperation,
        input: {
          shape: {
            type: "structure",
            required: [],
            members: {
              nah: {
                shape: listOfStringsWithLocationNameShape
              }
            }
          }
        }
      };
      const toSerialize = { nah: ["foo", "bar", "baz"] };
      expect(queryBody.build({ operation, input: toSerialize })).toEqual(
        "nah.item.1=foo&nah.item.2=bar&nah.item.3=baz"
      );
    });

    it("should serialize flattened list", () => {
      const operation: OperationModel = {
        ...minimalOperation,
        input: {
          shape: {
            type: "structure",
            required: [],
            members: {
              nah: {
                shape: listOfStringsFlattenedShape
              }
            }
          }
        }
      };
      const toSerialize = { nah: ["foo", "bar", "baz"] };
      expect(queryBody.build({ operation, input: toSerialize })).toBe(
        "nah.1=foo&nah.2=bar&nah.3=baz"
      );
    });

    it("should serialize flattened list with locationName", () => {
      const operation: OperationModel = {
        ...minimalOperation,
        input: {
          shape: {
            type: "structure",
            required: [],
            members: {
              nah: {
                shape: listOfStringsWithLocationNameFlattenedShape
              }
            }
          }
        }
      };
      const toSerialize = { nah: ["foo", "bar", "baz"] };
      expect(queryBody.build({ operation, input: toSerialize })).toEqual(
        "item.1=foo&item.2=bar&item.3=baz"
      );
    });
  });

  describe("maps", () => {
    const operation: OperationModel = {
      ...minimalOperation,
      input: {
        shape: {
          type: "structure",
          required: [],
          members: {
            nah: {
              shape: mapOfStringsToIntegersShape
            }
          }
        }
      }
    };
    const queryBody = new QueryBuilder(jest.fn(), jest.fn());

    it("should throw when given a non-object input", () => {
      const toSerialize = { nah: 1 };
      expect(() =>
        queryBody.build({ operation, input: toSerialize })
      ).toThrow();
    });

    it("should serialize non-flattened objects", () => {
      const toSerialize = {
        nah: {
          foo: 0,
          bar: 1
        }
      };
      expect(queryBody.build({ operation, input: toSerialize })).toEqual(
        "nah.entry.1.key=foo&nah.entry.1.value=0&nah.entry.2.key=bar&nah.entry.2.value=1"
      );
    });

    it("should serialize [key, value] iterables (like ES6 maps)", () => {
      const iterator = function*() {
        yield ["foo", 0];
        yield ["bar", 1];
      };
      const toSerialize = { nah: iterator() };
      expect(queryBody.build({ operation, input: toSerialize })).toEqual(
        "nah.entry.1.key=foo&nah.entry.1.value=0&nah.entry.2.key=bar&nah.entry.2.value=1"
      );
    });

    it("should throw if a non-iterable and non-object value is provided", () => {
      for (let nonIterable of [123, true, null, void 0]) {
        expect(() =>
          queryBody.build({ operation, input: nonIterable })
        ).toThrow();
      }
    });

    it("should serialize map with locationName of key and value", () => {
      const operation: OperationModel = {
        ...minimalOperation,
        input: {
          shape: {
            type: "structure",
            required: [],
            members: {
              nah: {
                shape: mapOfStringsToIntegersWithLocationNameShape
              }
            }
          }
        }
      };
      const toSerialize = {
        nah: {
          foo: 0,
          bar: 1
        }
      };
      expect(queryBody.build({ operation, input: toSerialize })).toEqual(
        "nah.entry.1.theKey=foo&nah.entry.1.theValue=0&nah.entry.2.theKey=bar&nah.entry.2.theValue=1"
      );
    });

    it("should serialize flattened map", () => {
      const operation: OperationModel = {
        ...minimalOperation,
        input: {
          shape: {
            type: "structure",
            required: [],
            members: {
              nah: {
                shape: mapOfStringsToIntegersFlattenedShape
              }
            }
          }
        }
      };
      const toSerialize = {
        nah: {
          foo: 0,
          bar: 1
        }
      };
      expect(queryBody.build({ operation, input: toSerialize })).toEqual(
        "nah.1.key=foo&nah.1.value=0&nah.2.key=bar&nah.2.value=1"
      );
    });
  });

  describe("blobs", () => {
    const operation: OperationModel = {
      ...minimalOperation,
      input: {
        shape: {
          type: "structure",
          required: [],
          members: {
            blobArg: {
              shape: blobShape
            }
          }
        }
      }
    };
    const base64Encode = jest.fn(arg => arg);
    const utf8Decode = jest.fn(arg => arg);
    const queryBody = new QueryBuilder(base64Encode, utf8Decode);

    beforeEach(() => {
      base64Encode.mockClear();
      utf8Decode.mockClear();
    });

    it("should base64 encode ArrayBuffers", () => {
      queryBody.build({ operation, input: { blobArg: new ArrayBuffer(2) } });

      expect(base64Encode.mock.calls.length).toBe(1);
    });

    it("should base64 encode ArrayBufferViews", () => {
      queryBody.build({ operation, input: { blobArg: Uint8Array.from([0]) } });

      expect(base64Encode.mock.calls.length).toBe(1);
    });

    it("should utf8 decode and base64 encode strings", () => {
      queryBody.build({ operation, input: { blobArg: "foo" as any } });

      expect(base64Encode.mock.calls.length).toBe(1);
      expect(utf8Decode.mock.calls.length).toBe(1);
    });

    it("should throw if a non-binary value is provided", () => {
      for (let item of [[], {}, 123, true, null, void 0]) {
        const nonBinary = { blobArg: item };
        expect(() =>
          queryBody.build({ operation, input: nonBinary })
        ).toThrow();
      }
    });
  });

  describe("timestamps", () => {
    const operation: OperationModel = {
      ...minimalOperation,
      input: {
        shape: {
          type: "structure",
          required: [],
          members: {
            timeArg: {
              shape: timestampShape
            },
            timeCustom: {
              shape: {
                timestampFormat: "iso8601",
                type: "timestamp"
              },
              timestampFormat: "unixTimestamp"
            },
            timeFormat: {
              shape: {
                timestampFormat: "unixTimestamp",
                type: "timestamp"
              }
            }
          }
        }
      }
    };
    const date = new Date("2017-05-22T19:33:14.175Z");
    const timestamp = 1495481594;
    const queryBody = new QueryBuilder(jest.fn(), jest.fn());

    it("should convert Date objects to epoch timestamps", () => {
      expect(queryBody.build({ operation, input: { timeArg: date } })).toBe(
        "timeArg=2017-05-22T19%3A33%3A14Z"
      );
    });

    it("should convert date strings to epoch timestamps", () => {
      expect(
        queryBody.build({ operation, input: { timeArg: date.toUTCString() } })
      ).toBe("timeArg=2017-05-22T19%3A33%3A14Z");
    });

    it("should preserve numbers as epoch timestamps", () => {
      expect(
        queryBody.build({ operation, input: { timeArg: timestamp } })
      ).toBe("timeArg=2017-05-22T19%3A33%3A14Z");
    });

    it("should throw if a value that cannot be converted to a time object is provided", () => {
      for (let item of [[], {}, true, null, void 0, new ArrayBuffer(0)]) {
        const nonTime = { timeArg: item };
        expect(() => queryBody.build({ operation, input: nonTime })).toThrow();
      }
    });

    it("should convert to timestampFormat on shape", () => {
      expect(
        queryBody.build({ operation, input: { timeFormat: timestamp } })
      ).toBe("timeFormat=1495481594");
    });

    it("should convert to timestampFormat preferring trait on member", () => {
      expect(
        queryBody.build({ operation, input: { timeCustom: timestamp } })
      ).toBe("timeCustom=1495481594");
    });
  });

  describe("scalars", () => {
    const stringOperation: OperationModel = {
      ...minimalOperation,
      input: {
        shape: {
          type: "structure",
          required: [],
          members: {
            stringArg: {
              shape: stringShape
            }
          }
        }
      }
    };
    const queryBody = new QueryBuilder(jest.fn(), jest.fn());
    it("should serialize a string with out-range character", () => {
      const toSerialize = { stringArg: "thisIsA&@$💩String" };
      expect(
        queryBody.build({ operation: stringOperation, input: toSerialize })
      ).toEqual("stringArg=thisIsA%26%40%24%F0%9F%92%A9String");
    });

    it("should serialize an empty string", () => {
      const toSerialize = { stringArg: "" };
      expect(
        queryBody.build({ operation: stringOperation, input: toSerialize })
      ).toEqual("stringArg=");
    });

    it("should throw when given a null", () => {
      const toSerialize = { stringArg: void 0 };
      expect(() =>
        queryBody.build({ operation: stringOperation, input: toSerialize })
      ).toThrow();
    });

    it("should serialize an empty string and structure with extra property", () => {
      const toSerialize = { stringArg: "", another: "aaa" };
      expect(
        queryBody.build({ operation: stringOperation, input: toSerialize })
      ).toEqual("stringArg=");
    });

    it("should serialize an object that can be converted to string", () => {
      const printableObj = {
        toString: function() {
          return "object_string";
        }
      };
      const toSerialize = { stringArg: printableObj };
      expect(
        queryBody.build({ operation: stringOperation, input: toSerialize })
      ).toEqual("stringArg=object_string");
    });

    const floatOperation: OperationModel = {
      ...minimalOperation,
      input: {
        shape: {
          type: "structure",
          required: [],
          members: {
            floatArg: {
              shape: floatShape
            }
          }
        }
      }
    };
    it("should serialize a float", () => {
      const toSerialize = { floatArg: 3.14 };
      expect(
        queryBody.build({ operation: floatOperation, input: toSerialize })
      ).toEqual("floatArg=3.14");
    });

    it("should throw given a member that cannot be converted to float", () => {
      const toSerialize = { floatArg: "bar" };
      expect(() =>
        queryBody.build({ operation: floatOperation, input: toSerialize })
      ).toThrow();
    });

    const integerOperation: OperationModel = {
      ...minimalOperation,
      input: {
        shape: {
          type: "structure",
          required: [],
          members: {
            integerArg: {
              shape: integerShape
            }
          }
        }
      }
    };
    it("should serialize a integer", () => {
      const toSerialize = { integerArg: 1 };
      expect(
        queryBody.build({ operation: integerOperation, input: toSerialize })
      ).toEqual("integerArg=1");
    });

    it("should throw given a member that cannot be converted to integer", () => {
      const toSerialize = { integerArg: "bar" };
      expect(() =>
        queryBody.build({ operation: integerOperation, input: toSerialize })
      ).toThrow();
    });

    it("should serialize a boolean", () => {
      const operation: OperationModel = {
        ...minimalOperation,
        input: {
          shape: {
            type: "structure",
            required: [],
            members: {
              booleanArg: {
                shape: booleanShape
              }
            }
          }
        }
      };
      const toSerialize = { booleanArg: false };
      expect(queryBody.build({ operation, input: toSerialize })).toEqual(
        "booleanArg=false"
      );
    });
  });
});
