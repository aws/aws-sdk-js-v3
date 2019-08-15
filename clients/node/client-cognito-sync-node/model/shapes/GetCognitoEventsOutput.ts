import { _Events } from "./_Events";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCognitoEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Events: {
      shape: _Events
    }
  }
};
