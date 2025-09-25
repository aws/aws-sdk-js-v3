// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidAggregationException as __InvalidAggregationException,
  InvalidQueryException as __InvalidQueryException,
} from "../models/index";
import {
  _aF,
  _AT,
  _at,
  _aTg,
  _av,
  _BAT,
  _bAT,
  _Bu,
  _bu,
  _Buc,
  _ca,
  _cD,
  _CDTG,
  _CDTGR,
  _CDTGRr,
  _CFM,
  _CFMR,
  _CFMRr,
  _cl,
  _conn,
  _conne,
  _cou,
  _d,
  _dD,
  _DFMe,
  _DFMRe,
  _DFMRes,
  _dR,
  _DTGe,
  _DTGRes,
  _DTGResc,
  _er,
  _eV,
  _GBA,
  _GBAR,
  _GBARe,
  _GC,
  _GCR,
  _GCRe,
  _GPe,
  _GPRet,
  _GPRete,
  _GS,
  _GSR,
  _GSRe,
  _h,
  _hE,
  _IAE,
  _iN,
  _IQE,
  _kV,
  _lMD,
  _mA,
  _max,
  _mB,
  _me,
  _mi,
  _mNe,
  _mR,
  _n,
  _nT,
  _Pe,
  _pe,
  _per,
  _perc,
  _perce,
  _pGN,
  _pGNa,
  _PP,
  _qS,
  _qV,
  _rTPTG,
  _sDtd,
  _sh,
  _SIe,
  _SIR,
  _SIRe,
  _sOS,
  _St,
  _st,
  _sta,
  _sum,
  _TA,
  _tAe,
  _tag,
  _TC,
  _tCo,
  _TD,
  _TDL,
  _tG,
  _tGA,
  _TGD,
  _tGD,
  _TGDL,
  _tGI,
  _TGM,
  _tGM,
  _tGN,
  _tGNh,
  _tGP,
  _th,
  _ti,
  _tIh,
  _tN,
  _tTN,
  _u,
  _UDTG,
  _UDTGR,
  _UDTGRp,
  _UFM,
  _UFMR,
  _v,
  _va,
  _var,
  _ve,
  n0,
  TagList,
  Unit,
} from "./schemas_0";
import { ThingGroupNameAndArnList } from "./schemas_42_Thing";
import { ThingGroupProperties } from "./schemas_44_Thing";

/* eslint no-var: 0 */

export var AggregationType = struct(n0, _AT, 0, [_n, _v], [0, 64 | 0]);
export var Bucket = struct(n0, _Bu, 0, [_kV, _cou], [0, 1]);
export var BucketsAggregationType = struct(n0, _BAT, 0, [_tAe], [() => TermsAggregation]);
export var CreateDynamicThingGroupRequest = struct(
  n0,
  _CDTGR,
  0,
  [_tGNh, _tGP, _iN, _qS, _qV, _tag],
  [[0, 1], () => ThingGroupProperties, 0, 0, 0, () => TagList]
);
export var CreateDynamicThingGroupResponse = struct(
  n0,
  _CDTGRr,
  0,
  [_tGNh, _tGA, _tGI, _iN, _qS, _qV],
  [0, 0, 0, 0, 0, 0]
);
export var CreateFleetMetricRequest = struct(
  n0,
  _CFMR,
  0,
  [_mNe, _qS, _aTg, _pe, _aF, _d, _qV, _iN, _u, _tag],
  [[0, 1], 0, () => AggregationType, 1, 0, 0, 0, 0, 0, () => TagList]
);
export var CreateFleetMetricResponse = struct(n0, _CFMRr, 0, [_mNe, _mA], [0, 0]);
export var DescribeFleetMetricRequest = struct(n0, _DFMRe, 0, [_mNe], [[0, 1]]);
export var DescribeFleetMetricResponse = struct(
  n0,
  _DFMRes,
  0,
  [_mNe, _qS, _aTg, _pe, _aF, _d, _qV, _iN, _cD, _lMD, _u, _ve, _mA],
  [0, 0, () => AggregationType, 1, 0, 0, 0, 0, 4, 4, 0, 1, 0]
);
export var DescribeThingGroupRequest = struct(n0, _DTGRes, 0, [_tGNh], [[0, 1]]);
export var DescribeThingGroupResponse = struct(
  n0,
  _DTGResc,
  0,
  [_tGNh, _tGI, _tGA, _ve, _tGP, _tGM, _iN, _qS, _qV, _st],
  [0, 0, 0, 1, () => ThingGroupProperties, () => ThingGroupMetadata, 0, 0, 0, 0]
);
export var GetBucketsAggregationRequest = struct(
  n0,
  _GBAR,
  0,
  [_iN, _qS, _aF, _qV, _bAT],
  [0, 0, 0, 0, () => BucketsAggregationType]
);
export var GetBucketsAggregationResponse = struct(n0, _GBARe, 0, [_tCo, _bu], [1, () => Buckets]);
export var GetCardinalityRequest = struct(n0, _GCR, 0, [_iN, _qS, _aF, _qV], [0, 0, 0, 0]);
export var GetCardinalityResponse = struct(n0, _GCRe, 0, [_ca], [1]);
export var GetPercentilesRequest = struct(n0, _GPRet, 0, [_iN, _qS, _aF, _qV, _per], [0, 0, 0, 0, 64 | 1]);
export var GetPercentilesResponse = struct(n0, _GPRete, 0, [_perc], [() => Percentiles]);
export var GetStatisticsRequest = struct(n0, _GSR, 0, [_iN, _qS, _aF, _qV], [0, 0, 0, 0]);
export var GetStatisticsResponse = struct(n0, _GSRe, 0, [_sta], [() => Statistics]);
export var InvalidAggregationException = error(
  n0,
  _IAE,
  {
    [_er]: _cl,
    [_hE]: 400,
  },
  [_me],
  [0],

  __InvalidAggregationException
);
export var InvalidQueryException = error(
  n0,
  _IQE,
  {
    [_er]: _cl,
    [_hE]: 400,
  },
  [_me],
  [0],

  __InvalidQueryException
);
export var PercentPair = struct(n0, _PP, 0, [_perce, _va], [1, 1]);
export var SearchIndexRequest = struct(n0, _SIR, 0, [_iN, _qS, _nT, _mR, _qV], [0, 0, 0, 1, 0]);
export var SearchIndexResponse = struct(
  n0,
  _SIRe,
  0,
  [_nT, _th, _tG],
  [0, () => ThingDocumentList, () => ThingGroupDocumentList]
);
export var Statistics = struct(n0, _St, 0, [_cou, _av, _sum, _mi, _max, _sOS, _var, _sDtd], [1, 1, 1, 1, 1, 1, 1, 1]);
export var TermsAggregation = struct(n0, _TA, 0, [_mB], [1]);
export var ThingConnectivity = struct(n0, _TC, 0, [_conn, _ti, _dR], [2, 1, 0]);
export var ThingDocument = struct(
  n0,
  _TD,
  0,
  [_tN, _tIh, _tTN, _tGN, _at, _sh, _dD, _conne],
  [0, 0, 0, 64 | 0, 128 | 0, 0, 0, () => ThingConnectivity]
);
export var ThingGroupDocument = struct(n0, _TGD, 0, [_tGNh, _tGI, _tGD, _at, _pGNa], [0, 0, 0, 128 | 0, 64 | 0]);
export var ThingGroupMetadata = struct(n0, _TGM, 0, [_pGN, _rTPTG, _cD], [0, () => ThingGroupNameAndArnList, 4]);
export var UpdateDynamicThingGroupRequest = struct(
  n0,
  _UDTGR,
  0,
  [_tGNh, _tGP, _eV, _iN, _qS, _qV],
  [[0, 1], () => ThingGroupProperties, 1, 0, 0, 0]
);
export var UpdateDynamicThingGroupResponse = struct(n0, _UDTGRp, 0, [_ve], [1]);
export var UpdateFleetMetricRequest = struct(
  n0,
  _UFMR,
  0,
  [_mNe, _qS, _aTg, _pe, _aF, _d, _qV, _iN, _u, _eV],
  [[0, 1], 0, () => AggregationType, 1, 0, 0, 0, 0, 0, 1]
);
export var AggregationTypeValues = 64 | 0;

export var Buckets = list(n0, _Buc, 0, () => Bucket);
export var Percentiles = list(n0, _Pe, 0, () => PercentPair);
export var PercentList = 64 | 1;

export var ThingDocumentList = list(n0, _TDL, 0, () => ThingDocument);
export var ThingGroupDocumentList = list(n0, _TGDL, 0, () => ThingGroupDocument);
export var ThingGroupNameList = 64 | 0;

export var CreateDynamicThingGroup = op(
  n0,
  _CDTG,
  {
    [_h]: ["POST", "/dynamic-thing-groups/{thingGroupName}", 200],
  },
  () => CreateDynamicThingGroupRequest,
  () => CreateDynamicThingGroupResponse
);
export var CreateFleetMetric = op(
  n0,
  _CFM,
  {
    [_h]: ["PUT", "/fleet-metric/{metricName}", 200],
  },
  () => CreateFleetMetricRequest,
  () => CreateFleetMetricResponse
);
export var DescribeFleetMetric = op(
  n0,
  _DFMe,
  {
    [_h]: ["GET", "/fleet-metric/{metricName}", 200],
  },
  () => DescribeFleetMetricRequest,
  () => DescribeFleetMetricResponse
);
export var DescribeThingGroup = op(
  n0,
  _DTGe,
  {
    [_h]: ["GET", "/thing-groups/{thingGroupName}", 200],
  },
  () => DescribeThingGroupRequest,
  () => DescribeThingGroupResponse
);
export var GetBucketsAggregation = op(
  n0,
  _GBA,
  {
    [_h]: ["POST", "/indices/buckets", 200],
  },
  () => GetBucketsAggregationRequest,
  () => GetBucketsAggregationResponse
);
export var GetCardinality = op(
  n0,
  _GC,
  {
    [_h]: ["POST", "/indices/cardinality", 200],
  },
  () => GetCardinalityRequest,
  () => GetCardinalityResponse
);
export var GetPercentiles = op(
  n0,
  _GPe,
  {
    [_h]: ["POST", "/indices/percentiles", 200],
  },
  () => GetPercentilesRequest,
  () => GetPercentilesResponse
);
export var GetStatistics = op(
  n0,
  _GS,
  {
    [_h]: ["POST", "/indices/statistics", 200],
  },
  () => GetStatisticsRequest,
  () => GetStatisticsResponse
);
export var SearchIndex = op(
  n0,
  _SIe,
  {
    [_h]: ["POST", "/indices/search", 200],
  },
  () => SearchIndexRequest,
  () => SearchIndexResponse
);
export var UpdateDynamicThingGroup = op(
  n0,
  _UDTG,
  {
    [_h]: ["PATCH", "/dynamic-thing-groups/{thingGroupName}", 200],
  },
  () => UpdateDynamicThingGroupRequest,
  () => UpdateDynamicThingGroupResponse
);
export var UpdateFleetMetric = op(
  n0,
  _UFM,
  {
    [_h]: ["PATCH", "/fleet-metric/{metricName}", 200],
  },
  () => UpdateFleetMetricRequest,
  () => Unit
);
