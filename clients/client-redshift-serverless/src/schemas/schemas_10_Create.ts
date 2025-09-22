// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _a,
  _bA,
  _c,
  _ca,
  _CR,
  _CRR,
  _CRRr,
  _CSCC,
  _CSCCR,
  _CSCCRr,
  _cT,
  _CUL,
  _CULR,
  _CULRr,
  _dKKI,
  _dR,
  _e,
  _hE,
  _m,
  _nN,
  _oI,
  _p,
  _pol,
  _PRP,
  _PRPR,
  _PRPRu,
  _r,
  _rAe,
  _rPes,
  _sCC,
  _SQEE,
  _sRP,
  _uL,
  _uT,
  n0,
} from "./schemas_0";
import { SnapshotCopyConfiguration } from "./schemas_7_Snapshot";
import { UsageLimit } from "./schemas_9_Usage";
import { Reservation } from "./schemas_12_Reservation";
import { ResourcePolicy } from "./schemas_13_Policy";

/* eslint no-var: 0 */

export var CreateReservationRequest = struct(n0, _CRR, 0, [_ca, _oI, _cT], [1, 0, [0, 4]]);
export var CreateReservationResponse = struct(n0, _CRRr, 0, [_r], [() => Reservation]);
export var CreateSnapshotCopyConfigurationRequest = struct(n0, _CSCCR, 0, [_nN, _dR, _sRP, _dKKI], [0, 0, 1, 0]);
export var CreateSnapshotCopyConfigurationResponse = struct(n0, _CSCCRr, 0, [_sCC], [() => SnapshotCopyConfiguration]);
export var CreateUsageLimitRequest = struct(n0, _CULR, 0, [_rAe, _uT, _a, _p, _bA], [0, 0, 1, 0, 0]);
export var CreateUsageLimitResponse = struct(n0, _CULRr, 0, [_uL], [() => UsageLimit]);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_rAe, _pol], [0, 0]);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [_rPes], [() => ResourcePolicy]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var CreateReservation = op(
  n0,
  _CR,
  2,
  () => CreateReservationRequest,
  () => CreateReservationResponse
);
export var CreateSnapshotCopyConfiguration = op(
  n0,
  _CSCC,
  2,
  () => CreateSnapshotCopyConfigurationRequest,
  () => CreateSnapshotCopyConfigurationResponse
);
export var CreateUsageLimit = op(
  n0,
  _CUL,
  2,
  () => CreateUsageLimitRequest,
  () => CreateUsageLimitResponse
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  0,
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
