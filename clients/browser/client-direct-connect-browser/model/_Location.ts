import { _AvailablePortSpeeds } from "./_AvailablePortSpeeds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Location: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    locationCode: {
      shape: {
        type: "string"
      }
    },
    locationName: {
      shape: {
        type: "string"
      }
    },
    region: {
      shape: {
        type: "string"
      }
    },
    availablePortSpeeds: {
      shape: _AvailablePortSpeeds
    }
  }
};
