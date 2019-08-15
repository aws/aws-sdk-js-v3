import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateProjectInput: _Structure_ = {
  type: "structure",
  required: ["projectId"],
  members: {
    contents: {
      shape: {
        type: "blob"
      }
    },
    projectId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "projectId"
    }
  },
  payload: "contents"
};
