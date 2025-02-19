import { Schema, ShapeDeserializer } from "@smithy/types";

export class XmlShapeDeserializer implements ShapeDeserializer {
  read(schema: Schema, bytes: Uint8Array) {
    throw new Error("Method not implemented.");
  }
  getContainerSize(): number {
    throw new Error("Method not implemented.");
  }
}