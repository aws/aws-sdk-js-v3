import { _TransitGatewayAttachmentPropagationList } from "./_TransitGatewayAttachmentPropagationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTransitGatewayAttachmentPropagationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGatewayAttachmentPropagations: {
      shape: _TransitGatewayAttachmentPropagationList,
      locationName: "transitGatewayAttachmentPropagations"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
