import { _RegistrationConfig } from "./_RegistrationConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterCACertificateInput: _Structure_ = {
  type: "structure",
  required: ["caCertificate", "verificationCertificate"],
  members: {
    caCertificate: {
      shape: {
        type: "string",
        min: 1
      }
    },
    verificationCertificate: {
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
    allowAutoRegistration: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "allowAutoRegistration"
    },
    registrationConfig: {
      shape: _RegistrationConfig
    }
  }
};
