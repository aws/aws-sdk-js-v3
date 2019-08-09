import { List as _List_ } from "@aws-sdk/types";
import { _DevEndpoint } from "./_DevEndpoint";

export const _DevEndpointList: _List_ = {
  type: "list",
  member: {
    shape: _DevEndpoint
  }
};
