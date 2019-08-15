import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HsmConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HsmConfigurationIdentifier: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    HsmIpAddress: {
      shape: {
        type: "string"
      }
    },
    HsmPartitionName: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
