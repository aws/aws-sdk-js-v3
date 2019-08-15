import { _GenericMap } from "./_GenericMap";
import { _PredecessorList } from "./_PredecessorList";
import { _NotificationProperty } from "./_NotificationProperty";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobRun: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Attempt: {
      shape: {
        type: "integer"
      }
    },
    PreviousRunId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TriggerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StartedOn: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedOn: {
      shape: {
        type: "timestamp"
      }
    },
    CompletedOn: {
      shape: {
        type: "timestamp"
      }
    },
    JobRunState: {
      shape: {
        type: "string"
      }
    },
    Arguments: {
      shape: _GenericMap
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    },
    PredecessorRuns: {
      shape: _PredecessorList
    },
    AllocatedCapacity: {
      shape: {
        type: "integer"
      }
    },
    ExecutionTime: {
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
    WorkerType: {
      shape: {
        type: "string"
      }
    },
    NumberOfWorkers: {
      shape: {
        type: "integer"
      }
    },
    SecurityConfiguration: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LogGroupName: {
      shape: {
        type: "string"
      }
    },
    NotificationProperty: {
      shape: _NotificationProperty
    },
    GlueVersion: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
