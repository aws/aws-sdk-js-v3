import { _ResourceIdentifier } from "./_ResourceIdentifier";
import { _StringMap } from "./_StringMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NonCompliantResource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceType: {
      shape: {
        type: "string"
      }
    },
    resourceIdentifier: {
      shape: _ResourceIdentifier
    },
    additionalInfo: {
      shape: _StringMap
    }
  }
};
