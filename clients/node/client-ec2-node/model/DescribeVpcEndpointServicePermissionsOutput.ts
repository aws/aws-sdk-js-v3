import { _AllowedPrincipalSet } from "./_AllowedPrincipalSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcEndpointServicePermissionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AllowedPrincipals: {
      shape: _AllowedPrincipalSet,
      locationName: "allowedPrincipals"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
