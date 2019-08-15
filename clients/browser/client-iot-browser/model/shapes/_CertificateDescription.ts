import { _TransferData } from "./_TransferData";
import { _CertificateValidity } from "./_CertificateValidity";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CertificateDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    certificateArn: {
      shape: {
        type: "string"
      }
    },
    certificateId: {
      shape: {
        type: "string",
        min: 64
      }
    },
    caCertificateId: {
      shape: {
        type: "string",
        min: 64
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    certificatePem: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ownedBy: {
      shape: {
        type: "string",
        min: 12
      }
    },
    previousOwnedBy: {
      shape: {
        type: "string",
        min: 12
      }
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    },
    lastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    },
    customerVersion: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    transferData: {
      shape: _TransferData
    },
    generationId: {
      shape: {
        type: "string"
      }
    },
    validity: {
      shape: _CertificateValidity
    }
  }
};
