import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateServerCertificateInput: _Structure_ = {
  type: "structure",
  required: ["ServerCertificateName"],
  members: {
    ServerCertificateName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NewPath: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NewServerCertificateName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
