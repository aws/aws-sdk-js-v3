import { _HsmClientCertificateList } from "./_HsmClientCertificateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeHsmClientCertificatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    HsmClientCertificates: {
      shape: _HsmClientCertificateList
    }
  }
};
