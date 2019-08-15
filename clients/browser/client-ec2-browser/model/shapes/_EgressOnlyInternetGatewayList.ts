import { List as _List_ } from "@aws-sdk/types";
import { _EgressOnlyInternetGateway } from "./_EgressOnlyInternetGateway";

export const _EgressOnlyInternetGatewayList: _List_ = {
  type: "list",
  member: {
    shape: _EgressOnlyInternetGateway,
    locationName: "item"
  }
};
