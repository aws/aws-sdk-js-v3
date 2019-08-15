import { List as _List_ } from "@aws-sdk/types";
import { _TransitGatewayAttachment } from "./_TransitGatewayAttachment";

export const _TransitGatewayAttachmentList: _List_ = {
  type: "list",
  member: {
    shape: _TransitGatewayAttachment,
    locationName: "item"
  }
};
