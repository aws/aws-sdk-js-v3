import { _IPDialIn } from "./_IPDialIn";
import { _PSTNDialIn } from "./_PSTNDialIn";
import { _MeetingSetting } from "./_MeetingSetting";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateConferenceProviderInput: _Structure_ = {
  type: "structure",
  required: [
    "ConferenceProviderName",
    "ConferenceProviderType",
    "MeetingSetting"
  ],
  members: {
    ConferenceProviderName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ConferenceProviderType: {
      shape: {
        type: "string"
      }
    },
    IPDialIn: {
      shape: _IPDialIn
    },
    PSTNDialIn: {
      shape: _PSTNDialIn
    },
    MeetingSetting: {
      shape: _MeetingSetting
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 10
      }
    }
  }
};
