import { _BundleIdList } from "./_BundleIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeWorkspaceBundlesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BundleIds: {
      shape: _BundleIdList
    },
    Owner: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
