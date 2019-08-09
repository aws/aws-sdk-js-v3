import { _RetainResources } from "./_RetainResources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteStackInput: _Structure_ = {
  type: "structure",
  required: ["StackName"],
  members: {
    StackName: {
      shape: {
        type: "string"
      }
    },
    RetainResources: {
      shape: _RetainResources
    },
    RoleARN: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
