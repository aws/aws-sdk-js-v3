import { Structure as _Structure_ } from "@aws-sdk/types";

export const DiscoverPollEndpointInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    containerInstance: {
      shape: {
        type: "string"
      }
    },
    cluster: {
      shape: {
        type: "string"
      }
    }
  }
};
