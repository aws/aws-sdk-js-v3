import { _SubscribedWorkteams } from "./_SubscribedWorkteams";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSubscribedWorkteamsOutput: _Structure_ = {
  type: "structure",
  required: ["SubscribedWorkteams"],
  members: {
    SubscribedWorkteams: {
      shape: _SubscribedWorkteams
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
