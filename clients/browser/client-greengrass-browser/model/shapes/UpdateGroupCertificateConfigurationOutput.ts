import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateGroupCertificateConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CertificateAuthorityExpiryInMilliseconds: {
      shape: {
        type: "string"
      }
    },
    CertificateExpiryInMilliseconds: {
      shape: {
        type: "string"
      }
    },
    GroupId: {
      shape: {
        type: "string"
      }
    }
  }
};
