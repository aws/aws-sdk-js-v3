import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteInventoryInput: _Structure_ = {
  type: "structure",
  required: ["TypeName"],
  members: {
    TypeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SchemaDeleteOption: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ClientToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
