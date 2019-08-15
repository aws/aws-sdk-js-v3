import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteOTAUpdateInput: _Structure_ = {
  type: "structure",
  required: ["otaUpdateId"],
  members: {
    otaUpdateId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "otaUpdateId"
    },
    deleteStream: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "deleteStream"
    },
    forceDeleteAWSJob: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "forceDeleteAWSJob"
    }
  }
};
