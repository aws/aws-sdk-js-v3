import { _RegistrationConfig } from "./_RegistrationConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateCACertificateInput: _Structure_ = {
  type: "structure",
  required: ["certificateId"],
  members: {
    certificateId: {
      shape: {
        type: "string",
        min: 64
      },
      location: "uri",
      locationName: "caCertificateId"
    },
    newStatus: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "newStatus"
    },
    newAutoRegistrationStatus: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "newAutoRegistrationStatus"
    },
    registrationConfig: {
      shape: _RegistrationConfig
    },
    removeAutoRegistration: {
      shape: {
        type: "boolean"
      }
    }
  }
};
