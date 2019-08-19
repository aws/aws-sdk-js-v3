import { _Invitation } from "./_Invitation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMasterAccountOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Master: {
      shape: _Invitation
    }
  }
};
