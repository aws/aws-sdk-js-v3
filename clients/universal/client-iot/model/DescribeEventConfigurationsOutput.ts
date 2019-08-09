import { _EventConfigurations } from "./_EventConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    eventConfigurations: {
      shape: _EventConfigurations
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    },
    lastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
