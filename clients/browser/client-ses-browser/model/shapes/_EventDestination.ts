import { _EventTypes } from "./_EventTypes";
import { _KinesisFirehoseDestination } from "./_KinesisFirehoseDestination";
import { _CloudWatchDestination } from "./_CloudWatchDestination";
import { _SNSDestination } from "./_SNSDestination";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventDestination: _Structure_ = {
  type: "structure",
  required: ["Name", "MatchingEventTypes"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    MatchingEventTypes: {
      shape: _EventTypes
    },
    KinesisFirehoseDestination: {
      shape: _KinesisFirehoseDestination
    },
    CloudWatchDestination: {
      shape: _CloudWatchDestination
    },
    SNSDestination: {
      shape: _SNSDestination
    }
  }
};
