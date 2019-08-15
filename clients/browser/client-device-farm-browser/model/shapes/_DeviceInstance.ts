import { _InstanceLabels } from "./_InstanceLabels";
import { _InstanceProfile } from "./_InstanceProfile";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceInstance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    deviceArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    labels: {
      shape: _InstanceLabels
    },
    status: {
      shape: {
        type: "string"
      }
    },
    udid: {
      shape: {
        type: "string"
      }
    },
    instanceProfile: {
      shape: _InstanceProfile
    }
  }
};
