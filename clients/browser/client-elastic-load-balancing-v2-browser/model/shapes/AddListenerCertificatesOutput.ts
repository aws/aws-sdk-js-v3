import { _CertificateList } from "./_CertificateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddListenerCertificatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Certificates: {
      shape: _CertificateList
    }
  }
};
