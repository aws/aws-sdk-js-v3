import { _KinesisVideoStream } from "./_KinesisVideoStream";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamProcessorInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    KinesisVideoStream: {
      shape: _KinesisVideoStream
    }
  }
};
