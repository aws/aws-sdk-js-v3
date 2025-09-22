// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ar, _DTRD, _DTRDR, _DTRDRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTopicRuleDestinationRequest = struct(n0, _DTRDR, 0, [_ar], [[0, 1]]);
export var DeleteTopicRuleDestinationResponse = struct(n0, _DTRDRe, 0, [], []);
export var DeleteTopicRuleDestination = op(
  n0,
  _DTRD,
  {
    [_h]: ["DELETE", "/destinations/{arn+}", 200],
  },
  () => DeleteTopicRuleDestinationRequest,
  () => DeleteTopicRuleDestinationResponse
);
