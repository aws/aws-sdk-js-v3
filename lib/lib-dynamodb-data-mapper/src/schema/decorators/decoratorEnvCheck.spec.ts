import { describe, it, expect } from 'vitest';
import "reflect-metadata";

function TestDecorator(): PropertyDecorator {
  return (target, propertyKey) => {
    Reflect.defineMetadata("custom:marker", String, target, propertyKey);
  };
}

describe("decorator and metadata environment", () => {
  it("should apply and retrieve metadata using Reflect", () => {
    class Sample {
      @TestDecorator()
      field!: string;
    }

    const metadata = Reflect.getMetadata("custom:marker", Sample.prototype, "field");
    console.log(metadata); // Should log the metadata type
    expect(metadata).toBe(String);
  });
});