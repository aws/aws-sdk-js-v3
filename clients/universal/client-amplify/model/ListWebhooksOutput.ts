import { _Webhooks } from "./_Webhooks";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListWebhooksOutput: _Structure_ = {
  type: "structure",
  required: ["webhooks"],
  members: {
    webhooks: {
      shape: _Webhooks
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
