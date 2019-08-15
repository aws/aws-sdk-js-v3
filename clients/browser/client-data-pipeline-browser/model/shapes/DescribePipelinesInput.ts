import { _idList } from "./_idList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePipelinesInput: _Structure_ = {
  type: "structure",
  required: ["pipelineIds"],
  members: {
    pipelineIds: {
      shape: _idList
    }
  }
};
