import { _CheckerIpRanges } from "./_CheckerIpRanges";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCheckerIpRangesOutput: _Structure_ = {
  type: "structure",
  required: ["CheckerIpRanges"],
  members: {
    CheckerIpRanges: {
      shape: _CheckerIpRanges
    }
  }
};
