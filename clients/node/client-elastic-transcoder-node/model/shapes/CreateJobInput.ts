import { _JobInput } from "./_JobInput";
import { _JobInputs } from "./_JobInputs";
import { _CreateJobOutput } from "./_CreateJobOutput";
import { _CreateJobOutputs } from "./_CreateJobOutputs";
import { _CreateJobPlaylists } from "./_CreateJobPlaylists";
import { _UserMetadata } from "./_UserMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateJobInput: _Structure_ = {
  type: "structure",
  required: ["PipelineId"],
  members: {
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
      shape: _CreateJobOutput
    },
    Outputs: {
      shape: _CreateJobOutputs
    },
    OutputKeyPrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Playlists: {
      shape: _CreateJobPlaylists
    },
    UserMetadata: {
      shape: _UserMetadata
    }
  }
};
