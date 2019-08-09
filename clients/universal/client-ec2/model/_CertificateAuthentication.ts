import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CertificateAuthentication: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClientRootCertificateChain: {
      shape: {
        type: "string"
      },
      locationName: "clientRootCertificateChain"
    }
  }
};
