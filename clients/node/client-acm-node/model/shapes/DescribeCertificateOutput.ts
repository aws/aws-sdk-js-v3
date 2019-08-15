import { _CertificateDetail } from "./_CertificateDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCertificateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Certificate: {
      shape: _CertificateDetail
    }
  }
};
