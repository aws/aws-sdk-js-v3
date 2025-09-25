// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _hQ,
  _ht,
  _I,
  _i,
  _iDT,
  _IDTn,
  _jN,
  _LIDT,
  _LIDTR,
  _LIDTRi,
  _lOTIDS,
  _M,
  _m,
  _MR,
  _mR,
  _NT,
  _nT,
  _TCI,
  _tCI,
  _TIDS,
  _TTr,
  _tTr,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListInputDeviceTransfersRequest = struct(
  n0,
  _LIDTR,
  0,
  [_MR, _NT, _TTr],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _tTr,
      },
    ],
  ]
);
export var ListInputDeviceTransfersResponse = struct(
  n0,
  _LIDTRi,
  0,
  [_IDTn, _NT],
  [
    [
      () => __listOfTransferringInputDeviceSummary,
      {
        [_jN]: _iDT,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var TransferringInputDeviceSummary = struct(
  n0,
  _TIDS,
  0,
  [_I, _M, _TCI, _TTr],
  [
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
    [
      0,
      {
        [_jN]: _tCI,
      },
    ],
    [
      0,
      {
        [_jN]: _tTr,
      },
    ],
  ]
);
export var __listOfTransferringInputDeviceSummary = list(n0, _lOTIDS, 0, [() => TransferringInputDeviceSummary, 0]);
export var ListInputDeviceTransfers = op(
  n0,
  _LIDT,
  {
    [_ht]: ["GET", "/prod/inputDeviceTransfers", 200],
  },
  () => ListInputDeviceTransfersRequest,
  () => ListInputDeviceTransfersResponse
);
