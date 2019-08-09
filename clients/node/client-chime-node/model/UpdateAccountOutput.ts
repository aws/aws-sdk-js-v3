import { _Account } from "./_Account";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAccountOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Account: {
      shape: _Account
    }
  }
};
