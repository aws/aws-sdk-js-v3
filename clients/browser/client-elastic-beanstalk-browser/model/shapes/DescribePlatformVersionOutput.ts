import { _PlatformDescription } from "./_PlatformDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePlatformVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlatformDescription: {
      shape: _PlatformDescription
    }
  }
};
