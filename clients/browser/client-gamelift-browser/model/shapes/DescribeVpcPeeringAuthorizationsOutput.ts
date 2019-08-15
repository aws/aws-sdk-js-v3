import { _VpcPeeringAuthorizationList } from "./_VpcPeeringAuthorizationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcPeeringAuthorizationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpcPeeringAuthorizations: {
      shape: _VpcPeeringAuthorizationList
    }
  }
};
