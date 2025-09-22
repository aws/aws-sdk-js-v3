// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _aA,
  _aR,
  _aRl,
  _c,
  _CAP,
  _CAPR,
  _CAPRr,
  _CE,
  _co,
  _cTA,
  _CTD,
  _cTD,
  _cTl,
  _e,
  _eT,
  _h,
  _hE,
  _i,
  _jI,
  _m,
  _pA,
  _PGD,
  _pGD,
  _reg,
  _rI,
  _rT,
  _SPG,
  _SPGR,
  _SPGRt,
  _SQEE,
  _sT,
  _T,
  _TLr,
  _tr,
  n0,
} from "./schemas_0";
import { ConfigurationsMap } from "./schemas_4_Access";

/* eslint no-var: 0 */

export var CloudTrailDetails = struct(n0, _CTD, 0, [_tr, _aR, _sT, _eT], [() => TrailList, 0, 5, 5]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ConflictException
);
export var CreateAccessPreviewRequest = struct(n0, _CAPR, 0, [_aA, _co, _cTl], [0, () => ConfigurationsMap, [0, 4]]);
export var CreateAccessPreviewResponse = struct(n0, _CAPRr, 0, [_i], [0]);
export var PolicyGenerationDetails = struct(n0, _PGD, 0, [_pA], [0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ServiceQuotaExceededException
);
export var StartPolicyGenerationRequest = struct(
  n0,
  _SPGR,
  0,
  [_pGD, _cTD, _cTl],
  [() => PolicyGenerationDetails, () => CloudTrailDetails, [0, 4]]
);
export var StartPolicyGenerationResponse = struct(n0, _SPGRt, 0, [_jI], [0]);
export var Trail = struct(n0, _T, 0, [_cTA, _reg, _aRl], [0, 64 | 0, 2]);
export var TrailList = list(n0, _TLr, 0, () => Trail);
export var CreateAccessPreview = op(
  n0,
  _CAP,
  {
    [_h]: ["PUT", "/access-preview", 200],
  },
  () => CreateAccessPreviewRequest,
  () => CreateAccessPreviewResponse
);
export var StartPolicyGeneration = op(
  n0,
  _SPG,
  {
    [_h]: ["PUT", "/policy/generation", 200],
  },
  () => StartPolicyGenerationRequest,
  () => StartPolicyGenerationResponse
);
