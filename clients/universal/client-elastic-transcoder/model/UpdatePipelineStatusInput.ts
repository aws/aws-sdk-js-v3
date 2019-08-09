import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdatePipelineStatusInput: _Structure_ = {
  type: "structure",
  required: ["Id", "Status"],
  members: {
    Id: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Id"
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
