import { _BundleList } from "./_BundleList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBundlesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    bundles: {
      shape: _BundleList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
