import { _FilterNames } from "./_FilterNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFiltersOutput: _Structure_ = {
  type: "structure",
  required: ["FilterNames"],
  members: {
    FilterNames: {
      shape: _FilterNames,
      locationName: "filterNames"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
