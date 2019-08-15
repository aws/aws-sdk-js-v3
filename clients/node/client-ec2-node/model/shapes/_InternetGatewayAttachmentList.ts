import { List as _List_ } from "@aws-sdk/types";
import { _InternetGatewayAttachment } from "./_InternetGatewayAttachment";

export const _InternetGatewayAttachmentList: _List_ = {
  type: "list",
  member: {
    shape: _InternetGatewayAttachment,
    locationName: "item"
  }
};
