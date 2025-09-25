// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CQ,
  _CQR,
  _CQRr,
  _D,
  _DEAe,
  _DEAR,
  _DEARe,
  _DQe,
  _DQRe,
  _DQRes,
  _EAI,
  _h,
  _HOOI,
  _II,
  _LMR,
  _LMT,
  _MCa,
  _N,
  _OCC,
  _OEAI,
  _OEC,
  _Q,
  _QA,
  _QCI,
  _QI,
  _St,
  _Ta,
  _UQOEC,
  _UQOECR,
  n0,
  Unit,
} from "./schemas_0";
import { OutboundCallerConfig } from "./schemas_111_Queue";

/* eslint no-var: 0 */

export var CreateQueueRequest = struct(
  n0,
  _CQR,
  0,
  [_II, _N, _D, _OCC, _OEC, _HOOI, _MCa, _QCI, _Ta],
  [[0, 1], 0, 0, () => OutboundCallerConfig, () => OutboundEmailConfig, 0, 1, 64 | 0, 128 | 0]
);
export var CreateQueueResponse = struct(n0, _CQRr, 0, [_QA, _QI], [0, 0]);
export var DeleteEmailAddressRequest = struct(
  n0,
  _DEAR,
  0,
  [_II, _EAI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteEmailAddressResponse = struct(n0, _DEARe, 0, [], []);
export var DescribeQueueRequest = struct(
  n0,
  _DQRe,
  0,
  [_II, _QI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeQueueResponse = struct(n0, _DQRes, 0, [_Q], [() => Queue]);
export var OutboundEmailConfig = struct(n0, _OEC, 0, [_OEAI], [0]);
export var Queue = struct(
  n0,
  _Q,
  0,
  [_N, _QA, _QI, _D, _OCC, _OEC, _HOOI, _MCa, _St, _Ta, _LMT, _LMR],
  [0, 0, 0, 0, () => OutboundCallerConfig, () => OutboundEmailConfig, 0, 1, 0, 128 | 0, 4, 0]
);
export var UpdateQueueOutboundEmailConfigRequest = struct(
  n0,
  _UQOECR,
  0,
  [_II, _QI, _OEC],
  [[0, 1], [0, 1], () => OutboundEmailConfig]
);
export var CreateQueue = op(
  n0,
  _CQ,
  {
    [_h]: ["PUT", "/queues/{InstanceId}", 200],
  },
  () => CreateQueueRequest,
  () => CreateQueueResponse
);
export var DeleteEmailAddress = op(
  n0,
  _DEAe,
  {
    [_h]: ["DELETE", "/email-addresses/{InstanceId}/{EmailAddressId}", 200],
  },
  () => DeleteEmailAddressRequest,
  () => DeleteEmailAddressResponse
);
export var DescribeQueue = op(
  n0,
  _DQe,
  {
    [_h]: ["GET", "/queues/{InstanceId}/{QueueId}", 200],
  },
  () => DescribeQueueRequest,
  () => DescribeQueueResponse
);
export var UpdateQueueOutboundEmailConfig = op(
  n0,
  _UQOEC,
  {
    [_h]: ["POST", "/queues/{InstanceId}/{QueueId}/outbound-email-config", 200],
  },
  () => UpdateQueueOutboundEmailConfigRequest,
  () => Unit
);
