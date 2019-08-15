import { _KinesisStreamsOutputUpdate } from "./_KinesisStreamsOutputUpdate";
import { _KinesisFirehoseOutputUpdate } from "./_KinesisFirehoseOutputUpdate";
import { _LambdaOutputUpdate } from "./_LambdaOutputUpdate";
import { _DestinationSchema } from "./_DestinationSchema";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputUpdate: _Structure_ = {
  type: "structure",
  required: ["OutputId"],
  members: {
    OutputId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NameUpdate: {
      shape: {
        type: "string",
        min: 1
      }
    },
    KinesisStreamsOutputUpdate: {
      shape: _KinesisStreamsOutputUpdate
    },
    KinesisFirehoseOutputUpdate: {
      shape: _KinesisFirehoseOutputUpdate
    },
    LambdaOutputUpdate: {
      shape: _LambdaOutputUpdate
    },
    DestinationSchemaUpdate: {
      shape: _DestinationSchema
    }
  }
};
