import { GetTransitGatewayAttachmentPropagationsInput } from "../shapes/GetTransitGatewayAttachmentPropagationsInput";
import { GetTransitGatewayAttachmentPropagationsOutput } from "../shapes/GetTransitGatewayAttachmentPropagationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetTransitGatewayAttachmentPropagations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTransitGatewayAttachmentPropagations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTransitGatewayAttachmentPropagationsInput
  },
  output: {
    shape: GetTransitGatewayAttachmentPropagationsOutput
  },
  errors: []
};
