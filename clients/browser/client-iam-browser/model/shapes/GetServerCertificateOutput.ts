import { _ServerCertificate } from "./_ServerCertificate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetServerCertificateOutput: _Structure_ = {
  type: "structure",
  required: ["ServerCertificate"],
  members: {
    ServerCertificate: {
      shape: _ServerCertificate
    }
  }
};
