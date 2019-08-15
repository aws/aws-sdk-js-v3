import { List as _List_ } from "@aws-sdk/types";
import { _CustomerGateway } from "./_CustomerGateway";

export const _CustomerGatewayList: _List_ = {
  type: "list",
  member: {
    shape: _CustomerGateway,
    locationName: "item"
  }
};
