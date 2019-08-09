import { _ResponseTimeRootCauseServices } from "./_ResponseTimeRootCauseServices";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResponseTimeRootCause: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Services: {
      shape: _ResponseTimeRootCauseServices
    }
  }
};
