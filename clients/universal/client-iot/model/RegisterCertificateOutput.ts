import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterCertificateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    certificateArn: {
      shape: {
        type: "string"
      }
    },
    certificateId: {
      shape: {
        type: "string",
        min: 64
      }
    }
  }
};
