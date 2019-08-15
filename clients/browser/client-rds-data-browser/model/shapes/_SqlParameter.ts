import { _Field } from "./_Field";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SqlParameter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: _Field
    }
  }
};
