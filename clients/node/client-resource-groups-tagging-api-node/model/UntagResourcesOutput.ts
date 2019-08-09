import { _FailedResourcesMap } from "./_FailedResourcesMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailedResourcesMap: {
      shape: _FailedResourcesMap
    }
  }
};
