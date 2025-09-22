// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _II, _OCC, _OCIN, _OCINI, _OFI, _QI, _UQOCC, _UQOCCR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var OutboundCallerConfig = struct(n0, _OCC, 0, [_OCIN, _OCINI, _OFI], [0, 0, 0]);
export var UpdateQueueOutboundCallerConfigRequest = struct(
  n0,
  _UQOCCR,
  0,
  [_II, _QI, _OCC],
  [[0, 1], [0, 1], () => OutboundCallerConfig]
);
export var UpdateQueueOutboundCallerConfig = op(
  n0,
  _UQOCC,
  {
    [_h]: ["POST", "/queues/{InstanceId}/{QueueId}/outbound-caller-config", 200],
  },
  () => UpdateQueueOutboundCallerConfigRequest,
  () => Unit
);
