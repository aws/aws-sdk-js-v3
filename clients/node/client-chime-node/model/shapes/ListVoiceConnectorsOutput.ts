import { _VoiceConnectorList } from "./_VoiceConnectorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVoiceConnectorsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VoiceConnectors: {
      shape: _VoiceConnectorList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
