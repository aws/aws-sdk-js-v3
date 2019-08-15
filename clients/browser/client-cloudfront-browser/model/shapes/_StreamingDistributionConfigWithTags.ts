import { _StreamingDistributionConfig } from "./_StreamingDistributionConfig";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamingDistributionConfigWithTags: _Structure_ = {
  type: "structure",
  required: ["StreamingDistributionConfig", "Tags"],
  members: {
    StreamingDistributionConfig: {
      shape: _StreamingDistributionConfig
    },
    Tags: {
      shape: _Tags
    }
  }
};
