import { _TerminationHealth } from "./_TerminationHealth";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetVoiceConnectorTerminationHealthOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TerminationHealth: {
      shape: _TerminationHealth
    }
  }
};
