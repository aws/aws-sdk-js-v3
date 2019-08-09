import { List as _List_ } from "@aws-sdk/types";
import { _HostOffering } from "./_HostOffering";

export const _HostOfferingSet: _List_ = {
  type: "list",
  member: {
    shape: _HostOffering,
    locationName: "item"
  }
};
