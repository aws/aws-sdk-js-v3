import { _VoiceList } from "./_VoiceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVoicesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Voices: {
      shape: _VoiceList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
