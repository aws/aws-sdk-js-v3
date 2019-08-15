import { List as _List_ } from "@aws-sdk/types";
import { _TransitGatewayRouteAttachment } from "./_TransitGatewayRouteAttachment";

export const _TransitGatewayRouteAttachmentList: _List_ = {
  type: "list",
  member: {
    shape: _TransitGatewayRouteAttachment,
    locationName: "item"
  }
};
