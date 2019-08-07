import { _MapOfEndpointMessageResult } from "./_MapOfEndpointMessageResult";
import { _MapOfMessageResult } from "./_MapOfMessageResult";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MessageResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      }
    },
    EndpointResult: {
      shape: _MapOfEndpointMessageResult
    },
    RequestId: {
      shape: {
        type: "string"
      }
    },
    Result: {
      shape: _MapOfMessageResult
    }
  }
};
