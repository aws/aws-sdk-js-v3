import { _RecipientDsnFields } from "./_RecipientDsnFields";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BouncedRecipientInfo: _Structure_ = {
  type: "structure",
  required: ["Recipient"],
  members: {
    Recipient: {
      shape: {
        type: "string"
      }
    },
    RecipientArn: {
      shape: {
        type: "string"
      }
    },
    BounceType: {
      shape: {
        type: "string"
      }
    },
    RecipientDsnFields: {
      shape: _RecipientDsnFields
    }
  }
};
