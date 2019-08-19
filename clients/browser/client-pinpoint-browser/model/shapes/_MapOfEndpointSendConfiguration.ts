import { Map as _Map_ } from "@aws-sdk/types";
import { _EndpointSendConfiguration } from "./_EndpointSendConfiguration";

export const _MapOfEndpointSendConfiguration: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _EndpointSendConfiguration
  }
};
