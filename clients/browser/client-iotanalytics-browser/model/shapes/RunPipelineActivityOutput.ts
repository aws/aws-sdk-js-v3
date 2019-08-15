import { _MessagePayloads } from "./_MessagePayloads";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RunPipelineActivityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    payloads: {
      shape: _MessagePayloads
    },
    logResult: {
      shape: {
        type: "string"
      }
    }
  }
};
