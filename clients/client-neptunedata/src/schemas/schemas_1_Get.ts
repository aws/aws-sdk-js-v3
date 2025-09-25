// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ExpiredStreamException as __ExpiredStreamException,
  MethodNotAllowedException as __MethodNotAllowedException,
  S3Exception as __S3Exception,
  ServerShutdownException as __ServerShutdownException,
  StreamRecordsNotFoundException as __StreamRecordsNotFoundException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _act,
  _AE,
  _c,
  _cla,
  _cN,
  _co,
  _cou,
  _cT,
  _cTIMo,
  _da,
  _de,
  _dM,
  _dOEL,
  _e,
  _EFR,
  _EFRI,
  _EFRO,
  _eI,
  _eL,
  _enc,
  _eP,
  _ES,
  _eS,
  _ESd,
  _ESE,
  _fo,
  _fOE,
  _fr,
  _FRT,
  _GPSe,
  _GPSet,
  _GPSI,
  _GPSIe,
  _GPSOe,
  _GPSOet,
  _GRDFGS,
  _GRDFGSI,
  _GRDFGSO,
  _gS,
  _GSSe,
  _GSSI,
  _GSSOe,
  _h,
  _hE,
  _hH,
  _hQ,
  _i,
  _iLO,
  _iRA,
  _iTt,
  _jN,
  _k,
  _l,
  _lEI,
  _lSCT,
  _lTT,
  _lTTIM,
  _LVML,
  _MNAE,
  _mod,
  _MPS,
  _MPSI,
  _MPSO,
  _MSS,
  _MSSI,
  _MSSO,
  _nC,
  _nDP,
  _nDS,
  _nE,
  _nEL,
  _nEP,
  _nL,
  _nN,
  _nNL,
  _nNP,
  _nP,
  _nQ,
  _NS,
  _nS,
  _NSo,
  _oN,
  _op_,
  _p,
  _par,
  _pC,
  _PD,
  _PR,
  _pre,
  _PRL,
  _PS,
  _PSVM,
  _qR,
  _RDFGS,
  _RDFGSVM,
  _rec,
  _reg,
  _rI,
  _RSIM,
  _s,
  _sBR,
  _sC,
  _SD,
  _SE,
  _se,
  _sI,
  _SLJ,
  _SLJI,
  _SLJO,
  _so,
  _SR,
  _SRL,
  _SRNFE,
  _sS,
  _SSE,
  _SSu,
  _SSub,
  _st,
  _TE,
  _tEPV,
  _tNPV,
  _to,
  _to_,
  _tR,
  _ty,
  _uPEI,
  _uSCP,
  _v,
  _ve,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EdgeStructure = struct(n0, _ES, 0, [_cou, _eP], [1, 64 | 0]);
export var ExecuteFastResetInput = struct(n0, _EFRI, 0, [_act, _to], [0, 0]);
export var ExecuteFastResetOutput = struct(n0, _EFRO, 0, [_s, _p], [0, () => FastResetToken]);
export var ExpiredStreamException = error(
  n0,
  _ESE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __ExpiredStreamException
);
export var FastResetToken = struct(n0, _FRT, 0, [_to], [0]);
export var GetPropertygraphStreamInput = struct(
  n0,
  _GPSI,
  0,
  [_l, _iTt, _cN, _oN, _enc],
  [
    [
      1,
      {
        [_hQ]: _l,
      },
    ],
    [
      0,
      {
        [_hQ]: _iTt,
      },
    ],
    [
      1,
      {
        [_hQ]: _cN,
      },
    ],
    [
      1,
      {
        [_hQ]: _oN,
      },
    ],
    [
      0,
      {
        [_hH]: _AE,
      },
    ],
  ]
);
export var GetPropertygraphStreamOutput = struct(
  n0,
  _GPSOe,
  0,
  [_lEI, _lTTIM, _fo, _rec, _tR],
  [
    128 | 0,
    [
      1,
      {
        [_jN]: _lTT,
      },
    ],
    0,
    [() => PropertygraphRecordsList, 0],
    1,
  ]
);
export var GetPropertygraphSummaryInput = struct(
  n0,
  _GPSIe,
  0,
  [_mod],
  [
    [
      0,
      {
        [_hQ]: _mod,
      },
    ],
  ]
);
export var GetPropertygraphSummaryOutput = struct(
  n0,
  _GPSOet,
  0,
  [_sC, _p],
  [[1, 32], () => PropertygraphSummaryValueMap]
);
export var GetRDFGraphSummaryInput = struct(
  n0,
  _GRDFGSI,
  0,
  [_mod],
  [
    [
      0,
      {
        [_hQ]: _mod,
      },
    ],
  ]
);
export var GetRDFGraphSummaryOutput = struct(n0, _GRDFGSO, 0, [_sC, _p], [[1, 32], () => RDFGraphSummaryValueMap]);
export var GetSparqlStreamInput = struct(
  n0,
  _GSSI,
  0,
  [_l, _iTt, _cN, _oN, _enc],
  [
    [
      1,
      {
        [_hQ]: _l,
      },
    ],
    [
      0,
      {
        [_hQ]: _iTt,
      },
    ],
    [
      1,
      {
        [_hQ]: _cN,
      },
    ],
    [
      1,
      {
        [_hQ]: _oN,
      },
    ],
    [
      0,
      {
        [_hH]: _AE,
      },
    ],
  ]
);
export var GetSparqlStreamOutput = struct(
  n0,
  _GSSOe,
  0,
  [_lEI, _lTTIM, _fo, _rec, _tR],
  [
    128 | 0,
    [
      1,
      {
        [_jN]: _lTT,
      },
    ],
    0,
    [() => SparqlRecordsList, 0],
    1,
  ]
);
export var ManagePropertygraphStatisticsInput = struct(n0, _MPSI, 0, [_mod], [0]);
export var ManagePropertygraphStatisticsOutput = struct(n0, _MPSO, 0, [_s, _p], [0, () => RefreshStatisticsIdMap]);
export var ManageSparqlStatisticsInput = struct(n0, _MSSI, 0, [_mod], [0]);
export var ManageSparqlStatisticsOutput = struct(n0, _MSSO, 0, [_s, _p], [0, () => RefreshStatisticsIdMap]);
export var MethodNotAllowedException = error(
  n0,
  _MNAE,
  {
    [_e]: _c,
    [_hE]: 405,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __MethodNotAllowedException
);
export var NodeStructure = struct(n0, _NS, 0, [_cou, _nP, _dOEL], [1, 64 | 0, 64 | 0]);
export var PropertygraphData = struct(n0, _PD, 0, [_i, _ty, _k, _v, _fr, _to_], [0, 0, 0, 15, 0, 0]);
export var PropertygraphRecord = struct(
  n0,
  _PR,
  0,
  [_cTIMo, _eI, _da, _op_, _iLO],
  [
    [
      1,
      {
        [_jN]: _cT,
      },
    ],
    128 | 0,
    () => PropertygraphData,
    0,
    2,
  ]
);
export var PropertygraphSummary = struct(
  n0,
  _PS,
  0,
  [_nN, _nE, _nNL, _nEL, _nL, _eL, _nNP, _nEP, _nP, _eP, _tNPV, _tEPV, _nS, _eS],
  [
    1,
    1,
    1,
    1,
    64 | 0,
    64 | 0,
    1,
    1,
    list(n0, _LVML, 0, 128 | 1),
    list(n0, _LVML, 0, 128 | 1),
    1,
    1,
    () => NodeStructures,
    () => EdgeStructures,
  ]
);
export var PropertygraphSummaryValueMap = struct(n0, _PSVM, 0, [_ve, _lSCT, _gS], [0, 5, () => PropertygraphSummary]);
export var RDFGraphSummary = struct(
  n0,
  _RDFGS,
  0,
  [_nDS, _nDP, _nQ, _nC, _cla, _pre, _sS],
  [1, 1, 1, 1, 64 | 0, list(n0, _LVML, 0, 128 | 1), () => SubjectStructures]
);
export var RDFGraphSummaryValueMap = struct(n0, _RDFGSVM, 0, [_ve, _lSCT, _gS], [0, 5, () => RDFGraphSummary]);
export var RefreshStatisticsIdMap = struct(n0, _RSIM, 0, [_sI], [0]);
export var S3Exception = error(
  n0,
  _SE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __S3Exception
);
export var ServerShutdownException = error(
  n0,
  _SSE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __ServerShutdownException
);
export var SparqlData = struct(n0, _SD, 0, [_st], [0]);
export var SparqlRecord = struct(
  n0,
  _SR,
  0,
  [_cTIMo, _eI, _da, _op_, _iLO],
  [
    [
      1,
      {
        [_jN]: _cT,
      },
    ],
    128 | 0,
    () => SparqlData,
    0,
    2,
  ]
);
export var StartLoaderJobInput = struct(
  n0,
  _SLJI,
  0,
  [_so, _fo, _sBR, _iRA, _mod, _fOE, _par, _pC, _uSCP, _qR, _de, _uPEI],
  [
    0,
    0,
    [
      0,
      {
        [_jN]: _reg,
      },
    ],
    0,
    0,
    2,
    0,
    128 | 0,
    2,
    2,
    64 | 0,
    2,
  ]
);
export var StartLoaderJobOutput = struct(n0, _SLJO, 0, [_s, _p], [0, 128 | 0]);
export var StreamRecordsNotFoundException = error(
  n0,
  _SRNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __StreamRecordsNotFoundException
);
export var SubjectStructure = struct(n0, _SSu, 0, [_cou, _pre], [1, 64 | 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_dM, _rI, _co],
  [0, 0, 0],

  __ThrottlingException
);
export var Unit = "unit" as const;

export var Classes = 64 | 0;

export var EdgeLabels = 64 | 0;

export var EdgeProperties = 64 | 0;

export var EdgeStructures = list(n0, _ESd, 0, () => EdgeStructure);
export var LongValuedMapList = list(n0, _LVML, 0, 128 | 1);
export var NodeLabels = 64 | 0;

export var NodeProperties = 64 | 0;

export var NodeStructures = list(n0, _NSo, 0, () => NodeStructure);
export var OutgoingEdgeLabels = 64 | 0;

export var Predicates = 64 | 0;

export var PropertygraphRecordsList = list(n0, _PRL, 0, [() => PropertygraphRecord, 0]);
export var SparqlRecordsList = list(n0, _SRL, 0, [() => SparqlRecord, 0]);
export var SubjectStructures = list(n0, _SSub, 0, () => SubjectStructure);
export var LongValuedMap = 128 | 1;

export var ExecuteFastReset = op(
  n0,
  _EFR,
  {
    [_h]: ["POST", "/system", 200],
  },
  () => ExecuteFastResetInput,
  () => ExecuteFastResetOutput
);
export var GetPropertygraphStream = op(
  n0,
  _GPSe,
  {
    [_h]: ["GET", "/propertygraph/stream", 200],
  },
  () => GetPropertygraphStreamInput,
  () => GetPropertygraphStreamOutput
);
export var GetPropertygraphSummary = op(
  n0,
  _GPSet,
  {
    [_h]: ["GET", "/propertygraph/statistics/summary", 200],
  },
  () => GetPropertygraphSummaryInput,
  () => GetPropertygraphSummaryOutput
);
export var GetRDFGraphSummary = op(
  n0,
  _GRDFGS,
  {
    [_h]: ["GET", "/rdf/statistics/summary", 200],
  },
  () => GetRDFGraphSummaryInput,
  () => GetRDFGraphSummaryOutput
);
export var GetSparqlStream = op(
  n0,
  _GSSe,
  {
    [_h]: ["GET", "/sparql/stream", 200],
  },
  () => GetSparqlStreamInput,
  () => GetSparqlStreamOutput
);
export var ManagePropertygraphStatistics = op(
  n0,
  _MPS,
  {
    [_h]: ["POST", "/propertygraph/statistics", 200],
  },
  () => ManagePropertygraphStatisticsInput,
  () => ManagePropertygraphStatisticsOutput
);
export var ManageSparqlStatistics = op(
  n0,
  _MSS,
  {
    [_h]: ["POST", "/sparql/statistics", 200],
  },
  () => ManageSparqlStatisticsInput,
  () => ManageSparqlStatisticsOutput
);
export var StartLoaderJob = op(
  n0,
  _SLJ,
  {
    [_h]: ["POST", "/loader", 200],
  },
  () => StartLoaderJobInput,
  () => StartLoaderJobOutput
);
