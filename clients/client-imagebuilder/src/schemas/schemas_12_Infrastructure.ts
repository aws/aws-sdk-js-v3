// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import {
  _a,
  _aZ,
  _d,
  _dC,
  _dU,
  _hI,
  _hPRHL,
  _hRGA,
  _hT,
  _IC,
  _IMO,
  _iMO,
  _iPN,
  _iT,
  _kP,
  _L,
  _l,
  _n,
  _P,
  _pl,
  _rT,
  _sBN,
  _sGI,
  _sI,
  _sKP,
  _SL,
  _sL,
  _sTA,
  _ta,
  _te,
  _tIOF,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InfrastructureConfiguration = struct(
  n0,
  _IC,
  0,
  [_a, _n, _d, _iT, _iPN, _sGI, _sI, _l, _kP, _tIOF, _sTA, _dC, _dU, _rT, _iMO, _ta, _pl],
  [
    0,
    0,
    0,
    64 | 0,
    0,
    64 | 0,
    0,
    () => Logging,
    0,
    2,
    0,
    0,
    0,
    128 | 0,
    () => InstanceMetadataOptions,
    128 | 0,
    () => Placement,
  ]
);
export var InstanceMetadataOptions = struct(n0, _IMO, 0, [_hT, _hPRHL], [0, 1]);
export var Logging = struct(n0, _L, 0, [_sL], [() => S3Logs]);
export var Placement = struct(n0, _P, 0, [_aZ, _te, _hI, _hRGA], [0, 0, 0, 0]);
export var S3Logs = struct(n0, _SL, 0, [_sBN, _sKP], [0, 0]);
export var InstanceTypeList = 64 | 0;

export var SecurityGroupIds = 64 | 0;

export var ResourceTagMap = 128 | 0;
