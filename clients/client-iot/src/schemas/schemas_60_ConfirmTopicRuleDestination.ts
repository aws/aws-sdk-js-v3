// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cTon, _CTRD, _CTRDR, _CTRDRo, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConfirmTopicRuleDestinationRequest = struct(n0, _CTRDR, 0, [_cTon], [[0, 1]]);
export var ConfirmTopicRuleDestinationResponse = struct(n0, _CTRDRo, 0, [], []);
export var ConfirmTopicRuleDestination = op(
  n0,
  _CTRD,
  {
    [_h]: ["GET", "/confirmdestination/{confirmationToken+}", 200],
  },
  () => ConfirmTopicRuleDestinationRequest,
  () => ConfirmTopicRuleDestinationResponse
);
