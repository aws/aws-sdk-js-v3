import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProjectInput: _Structure_ = {
  type: "structure",
  required: ["projectId"],
  members: {
    projectId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "projectId"
    },
    syncFromResources: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "syncFromResources"
    }
  }
};
