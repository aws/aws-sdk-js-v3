import { List as _List_ } from "@aws-sdk/types";
import { _OTAUpdateSummary } from "./_OTAUpdateSummary";

export const _OTAUpdatesSummary: _List_ = {
  type: "list",
  member: {
    shape: _OTAUpdateSummary
  }
};
