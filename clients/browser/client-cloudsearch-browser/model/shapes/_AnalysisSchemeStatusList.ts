import { List as _List_ } from "@aws-sdk/types";
import { _AnalysisSchemeStatus } from "./_AnalysisSchemeStatus";

export const _AnalysisSchemeStatusList: _List_ = {
  type: "list",
  member: {
    shape: _AnalysisSchemeStatus
  }
};
