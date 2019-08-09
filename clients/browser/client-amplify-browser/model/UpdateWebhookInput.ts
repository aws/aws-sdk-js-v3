import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateWebhookInput: _Structure_ = {
  type: "structure",
  required: ["webhookId"],
  members: {
    webhookId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "webhookId"
    },
    branchName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string"
      }
    }
  }
};
