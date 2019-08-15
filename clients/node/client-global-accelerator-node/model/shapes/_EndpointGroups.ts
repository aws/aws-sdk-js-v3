import { List as _List_ } from "@aws-sdk/types";
import { _EndpointGroup } from "./_EndpointGroup";

export const _EndpointGroups: _List_ = {
  type: "list",
  member: {
    shape: _EndpointGroup
  }
};
