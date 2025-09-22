// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { WAFUnsupportedAggregateKeyTypeException as __WAFUnsupportedAggregateKeyTypeException } from "../models/index";
import {
  _Ad,
  _ARN,
  _c,
  _D,
  _e,
  _GIPS,
  _GIPSR,
  _GIPSRe,
  _GRBSMK,
  _GRBSMKR,
  _GRBSMKRe,
  _Id,
  _IPAV,
  _IPS,
  _LT,
  _Me,
  _MKIPV,
  _MKIPVa,
  _N,
  _RBSMKIPS,
  _RGRN,
  _RN,
  _Sc,
  _WACLI,
  _WACLN,
  _WAFUAKTE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetIPSetRequest = struct(n0, _GIPSR, 0, [_N, _Sc, _Id], [0, 0, 0]);
export var GetIPSetResponse = struct(n0, _GIPSRe, 0, [_IPS, _LT], [() => IPSet, 0]);
export var GetRateBasedStatementManagedKeysRequest = struct(
  n0,
  _GRBSMKR,
  0,
  [_Sc, _WACLN, _WACLI, _RGRN, _RN],
  [0, 0, 0, 0, 0]
);
export var GetRateBasedStatementManagedKeysResponse = struct(
  n0,
  _GRBSMKRe,
  0,
  [_MKIPV, _MKIPVa],
  [() => RateBasedStatementManagedKeysIPSet, () => RateBasedStatementManagedKeysIPSet]
);
export var IPSet = struct(n0, _IPS, 0, [_N, _Id, _ARN, _D, _IPAV, _Ad], [0, 0, 0, 0, 0, 64 | 0]);
export var RateBasedStatementManagedKeysIPSet = struct(n0, _RBSMKIPS, 0, [_IPAV, _Ad], [0, 64 | 0]);
export var WAFUnsupportedAggregateKeyTypeException = error(
  n0,
  _WAFUAKTE,
  {
    [_e]: _c,
  },
  [_Me],
  [0],

  __WAFUnsupportedAggregateKeyTypeException
);
export var IPAddresses = 64 | 0;

export var GetIPSet = op(
  n0,
  _GIPS,
  0,
  () => GetIPSetRequest,
  () => GetIPSetResponse
);
export var GetRateBasedStatementManagedKeys = op(
  n0,
  _GRBSMK,
  0,
  () => GetRateBasedStatementManagedKeysRequest,
  () => GetRateBasedStatementManagedKeysResponse
);
