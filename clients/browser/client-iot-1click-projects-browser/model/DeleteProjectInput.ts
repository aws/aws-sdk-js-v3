import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteProjectInput: _Structure_ = {
  type: "structure",
  required: ["projectName"],
  members: {
    projectName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "projectName"
    }
  }
};
