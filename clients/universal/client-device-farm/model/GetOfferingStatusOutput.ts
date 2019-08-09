import { _OfferingStatusMap } from "./_OfferingStatusMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetOfferingStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    current: {
      shape: _OfferingStatusMap
    },
    nextPeriod: {
      shape: _OfferingStatusMap
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
