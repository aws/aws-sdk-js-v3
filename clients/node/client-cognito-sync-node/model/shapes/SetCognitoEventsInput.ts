import { _Events } from "./_Events";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetCognitoEventsInput: _Structure_ = {
  type: "structure",
  required: ["IdentityPoolId", "Events"],
  members: {
    IdentityPoolId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "IdentityPoolId"
    },
    Events: {
      shape: _Events
    }
  }
};
