import { _Pipelines } from "./_Pipelines";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPipelinesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Pipelines: {
      shape: _Pipelines
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
