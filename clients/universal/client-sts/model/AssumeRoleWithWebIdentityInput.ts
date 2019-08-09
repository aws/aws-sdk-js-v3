import { _policyDescriptorListType } from "./_policyDescriptorListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssumeRoleWithWebIdentityInput: _Structure_ = {
  type: "structure",
  required: ["RoleArn", "RoleSessionName", "WebIdentityToken"],
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
    WebIdentityToken: {
      shape: {
        type: "string",
        min: 4
      }
    },
    ProviderId: {
      shape: {
        type: "string",
        min: 4
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
    }
  }
};
