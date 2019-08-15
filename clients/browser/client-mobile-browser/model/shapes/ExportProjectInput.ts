import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExportProjectInput: _Structure_ = {
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
