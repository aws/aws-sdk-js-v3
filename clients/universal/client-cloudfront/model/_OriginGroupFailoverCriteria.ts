import { _StatusCodes } from "./_StatusCodes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OriginGroupFailoverCriteria: _Structure_ = {
  type: "structure",
  required: ["StatusCodes"],
  members: {
    StatusCodes: {
      shape: _StatusCodes
    }
  }
};
