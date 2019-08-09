import { _Webhook } from "./_Webhook";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateWebhookOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    webhook: {
      shape: _Webhook
    }
  }
};
