import { _Listener } from "./_Listener";
import { _PolicyNames } from "./_PolicyNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ListenerDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Listener: {
      shape: _Listener
    },
    PolicyNames: {
      shape: _PolicyNames
    }
  }
};
