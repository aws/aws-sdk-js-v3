// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _ATS,
  _aTS,
  _ATSL,
  _cA,
  _cAI,
  _CATS,
  _cATS,
  _CATSL,
  _cI,
  _cIo,
  _cT,
  _d,
  _h,
  _hQ,
  _i,
  _IMTIRC,
  _IMTS,
  _iMTS,
  _IMTSL,
  _iRA,
  _iRC,
  _LAT,
  _LATI,
  _LATO,
  _LCAT,
  _LCATI,
  _LCATO,
  _LIMT,
  _LIMTI,
  _LIMTO,
  _mA,
  _mI,
  _mIe,
  _mR,
  _mRP,
  _n,
  _nT,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnalysisTemplateSummary = struct(
  n0,
  _ATS,
  0,
  [_a, _cT, _i, _n, _uT, _mA, _mI, _cA, _cI, _d],
  [0, 4, 0, 0, 4, 0, 0, 0, 0, 0]
);
export var CollaborationAnalysisTemplateSummary = struct(
  n0,
  _CATS,
  0,
  [_a, _cT, _i, _n, _uT, _cA, _cI, _cAI, _d],
  [0, 4, 0, 0, 4, 0, 0, 0, 0]
);
export var IdMappingTableInputReferenceConfig = struct(n0, _IMTIRC, 0, [_iRA, _mRP], [0, 2]);
export var IdMappingTableSummary = struct(
  n0,
  _IMTS,
  0,
  [_cA, _cI, _mI, _mA, _cT, _uT, _i, _a, _d, _iRC, _n],
  [0, 0, 0, 0, 4, 4, 0, 0, 0, () => IdMappingTableInputReferenceConfig, 0]
);
export var ListAnalysisTemplatesInput = struct(
  n0,
  _LATI,
  0,
  [_mIe, _nT, _mR],
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
export var ListAnalysisTemplatesOutput = struct(n0, _LATO, 0, [_nT, _aTS], [0, () => AnalysisTemplateSummaryList]);
export var ListCollaborationAnalysisTemplatesInput = struct(
  n0,
  _LCATI,
  0,
  [_cIo, _nT, _mR],
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
export var ListCollaborationAnalysisTemplatesOutput = struct(
  n0,
  _LCATO,
  0,
  [_nT, _cATS],
  [0, () => CollaborationAnalysisTemplateSummaryList]
);
export var ListIdMappingTablesInput = struct(
  n0,
  _LIMTI,
  0,
  [_mIe, _nT, _mR],
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
export var ListIdMappingTablesOutput = struct(n0, _LIMTO, 0, [_iMTS, _nT], [() => IdMappingTableSummaryList, 0]);
export var AnalysisTemplateSummaryList = list(n0, _ATSL, 0, () => AnalysisTemplateSummary);
export var CollaborationAnalysisTemplateSummaryList = list(n0, _CATSL, 0, () => CollaborationAnalysisTemplateSummary);
export var IdMappingTableSummaryList = list(n0, _IMTSL, 0, () => IdMappingTableSummary);
export var ListAnalysisTemplates = op(
  n0,
  _LAT,
  {
    [_h]: ["GET", "/memberships/{membershipIdentifier}/analysistemplates", 200],
  },
  () => ListAnalysisTemplatesInput,
  () => ListAnalysisTemplatesOutput
);
export var ListCollaborationAnalysisTemplates = op(
  n0,
  _LCAT,
  {
    [_h]: ["GET", "/collaborations/{collaborationIdentifier}/analysistemplates", 200],
  },
  () => ListCollaborationAnalysisTemplatesInput,
  () => ListCollaborationAnalysisTemplatesOutput
);
export var ListIdMappingTables = op(
  n0,
  _LIMT,
  {
    [_h]: ["GET", "/memberships/{membershipIdentifier}/idmappingtables", 200],
  },
  () => ListIdMappingTablesInput,
  () => ListIdMappingTablesOutput
);
