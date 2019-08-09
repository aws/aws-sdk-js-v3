import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGovCloudAccountInput: _Structure_ = {
  type: "structure",
  required: ["Email", "AccountName"],
  members: {
    Email: {
      shape: {
        type: "string",
        sensitive: true,
        min: 6
      }
    },
    AccountName: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    RoleName: {
      shape: {
        type: "string"
      }
    },
    IamUserAccessToBilling: {
      shape: {
        type: "string"
      }
    }
  }
};
