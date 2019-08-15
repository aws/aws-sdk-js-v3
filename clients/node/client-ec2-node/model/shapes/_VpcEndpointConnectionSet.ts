import { List as _List_ } from "@aws-sdk/types";
import { _VpcEndpointConnection } from "./_VpcEndpointConnection";

export const _VpcEndpointConnectionSet: _List_ = {
  type: "list",
  member: {
    shape: _VpcEndpointConnection,
    locationName: "item"
  }
};
