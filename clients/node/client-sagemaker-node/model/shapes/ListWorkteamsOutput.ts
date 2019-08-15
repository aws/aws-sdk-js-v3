import { _Workteams } from "./_Workteams";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListWorkteamsOutput: _Structure_ = {
  type: "structure",
  required: ["Workteams"],
  members: {
    Workteams: {
      shape: _Workteams
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
