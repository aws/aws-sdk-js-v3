import { _Termination } from "./_Termination";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetVoiceConnectorTerminationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Termination: {
      shape: _Termination
    }
  }
};
