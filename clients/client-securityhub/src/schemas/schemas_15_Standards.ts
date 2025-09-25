// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASss,
  _BGSCA,
  _BGSCAR,
  _BGSCARa,
  _CIon,
  _Contr,
  _CSont,
  _CSUA,
  _D,
  _DRi,
  _DSC,
  _DSCR,
  _DSCRe,
  _ECr,
  _ERr,
  _h,
  _hQ,
  _LSCA,
  _LSCAR,
  _LSCARi,
  _MRa,
  _NTe,
  _RRel,
  _RU,
  _SAta,
  _SCAD,
  _SCADt,
  _SCAe,
  _SCAI,
  _SCAIt,
  _SCAS,
  _SCASt,
  _SCAta,
  _SCAtan,
  _SCDt,
  _SCIec,
  _SCtan,
  _SCtand,
  _SCTt,
  _SRev,
  _SSAt,
  _Ti,
  _UA,
  _UAn,
  _UR,
  _USCA,
  _USCAn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetStandardsControlAssociationsRequest = struct(
  n0,
  _BGSCAR,
  0,
  [_SCAI],
  [() => StandardsControlAssociationIds]
);
export var BatchGetStandardsControlAssociationsResponse = struct(
  n0,
  _BGSCARa,
  0,
  [_SCAD, _UAn],
  [() => StandardsControlAssociationDetails, () => UnprocessedStandardsControlAssociations]
);
export var DescribeStandardsControlsRequest = struct(
  n0,
  _DSCR,
  0,
  [_SSAt, _NTe, _MRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MRa,
      },
    ],
  ]
);
export var DescribeStandardsControlsResponse = struct(n0, _DSCRe, 0, [_Contr, _NTe], [() => StandardsControls, 0]);
export var ListStandardsControlAssociationsRequest = struct(
  n0,
  _LSCAR,
  0,
  [_SCIec, _NTe, _MRa],
  [
    [
      0,
      {
        [_hQ]: _SCIec,
      },
    ],
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MRa,
      },
    ],
  ]
);
export var ListStandardsControlAssociationsResponse = struct(
  n0,
  _LSCARi,
  0,
  [_SCAS, _NTe],
  [() => StandardsControlAssociationSummaries, 0]
);
export var StandardsControl = struct(
  n0,
  _SCtan,
  0,
  [_SCAta, _CSont, _DRi, _CSUA, _CIon, _Ti, _D, _RU, _SRev, _RRel],
  [0, 0, 0, 5, 0, 0, 0, 0, 0, 64 | 0]
);
export var StandardsControlAssociationDetail = struct(
  n0,
  _SCADt,
  0,
  [_SAta, _SCIec, _SCAe, _ASss, _RRel, _UA, _UR, _SCTt, _SCDt, _SCAtan],
  [0, 0, 0, 0, 64 | 0, 5, 0, 0, 0, 64 | 0]
);
export var StandardsControlAssociationId = struct(n0, _SCAIt, 0, [_SCIec, _SAta], [0, 0]);
export var StandardsControlAssociationSummary = struct(
  n0,
  _SCASt,
  0,
  [_SAta, _SCIec, _SCAe, _ASss, _RRel, _UA, _UR, _SCTt, _SCDt],
  [0, 0, 0, 0, 64 | 0, 5, 0, 0, 0]
);
export var UnprocessedStandardsControlAssociation = struct(
  n0,
  _USCA,
  0,
  [_SCAIt, _ECr, _ERr],
  [() => StandardsControlAssociationId, 0, 0]
);
export var RelatedRequirementsList = 64 | 0;

export var StandardsControlArnList = 64 | 0;

export var StandardsControlAssociationDetails = list(n0, _SCAD, 0, () => StandardsControlAssociationDetail);
export var StandardsControlAssociationIds = list(n0, _SCAI, 0, () => StandardsControlAssociationId);
export var StandardsControlAssociationSummaries = list(n0, _SCAS, 0, () => StandardsControlAssociationSummary);
export var StandardsControls = list(n0, _SCtand, 0, () => StandardsControl);
export var UnprocessedStandardsControlAssociations = list(n0, _USCAn, 0, () => UnprocessedStandardsControlAssociation);
export var BatchGetStandardsControlAssociations = op(
  n0,
  _BGSCA,
  {
    [_h]: ["POST", "/associations/batchGet", 200],
  },
  () => BatchGetStandardsControlAssociationsRequest,
  () => BatchGetStandardsControlAssociationsResponse
);
export var DescribeStandardsControls = op(
  n0,
  _DSC,
  {
    [_h]: ["GET", "/standards/controls/{StandardsSubscriptionArn+}", 200],
  },
  () => DescribeStandardsControlsRequest,
  () => DescribeStandardsControlsResponse
);
export var ListStandardsControlAssociations = op(
  n0,
  _LSCA,
  {
    [_h]: ["GET", "/associations", 200],
  },
  () => ListStandardsControlAssociationsRequest,
  () => ListStandardsControlAssociationsResponse
);
