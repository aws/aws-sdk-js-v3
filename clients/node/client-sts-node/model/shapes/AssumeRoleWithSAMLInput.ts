import { _policyDescriptorListType } from "./_policyDescriptorListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssumeRoleWithSAMLInput: _Structure_ = {
  type: "structure",
  required: ["RoleArn", "PrincipalArn", "SAMLAssertion"],
  members: {
    RoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    PrincipalArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    SAMLAssertion: {
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
