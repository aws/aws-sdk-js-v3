import { CreateTransitGatewayVpcAttachmentInput } from "../shapes/CreateTransitGatewayVpcAttachmentInput";
import { CreateTransitGatewayVpcAttachmentOutput } from "../shapes/CreateTransitGatewayVpcAttachmentOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTransitGatewayVpcAttachment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTransitGatewayVpcAttachment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTransitGatewayVpcAttachmentInput
  },
  output: {
    shape: CreateTransitGatewayVpcAttachmentOutput
  },
  errors: []
};
