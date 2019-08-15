import { List as _List_ } from "@aws-sdk/types";
import { _AuthEventType } from "./_AuthEventType";

export const _AuthEventsType: _List_ = {
  type: "list",
  member: {
    shape: _AuthEventType
  }
};
