import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidCertificateException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InvalidCertificateException",
  exceptionCode: "InvalidCertificate"
};
