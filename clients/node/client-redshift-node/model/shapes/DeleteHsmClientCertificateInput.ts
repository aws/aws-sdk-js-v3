import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteHsmClientCertificateInput: _Structure_ = {
  type: "structure",
  required: ["HsmClientCertificateIdentifier"],
  members: {
    HsmClientCertificateIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
