import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UpdateCACertificateParams: _Structure_ = {
  type: "structure",
  required: ["action"],
  members: {
    action: {
      shape: {
        type: "string"
      }
    }
  }
};
