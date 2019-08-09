import { _FaultRootCauseServices } from "./_FaultRootCauseServices";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FaultRootCause: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Services: {
      shape: _FaultRootCauseServices
    }
  }
};
