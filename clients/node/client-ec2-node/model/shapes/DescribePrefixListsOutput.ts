import { _PrefixListSet } from "./_PrefixListSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePrefixListsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    PrefixLists: {
      shape: _PrefixListSet,
      locationName: "prefixListSet"
    }
  }
};
