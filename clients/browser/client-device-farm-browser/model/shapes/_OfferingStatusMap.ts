import { Map as _Map_ } from "@aws-sdk/types";
import { _OfferingStatus } from "./_OfferingStatus";

export const _OfferingStatusMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 32
    }
  },
  value: {
    shape: _OfferingStatus
  }
};
