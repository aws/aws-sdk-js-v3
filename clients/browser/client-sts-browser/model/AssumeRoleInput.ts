import { _policyDescriptorListType } from "./_policyDescriptorListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssumeRoleInput: _Structure_ = {
  type: "structure",
  required: ["RoleArn", "RoleSessionName"],
  members: {
    RoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    RoleSessionName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    PolicyArns: {
      shape: _policyDescriptorListType
    },
    Policy: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DurationSeconds: {
      shape: {
        type: "integer",
        min: 900
      }
    },
    ExternalId: {
      shape: {
        type: "string",
        min: 2
      }
    },
    SerialNumber: {
      shape: {
        type: "string",
        min: 9
      }
    },
    TokenCode: {
      shape: {
        type: "string",
        min: 6
      }
    }
  }
};
