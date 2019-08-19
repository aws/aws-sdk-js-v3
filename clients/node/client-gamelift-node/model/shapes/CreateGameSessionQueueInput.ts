import { _PlayerLatencyPolicyList } from "./_PlayerLatencyPolicyList";
import { _GameSessionQueueDestinationList } from "./_GameSessionQueueDestinationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGameSessionQueueInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TimeoutInSeconds: {
      shape: {
        type: "integer"
      }
    },
    PlayerLatencyPolicies: {
      shape: _PlayerLatencyPolicyList
    },
    Destinations: {
      shape: _GameSessionQueueDestinationList
    }
  }
};
