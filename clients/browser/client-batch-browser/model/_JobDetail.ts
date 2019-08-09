import { _AttemptDetails } from "./_AttemptDetails";
import { _RetryStrategy } from "./_RetryStrategy";
import { _JobDependencyList } from "./_JobDependencyList";
import { _ParametersMap } from "./_ParametersMap";
import { _ContainerDetail } from "./_ContainerDetail";
import { _NodeDetails } from "./_NodeDetails";
import { _NodeProperties } from "./_NodeProperties";
import { _ArrayPropertiesDetail } from "./_ArrayPropertiesDetail";
import { _JobTimeout } from "./_JobTimeout";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobDetail: _Structure_ = {
  type: "structure",
  required: [
    "jobName",
    "jobId",
    "jobQueue",
    "status",
    "startedAt",
    "jobDefinition"
  ],
  members: {
    jobName: {
      shape: {
        type: "string"
      }
    },
    jobId: {
      shape: {
        type: "string"
      }
    },
    jobQueue: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    attempts: {
      shape: _AttemptDetails
    },
    statusReason: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "integer"
      }
    },
    retryStrategy: {
      shape: _RetryStrategy
    },
    startedAt: {
      shape: {
        type: "integer"
      }
    },
    stoppedAt: {
      shape: {
        type: "integer"
      }
    },
    dependsOn: {
      shape: _JobDependencyList
    },
    jobDefinition: {
      shape: {
        type: "string"
      }
    },
    parameters: {
      shape: _ParametersMap
    },
    container: {
      shape: _ContainerDetail
    },
    nodeDetails: {
      shape: _NodeDetails
    },
    nodeProperties: {
      shape: _NodeProperties
    },
    arrayProperties: {
      shape: _ArrayPropertiesDetail
    },
    timeout: {
      shape: _JobTimeout
    }
  }
};
