import { _SuccessfulShares } from "./_SuccessfulShares";
import { _ShareErrors } from "./_ShareErrors";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ShareDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SuccessfulShares: {
      shape: _SuccessfulShares
    },
    ShareErrors: {
      shape: _ShareErrors
    }
  }
};
