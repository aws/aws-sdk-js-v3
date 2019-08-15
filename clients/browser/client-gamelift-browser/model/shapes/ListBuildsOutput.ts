import { _BuildList } from "./_BuildList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBuildsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Builds: {
      shape: _BuildList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
