import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { AwsEc2QueryProtocol } from "./AwsEc2QueryProtocol";

describe("AwsEc2QueryProtocol", () => {
  it("should have a shapeId of aws.protocols.ec2Query", () => {
    const protocol = new AwsEc2QueryProtocol({
      defaultNamespace: "",
      version: "",
      xmlNamespace: "",
    });

    expect(protocol.getShapeId()).toEqual("aws.protocols#ec2Query");
  });

  it("uses compositeErrorRegistries from instantiation", () => {
    const GenericServiceException$: StaticErrorSchema = [
      -3,
      "com.amazonaws.sdk.example",
      "GenericServiceException",
      0,
      [],
      [],
    ];
    class GenericServiceException extends Error {}

    const registry = TypeRegistry.for("com.amazonaws.sdk.example");
    registry.registerError(GenericServiceException$, GenericServiceException);

    const protocol = new (class extends AwsEc2QueryProtocol {
      public getCompositeErrorRegistry() {
        return this.compositeErrorRegistry;
      }
    })({
      defaultNamespace: "",
      version: "",
      xmlNamespace: "",
      errorTypeRegistries: [registry],
    });

    expect(protocol.getCompositeErrorRegistry()).not.toBe(registry);
    expect(protocol.getCompositeErrorRegistry().getSchema("com.amazonaws.sdk.example#GenericServiceException")).toBe(
      GenericServiceException$
    );
  });
});
