import { Structure as _Structure_ } from "@aws-sdk/types";

export const DiscoverPollEndpointOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    endpoint: {
      shape: {
        type: "string"
      }
    },
    telemetryEndpoint: {
      shape: {
        type: "string"
      }
    }
  }
};
