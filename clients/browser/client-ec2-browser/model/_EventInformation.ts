import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventInformation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EventDescription: {
      shape: {
        type: "string"
      },
      locationName: "eventDescription"
    },
    EventSubType: {
      shape: {
        type: "string"
      },
      locationName: "eventSubType"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    }
  }
};
