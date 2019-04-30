import { _AnnotationValue } from "./_AnnotationValue";
import { _ServiceIds } from "./_ServiceIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ValueWithServiceIds: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AnnotationValue: {
      shape: _AnnotationValue
    },
    ServiceIds: {
      shape: _ServiceIds
    }
  }
};
