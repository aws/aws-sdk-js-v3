import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Certificates: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterCsr: {
      shape: {
        type: "string"
      }
    },
    HsmCertificate: {
      shape: {
        type: "string"
      }
    },
    AwsHardwareCertificate: {
      shape: {
        type: "string"
      }
    },
    ManufacturerHardwareCertificate: {
      shape: {
        type: "string"
      }
    },
    ClusterCertificate: {
      shape: {
        type: "string"
      }
    }
  }
};
