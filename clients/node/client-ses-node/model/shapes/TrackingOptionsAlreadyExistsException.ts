import { Structure as _Structure_ } from "@aws-sdk/types";

export const TrackingOptionsAlreadyExistsException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "TrackingOptionsAlreadyExistsException",
  exceptionCode: "TrackingOptionsAlreadyExistsException"
};
