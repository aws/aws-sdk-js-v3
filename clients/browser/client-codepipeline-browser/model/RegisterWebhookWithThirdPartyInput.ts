import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterWebhookWithThirdPartyInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    webhookName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
