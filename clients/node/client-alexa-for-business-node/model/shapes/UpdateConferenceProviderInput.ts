import { _IPDialIn } from "./_IPDialIn";
import { _PSTNDialIn } from "./_PSTNDialIn";
import { _MeetingSetting } from "./_MeetingSetting";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateConferenceProviderInput: _Structure_ = {
  type: "structure",
  required: [
    "ConferenceProviderArn",
    "ConferenceProviderType",
    "MeetingSetting"
  ],
  members: {
    ConferenceProviderArn: {
      shape: {
        type: "string"
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
    }
  }
};
