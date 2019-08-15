import { _TagInfoForResource } from "./_TagInfoForResource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForResourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TagInfoForResource: {
      shape: _TagInfoForResource
    }
  }
};
