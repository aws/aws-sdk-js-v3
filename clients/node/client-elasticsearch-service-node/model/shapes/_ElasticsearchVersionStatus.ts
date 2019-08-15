import { _OptionStatus } from "./_OptionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticsearchVersionStatus: _Structure_ = {
  type: "structure",
  required: ["Options", "Status"],
  members: {
    Options: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: _OptionStatus
    }
  }
};
