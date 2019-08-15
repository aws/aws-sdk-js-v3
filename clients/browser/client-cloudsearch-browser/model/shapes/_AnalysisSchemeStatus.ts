import { _AnalysisScheme } from "./_AnalysisScheme";
import { _OptionStatus } from "./_OptionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AnalysisSchemeStatus: _Structure_ = {
  type: "structure",
  required: ["Options", "Status"],
  members: {
    Options: {
      shape: _AnalysisScheme
    },
    Status: {
      shape: _OptionStatus
    }
  }
};
