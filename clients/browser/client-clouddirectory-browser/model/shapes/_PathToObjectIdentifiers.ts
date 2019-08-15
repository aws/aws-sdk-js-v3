import { _ObjectIdentifierList } from "./_ObjectIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PathToObjectIdentifiers: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Path: {
      shape: {
        type: "string"
      }
    },
    ObjectIdentifiers: {
      shape: _ObjectIdentifierList
    }
  }
};
