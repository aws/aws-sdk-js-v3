import { Map as _Map_ } from "@aws-sdk/types";
import { _Event } from "./_Event";

export const _MapOfEvent: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _Event
  }
};
