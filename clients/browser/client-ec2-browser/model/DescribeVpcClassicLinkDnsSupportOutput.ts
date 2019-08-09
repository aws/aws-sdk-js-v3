import { _ClassicLinkDnsSupportList } from "./_ClassicLinkDnsSupportList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcClassicLinkDnsSupportOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "nextToken"
    },
    Vpcs: {
      shape: _ClassicLinkDnsSupportList,
      locationName: "vpcs"
    }
  }
};
