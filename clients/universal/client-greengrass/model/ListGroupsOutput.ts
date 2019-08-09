import { ___listOfGroupInformation } from "./___listOfGroupInformation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Groups: {
      shape: ___listOfGroupInformation
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
