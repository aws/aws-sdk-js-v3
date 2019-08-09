import { _HsmClientCertificate } from "./_HsmClientCertificate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateHsmClientCertificateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HsmClientCertificate: {
      shape: _HsmClientCertificate
    }
  }
};
