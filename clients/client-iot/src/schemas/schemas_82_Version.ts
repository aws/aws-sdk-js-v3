// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { VersionsLimitExceededException as __VersionsLimitExceededException } from "../models/index";
import {
  _cDr,
  _cl,
  _er,
  _h,
  _hE,
  _iDV,
  _LPVi,
  _LPVRis,
  _LPVRist,
  _me,
  _pNo,
  _PV,
  _pV,
  _PVo,
  _vIe,
  _VLEE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListPolicyVersionsRequest = struct(n0, _LPVRis, 0, [_pNo], [[0, 1]]);
export var ListPolicyVersionsResponse = struct(n0, _LPVRist, 0, [_pV], [() => PolicyVersions]);
export var PolicyVersion = struct(n0, _PV, 0, [_vIe, _iDV, _cDr], [0, 2, 4]);
export var VersionsLimitExceededException = error(
  n0,
  _VLEE,
  {
    [_er]: _cl,
    [_hE]: 409,
  },
  [_me],
  [0],

  __VersionsLimitExceededException
);
export var PolicyVersions = list(n0, _PVo, 0, () => PolicyVersion);
export var ListPolicyVersions = op(
  n0,
  _LPVi,
  {
    [_h]: ["GET", "/policies/{policyName}/version", 200],
  },
  () => ListPolicyVersionsRequest,
  () => ListPolicyVersionsResponse
);
