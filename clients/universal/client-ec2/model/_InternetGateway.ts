import { _InternetGatewayAttachmentList } from "./_InternetGatewayAttachmentList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InternetGateway: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attachments: {
      shape: _InternetGatewayAttachmentList,
      locationName: "attachmentSet"
    },
    InternetGatewayId: {
      shape: {
        type: "string"
      },
      locationName: "internetGatewayId"
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
