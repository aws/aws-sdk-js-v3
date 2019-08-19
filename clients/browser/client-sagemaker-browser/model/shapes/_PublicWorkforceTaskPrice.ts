import { _USD } from "./_USD";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PublicWorkforceTaskPrice: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AmountInUsd: {
      shape: _USD
    }
  }
};
