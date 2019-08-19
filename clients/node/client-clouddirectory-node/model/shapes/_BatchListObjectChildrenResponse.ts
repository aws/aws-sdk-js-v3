import { _LinkNameToObjectIdentifierMap } from "./_LinkNameToObjectIdentifierMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchListObjectChildrenResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Children: {
      shape: _LinkNameToObjectIdentifierMap
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
