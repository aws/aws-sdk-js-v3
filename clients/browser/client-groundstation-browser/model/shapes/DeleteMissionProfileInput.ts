import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteMissionProfileInput: _Structure_ = {
  type: "structure",
  required: ["missionProfileId"],
  members: {
    missionProfileId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "missionProfileId"
    }
  }
};
