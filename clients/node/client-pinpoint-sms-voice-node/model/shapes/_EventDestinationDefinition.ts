import { _CloudWatchLogsDestination } from "./_CloudWatchLogsDestination";
import { _KinesisFirehoseDestination } from "./_KinesisFirehoseDestination";
import { _EventTypes } from "./_EventTypes";
import { _SnsDestination } from "./_SnsDestination";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventDestinationDefinition: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CloudWatchLogsDestination: {
      shape: _CloudWatchLogsDestination
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    KinesisFirehoseDestination: {
      shape: _KinesisFirehoseDestination
    },
    MatchingEventTypes: {
      shape: _EventTypes
    },
    SnsDestination: {
      shape: _SnsDestination
    }
  }
};
