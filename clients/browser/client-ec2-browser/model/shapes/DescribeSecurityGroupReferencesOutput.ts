import { _SecurityGroupReferences } from "./_SecurityGroupReferences";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSecurityGroupReferencesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SecurityGroupReferenceSet: {
      shape: _SecurityGroupReferences,
      locationName: "securityGroupReferenceSet"
    }
  }
};
