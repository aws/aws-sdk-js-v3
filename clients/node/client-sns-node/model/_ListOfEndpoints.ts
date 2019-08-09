import { List as _List_ } from "@aws-sdk/types";
import { _Endpoint } from "./_Endpoint";

export const _ListOfEndpoints: _List_ = {
  type: "list",
  member: {
    shape: _Endpoint
  }
};
