import { _Webhook } from "./_Webhook";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetWebhookOutput: _Structure_ = {
  type: "structure",
  required: ["webhook"],
  members: {
    webhook: {
      shape: _Webhook
    }
  }
};
