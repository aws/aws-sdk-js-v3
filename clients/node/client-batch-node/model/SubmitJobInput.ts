import { _ArrayProperties } from "./_ArrayProperties";
import { _JobDependencyList } from "./_JobDependencyList";
import { _ParametersMap } from "./_ParametersMap";
import { _ContainerOverrides } from "./_ContainerOverrides";
import { _NodeOverrides } from "./_NodeOverrides";
import { _RetryStrategy } from "./_RetryStrategy";
import { _JobTimeout } from "./_JobTimeout";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SubmitJobInput: _Structure_ = {
  type: "structure",
  required: ["jobName", "jobQueue", "jobDefinition"],
  members: {
    jobName: {
      shape: {
        type: "string"
      }
    },
    jobQueue: {
      shape: {
        type: "string"
      }
    },
    arrayProperties: {
      shape: _ArrayProperties
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
    containerOverrides: {
      shape: _ContainerOverrides
    },
    nodeOverrides: {
      shape: _NodeOverrides
    },
    retryStrategy: {
      shape: _RetryStrategy
    },
    timeout: {
      shape: _JobTimeout
    }
  }
};
