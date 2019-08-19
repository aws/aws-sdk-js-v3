import { _TypedLinkNameList } from "./_TypedLinkNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTypedLinkFacetNamesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FacetNames: {
      shape: _TypedLinkNameList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
