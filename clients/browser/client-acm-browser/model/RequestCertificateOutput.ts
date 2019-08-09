import { Structure as _Structure_ } from "@aws-sdk/types";

export const RequestCertificateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CertificateArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
