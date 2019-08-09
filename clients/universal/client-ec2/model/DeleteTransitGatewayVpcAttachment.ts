import { DeleteTransitGatewayVpcAttachmentInput } from "./DeleteTransitGatewayVpcAttachmentInput";
import { DeleteTransitGatewayVpcAttachmentOutput } from "./DeleteTransitGatewayVpcAttachmentOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteTransitGatewayVpcAttachment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTransitGatewayVpcAttachment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTransitGatewayVpcAttachmentInput
  },
  output: {
    shape: DeleteTransitGatewayVpcAttachmentOutput
  },
  errors: []
};
