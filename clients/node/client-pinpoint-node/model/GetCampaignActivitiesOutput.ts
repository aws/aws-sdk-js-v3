import { _ActivitiesResponse } from "./_ActivitiesResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCampaignActivitiesOutput: _Structure_ = {
  type: "structure",
  required: ["ActivitiesResponse"],
  members: {
    ActivitiesResponse: {
      shape: _ActivitiesResponse
    }
  },
  payload: "ActivitiesResponse"
};
