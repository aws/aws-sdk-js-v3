import { ___listOfOutputDetail } from "./___listOfOutputDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputGroupDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OutputDetails: {
      shape: ___listOfOutputDetail,
      locationName: "outputDetails"
    }
  }
};
