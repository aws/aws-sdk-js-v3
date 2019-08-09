import { _BatchArrayProperties } from "./_BatchArrayProperties";
import { _BatchRetryStrategy } from "./_BatchRetryStrategy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchParameters: _Structure_ = {
  type: "structure",
  required: ["JobDefinition", "JobName"],
  members: {
    JobDefinition: {
      shape: {
        type: "string"
      }
    },
    JobName: {
      shape: {
        type: "string"
      }
    },
    ArrayProperties: {
      shape: _BatchArrayProperties
    },
    RetryStrategy: {
      shape: _BatchRetryStrategy
    }
  }
};
