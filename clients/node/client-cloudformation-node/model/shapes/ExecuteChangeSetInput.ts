import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExecuteChangeSetInput: _Structure_ = {
  type: "structure",
  required: ["ChangeSetName"],
  members: {
    ChangeSetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StackName: {
      shape: {
        type: "string",
        min: 1
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
