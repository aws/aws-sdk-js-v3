import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GenerateClientCertificateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    clientCertificateId: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    pemEncodedCertificate: {
      shape: {
        type: "string"
      }
    },
    createdDate: {
      shape: {
        type: "timestamp"
      }
    },
    expirationDate: {
      shape: {
        type: "timestamp"
      }
    },
    tags: {
      shape: _MapOfStringToString
    }
  }
};
