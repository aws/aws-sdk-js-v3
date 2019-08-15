import { _DistributionConfig } from "./_DistributionConfig";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DistributionConfigWithTags: _Structure_ = {
  type: "structure",
  required: ["DistributionConfig", "Tags"],
  members: {
    DistributionConfig: {
      shape: _DistributionConfig
    },
    Tags: {
      shape: _Tags
    }
  }
};
