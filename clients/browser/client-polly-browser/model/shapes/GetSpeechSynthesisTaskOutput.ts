import { _SynthesisTask } from "./_SynthesisTask";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSpeechSynthesisTaskOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SynthesisTask: {
      shape: _SynthesisTask
    }
  }
};
