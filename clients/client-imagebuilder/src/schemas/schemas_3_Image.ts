// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _aA,
  _aI,
  _al,
  _aTg,
  _cr,
  _cT,
  _fi,
  _h,
  _ht,
  _IA,
  _iAm,
  _iBVA,
  _IPA,
  _iPA,
  _iPAm,
  _ISFA,
  _ISFAL,
  _LISFA,
  _LISFAR,
  _LISFARi,
  _med,
  _nT,
  _res,
  _rI,
  _SC,
  _sC,
  _SIPE,
  _SIPER,
  _SIPERt,
  _vI,
  _VIA,
  _vIA,
  n0,
} from "./schemas_0";
import { Filter } from "./schemas_1_List";

/* eslint no-var: 0 */

export var AccountAggregation = struct(n0, _AA, 0, [_aI, _sC], [0, () => SeverityCounts]);
export var ImageAggregation = struct(n0, _IA, 0, [_iBVA, _sC], [0, () => SeverityCounts]);
export var ImagePipelineAggregation = struct(n0, _IPA, 0, [_iPA, _sC], [0, () => SeverityCounts]);
export var ImageScanFindingAggregation = struct(
  n0,
  _ISFA,
  0,
  [_aA, _iAm, _iPAm, _vIA],
  [() => AccountAggregation, () => ImageAggregation, () => ImagePipelineAggregation, () => VulnerabilityIdAggregation]
);
export var ListImageScanFindingAggregationsRequest = struct(n0, _LISFAR, 0, [_fi, _nT], [() => Filter, 0]);
export var ListImageScanFindingAggregationsResponse = struct(
  n0,
  _LISFARi,
  0,
  [_rI, _aTg, _res, _nT],
  [0, 0, () => ImageScanFindingAggregationsList, 0]
);
export var SeverityCounts = struct(n0, _SC, 0, [_al, _cr, _h, _med], [1, 1, 1, 1]);
export var StartImagePipelineExecutionRequest = struct(n0, _SIPER, 0, [_iPA, _cT], [0, [0, 4]]);
export var StartImagePipelineExecutionResponse = struct(n0, _SIPERt, 0, [_rI, _cT, _iBVA], [0, 0, 0]);
export var VulnerabilityIdAggregation = struct(n0, _VIA, 0, [_vI, _sC], [0, () => SeverityCounts]);
export var ImageScanFindingAggregationsList = list(n0, _ISFAL, 0, () => ImageScanFindingAggregation);
export var ListImageScanFindingAggregations = op(
  n0,
  _LISFA,
  {
    [_ht]: ["POST", "/ListImageScanFindingAggregations", 200],
  },
  () => ListImageScanFindingAggregationsRequest,
  () => ListImageScanFindingAggregationsResponse
);
export var StartImagePipelineExecution = op(
  n0,
  _SIPE,
  {
    [_ht]: ["PUT", "/StartImagePipelineExecution", 200],
  },
  () => StartImagePipelineExecutionRequest,
  () => StartImagePipelineExecutionResponse
);
