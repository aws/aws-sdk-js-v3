import { _Action } from "./_Action";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Service: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Action: {
      shape: _Action,
      locationName: "action"
    },
    Archived: {
      shape: {
        type: "boolean"
      },
      locationName: "archived"
    },
    Count: {
      shape: {
        type: "integer"
      },
      locationName: "count"
    },
    DetectorId: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "detectorId"
    },
    EventFirstSeen: {
      shape: {
        type: "string"
      },
      locationName: "eventFirstSeen"
    },
    EventLastSeen: {
      shape: {
        type: "string"
      },
      locationName: "eventLastSeen"
    },
    ResourceRole: {
      shape: {
        type: "string"
      },
      locationName: "resourceRole"
    },
    ServiceName: {
      shape: {
        type: "string"
      },
      locationName: "serviceName"
    },
    UserFeedback: {
      shape: {
        type: "string"
      },
      locationName: "userFeedback"
    }
  }
};
