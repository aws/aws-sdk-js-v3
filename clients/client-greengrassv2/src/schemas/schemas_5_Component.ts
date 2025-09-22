// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _at,
  _CC,
  _cC,
  _CCL,
  _cN,
  _CP,
  _cV,
  _CVL,
  _CVLI,
  _cVom,
  _h,
  _hQ,
  _LCV,
  _LCVR,
  _LCVRi,
  _m,
  _mR,
  _n,
  _nT,
  _pla,
  _RCC,
  _RCCR,
  _RCCRe,
  _RCV,
  _rCV,
  _RCVL,
  _rec,
  _vG,
  _vR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ComponentCandidate = struct(n0, _CC, 0, [_cN, _cV, _vR], [0, 0, 128 | 0]);
export var ComponentPlatform = struct(n0, _CP, 0, [_n, _at], [0, 128 | 0]);
export var ComponentVersionListItem = struct(n0, _CVLI, 0, [_cN, _cV, _a], [0, 0, 0]);
export var ListComponentVersionsRequest = struct(
  n0,
  _LCVR,
  0,
  [_a, _mR, _nT],
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
export var ListComponentVersionsResponse = struct(n0, _LCVRi, 0, [_cVom, _nT], [() => ComponentVersionList, 0]);
export var ResolveComponentCandidatesRequest = struct(
  n0,
  _RCCR,
  0,
  [_pla, _cC],
  [() => ComponentPlatform, () => ComponentCandidateList]
);
export var ResolveComponentCandidatesResponse = struct(n0, _RCCRe, 0, [_rCV], [() => ResolvedComponentVersionsList]);
export var ResolvedComponentVersion = struct(n0, _RCV, 0, [_a, _cN, _cV, _rec, _vG, _m], [0, 0, 0, 21, 0, 0]);
export var ComponentCandidateList = list(n0, _CCL, 0, () => ComponentCandidate);
export var ComponentVersionList = list(n0, _CVL, 0, () => ComponentVersionListItem);
export var ResolvedComponentVersionsList = list(n0, _RCVL, 0, () => ResolvedComponentVersion);
export var ComponentVersionRequirementMap = 128 | 0;

export var PlatformAttributesMap = 128 | 0;

export var ListComponentVersions = op(
  n0,
  _LCV,
  {
    [_h]: ["GET", "/greengrass/v2/components/{arn}/versions", 200],
  },
  () => ListComponentVersionsRequest,
  () => ListComponentVersionsResponse
);
export var ResolveComponentCandidates = op(
  n0,
  _RCC,
  {
    [_h]: ["POST", "/greengrass/v2/resolveComponentCandidates", 200],
  },
  () => ResolveComponentCandidatesRequest,
  () => ResolveComponentCandidatesResponse
);
