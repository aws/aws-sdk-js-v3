import { _CodeDeliveryDetailsType } from "./_CodeDeliveryDetailsType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUserAttributeVerificationCodeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CodeDeliveryDetails: {
      shape: _CodeDeliveryDetailsType
    }
  }
};
