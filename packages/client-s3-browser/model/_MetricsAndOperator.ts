import { _TagSet } from "./_TagSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricsAndOperator: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Prefix: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagSet,
      flattened: true,
      locationName: "Tag"
    }
  }
};
