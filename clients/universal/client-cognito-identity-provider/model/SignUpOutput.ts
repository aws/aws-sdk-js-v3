import { _CodeDeliveryDetailsType } from "./_CodeDeliveryDetailsType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SignUpOutput: _Structure_ = {
  type: "structure",
  required: ["UserConfirmed", "UserSub"],
  members: {
    UserConfirmed: {
      shape: {
        type: "boolean"
      }
    },
    CodeDeliveryDetails: {
      shape: _CodeDeliveryDetailsType
    },
    UserSub: {
      shape: {
        type: "string"
      }
    }
  }
};
