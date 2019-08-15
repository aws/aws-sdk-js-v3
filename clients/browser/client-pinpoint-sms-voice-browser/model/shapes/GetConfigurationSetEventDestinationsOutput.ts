import { _EventDestinations } from "./_EventDestinations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConfigurationSetEventDestinationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EventDestinations: {
      shape: _EventDestinations
    }
  }
};
