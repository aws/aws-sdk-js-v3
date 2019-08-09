import { _ElasticsearchClusterConfig } from "./_ElasticsearchClusterConfig";
import { _OptionStatus } from "./_OptionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticsearchClusterConfigStatus: _Structure_ = {
  type: "structure",
  required: ["Options", "Status"],
  members: {
    Options: {
      shape: _ElasticsearchClusterConfig
    },
    Status: {
      shape: _OptionStatus
    }
  }
};
