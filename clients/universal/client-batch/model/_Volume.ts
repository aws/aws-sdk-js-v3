import { _Host } from "./_Host";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Volume: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    host: {
      shape: _Host
    },
    name: {
      shape: {
        type: "string"
      }
    }
  }
};
