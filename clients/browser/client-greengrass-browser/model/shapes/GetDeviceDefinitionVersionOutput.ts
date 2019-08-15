import { _DeviceDefinitionVersion } from "./_DeviceDefinitionVersion";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeviceDefinitionVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    CreationTimestamp: {
      shape: {
        type: "string"
      }
    },
    Definition: {
      shape: _DeviceDefinitionVersion
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "string"
      }
    }
  }
};
