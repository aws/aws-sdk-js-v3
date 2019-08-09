import { _FacetNameList } from "./_FacetNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFacetNamesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FacetNames: {
      shape: _FacetNameList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
