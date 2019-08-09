import { _InternetGatewayAttachmentList } from "./_InternetGatewayAttachmentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EgressOnlyInternetGateway: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attachments: {
      shape: _InternetGatewayAttachmentList,
      locationName: "attachmentSet"
    },
    EgressOnlyInternetGatewayId: {
      shape: {
        type: "string"
      },
      locationName: "egressOnlyInternetGatewayId"
    }
  }
};
