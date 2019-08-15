import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainMembership: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Domain: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    FQDN: {
      shape: {
        type: "string"
      }
    },
    IAMRoleName: {
      shape: {
        type: "string"
      }
    }
  }
};
