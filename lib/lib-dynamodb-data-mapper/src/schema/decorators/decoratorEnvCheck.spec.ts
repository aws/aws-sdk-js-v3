import "reflect-metadata";

import { assert } from "console";
import { describe, expect, it } from "vitest";

function TestDecorator(): PropertyDecorator {
  return (target, propertyKey) => {
    const type = Reflect.getMetadata("design:type", target, propertyKey);
    assert(type, "Type metadata should be defined");
    Reflect.defineMetadata("custom:marker", type, target, propertyKey);
  };
}

describe("decorator and metadata environment", () => {
  it("should apply and retrieve metadata using Reflect", () => {
    class Sample {
      @TestDecorator()
      field!: string;
    }

    const metadata = Reflect.getMetadata("custom:marker", Sample.prototype, "field");
    expect(metadata).toBe(String);
  });
});
