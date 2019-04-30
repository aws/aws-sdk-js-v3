import { _NumberValidateRequest } from "./_NumberValidateRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PhoneNumberValidateInput: _Structure_ = {
  type: "structure",
  required: ["NumberValidateRequest"],
  members: {
    NumberValidateRequest: {
      shape: _NumberValidateRequest
    }
  },
  payload: "NumberValidateRequest"
};
