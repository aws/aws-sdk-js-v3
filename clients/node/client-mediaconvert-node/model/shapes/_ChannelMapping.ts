import { ___listOfOutputChannelMapping } from "./___listOfOutputChannelMapping";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ChannelMapping: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OutputChannels: {
      shape: ___listOfOutputChannelMapping,
      locationName: "outputChannels"
    }
  }
};
