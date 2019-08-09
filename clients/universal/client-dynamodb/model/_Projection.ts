import { _NonKeyAttributeNameList } from "./_NonKeyAttributeNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Projection: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProjectionType: {
      shape: {
        type: "string"
      }
    },
    NonKeyAttributes: {
      shape: _NonKeyAttributeNameList
    }
  }
};
