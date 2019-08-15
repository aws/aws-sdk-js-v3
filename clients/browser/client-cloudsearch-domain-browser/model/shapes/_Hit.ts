import { _Fields } from "./_Fields";
import { _Exprs } from "./_Exprs";
import { _Highlights } from "./_Highlights";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Hit: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    fields: {
      shape: _Fields
    },
    exprs: {
      shape: _Exprs
    },
    highlights: {
      shape: _Highlights
    }
  }
};
