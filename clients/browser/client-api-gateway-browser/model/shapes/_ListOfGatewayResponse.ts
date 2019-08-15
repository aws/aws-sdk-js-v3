import { List as _List_ } from "@aws-sdk/types";
import { _GatewayResponse } from "./_GatewayResponse";

export const _ListOfGatewayResponse: _List_ = {
  type: "list",
  member: {
    shape: _GatewayResponse
  }
};
