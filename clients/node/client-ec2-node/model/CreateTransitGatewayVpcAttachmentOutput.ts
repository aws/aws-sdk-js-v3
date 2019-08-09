import { _TransitGatewayVpcAttachment } from "./_TransitGatewayVpcAttachment";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTransitGatewayVpcAttachmentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGatewayVpcAttachment: {
      shape: _TransitGatewayVpcAttachment,
      locationName: "transitGatewayVpcAttachment"
    }
  }
};
