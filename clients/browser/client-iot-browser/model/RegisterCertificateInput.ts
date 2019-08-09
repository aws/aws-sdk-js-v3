import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterCertificateInput: _Structure_ = {
  type: "structure",
  required: ["certificatePem"],
  members: {
    certificatePem: {
      shape: {
        type: "string",
        min: 1
      }
    },
    caCertificatePem: {
      shape: {
        type: "string",
        min: 1
      }
    },
    setAsActive: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "setAsActive"
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};
