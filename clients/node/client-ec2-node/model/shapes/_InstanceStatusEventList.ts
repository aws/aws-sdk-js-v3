import { List as _List_ } from "@aws-sdk/types";
import { _InstanceStatusEvent } from "./_InstanceStatusEvent";

export const _InstanceStatusEventList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceStatusEvent,
    locationName: "item"
  }
};
