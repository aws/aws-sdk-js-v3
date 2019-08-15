import { _GenericMap } from "./_GenericMap";
import { _NotificationProperty } from "./_NotificationProperty";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartJobRunInput: _Structure_ = {
  type: "structure",
  required: ["JobName"],
  members: {
    JobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobRunId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Arguments: {
      shape: _GenericMap
    },
    AllocatedCapacity: {
      shape: {
        type: "integer"
      }
    },
    Timeout: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    MaxCapacity: {
      shape: {
        type: "float"
      }
    },
    SecurityConfiguration: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NotificationProperty: {
      shape: _NotificationProperty
    },
    WorkerType: {
      shape: {
        type: "string"
      }
    },
    NumberOfWorkers: {
      shape: {
        type: "integer"
      }
    }
  }
};
