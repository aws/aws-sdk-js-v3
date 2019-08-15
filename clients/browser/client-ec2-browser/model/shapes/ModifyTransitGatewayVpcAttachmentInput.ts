import { _ValueStringList } from "./_ValueStringList";
import { _ModifyTransitGatewayVpcAttachmentRequestOptions } from "./_ModifyTransitGatewayVpcAttachmentRequestOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyTransitGatewayVpcAttachmentInput: _Structure_ = {
  type: "structure",
  required: ["TransitGatewayAttachmentId"],
  members: {
    TransitGatewayAttachmentId: {
      shape: {
        type: "string"
      }
    },
    AddSubnetIds: {
      shape: _ValueStringList
    },
    RemoveSubnetIds: {
      shape: _ValueStringList
    },
    Options: {
      shape: _ModifyTransitGatewayVpcAttachmentRequestOptions
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
