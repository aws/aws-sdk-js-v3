import { _Queues } from "./_Queues";
import { _Channels } from "./_Channels";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Filters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Queues: {
      shape: _Queues
    },
    Channels: {
      shape: _Channels
    }
  }
};
