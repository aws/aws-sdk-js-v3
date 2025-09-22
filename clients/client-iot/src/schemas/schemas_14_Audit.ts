// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ac,
  _AF,
  _AFu,
  _aId,
  _aO,
  _AS,
  _ASL,
  _CAS,
  _CASR,
  _CASRr,
  _cCI,
  _cD,
  _cDS,
  _cIl,
  _cIPI,
  _cN,
  _CRA,
  _CRAR,
  _CRARr,
  _cRT,
  _d,
  _DAF,
  _DAFR,
  _DAFRe,
  _DAS,
  _DASe,
  _DASR,
  _DASRe,
  _DASRes,
  _DASResc,
  _dCAe,
  _dCIe,
  _DRAe,
  _DRARes,
  _DRAResc,
  _eD,
  _eT,
  _fI,
  _fin,
  _find,
  _fTi,
  _h,
  _hQ,
  _ICI,
  _iCI,
  _iCS,
  _iCSN,
  _iI,
  _iRA,
  _iS,
  _LAF,
  _LAFR,
  _LAFRi,
  _LAS,
  _LASR,
  _LASRi,
  _lMD,
  _LRRFAF,
  _LRRFAFR,
  _LRRFAFRi,
  _lSF,
  _mR,
  _NCR,
  _nCR,
  _nT,
  _ow,
  _pNo,
  _PVI,
  _pVI,
  _pVIo,
  _rA,
  _rAA,
  _RAD,
  _rAD,
  _rAo,
  _rFNC,
  _rFNCC,
  _RI,
  _rI,
  _RR,
  _rR,
  _RRe,
  _rTes,
  _se,
  _sI,
  _sT,
  _sup,
  _tag,
  _tI,
  _tST,
  _UAS,
  _UASR,
  _UASRp,
  _URA,
  _URAR,
  _URARp,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AuditFinding = struct(
  n0,
  _AF,
  0,
  [_fI, _tI, _cN, _tST, _fTi, _se, _nCR, _rR, _rFNC, _rFNCC, _iS],
  [0, 0, 0, 4, 4, 0, () => NonCompliantResource, () => RelatedResources, 0, 0, 2]
);
export var AuditSuppression = struct(n0, _AS, 0, [_cN, _rI, _eD, _sI, _d], [0, () => ResourceIdentifier, 4, 2, 0]);
export var CreateAuditSuppressionRequest = struct(
  n0,
  _CASR,
  0,
  [_cN, _rI, _eD, _sI, _d, _cRT],
  [0, () => ResourceIdentifier, 4, 2, 0, [0, 4]]
);
export var CreateAuditSuppressionResponse = struct(n0, _CASRr, 0, [], []);
export var CreateRoleAliasRequest = struct(n0, _CRAR, 0, [_rAo, _rA, _cDS, _tag], [[0, 1], 0, 1, () => TagList]);
export var CreateRoleAliasResponse = struct(n0, _CRARr, 0, [_rAo, _rAA], [0, 0]);
export var DeleteAuditSuppressionRequest = struct(n0, _DASR, 0, [_cN, _rI], [0, () => ResourceIdentifier]);
export var DeleteAuditSuppressionResponse = struct(n0, _DASRe, 0, [], []);
export var DescribeAuditFindingRequest = struct(n0, _DAFR, 0, [_fI], [[0, 1]]);
export var DescribeAuditFindingResponse = struct(n0, _DAFRe, 0, [_fin], [() => AuditFinding]);
export var DescribeAuditSuppressionRequest = struct(n0, _DASRes, 0, [_cN, _rI], [0, () => ResourceIdentifier]);
export var DescribeAuditSuppressionResponse = struct(
  n0,
  _DASResc,
  0,
  [_cN, _rI, _eD, _sI, _d],
  [0, () => ResourceIdentifier, 4, 2, 0]
);
export var DescribeRoleAliasRequest = struct(n0, _DRARes, 0, [_rAo], [[0, 1]]);
export var DescribeRoleAliasResponse = struct(n0, _DRAResc, 0, [_rAD], [() => RoleAliasDescription]);
export var IssuerCertificateIdentifier = struct(n0, _ICI, 0, [_iCS, _iI, _iCSN], [0, 0, 0]);
export var ListAuditFindingsRequest = struct(
  n0,
  _LAFR,
  0,
  [_tI, _cN, _rI, _mR, _nT, _sT, _eT, _lSF],
  [0, 0, () => ResourceIdentifier, 1, 0, 4, 4, 2]
);
export var ListAuditFindingsResponse = struct(n0, _LAFRi, 0, [_find, _nT], [() => AuditFindings, 0]);
export var ListAuditSuppressionsRequest = struct(
  n0,
  _LASR,
  0,
  [_cN, _rI, _aO, _nT, _mR],
  [0, () => ResourceIdentifier, 2, 0, 1]
);
export var ListAuditSuppressionsResponse = struct(n0, _LASRi, 0, [_sup, _nT], [() => AuditSuppressionList, 0]);
export var ListRelatedResourcesForAuditFindingRequest = struct(
  n0,
  _LRRFAFR,
  0,
  [_fI, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _fI,
      },
    ],
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
export var ListRelatedResourcesForAuditFindingResponse = struct(
  n0,
  _LRRFAFRi,
  0,
  [_rR, _nT],
  [() => RelatedResources, 0]
);
export var NonCompliantResource = struct(n0, _NCR, 0, [_rTes, _rI, _aId], [0, () => ResourceIdentifier, 128 | 0]);
export var PolicyVersionIdentifier = struct(n0, _PVI, 0, [_pNo, _pVI], [0, 0]);
export var RelatedResource = struct(n0, _RR, 0, [_rTes, _rI, _aId], [0, () => ResourceIdentifier, 128 | 0]);
export var ResourceIdentifier = struct(
  n0,
  _RI,
  0,
  [_dCIe, _cCI, _cIPI, _cIl, _pVIo, _ac, _iRA, _rAA, _iCI, _dCAe],
  [0, 0, 0, 0, () => PolicyVersionIdentifier, 0, 0, 0, () => IssuerCertificateIdentifier, 0]
);
export var RoleAliasDescription = struct(n0, _RAD, 0, [_rAo, _rAA, _rA, _ow, _cDS, _cD, _lMD], [0, 0, 0, 0, 1, 4, 4]);
export var UpdateAuditSuppressionRequest = struct(
  n0,
  _UASR,
  0,
  [_cN, _rI, _eD, _sI, _d],
  [0, () => ResourceIdentifier, 4, 2, 0]
);
export var UpdateAuditSuppressionResponse = struct(n0, _UASRp, 0, [], []);
export var UpdateRoleAliasRequest = struct(n0, _URAR, 0, [_rAo, _rA, _cDS], [[0, 1], 0, 1]);
export var UpdateRoleAliasResponse = struct(n0, _URARp, 0, [_rAo, _rAA], [0, 0]);
export var AuditFindings = list(n0, _AFu, 0, () => AuditFinding);
export var AuditSuppressionList = list(n0, _ASL, 0, () => AuditSuppression);
export var RelatedResources = list(n0, _RRe, 0, () => RelatedResource);
export var StringMap = 128 | 0;

export var CreateAuditSuppression = op(
  n0,
  _CAS,
  {
    [_h]: ["POST", "/audit/suppressions/create", 200],
  },
  () => CreateAuditSuppressionRequest,
  () => CreateAuditSuppressionResponse
);
export var CreateRoleAlias = op(
  n0,
  _CRA,
  {
    [_h]: ["POST", "/role-aliases/{roleAlias}", 200],
  },
  () => CreateRoleAliasRequest,
  () => CreateRoleAliasResponse
);
export var DeleteAuditSuppression = op(
  n0,
  _DAS,
  {
    [_h]: ["POST", "/audit/suppressions/delete", 200],
  },
  () => DeleteAuditSuppressionRequest,
  () => DeleteAuditSuppressionResponse
);
export var DescribeAuditFinding = op(
  n0,
  _DAF,
  {
    [_h]: ["GET", "/audit/findings/{findingId}", 200],
  },
  () => DescribeAuditFindingRequest,
  () => DescribeAuditFindingResponse
);
export var DescribeAuditSuppression = op(
  n0,
  _DASe,
  {
    [_h]: ["POST", "/audit/suppressions/describe", 200],
  },
  () => DescribeAuditSuppressionRequest,
  () => DescribeAuditSuppressionResponse
);
export var DescribeRoleAlias = op(
  n0,
  _DRAe,
  {
    [_h]: ["GET", "/role-aliases/{roleAlias}", 200],
  },
  () => DescribeRoleAliasRequest,
  () => DescribeRoleAliasResponse
);
export var ListAuditFindings = op(
  n0,
  _LAF,
  {
    [_h]: ["POST", "/audit/findings", 200],
  },
  () => ListAuditFindingsRequest,
  () => ListAuditFindingsResponse
);
export var ListAuditSuppressions = op(
  n0,
  _LAS,
  {
    [_h]: ["POST", "/audit/suppressions/list", 200],
  },
  () => ListAuditSuppressionsRequest,
  () => ListAuditSuppressionsResponse
);
export var ListRelatedResourcesForAuditFinding = op(
  n0,
  _LRRFAF,
  {
    [_h]: ["GET", "/audit/relatedResources", 200],
  },
  () => ListRelatedResourcesForAuditFindingRequest,
  () => ListRelatedResourcesForAuditFindingResponse
);
export var UpdateAuditSuppression = op(
  n0,
  _UAS,
  {
    [_h]: ["PATCH", "/audit/suppressions/update", 200],
  },
  () => UpdateAuditSuppressionRequest,
  () => UpdateAuditSuppressionResponse
);
export var UpdateRoleAlias = op(
  n0,
  _URA,
  {
    [_h]: ["PUT", "/role-aliases/{roleAlias}", 200],
  },
  () => UpdateRoleAliasRequest,
  () => UpdateRoleAliasResponse
);
