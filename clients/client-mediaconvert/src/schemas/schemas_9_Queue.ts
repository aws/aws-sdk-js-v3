// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _CA,
  _cA,
  _CJ,
  _cJ,
  _Com,
  _com,
  _Des,
  _des,
  _EA,
  _eA,
  _GQ,
  _GQR,
  _GQRe,
  _ht,
  _jN,
  _lOSO,
  _LU,
  _lU,
  _Me,
  _me,
  _N,
  _n,
  _OV,
  _oV,
  _PA,
  _pA,
  _PJC,
  _pJC,
  _PP,
  _pP,
  _Q,
  _q,
  _RPe,
  _rPe,
  _RPS,
  _rPS,
  _RSe,
  _rSe,
  _RTe,
  _rTe,
  _SJC,
  _sJC,
  _SOer,
  _sOer,
  _SOerv,
  _Sta,
  _sta,
  _Ty,
  _ty,
  _UQ,
  _UQR,
  _UQRp,
  _Va,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetQueueRequest = struct(n0, _GQR, 0, [_N], [[0, 1]]);
export var GetQueueResponse = struct(
  n0,
  _GQRe,
  0,
  [_Q],
  [
    [
      () => Queue,
      {
        [_jN]: _q,
      },
    ],
  ]
);
export var Queue = struct(
  n0,
  _Q,
  0,
  [_A, _CJ, _CA, _Des, _LU, _N, _PP, _PJC, _RPe, _SOer, _Sta, _SJC, _Ty],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      1,
      {
        [_jN]: _cJ,
      },
    ],
    [
      7,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _des,
      },
    ],
    [
      7,
      {
        [_jN]: _lU,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _pP,
      },
    ],
    [
      1,
      {
        [_jN]: _pJC,
      },
    ],
    [
      () => ReservationPlan,
      {
        [_jN]: _rPe,
      },
    ],
    [
      () => __listOfServiceOverride,
      {
        [_jN]: _sOer,
      },
    ],
    [
      0,
      {
        [_jN]: _sta,
      },
    ],
    [
      1,
      {
        [_jN]: _sJC,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
  ]
);
export var ReservationPlan = struct(
  n0,
  _RPe,
  0,
  [_Com, _EA, _PA, _RTe, _RSe, _Sta],
  [
    [
      0,
      {
        [_jN]: _com,
      },
    ],
    [
      7,
      {
        [_jN]: _eA,
      },
    ],
    [
      7,
      {
        [_jN]: _pA,
      },
    ],
    [
      0,
      {
        [_jN]: _rTe,
      },
    ],
    [
      1,
      {
        [_jN]: _rSe,
      },
    ],
    [
      0,
      {
        [_jN]: _sta,
      },
    ],
  ]
);
export var ReservationPlanSettings = struct(
  n0,
  _RPS,
  0,
  [_Com, _RTe, _RSe],
  [
    [
      0,
      {
        [_jN]: _com,
      },
    ],
    [
      0,
      {
        [_jN]: _rTe,
      },
    ],
    [
      1,
      {
        [_jN]: _rSe,
      },
    ],
  ]
);
export var ServiceOverride = struct(
  n0,
  _SOerv,
  0,
  [_Me, _N, _OV, _Va],
  [
    [
      0,
      {
        [_jN]: _me,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _oV,
      },
    ],
    [
      0,
      {
        [_jN]: _va,
      },
    ],
  ]
);
export var UpdateQueueRequest = struct(
  n0,
  _UQR,
  0,
  [_CJ, _Des, _N, _RPS, _Sta],
  [
    [
      1,
      {
        [_jN]: _cJ,
      },
    ],
    [
      0,
      {
        [_jN]: _des,
      },
    ],
    [0, 1],
    [
      () => ReservationPlanSettings,
      {
        [_jN]: _rPS,
      },
    ],
    [
      0,
      {
        [_jN]: _sta,
      },
    ],
  ]
);
export var UpdateQueueResponse = struct(
  n0,
  _UQRp,
  0,
  [_Q],
  [
    [
      () => Queue,
      {
        [_jN]: _q,
      },
    ],
  ]
);
export var __listOfServiceOverride = list(n0, _lOSO, 0, [() => ServiceOverride, 0]);
export var GetQueue = op(
  n0,
  _GQ,
  {
    [_ht]: ["GET", "/2017-08-29/queues/{Name}", 200],
  },
  () => GetQueueRequest,
  () => GetQueueResponse
);
export var UpdateQueue = op(
  n0,
  _UQ,
  {
    [_ht]: ["PUT", "/2017-08-29/queues/{Name}", 200],
  },
  () => UpdateQueueRequest,
  () => UpdateQueueResponse
);
