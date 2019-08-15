import { List as _List_ } from "@aws-sdk/types";
import { _ClientVpnEndpoint } from "./_ClientVpnEndpoint";

export const _EndpointSet: _List_ = {
  type: "list",
  member: {
    shape: _ClientVpnEndpoint,
    locationName: "item"
  }
};
