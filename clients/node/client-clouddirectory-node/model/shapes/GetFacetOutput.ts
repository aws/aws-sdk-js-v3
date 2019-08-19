import { _Facet } from "./_Facet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFacetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Facet: {
      shape: _Facet
    }
  }
};
