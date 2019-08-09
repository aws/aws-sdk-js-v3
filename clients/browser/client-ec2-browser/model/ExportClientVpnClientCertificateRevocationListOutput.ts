import { _ClientCertificateRevocationListStatus } from "./_ClientCertificateRevocationListStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExportClientVpnClientCertificateRevocationListOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CertificateRevocationList: {
      shape: {
        type: "string"
      },
      locationName: "certificateRevocationList"
    },
    Status: {
      shape: _ClientCertificateRevocationListStatus,
      locationName: "status"
    }
  }
};
