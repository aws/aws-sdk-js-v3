import { _PublicEndpoint } from "./_PublicEndpoint";
import { _MapOfEvent } from "./_MapOfEvent";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventsBatch: _Structure_ = {
  type: "structure",
  required: ["Endpoint", "Events"],
  members: {
    Endpoint: {
      shape: _PublicEndpoint
    },
    Events: {
      shape: _MapOfEvent
    }
  }
};
