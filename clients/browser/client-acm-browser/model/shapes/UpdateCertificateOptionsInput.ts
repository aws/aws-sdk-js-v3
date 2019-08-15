import { _CertificateOptions } from "./_CertificateOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateCertificateOptionsInput: _Structure_ = {
  type: "structure",
  required: ["CertificateArn", "Options"],
  members: {
    CertificateArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Options: {
      shape: _CertificateOptions
    }
  }
};
