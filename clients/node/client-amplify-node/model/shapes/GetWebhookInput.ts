import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetWebhookInput: _Structure_ = {
  type: "structure",
  required: ["webhookId"],
  members: {
    webhookId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "webhookId"
    }
  }
};
