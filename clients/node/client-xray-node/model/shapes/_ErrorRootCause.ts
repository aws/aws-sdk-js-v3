import { _ErrorRootCauseServices } from "./_ErrorRootCauseServices";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ErrorRootCause: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Services: {
      shape: _ErrorRootCauseServices
    }
  }
};
