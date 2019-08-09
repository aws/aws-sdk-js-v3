import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UdpGroupSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InputLossAction: {
      shape: {
        type: "string"
      },
      locationName: "inputLossAction"
    },
    TimedMetadataId3Frame: {
      shape: {
        type: "string"
      },
      locationName: "timedMetadataId3Frame"
    },
    TimedMetadataId3Period: {
      shape: {
        type: "integer"
      },
      locationName: "timedMetadataId3Period"
    }
  }
};
