import { _CodeDeliveryDetailsListType } from "./_CodeDeliveryDetailsListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUserAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CodeDeliveryDetailsList: {
      shape: _CodeDeliveryDetailsListType
    }
  }
};
