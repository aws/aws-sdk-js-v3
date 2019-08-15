import { _KinesisDataStream } from "./_KinesisDataStream";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamProcessorOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    KinesisDataStream: {
      shape: _KinesisDataStream
    }
  }
};
