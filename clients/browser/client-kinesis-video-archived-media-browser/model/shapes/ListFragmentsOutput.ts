import { _FragmentList } from "./_FragmentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFragmentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Fragments: {
      shape: _FragmentList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
