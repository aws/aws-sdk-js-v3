// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ac,
  _aN,
  _aT,
  _cT,
  _cTo,
  _DAS,
  _DASa,
  _DCS,
  _dCS,
  _DCSa,
  _DCSat,
  _DE,
  _DEa,
  _dN,
  _DS,
  _dSa,
  _DSata,
  _dURI,
  _e,
  _eN,
  _GDC,
  _GDCR,
  _GDCRe,
  _h,
  _hQ,
  _id,
  _LD,
  _LDC,
  _LDCR,
  _LDCRi,
  _LDRi,
  _LDRis,
  _LP,
  _LPR,
  _LPRi,
  _lUT,
  _mR,
  _nT,
  _pN,
  _PS,
  _pS,
  _PSi,
  _r,
  _RS,
  _rS,
  _RSe,
  _sB,
  _sOOA,
  _sT,
  _st,
  _sta,
  _ti,
  _tr,
  _ve,
  _vI,
  n0,
} from "./schemas_0";
import { DatasetTriggers } from "./schemas_4_Dataset";

/* eslint no-var: 0 */

export var DatasetActionSummary = struct(n0, _DAS, 0, [_aN, _aT], [0, 0]);
export var DatasetContentStatus = struct(n0, _DCS, 0, [_sta, _r], [0, 0]);
export var DatasetContentSummary = struct(
  n0,
  _DCSa,
  0,
  [_ve, _st, _cT, _sT, _cTo],
  [0, () => DatasetContentStatus, 4, 4, 4]
);
export var DatasetEntry = struct(n0, _DE, 0, [_eN, _dURI], [0, 0]);
export var DatasetSummary = struct(
  n0,
  _DS,
  0,
  [_dN, _st, _cT, _lUT, _tr, _ac],
  [0, 0, 4, 4, () => DatasetTriggers, () => DatasetActionSummaries]
);
export var GetDatasetContentRequest = struct(
  n0,
  _GDCR,
  0,
  [_dN, _vI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
  ]
);
export var GetDatasetContentResponse = struct(
  n0,
  _GDCRe,
  0,
  [_e, _ti, _st],
  [() => DatasetEntries, 4, () => DatasetContentStatus]
);
export var ListDatasetContentsRequest = struct(
  n0,
  _LDCR,
  0,
  [_dN, _nT, _mR, _sOOA, _sB],
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
    [
      4,
      {
        [_hQ]: _sOOA,
      },
    ],
    [
      4,
      {
        [_hQ]: _sB,
      },
    ],
  ]
);
export var ListDatasetContentsResponse = struct(n0, _LDCRi, 0, [_dCS, _nT], [() => DatasetContentSummaries, 0]);
export var ListDatasetsRequest = struct(
  n0,
  _LDRi,
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
export var ListDatasetsResponse = struct(n0, _LDRis, 0, [_dSa, _nT], [() => DatasetSummaries, 0]);
export var ListPipelinesRequest = struct(
  n0,
  _LPR,
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
export var ListPipelinesResponse = struct(n0, _LPRi, 0, [_pS, _nT], [() => PipelineSummaries, 0]);
export var PipelineSummary = struct(n0, _PS, 0, [_pN, _rS, _cT, _lUT], [0, () => ReprocessingSummaries, 4, 4]);
export var ReprocessingSummary = struct(n0, _RS, 0, [_id, _st, _cT], [0, 0, 4]);
export var DatasetActionSummaries = list(n0, _DASa, 0, () => DatasetActionSummary);
export var DatasetContentSummaries = list(n0, _DCSat, 0, () => DatasetContentSummary);
export var DatasetEntries = list(n0, _DEa, 0, () => DatasetEntry);
export var DatasetSummaries = list(n0, _DSata, 0, () => DatasetSummary);
export var PipelineSummaries = list(n0, _PSi, 0, () => PipelineSummary);
export var ReprocessingSummaries = list(n0, _RSe, 0, () => ReprocessingSummary);
export var GetDatasetContent = op(
  n0,
  _GDC,
  {
    [_h]: ["GET", "/datasets/{datasetName}/content", 200],
  },
  () => GetDatasetContentRequest,
  () => GetDatasetContentResponse
);
export var ListDatasetContents = op(
  n0,
  _LDC,
  {
    [_h]: ["GET", "/datasets/{datasetName}/contents", 200],
  },
  () => ListDatasetContentsRequest,
  () => ListDatasetContentsResponse
);
export var ListDatasets = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/datasets", 200],
  },
  () => ListDatasetsRequest,
  () => ListDatasetsResponse
);
export var ListPipelines = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/pipelines", 200],
  },
  () => ListPipelinesRequest,
  () => ListPipelinesResponse
);
