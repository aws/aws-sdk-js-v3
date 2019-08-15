import { _ConferenceProvider } from "./_ConferenceProvider";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConferenceProviderOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConferenceProvider: {
      shape: _ConferenceProvider
    }
  }
};
