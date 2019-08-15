import { _DASHFragmentSelector } from "./_DASHFragmentSelector";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDASHStreamingSessionURLInput: _Structure_ = {
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
    DisplayFragmentTimestamp: {
      shape: {
        type: "string"
      }
    },
    DisplayFragmentNumber: {
      shape: {
        type: "string"
      }
    },
    DASHFragmentSelector: {
      shape: _DASHFragmentSelector
    },
    Expires: {
      shape: {
        type: "integer",
        min: 300
      }
    },
    MaxManifestFragmentResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
