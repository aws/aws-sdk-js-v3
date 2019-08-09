import { _CertificateDescription } from "./_CertificateDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCertificateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    certificateDescription: {
      shape: _CertificateDescription
    }
  }
};
