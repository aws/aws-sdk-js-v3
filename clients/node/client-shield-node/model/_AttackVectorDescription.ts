import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttackVectorDescription: _Structure_ = {
  type: "structure",
  required: ["VectorType"],
  members: {
    VectorType: {
      shape: {
        type: "string"
      }
    }
  }
};
