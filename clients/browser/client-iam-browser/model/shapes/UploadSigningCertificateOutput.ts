import { _SigningCertificate } from "./_SigningCertificate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UploadSigningCertificateOutput: _Structure_ = {
  type: "structure",
  required: ["Certificate"],
  members: {
    Certificate: {
      shape: _SigningCertificate
    }
  }
};
