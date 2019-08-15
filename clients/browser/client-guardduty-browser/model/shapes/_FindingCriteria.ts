import { _Criterion } from "./_Criterion";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FindingCriteria: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Criterion: {
      shape: _Criterion,
      locationName: "criterion"
    }
  }
};
