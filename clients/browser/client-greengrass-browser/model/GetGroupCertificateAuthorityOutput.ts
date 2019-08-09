import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGroupCertificateAuthorityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupCertificateAuthorityArn: {
      shape: {
        type: "string"
      }
    },
    GroupCertificateAuthorityId: {
      shape: {
        type: "string"
      }
    },
    PemEncodedCertificate: {
      shape: {
        type: "string"
      }
    }
  }
};
