import { _BundleList } from "./_BundleList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeWorkspaceBundlesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Bundles: {
      shape: _BundleList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
