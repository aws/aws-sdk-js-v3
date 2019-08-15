import { AcceptTransitGatewayVpcAttachmentInput } from "../shapes/AcceptTransitGatewayVpcAttachmentInput";
import { AcceptTransitGatewayVpcAttachmentOutput } from "../shapes/AcceptTransitGatewayVpcAttachmentOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AcceptTransitGatewayVpcAttachment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AcceptTransitGatewayVpcAttachment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AcceptTransitGatewayVpcAttachmentInput
  },
  output: {
    shape: AcceptTransitGatewayVpcAttachmentOutput
  },
  errors: []
};
