import { _ConferencePreference } from "./_ConferencePreference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConferencePreferenceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Preference: {
      shape: _ConferencePreference
    }
  }
};
