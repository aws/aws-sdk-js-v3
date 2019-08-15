import { Map as _Map_ } from "@aws-sdk/types";
import { _EndpointMessageResult } from "./_EndpointMessageResult";

export const _MapOfEndpointMessageResult: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _EndpointMessageResult
  }
};
