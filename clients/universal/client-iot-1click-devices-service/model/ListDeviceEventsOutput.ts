import { ___listOfDeviceEvent } from "./___listOfDeviceEvent";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeviceEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Events: {
      shape: ___listOfDeviceEvent,
      locationName: "events"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
