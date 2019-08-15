import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceNetworkProfileInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkProfileArn: {
      shape: {
        type: "string"
      }
    },
    CertificateArn: {
      shape: {
        type: "string"
      }
    },
    CertificateExpirationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
