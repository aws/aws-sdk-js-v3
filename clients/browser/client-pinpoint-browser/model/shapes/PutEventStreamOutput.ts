import { _EventStream } from "./_EventStream";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutEventStreamOutput: _Structure_ = {
  type: "structure",
  required: ["EventStream"],
  members: {
    EventStream: {
      shape: _EventStream
    }
  },
  payload: "EventStream"
};
