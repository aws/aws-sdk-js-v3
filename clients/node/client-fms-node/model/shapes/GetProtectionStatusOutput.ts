import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetProtectionStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdminAccountId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServiceType: {
      shape: {
        type: "string"
      }
    },
    Data: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
