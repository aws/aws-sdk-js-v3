import { RejectTransitGatewayVpcAttachmentInput } from "../shapes/RejectTransitGatewayVpcAttachmentInput";
import { RejectTransitGatewayVpcAttachmentOutput } from "../shapes/RejectTransitGatewayVpcAttachmentOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RejectTransitGatewayVpcAttachment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RejectTransitGatewayVpcAttachment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RejectTransitGatewayVpcAttachmentInput
  },
  output: {
    shape: RejectTransitGatewayVpcAttachmentOutput
  },
  errors: []
};
