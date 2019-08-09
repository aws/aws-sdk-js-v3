import { _Listener } from "./_Listener";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateListenerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Listener: {
      shape: _Listener
    }
  }
};
