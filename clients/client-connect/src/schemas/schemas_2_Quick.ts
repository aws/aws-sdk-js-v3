// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CQC,
  _CQCR,
  _CQCRr,
  _D,
  _DQCe,
  _DQCRe,
  _DQCRes,
  _h,
  _hQ,
  _I,
  _II,
  _LMR,
  _LMT,
  _LQC,
  _LQCR,
  _LQCRi,
  _LQQC,
  _LQQCR,
  _LQQCRi,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  _QCARN,
  _QCC,
  _QCIu,
  _QCS,
  _QCSL,
  _QCT,
  _QCTu,
  _QCu,
  _QI,
  _Ta,
  _UQCN,
  _UQCNR,
  n0,
  Unit,
} from "./schemas_0";
import { QuickConnectConfig } from "./schemas_77_Quick";

/* eslint no-var: 0 */

export var CreateQuickConnectRequest = struct(
  n0,
  _CQCR,
  0,
  [_II, _N, _D, _QCC, _Ta],
  [[0, 1], 0, 0, () => QuickConnectConfig, 128 | 0]
);
export var CreateQuickConnectResponse = struct(n0, _CQCRr, 0, [_QCARN, _QCIu], [0, 0]);
export var DescribeQuickConnectRequest = struct(
  n0,
  _DQCRe,
  0,
  [_II, _QCIu],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeQuickConnectResponse = struct(n0, _DQCRes, 0, [_QCu], [() => QuickConnect]);
export var ListQueueQuickConnectsRequest = struct(
  n0,
  _LQQCR,
  0,
  [_II, _QI, _NT, _MRa],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListQueueQuickConnectsResponse = struct(
  n0,
  _LQQCRi,
  0,
  [_NT, _QCSL, _LMT, _LMR],
  [0, () => QuickConnectSummaryList, 4, 0]
);
export var ListQuickConnectsRequest = struct(
  n0,
  _LQCR,
  0,
  [_II, _NT, _MRa, _QCT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _QCT,
      },
    ],
  ]
);
export var ListQuickConnectsResponse = struct(n0, _LQCRi, 0, [_QCSL, _NT], [() => QuickConnectSummaryList, 0]);
export var QuickConnect = struct(
  n0,
  _QCu,
  0,
  [_QCARN, _QCIu, _N, _D, _QCC, _Ta, _LMT, _LMR],
  [0, 0, 0, 0, () => QuickConnectConfig, 128 | 0, 4, 0]
);
export var QuickConnectSummary = struct(n0, _QCS, 0, [_I, _A, _N, _QCTu, _LMT, _LMR], [0, 0, 0, 0, 4, 0]);
export var UpdateQuickConnectNameRequest = struct(n0, _UQCNR, 0, [_II, _QCIu, _N, _D], [[0, 1], [0, 1], 0, 0]);
export var QuickConnectSummaryList = list(n0, _QCSL, 0, () => QuickConnectSummary);
export var QuickConnectTypes = 64 | 0;

export var CreateQuickConnect = op(
  n0,
  _CQC,
  {
    [_h]: ["PUT", "/quick-connects/{InstanceId}", 200],
  },
  () => CreateQuickConnectRequest,
  () => CreateQuickConnectResponse
);
export var DescribeQuickConnect = op(
  n0,
  _DQCe,
  {
    [_h]: ["GET", "/quick-connects/{InstanceId}/{QuickConnectId}", 200],
  },
  () => DescribeQuickConnectRequest,
  () => DescribeQuickConnectResponse
);
export var ListQueueQuickConnects = op(
  n0,
  _LQQC,
  {
    [_h]: ["GET", "/queues/{InstanceId}/{QueueId}/quick-connects", 200],
  },
  () => ListQueueQuickConnectsRequest,
  () => ListQueueQuickConnectsResponse
);
export var ListQuickConnects = op(
  n0,
  _LQC,
  {
    [_h]: ["GET", "/quick-connects/{InstanceId}", 200],
  },
  () => ListQuickConnectsRequest,
  () => ListQuickConnectsResponse
);
export var UpdateQuickConnectName = op(
  n0,
  _UQCN,
  {
    [_h]: ["POST", "/quick-connects/{InstanceId}/{QuickConnectId}/name", 200],
  },
  () => UpdateQuickConnectNameRequest,
  () => Unit
);
