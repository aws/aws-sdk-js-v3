// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _AG,
  _aG,
  _AGS,
  _AGSt,
  _aGt,
  _ap,
  _app,
  _AS,
  _ASp,
  _aT,
  _at,
  _CA,
  _CAG,
  _CAGR,
  _CAGRr,
  _CAR,
  _CARr,
  _cB,
  _cT,
  _cTl,
  _d,
  _DAG,
  _DAGR,
  _DAGRe,
  _GAG,
  _GAGR,
  _GAGRe,
  _h,
  _hQ,
  _i,
  _LA,
  _LAG,
  _LAGR,
  _LAGRi,
  _LAR,
  _LARi,
  _lUT,
  _mR,
  _n,
  _nT,
  _t,
  _UAG,
  _UAGR,
  _UAGRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Application = struct(n0, _A, 0, [_i, _a, _n, _d, _cT, _lUT, _t, _aT], [0, 0, 0, 0, 5, 5, 128 | 0, 128 | 0]);
export var ApplicationSummary = struct(n0, _AS, 0, [_i, _a, _n, _d, _cT, _lUT], [0, 0, 0, 0, 5, 5]);
export var AttributeGroup = struct(n0, _AG, 0, [_i, _a, _n, _d, _cT, _lUT, _t], [0, 0, 0, 0, 5, 5, 128 | 0]);
export var AttributeGroupSummary = struct(n0, _AGS, 0, [_i, _a, _n, _d, _cT, _lUT, _cB], [0, 0, 0, 0, 5, 5, 0]);
export var CreateApplicationRequest = struct(n0, _CAR, 0, [_n, _d, _t, _cTl], [0, 0, 128 | 0, [0, 4]]);
export var CreateApplicationResponse = struct(n0, _CARr, 0, [_ap], [() => Application]);
export var CreateAttributeGroupRequest = struct(n0, _CAGR, 0, [_n, _d, _at, _t, _cTl], [0, 0, 0, 128 | 0, [0, 4]]);
export var CreateAttributeGroupResponse = struct(n0, _CAGRr, 0, [_aG], [() => AttributeGroup]);
export var DeleteAttributeGroupRequest = struct(n0, _DAGR, 0, [_aG], [[0, 1]]);
export var DeleteAttributeGroupResponse = struct(n0, _DAGRe, 0, [_aG], [() => AttributeGroupSummary]);
export var GetAttributeGroupRequest = struct(n0, _GAGR, 0, [_aG], [[0, 1]]);
export var GetAttributeGroupResponse = struct(
  n0,
  _GAGRe,
  0,
  [_i, _a, _n, _d, _at, _cT, _lUT, _t, _cB],
  [0, 0, 0, 0, 0, 5, 5, 128 | 0, 0]
);
export var ListApplicationsRequest = struct(
  n0,
  _LAR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListApplicationsResponse = struct(n0, _LARi, 0, [_app, _nT], [() => ApplicationSummaries, 0]);
export var ListAttributeGroupsRequest = struct(
  n0,
  _LAGR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListAttributeGroupsResponse = struct(n0, _LAGRi, 0, [_aGt, _nT], [() => AttributeGroupSummaries, 0]);
export var UpdateAttributeGroupRequest = struct(n0, _UAGR, 0, [_aG, _n, _d, _at], [[0, 1], 0, 0, 0]);
export var UpdateAttributeGroupResponse = struct(n0, _UAGRp, 0, [_aG], [() => AttributeGroup]);
export var ApplicationSummaries = list(n0, _ASp, 0, () => ApplicationSummary);
export var AttributeGroupSummaries = list(n0, _AGSt, 0, () => AttributeGroupSummary);
export var ApplicationTagDefinition = 128 | 0;

export var CreateApplication = op(
  n0,
  _CA,
  {
    [_h]: ["POST", "/applications", 201],
  },
  () => CreateApplicationRequest,
  () => CreateApplicationResponse
);
export var CreateAttributeGroup = op(
  n0,
  _CAG,
  {
    [_h]: ["POST", "/attribute-groups", 201],
  },
  () => CreateAttributeGroupRequest,
  () => CreateAttributeGroupResponse
);
export var DeleteAttributeGroup = op(
  n0,
  _DAG,
  {
    [_h]: ["DELETE", "/attribute-groups/{attributeGroup}", 200],
  },
  () => DeleteAttributeGroupRequest,
  () => DeleteAttributeGroupResponse
);
export var GetAttributeGroup = op(
  n0,
  _GAG,
  {
    [_h]: ["GET", "/attribute-groups/{attributeGroup}", 200],
  },
  () => GetAttributeGroupRequest,
  () => GetAttributeGroupResponse
);
export var ListApplications = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/applications", 200],
  },
  () => ListApplicationsRequest,
  () => ListApplicationsResponse
);
export var ListAttributeGroups = op(
  n0,
  _LAG,
  {
    [_h]: ["GET", "/attribute-groups", 200],
  },
  () => ListAttributeGroupsRequest,
  () => ListAttributeGroupsResponse
);
export var UpdateAttributeGroup = op(
  n0,
  _UAG,
  {
    [_h]: ["PATCH", "/attribute-groups/{attributeGroup}", 200],
  },
  () => UpdateAttributeGroupRequest,
  () => UpdateAttributeGroupResponse
);
