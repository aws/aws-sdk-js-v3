// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _DTC, _DTCR, _DTCRi, _en, _h, _TN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateTrackerConsumerRequest = struct(
  n0,
  _DTCR,
  0,
  [_TN, _CA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateTrackerConsumerResponse = struct(n0, _DTCRi, 0, [], []);
export var DisassociateTrackerConsumer = op(
  n0,
  _DTC,
  {
    [_h]: ["DELETE", "/tracking/v0/trackers/{TrackerName}/consumers/{ConsumerArn}", 200],
    [_en]: ["cp.tracking."],
  },
  () => DisassociateTrackerConsumerRequest,
  () => DisassociateTrackerConsumerResponse
);
