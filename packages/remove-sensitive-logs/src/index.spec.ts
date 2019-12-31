import { removeSensitiveLogs } from "./";
// import { Member } from "@aws-sdk/types";
import {
  mapWithSensitiveValue,
  sensitiveMapShape,
  listWithSensitiveMember,
  sensitiveListShape,
  structureWithSensitiveMember,
  sensitiveStructureShape,
  sensitiveBlobShape,
  sensitiveBooleanShape,
  sensitiveFloatShape,
  sensitiveIntegerShape,
  sensitiveStringShape,
  sensitiveTimestampShape,
  recursiveShape
} from "./shapes.fixture";
describe("remove sensitive parameters from logging", () => {
  describe("structure shape", () => {
    const param = {
      bar: "should_log",
      baz: "nonsense",
      foo: "secret_key_id"
    };
    it("structure with sensitive members", () => {
      const shape = {
        shape: structureWithSensitiveMember
      };
      const logString = removeSensitiveLogs(param, shape);
      expect(logString.indexOf("foo") >= 0).toBe(true);
      expect(logString.indexOf("secret_key_id") < 0).toBe(true);
      expect(logString.indexOf('"baz":"nonsense"') >= 0).toBe(false);
      expect(logString.indexOf('"bar":"should_log"') >= 0).toBe(true);
    });

    it("sensitive structure shape", () => {
      const shape = {
        shape: sensitiveStructureShape
      };
      expect(removeSensitiveLogs(param, shape)).toBe('"<**-redacted-**>"');
    });
  });

  describe("list shape", () => {
    const param = { param: ["secret_key_0", "secret_key_1"] };
    it("list with sensitive member", () => {
      const shape = {
        shape: {
          type: "structure",
          required: [],
          members: {
            param: {
              shape: listWithSensitiveMember
            }
          }
        }
      };
      const { param: list } = JSON.parse(removeSensitiveLogs(param, shape));
      expect(list.length).toEqual(param.param.length);
      const logString = JSON.stringify(list);
      expect(logString.indexOf("secret_key") < 0).toBe(true);
    });

    it("sensitive structure shape", () => {
      const shape = {
        shape: {
          type: "structure",
          required: [],
          members: {
            param: {
              shape: sensitiveListShape
            }
          }
        }
      };
      const { param: list } = JSON.parse(removeSensitiveLogs(param, shape));
      expect(JSON.stringify(list)).toBe('"<**-redacted-**>"');
    });
  });

  describe("map shape", () => {
    const param = {
      id: "secret_id",
      key: "secret_key"
    };
    it("map with sensitive values", () => {
      const shape = {
        shape: mapWithSensitiveValue
      };
      const map = JSON.parse(removeSensitiveLogs(param, shape));
      expect(Object.keys(map).length).toEqual(Object.keys(param).length);
      expect(map.id).toEqual("<**-redacted-**>");
      expect(map.key).toEqual("<**-redacted-**>");
    });

    it("sensitive map shape", () => {
      const shape = {
        shape: sensitiveMapShape
      };
      expect(removeSensitiveLogs(param, shape)).toBe('"<**-redacted-**>"');
    });
  });

  describe("scalars", () => {
    it("scalars", () => {
      const param = {
        param: "secret_something"
      };
      [
        sensitiveBlobShape,
        sensitiveBooleanShape,
        sensitiveFloatShape,
        sensitiveIntegerShape,
        sensitiveStringShape,
        sensitiveTimestampShape
      ].forEach(scalerShape => {
        const shape = {
          shape: {
            type: "structure",
            required: [],
            members: {
              param: {
                shape: scalerShape
              }
            }
          }
        };
        const { param: scalar } = JSON.parse(removeSensitiveLogs(param, shape));
        expect(
          removeSensitiveLogs(param, shape).indexOf("secret_something") < 0
        ).toEqual(true);
      });
    });
  });

  describe("undefined input", () => {
    it("undefined", () => {
      let shape = {
        shape: sensitiveStructureShape
      };
      let param = undefined;
      expect(removeSensitiveLogs(param, shape)).toEqual(undefined);
      // @ts-ignore TS2741
      shape.shape = structureWithSensitiveMember;
      param = { foo: undefined };
      expect(JSON.parse(removeSensitiveLogs(param, shape))).toEqual({
        foo: undefined
      });
    });
  });

  describe("recursive shape", () => {
    it("recursive shape", () => {
      const shape = {
        shape: recursiveShape
      };
      const param = {
        foo: "should_log",
        bar: [
          {
            "0": "secret_0"
          },
          {
            "1": "secret_1"
          }
        ]
      };
      const logString = removeSensitiveLogs(param, shape);
      expect(logString.indexOf("secret_0")).toBe(-1);
      expect(logString.indexOf("secret_1")).toBe(-1);
    });
  });
});
