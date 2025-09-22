// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTE, _DTEI, _DTEO, _eI, _h, _iRA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTimelineEventInput = struct(n0, _DTEI, 0, [_iRA, _eI], [0, 0]);
export var DeleteTimelineEventOutput = struct(n0, _DTEO, 0, [], []);
export var DeleteTimelineEvent = op(
  n0,
  _DTE,
  {
    [_h]: ["POST", "/deleteTimelineEvent", 204],
  },
  () => DeleteTimelineEventInput,
  () => DeleteTimelineEventOutput
);
