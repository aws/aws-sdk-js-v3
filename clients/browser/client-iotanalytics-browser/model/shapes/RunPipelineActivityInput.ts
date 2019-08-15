import { _PipelineActivity } from "./_PipelineActivity";
import { _MessagePayloads } from "./_MessagePayloads";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RunPipelineActivityInput: _Structure_ = {
  type: "structure",
  required: ["pipelineActivity", "payloads"],
  members: {
    pipelineActivity: {
      shape: _PipelineActivity
    },
    payloads: {
      shape: _MessagePayloads
    }
  }
};
