import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCertificateAuthorityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CertificateAuthorityArn: {
      shape: {
        type: "string",
        min: 5
      }
    }
  }
};
