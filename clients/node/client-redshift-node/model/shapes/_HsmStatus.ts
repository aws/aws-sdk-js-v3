import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HsmStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HsmClientCertificateIdentifier: {
      shape: {
        type: "string"
      }
    },
    HsmConfigurationIdentifier: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
