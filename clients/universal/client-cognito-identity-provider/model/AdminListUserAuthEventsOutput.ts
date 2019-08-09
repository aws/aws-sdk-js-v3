import { _AuthEventsType } from "./_AuthEventsType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminListUserAuthEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AuthEvents: {
      shape: _AuthEventsType
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
