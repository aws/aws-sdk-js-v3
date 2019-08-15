import { List as _List_ } from "@aws-sdk/types";
import { _ThreatIntelIndicator } from "./_ThreatIntelIndicator";

export const _ThreatIntelIndicatorList: _List_ = {
  type: "list",
  member: {
    shape: _ThreatIntelIndicator
  }
};
