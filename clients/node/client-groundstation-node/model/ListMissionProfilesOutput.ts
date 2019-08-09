import { _MissionProfileList } from "./_MissionProfileList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMissionProfilesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    missionProfileList: {
      shape: _MissionProfileList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
