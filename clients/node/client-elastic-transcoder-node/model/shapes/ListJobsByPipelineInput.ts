import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobsByPipelineInput: _Structure_ = {
  type: "structure",
  required: ["PipelineId"],
  members: {
    PipelineId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "PipelineId"
    },
    Ascending: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "Ascending"
    },
    PageToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "PageToken"
    }
  }
};
