import { List as _List_ } from "@aws-sdk/types";
import { _TransitGatewayVpcAttachment } from "./_TransitGatewayVpcAttachment";

export const _TransitGatewayVpcAttachmentList: _List_ = {
  type: "list",
  member: {
    shape: _TransitGatewayVpcAttachment,
    locationName: "item"
  }
};
