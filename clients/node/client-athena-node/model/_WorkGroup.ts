import { _WorkGroupConfiguration } from "./_WorkGroupConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkGroup: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    Configuration: {
      shape: _WorkGroupConfiguration
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
