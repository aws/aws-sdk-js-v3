import { _FragmentNumberList } from "./_FragmentNumberList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMediaForFragmentListInput: _Structure_ = {
  type: "structure",
  required: ["StreamName", "Fragments"],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Fragments: {
      shape: _FragmentNumberList
    }
  }
};
