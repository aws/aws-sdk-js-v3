import { _EventList } from "./_EventList";
import { _NotificationConfigurationFilter } from "./_NotificationConfigurationFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TopicConfiguration: _Structure_ = {
  type: "structure",
  required: ["TopicArn", "Events"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    TopicArn: {
      shape: {
        type: "string"
      },
      locationName: "Topic"
    },
    Events: {
      shape: _EventList,
      locationName: "Event"
    },
    Filter: {
      shape: _NotificationConfigurationFilter
    }
  }
};
