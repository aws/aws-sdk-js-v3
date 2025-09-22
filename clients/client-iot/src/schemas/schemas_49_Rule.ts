// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ar, _h, _st, _UTRD, _UTRDR, _UTRDRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateTopicRuleDestinationRequest = struct(n0, _UTRDR, 0, [_ar, _st], [0, 0]);
export var UpdateTopicRuleDestinationResponse = struct(n0, _UTRDRp, 0, [], []);
export var UpdateTopicRuleDestination = op(
  n0,
  _UTRD,
  {
    [_h]: ["PATCH", "/destinations", 200],
  },
  () => UpdateTopicRuleDestinationRequest,
  () => UpdateTopicRuleDestinationResponse
);
