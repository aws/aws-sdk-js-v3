import { _SynthesisTasks } from "./_SynthesisTasks";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSpeechSynthesisTasksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    SynthesisTasks: {
      shape: _SynthesisTasks
    }
  }
};
