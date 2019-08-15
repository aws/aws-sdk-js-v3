import { _ObjectLockLegalHold } from "./_ObjectLockLegalHold";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetObjectLegalHoldOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LegalHold: {
      shape: _ObjectLockLegalHold
    }
  },
  payload: "LegalHold"
};
