import { _FileUploadUrls } from "./_FileUploadUrls";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDeploymentOutput: _Structure_ = {
  type: "structure",
  required: ["fileUploadUrls", "zipUploadUrl"],
  members: {
    jobId: {
      shape: {
        type: "string"
      }
    },
    fileUploadUrls: {
      shape: _FileUploadUrls
    },
    zipUploadUrl: {
      shape: {
        type: "string"
      }
    }
  }
};
