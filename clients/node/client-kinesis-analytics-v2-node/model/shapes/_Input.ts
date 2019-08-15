import { _InputProcessingConfiguration } from "./_InputProcessingConfiguration";
import { _KinesisStreamsInput } from "./_KinesisStreamsInput";
import { _KinesisFirehoseInput } from "./_KinesisFirehoseInput";
import { _InputParallelism } from "./_InputParallelism";
import { _SourceSchema } from "./_SourceSchema";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Input: _Structure_ = {
  type: "structure",
  required: ["NamePrefix", "InputSchema"],
  members: {
    NamePrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InputProcessingConfiguration: {
      shape: _InputProcessingConfiguration
    },
    KinesisStreamsInput: {
      shape: _KinesisStreamsInput
    },
    KinesisFirehoseInput: {
      shape: _KinesisFirehoseInput
    },
    InputParallelism: {
      shape: _InputParallelism
    },
    InputSchema: {
      shape: _SourceSchema
    }
  }
};
