import { _ParametersMap } from "./_ParametersMap";
import { _ContainerProperties } from "./_ContainerProperties";
import { _NodeProperties } from "./_NodeProperties";
import { _RetryStrategy } from "./_RetryStrategy";
import { _JobTimeout } from "./_JobTimeout";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterJobDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["jobDefinitionName", "type"],
  members: {
    jobDefinitionName: {
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
    containerProperties: {
      shape: _ContainerProperties
    },
    nodeProperties: {
      shape: _NodeProperties
    },
    retryStrategy: {
      shape: _RetryStrategy
    },
    timeout: {
      shape: _JobTimeout
    }
  }
};
