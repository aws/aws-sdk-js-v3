import { _ServerCertificateMetadata } from "./_ServerCertificateMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UploadServerCertificateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServerCertificateMetadata: {
      shape: _ServerCertificateMetadata
    }
  }
};
