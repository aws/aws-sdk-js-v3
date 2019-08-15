import { List as _List_ } from "@aws-sdk/types";
import { _InternetGateway } from "./_InternetGateway";

export const _InternetGatewayList: _List_ = {
  type: "list",
  member: {
    shape: _InternetGateway,
    locationName: "item"
  }
};
