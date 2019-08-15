import { Structure as _Structure_ } from "@aws-sdk/types";

export const TransferCertificateInput: _Structure_ = {
  type: "structure",
  required: ["certificateId", "targetAwsAccount"],
  members: {
    certificateId: {
      shape: {
        type: "string",
        min: 64
      },
      location: "uri",
      locationName: "certificateId"
    },
    targetAwsAccount: {
      shape: {
        type: "string",
        min: 12
      },
      location: "querystring",
      locationName: "targetAwsAccount"
    },
    transferMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
