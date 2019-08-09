import { _policyDescriptorListType } from "./_policyDescriptorListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFederationTokenInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 2
      }
    },
    Policy: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyArns: {
      shape: _policyDescriptorListType
    },
    DurationSeconds: {
      shape: {
        type: "integer",
        min: 900
      }
    }
  }
};
