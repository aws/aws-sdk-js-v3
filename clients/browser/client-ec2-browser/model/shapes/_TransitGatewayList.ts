import { List as _List_ } from "@aws-sdk/types";
import { _TransitGateway } from "./_TransitGateway";

export const _TransitGatewayList: _List_ = {
  type: "list",
  member: {
    shape: _TransitGateway,
    locationName: "item"
  }
};
