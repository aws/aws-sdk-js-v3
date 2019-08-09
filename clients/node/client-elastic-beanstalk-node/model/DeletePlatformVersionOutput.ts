import { _PlatformSummary } from "./_PlatformSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeletePlatformVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlatformSummary: {
      shape: _PlatformSummary
    }
  }
};
