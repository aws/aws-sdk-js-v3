import { _VpcClassicLinkList } from "./_VpcClassicLinkList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcClassicLinkOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Vpcs: {
      shape: _VpcClassicLinkList,
      locationName: "vpcSet"
    }
  }
};
