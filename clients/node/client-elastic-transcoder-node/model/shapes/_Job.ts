import { _JobInput } from "./_JobInput";
import { _JobInputs } from "./_JobInputs";
import { _JobOutput } from "./_JobOutput";
import { _JobOutputs } from "./_JobOutputs";
import { _Playlists } from "./_Playlists";
import { _UserMetadata } from "./_UserMetadata";
import { _Timing } from "./_Timing";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Job: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Arn: {
      shape: {
        type: "string"
      }
    },
    PipelineId: {
      shape: {
        type: "string"
      }
    },
    Input: {
      shape: _JobInput
    },
    Inputs: {
      shape: _JobInputs
    },
    Output: {
      shape: _JobOutput
    },
    Outputs: {
      shape: _JobOutputs
    },
    OutputKeyPrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Playlists: {
      shape: _Playlists
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    UserMetadata: {
      shape: _UserMetadata
    },
    Timing: {
      shape: _Timing
    }
  }
};
