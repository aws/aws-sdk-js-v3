import { _HLSFragmentSelector } from "./_HLSFragmentSelector";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetHLSStreamingSessionURLInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PlaybackMode: {
      shape: {
        type: "string"
      }
    },
    HLSFragmentSelector: {
      shape: _HLSFragmentSelector
    },
    ContainerFormat: {
      shape: {
        type: "string"
      }
    },
    DiscontinuityMode: {
      shape: {
        type: "string"
      }
    },
    DisplayFragmentTimestamp: {
      shape: {
        type: "string"
      }
    },
    Expires: {
      shape: {
        type: "integer",
        min: 300
      }
    },
    MaxMediaPlaylistFragmentResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
