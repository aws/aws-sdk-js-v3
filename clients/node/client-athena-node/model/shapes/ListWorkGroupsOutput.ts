import { _WorkGroupsList } from "./_WorkGroupsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListWorkGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WorkGroups: {
      shape: _WorkGroupsList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
