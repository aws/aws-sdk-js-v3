import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceCreationLimitPolicy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NewGameSessionsPerCreator: {
      shape: {
        type: "integer"
      }
    },
    PolicyPeriodInMinutes: {
      shape: {
        type: "integer"
      }
    }
  }
};
