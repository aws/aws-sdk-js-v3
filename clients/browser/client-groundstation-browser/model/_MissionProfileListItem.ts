import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MissionProfileListItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    missionProfileArn: {
      shape: {
        type: "string"
      }
    },
    missionProfileId: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    region: {
      shape: {
        type: "string"
      }
    }
  }
};
