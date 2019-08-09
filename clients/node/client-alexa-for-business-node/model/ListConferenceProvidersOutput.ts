import { _ConferenceProvidersList } from "./_ConferenceProvidersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListConferenceProvidersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConferenceProviders: {
      shape: _ConferenceProvidersList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
