import { _PipelineDescriptionList } from "./_PipelineDescriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePipelinesOutput: _Structure_ = {
  type: "structure",
  required: ["pipelineDescriptionList"],
  members: {
    pipelineDescriptionList: {
      shape: _PipelineDescriptionList
    }
  }
};
