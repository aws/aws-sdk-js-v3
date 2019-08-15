import { _EventsConfiguration } from "./_EventsConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutEventsConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EventsConfiguration: {
      shape: _EventsConfiguration
    }
  }
};
