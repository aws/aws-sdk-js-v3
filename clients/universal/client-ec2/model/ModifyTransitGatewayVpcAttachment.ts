import { ModifyTransitGatewayVpcAttachmentInput } from "./ModifyTransitGatewayVpcAttachmentInput";
import { ModifyTransitGatewayVpcAttachmentOutput } from "./ModifyTransitGatewayVpcAttachmentOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyTransitGatewayVpcAttachment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyTransitGatewayVpcAttachment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyTransitGatewayVpcAttachmentInput
  },
  output: {
    shape: ModifyTransitGatewayVpcAttachmentOutput
  },
  errors: []
};
