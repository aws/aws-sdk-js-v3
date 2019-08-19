import { List as _List_ } from "@aws-sdk/types";
import { _TransitGatewayAttachmentPropagation } from "./_TransitGatewayAttachmentPropagation";

export const _TransitGatewayAttachmentPropagationList: _List_ = {
  type: "list",
  member: {
    shape: _TransitGatewayAttachmentPropagation,
    locationName: "item"
  }
};
