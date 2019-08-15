import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportClientVpnClientCertificateRevocationListInput: _Structure_ = {
  type: "structure",
  required: ["ClientVpnEndpointId", "CertificateRevocationList"],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      }
    },
    CertificateRevocationList: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
