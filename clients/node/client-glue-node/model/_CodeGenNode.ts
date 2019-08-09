import { _CodeGenNodeArgs } from "./_CodeGenNodeArgs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CodeGenNode: _Structure_ = {
  type: "structure",
  required: ["Id", "NodeType", "Args"],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NodeType: {
      shape: {
        type: "string"
      }
    },
    Args: {
      shape: _CodeGenNodeArgs
    },
    LineNumber: {
      shape: {
        type: "integer"
      }
    }
  }
};
