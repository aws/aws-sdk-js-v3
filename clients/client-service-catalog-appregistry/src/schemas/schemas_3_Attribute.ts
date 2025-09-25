// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aA,
  _AAG,
  _AAGR,
  _AAGRs,
  _aG,
  _aGA,
  _AGD,
  _aGD,
  _AGDL,
  _aGt,
  _ap,
  _AR,
  _aRC,
  _ARR,
  _ARRs,
  _aT,
  _ATR,
  _aTR,
  _aTRG,
  _aTS,
  _aTs,
  _cB,
  _cT,
  _d,
  _DA,
  _DAGi,
  _DAGRi,
  _DAGRis,
  _DAR,
  _DARe,
  _DR,
  _DRR,
  _DRRi,
  _eM,
  _GA,
  _GAR,
  _GARe,
  _GARet,
  _GARR,
  _GARRe,
  _h,
  _hQ,
  _I,
  _i,
  _in,
  _LAAG,
  _LAAGR,
  _LAAGRi,
  _LAGFA,
  _LAGFAR,
  _LAGFARi,
  _LARis,
  _LARR,
  _LARRi,
  _lUT,
  _mR,
  _n,
  _nT,
  _o,
  _R,
  _r,
  _rA,
  _RD,
  _rD,
  _Re,
  _re,
  _RG,
  _rG,
  _RI,
  _RIe,
  _RL,
  _RLI,
  _rT,
  _rTS,
  _st,
  _sta,
  _t,
  _tV,
  _UA,
  _UAR,
  _UARp,
  n0,
} from "./schemas_0";
import { Application, ApplicationSummary } from "./schemas_4_Attribute";

/* eslint no-var: 0 */

export var ApplicationTagResult = struct(n0, _ATR, 0, [_aTS, _eM, _r, _nT], [0, 0, () => ResourcesList, 0]);
export var AssociateAttributeGroupRequest = struct(
  n0,
  _AAGR,
  0,
  [_ap, _aG],
  [
    [0, 1],
    [0, 1],
  ]
);
export var AssociateAttributeGroupResponse = struct(n0, _AAGRs, 0, [_aA, _aGA], [0, 0]);
export var AssociateResourceRequest = struct(n0, _ARR, 0, [_ap, _rT, _re, _o], [[0, 1], [0, 1], [0, 1], 64 | 0]);
export var AssociateResourceResponse = struct(n0, _ARRs, 0, [_aA, _rA, _o], [0, 0, 64 | 0]);
export var AttributeGroupDetails = struct(n0, _AGD, 0, [_i, _a, _n, _cB], [0, 0, 0, 0]);
export var DeleteApplicationRequest = struct(n0, _DAR, 0, [_ap], [[0, 1]]);
export var DeleteApplicationResponse = struct(n0, _DARe, 0, [_ap], [() => ApplicationSummary]);
export var DisassociateAttributeGroupRequest = struct(
  n0,
  _DAGRi,
  0,
  [_ap, _aG],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateAttributeGroupResponse = struct(n0, _DAGRis, 0, [_aA, _aGA], [0, 0]);
export var DisassociateResourceRequest = struct(
  n0,
  _DRR,
  0,
  [_ap, _rT, _re],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateResourceResponse = struct(n0, _DRRi, 0, [_aA, _rA], [0, 0]);
export var GetApplicationRequest = struct(n0, _GAR, 0, [_ap], [[0, 1]]);
export var GetApplicationResponse = struct(
  n0,
  _GARe,
  0,
  [_i, _a, _n, _d, _cT, _lUT, _aRC, _t, _in, _aT],
  [0, 0, 0, 0, 5, 5, 1, 128 | 0, () => Integrations, 128 | 0]
);
export var GetAssociatedResourceRequest = struct(
  n0,
  _GARR,
  0,
  [_ap, _rT, _re, _nT, _rTS, _mR],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _rTS,
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
export var GetAssociatedResourceResponse = struct(
  n0,
  _GARRe,
  0,
  [_re, _o, _aTR],
  [() => Resource, 64 | 0, () => ApplicationTagResult]
);
export var Integrations = struct(n0, _I, 0, [_rG, _aTRG], [() => ResourceGroup, () => ResourceGroup]);
export var ListAssociatedAttributeGroupsRequest = struct(
  n0,
  _LAAGR,
  0,
  [_ap, _nT, _mR],
  [
    [0, 1],
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
export var ListAssociatedAttributeGroupsResponse = struct(n0, _LAAGRi, 0, [_aGt, _nT], [64 | 0, 0]);
export var ListAssociatedResourcesRequest = struct(
  n0,
  _LARR,
  0,
  [_ap, _nT, _mR],
  [
    [0, 1],
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
export var ListAssociatedResourcesResponse = struct(n0, _LARRi, 0, [_r, _nT], [() => Resources, 0]);
export var ListAttributeGroupsForApplicationRequest = struct(
  n0,
  _LAGFAR,
  0,
  [_ap, _nT, _mR],
  [
    [0, 1],
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
export var ListAttributeGroupsForApplicationResponse = struct(
  n0,
  _LAGFARi,
  0,
  [_aGD, _nT],
  [() => AttributeGroupDetailsList, 0]
);
export var Resource = struct(n0, _R, 0, [_n, _a, _aTs, _in], [0, 0, 5, () => ResourceIntegrations]);
export var ResourceDetails = struct(n0, _RD, 0, [_tV], [0]);
export var ResourceGroup = struct(n0, _RG, 0, [_st, _a, _eM], [0, 0, 0]);
export var ResourceInfo = struct(n0, _RI, 0, [_n, _a, _rT, _rD, _o], [0, 0, 0, () => ResourceDetails, 64 | 0]);
export var ResourceIntegrations = struct(n0, _RIe, 0, [_rG], [() => ResourceGroup]);
export var ResourcesListItem = struct(n0, _RLI, 0, [_rA, _eM, _sta, _rT], [0, 0, 0, 0]);
export var UpdateApplicationRequest = struct(n0, _UAR, 0, [_ap, _n, _d], [[0, 1], 0, 0]);
export var UpdateApplicationResponse = struct(n0, _UARp, 0, [_ap], [() => Application]);
export var AttributeGroupDetailsList = list(n0, _AGDL, 0, () => AttributeGroupDetails);
export var AttributeGroupIds = 64 | 0;

export var GetAssociatedResourceFilter = 64 | 0;

export var Options = 64 | 0;

export var Resources = list(n0, _Re, 0, () => ResourceInfo);
export var ResourcesList = list(n0, _RL, 0, () => ResourcesListItem);
export var AssociateAttributeGroup = op(
  n0,
  _AAG,
  {
    [_h]: ["PUT", "/applications/{application}/attribute-groups/{attributeGroup}", 200],
  },
  () => AssociateAttributeGroupRequest,
  () => AssociateAttributeGroupResponse
);
export var AssociateResource = op(
  n0,
  _AR,
  {
    [_h]: ["PUT", "/applications/{application}/resources/{resourceType}/{resource}", 200],
  },
  () => AssociateResourceRequest,
  () => AssociateResourceResponse
);
export var DeleteApplication = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/applications/{application}", 200],
  },
  () => DeleteApplicationRequest,
  () => DeleteApplicationResponse
);
export var DisassociateAttributeGroup = op(
  n0,
  _DAGi,
  {
    [_h]: ["DELETE", "/applications/{application}/attribute-groups/{attributeGroup}", 200],
  },
  () => DisassociateAttributeGroupRequest,
  () => DisassociateAttributeGroupResponse
);
export var DisassociateResource = op(
  n0,
  _DR,
  {
    [_h]: ["DELETE", "/applications/{application}/resources/{resourceType}/{resource}", 200],
  },
  () => DisassociateResourceRequest,
  () => DisassociateResourceResponse
);
export var GetApplication = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/applications/{application}", 200],
  },
  () => GetApplicationRequest,
  () => GetApplicationResponse
);
export var GetAssociatedResource = op(
  n0,
  _GARet,
  {
    [_h]: ["GET", "/applications/{application}/resources/{resourceType}/{resource}", 200],
  },
  () => GetAssociatedResourceRequest,
  () => GetAssociatedResourceResponse
);
export var ListAssociatedAttributeGroups = op(
  n0,
  _LAAG,
  {
    [_h]: ["GET", "/applications/{application}/attribute-groups", 200],
  },
  () => ListAssociatedAttributeGroupsRequest,
  () => ListAssociatedAttributeGroupsResponse
);
export var ListAssociatedResources = op(
  n0,
  _LARis,
  {
    [_h]: ["GET", "/applications/{application}/resources", 200],
  },
  () => ListAssociatedResourcesRequest,
  () => ListAssociatedResourcesResponse
);
export var ListAttributeGroupsForApplication = op(
  n0,
  _LAGFA,
  {
    [_h]: ["GET", "/applications/{application}/attribute-group-details", 200],
  },
  () => ListAttributeGroupsForApplicationRequest,
  () => ListAttributeGroupsForApplicationResponse
);
export var UpdateApplication = op(
  n0,
  _UA,
  {
    [_h]: ["PATCH", "/applications/{application}", 200],
  },
  () => UpdateApplicationRequest,
  () => UpdateApplicationResponse
);
