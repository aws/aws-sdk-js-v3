import { _ConferencePreference } from "./_ConferencePreference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutConferencePreferenceInput: _Structure_ = {
  type: "structure",
  required: ["ConferencePreference"],
  members: {
    ConferencePreference: {
      shape: _ConferencePreference
    }
  }
};
