import { Structure as _Structure_ } from "@aws-sdk/types";

export const RejectTransitGatewayVpcAttachmentInput: _Structure_ = {
  type: "structure",
  required: ["TransitGatewayAttachmentId"],
  members: {
    TransitGatewayAttachmentId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
