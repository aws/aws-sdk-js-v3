import { _IamInstanceProfileAssociationSet } from "./_IamInstanceProfileAssociationSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeIamInstanceProfileAssociationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IamInstanceProfileAssociations: {
      shape: _IamInstanceProfileAssociationSet,
      locationName: "iamInstanceProfileAssociationSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
