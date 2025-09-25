// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DN,
  _GUH,
  _GUHR,
  _GUHRe,
  _h,
  _hQ,
  _Is,
  _MR,
  _mR,
  _NT,
  _nT,
  _PPr,
  _SL,
  _STta,
  _UH,
  _UHL,
  _UHp,
  _UN,
  _US,
  _USI,
  _USL,
  _USpg,
  _USS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetUpgradeHistoryRequest = struct(
  n0,
  _GUHR,
  0,
  [_DN, _MR, _NT],
  [
    [0, 1],
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
  ]
);
export var GetUpgradeHistoryResponse = struct(n0, _GUHRe, 0, [_UH, _NT], [() => UpgradeHistoryList, 0]);
export var UpgradeHistory = struct(n0, _UHp, 0, [_UN, _STta, _USpg, _SL], [0, 4, 0, () => UpgradeStepsList]);
export var UpgradeStepItem = struct(n0, _USI, 0, [_US, _USS, _Is, _PPr], [0, 0, 64 | 0, 1]);
export var Issues = 64 | 0;

export var UpgradeHistoryList = list(n0, _UHL, 0, () => UpgradeHistory);
export var UpgradeStepsList = list(n0, _USL, 0, () => UpgradeStepItem);
export var GetUpgradeHistory = op(
  n0,
  _GUH,
  {
    [_h]: ["GET", "/2015-01-01/es/upgradeDomain/{DomainName}/history", 200],
  },
  () => GetUpgradeHistoryRequest,
  () => GetUpgradeHistoryResponse
);
