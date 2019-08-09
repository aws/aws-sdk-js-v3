import { _Attributes } from "./_Attributes";
import { _Coverage } from "./_Coverage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservationCoverageGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attributes: {
      shape: _Attributes
    },
    Coverage: {
      shape: _Coverage
    }
  }
};
