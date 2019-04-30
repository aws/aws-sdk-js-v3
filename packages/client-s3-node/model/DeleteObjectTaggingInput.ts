import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteObjectTaggingInput: _Structure_ = {
  type: "structure",
  required: ["Bucket", "Key"],
  members: {
    Bucket: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Bucket"
    },
    Key: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "Key"
    },
    VersionId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "versionId"
    }
  }
};
