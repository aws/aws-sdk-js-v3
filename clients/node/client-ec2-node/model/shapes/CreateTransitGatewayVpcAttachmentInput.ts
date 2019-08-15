import { _ValueStringList } from "./_ValueStringList";
import { _CreateTransitGatewayVpcAttachmentRequestOptions } from "./_CreateTransitGatewayVpcAttachmentRequestOptions";
import { _TagSpecificationList } from "./_TagSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTransitGatewayVpcAttachmentInput: _Structure_ = {
  type: "structure",
  required: ["TransitGatewayId", "VpcId", "SubnetIds"],
  members: {
    TransitGatewayId: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    SubnetIds: {
      shape: _ValueStringList
    },
    Options: {
      shape: _CreateTransitGatewayVpcAttachmentRequestOptions
    },
    TagSpecifications: {
      shape: _TagSpecificationList
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
