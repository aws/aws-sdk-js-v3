import { _KinesisStreamsOutput } from "./_KinesisStreamsOutput";
import { _KinesisFirehoseOutput } from "./_KinesisFirehoseOutput";
import { _LambdaOutput } from "./_LambdaOutput";
import { _DestinationSchema } from "./_DestinationSchema";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Output: _Structure_ = {
  type: "structure",
  required: ["Name", "DestinationSchema"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    KinesisStreamsOutput: {
      shape: _KinesisStreamsOutput
    },
    KinesisFirehoseOutput: {
      shape: _KinesisFirehoseOutput
    },
    LambdaOutput: {
      shape: _LambdaOutput
    },
    DestinationSchema: {
      shape: _DestinationSchema
    }
  }
};
