import { _ObjectIdentifierList } from "./_ObjectIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Delete: _Structure_ = {
  type: "structure",
  required: ["Objects"],
  members: {
    Objects: {
      shape: _ObjectIdentifierList,
      locationName: "Object"
    },
    Quiet: {
      shape: {
        type: "boolean"
      }
    }
  }
};
