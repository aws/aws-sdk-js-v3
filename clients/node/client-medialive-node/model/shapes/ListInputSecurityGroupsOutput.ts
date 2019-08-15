import { ___listOfInputSecurityGroup } from "./___listOfInputSecurityGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInputSecurityGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InputSecurityGroups: {
      shape: ___listOfInputSecurityGroup,
      locationName: "inputSecurityGroups"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
