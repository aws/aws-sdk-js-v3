import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkmailAction: _Structure_ = {
  type: "structure",
  required: ["OrganizationArn"],
  members: {
    TopicArn: {
      shape: {
        type: "string"
      }
    },
    OrganizationArn: {
      shape: {
        type: "string"
      }
    }
  }
};
