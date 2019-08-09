import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteServerCertificateInput: _Structure_ = {
  type: "structure",
  required: ["ServerCertificateName"],
  members: {
    ServerCertificateName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
