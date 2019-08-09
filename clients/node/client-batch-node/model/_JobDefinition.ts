import { _ParametersMap } from "./_ParametersMap";
import { _RetryStrategy } from "./_RetryStrategy";
import { _ContainerProperties } from "./_ContainerProperties";
import { _JobTimeout } from "./_JobTimeout";
import { _NodeProperties } from "./_NodeProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobDefinition: _Structure_ = {
  type: "structure",
  required: ["jobDefinitionName", "jobDefinitionArn", "revision", "type"],
  members: {
    jobDefinitionName: {
      shape: {
        type: "string"
      }
    },
    jobDefinitionArn: {
      shape: {
        type: "string"
      }
    },
    revision: {
      shape: {
        type: "integer"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    parameters: {
      shape: _ParametersMap
    },
    retryStrategy: {
      shape: _RetryStrategy
    },
    containerProperties: {
      shape: _ContainerProperties
    },
    timeout: {
      shape: _JobTimeout
    },
    nodeProperties: {
      shape: _NodeProperties
    }
  }
};
