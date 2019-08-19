import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Predicate: _Structure_ = {
  type: "structure",
  required: ["Negated", "Type", "DataId"],
  members: {
    Negated: {
      shape: {
        type: "boolean"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    DataId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
