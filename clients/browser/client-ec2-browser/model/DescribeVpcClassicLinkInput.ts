import { _FilterList } from "./_FilterList";
import { _VpcClassicLinkIdList } from "./_VpcClassicLinkIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcClassicLinkInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    VpcIds: {
      shape: _VpcClassicLinkIdList,
      locationName: "VpcId"
    }
  }
};
