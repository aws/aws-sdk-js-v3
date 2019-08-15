import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KerberosAttributes: _Structure_ = {
  type: "structure",
  required: ["Realm", "KdcAdminPassword"],
  members: {
    Realm: {
      shape: {
        type: "string"
      }
    },
    KdcAdminPassword: {
      shape: {
        type: "string"
      }
    },
    CrossRealmTrustPrincipalPassword: {
      shape: {
        type: "string"
      }
    },
    ADDomainJoinUser: {
      shape: {
        type: "string"
      }
    },
    ADDomainJoinPassword: {
      shape: {
        type: "string"
      }
    }
  }
};
