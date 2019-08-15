import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExportBundleInput: _Structure_ = {
  type: "structure",
  required: ["bundleId"],
  members: {
    bundleId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "bundleId"
    },
    projectId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "projectId"
    },
    platform: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "platform"
    }
  }
};
