import { _PlatformSummary } from "./_PlatformSummary";
import { _Builder } from "./_Builder";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePlatformVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlatformSummary: {
      shape: _PlatformSummary
    },
    Builder: {
      shape: _Builder
    }
  }
};
