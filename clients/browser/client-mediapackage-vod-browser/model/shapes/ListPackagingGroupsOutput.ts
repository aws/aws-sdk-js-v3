import { ___listOfPackagingGroup } from "./___listOfPackagingGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPackagingGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    PackagingGroups: {
      shape: ___listOfPackagingGroup,
      locationName: "packagingGroups"
    }
  }
};
