import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HsmClientCertificate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HsmClientCertificateIdentifier: {
      shape: {
        type: "string"
      }
    },
    HsmClientCertificatePublicKey: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
