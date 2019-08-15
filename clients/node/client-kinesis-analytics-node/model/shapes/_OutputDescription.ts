import { _KinesisStreamsOutputDescription } from "./_KinesisStreamsOutputDescription";
import { _KinesisFirehoseOutputDescription } from "./_KinesisFirehoseOutputDescription";
import { _LambdaOutputDescription } from "./_LambdaOutputDescription";
import { _DestinationSchema } from "./_DestinationSchema";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OutputId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    KinesisStreamsOutputDescription: {
      shape: _KinesisStreamsOutputDescription
    },
    KinesisFirehoseOutputDescription: {
      shape: _KinesisFirehoseOutputDescription
    },
    LambdaOutputDescription: {
      shape: _LambdaOutputDescription
    },
    DestinationSchema: {
      shape: _DestinationSchema
    }
  }
};
