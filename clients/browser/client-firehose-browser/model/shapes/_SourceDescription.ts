import { _KinesisStreamSourceDescription } from "./_KinesisStreamSourceDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SourceDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    KinesisStreamSourceDescription: {
      shape: _KinesisStreamSourceDescription
    }
  }
};
