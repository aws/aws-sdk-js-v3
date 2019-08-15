import { _BundleList } from "./_BundleList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBundlesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    bundleList: {
      shape: _BundleList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
