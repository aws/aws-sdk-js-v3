import { Structure as _Structure_ } from "@aws-sdk/types";

export const TrackingOptionsDoesNotExistException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "TrackingOptionsDoesNotExistException",
  exceptionCode: "TrackingOptionsDoesNotExistException"
};
