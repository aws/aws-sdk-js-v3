import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCertificateFromCsrInput: _Structure_ = {
  type: "structure",
  required: ["certificateSigningRequest"],
  members: {
    certificateSigningRequest: {
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
    }
  }
};
