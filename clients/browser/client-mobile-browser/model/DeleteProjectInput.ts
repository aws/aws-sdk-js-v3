import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteProjectInput: _Structure_ = {
  type: "structure",
  required: ["projectId"],
  members: {
    projectId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "projectId"
    }
  }
};
