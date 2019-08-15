import { List as _List_ } from "@aws-sdk/types";
import { _VpcEndpoint } from "./_VpcEndpoint";

export const _VpcEndpointSet: _List_ = {
  type: "list",
  member: {
    shape: _VpcEndpoint,
    locationName: "item"
  }
};
