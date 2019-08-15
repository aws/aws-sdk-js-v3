import { List as _List_ } from "@aws-sdk/types";
import { _DirectConnectGatewayAttachment } from "./_DirectConnectGatewayAttachment";

export const _DirectConnectGatewayAttachmentList: _List_ = {
  type: "list",
  member: {
    shape: _DirectConnectGatewayAttachment
  }
};
