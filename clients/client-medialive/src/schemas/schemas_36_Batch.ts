// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _BDa,
  _BDR,
  _BDRa,
  _BFRM,
  _BSa,
  _BSat,
  _BSR,
  _BSRa,
  _BSRat,
  _BSRatc,
  _BSRM,
  _C,
  _CIh,
  _cIh,
  _co,
  _F,
  _f,
  _ht,
  _I,
  _i,
  _II,
  _iI,
  _ISGI,
  _iSGI,
  _jN,
  _lOBFRM,
  _lOBSRM,
  _M,
  _m,
  _MI,
  _mI,
  _St,
  _st,
  _Su,
  _su,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDeleteRequest = struct(
  n0,
  _BDR,
  0,
  [_CIh, _II, _ISGI, _MI],
  [
    [
      64 | 0,
      {
        [_jN]: _cIh,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _iI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _iSGI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _mI,
      },
    ],
  ]
);
export var BatchDeleteResponse = struct(
  n0,
  _BDRa,
  0,
  [_F, _Su],
  [
    [
      () => __listOfBatchFailedResultModel,
      {
        [_jN]: _f,
      },
    ],
    [
      () => __listOfBatchSuccessfulResultModel,
      {
        [_jN]: _su,
      },
    ],
  ]
);
export var BatchFailedResultModel = struct(
  n0,
  _BFRM,
  0,
  [_Ar, _C, _I, _M],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _co,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ]
);
export var BatchStartRequest = struct(
  n0,
  _BSR,
  0,
  [_CIh, _MI],
  [
    [
      64 | 0,
      {
        [_jN]: _cIh,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _mI,
      },
    ],
  ]
);
export var BatchStartResponse = struct(
  n0,
  _BSRa,
  0,
  [_F, _Su],
  [
    [
      () => __listOfBatchFailedResultModel,
      {
        [_jN]: _f,
      },
    ],
    [
      () => __listOfBatchSuccessfulResultModel,
      {
        [_jN]: _su,
      },
    ],
  ]
);
export var BatchStopRequest = struct(
  n0,
  _BSRat,
  0,
  [_CIh, _MI],
  [
    [
      64 | 0,
      {
        [_jN]: _cIh,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _mI,
      },
    ],
  ]
);
export var BatchStopResponse = struct(
  n0,
  _BSRatc,
  0,
  [_F, _Su],
  [
    [
      () => __listOfBatchFailedResultModel,
      {
        [_jN]: _f,
      },
    ],
    [
      () => __listOfBatchSuccessfulResultModel,
      {
        [_jN]: _su,
      },
    ],
  ]
);
export var BatchSuccessfulResultModel = struct(
  n0,
  _BSRM,
  0,
  [_Ar, _I, _St],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var __listOfBatchFailedResultModel = list(n0, _lOBFRM, 0, [() => BatchFailedResultModel, 0]);
export var __listOfBatchSuccessfulResultModel = list(n0, _lOBSRM, 0, [() => BatchSuccessfulResultModel, 0]);
export var BatchDelete = op(
  n0,
  _BDa,
  {
    [_ht]: ["POST", "/prod/batch/delete", 200],
  },
  () => BatchDeleteRequest,
  () => BatchDeleteResponse
);
export var BatchStart = op(
  n0,
  _BSa,
  {
    [_ht]: ["POST", "/prod/batch/start", 200],
  },
  () => BatchStartRequest,
  () => BatchStartResponse
);
export var BatchStop = op(
  n0,
  _BSat,
  {
    [_ht]: ["POST", "/prod/batch/stop", 200],
  },
  () => BatchStopRequest,
  () => BatchStopResponse
);
