import { _IPDialIn } from "./_IPDialIn";
import { _PSTNDialIn } from "./_PSTNDialIn";
import { _MeetingSetting } from "./_MeetingSetting";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConferenceProvider: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Type: {
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
