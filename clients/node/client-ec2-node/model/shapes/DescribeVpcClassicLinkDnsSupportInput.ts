import { _VpcClassicLinkIdList } from "./_VpcClassicLinkIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcClassicLinkDnsSupportInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      },
      locationName: "maxResults"
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "nextToken"
    },
    VpcIds: {
      shape: _VpcClassicLinkIdList
    }
  }
};
