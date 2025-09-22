// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AA,
  _AD,
  _ADA,
  _AF,
  _AFC,
  _AFg,
  _AG,
  _AGI,
  _AGS,
  _AGSL,
  _AGSn,
  _AGSno,
  _Al,
  _AN,
  _AS,
  _ASC,
  _AST,
  _AT,
  _BTC,
  _C,
  _CA,
  _CAR,
  _CARr,
  _CF,
  _CFD,
  _CH,
  _CI,
  _CM,
  _CMS,
  _CMSR,
  _CMSRr,
  _CN,
  _CS,
  _CT,
  _CWC,
  _D,
  _DAe,
  _DARes,
  _DAResc,
  _DBII,
  _DC,
  _DCi,
  _DCL,
  _DFi,
  _DFL,
  _DH,
  _DL,
  _DMSe,
  _DMSR,
  _DMSRe,
  _DN,
  _DNi,
  _DNV,
  _DNVL,
  _DP,
  _DV,
  _DVC,
  _DVCL,
  _DVL,
  _ESD,
  _ET,
  _F,
  _FC,
  _FFD,
  _FL,
  _FN,
  _FO,
  _GAG,
  _GAGR,
  _GAGRe,
  _GSD,
  _GSDR,
  _GSDRe,
  _h,
  _HDPL,
  _HL,
  _HV,
  _IMS,
  _IMSL,
  _JFD,
  _LA,
  _LAGS,
  _LAGSR,
  _LAGSRi,
  _LAGTS,
  _LAGTSR,
  _LAGTSRi,
  _LC,
  _LMT,
  _Me,
  _ML,
  _MLI,
  _MLIL,
  _MN,
  _MR,
  _MS,
  _MSA,
  _MSD,
  _MSDF,
  _MSDFL,
  _MSF,
  _MSN,
  _MVL,
  _Na,
  _Nam,
  _NT,
  _NTS,
  _O,
  _OC,
  _PMN,
  _QS,
  _RA,
  _RBTM,
  _RDSSC,
  _RSC,
  _SDSSC,
  _SF,
  _SGIL,
  _SIL,
  _SMA,
  _SNSC,
  _SR,
  _SRP,
  _SSC,
  _STA,
  _STe,
  _STt,
  _T,
  _TC,
  _TCi,
  _Ti,
  _TL,
  _TN,
  _TPL,
  _TS,
  _TSI,
  _TSL,
  _UA,
  _UAR,
  _UARp,
  _UMS,
  _UMSR,
  _UMSRp,
  _VC,
  _WGN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Action = struct(n0, _A, 0, [_SNSC, _LC], [() => SNSConfiguration, () => LambdaConfiguration]);
export var Alert = struct(
  n0,
  _Al,
  0,
  [_A, _AD, _AA, _ADA, _AN, _AST, _AT, _AS, _LMT, _CT, _AF],
  [() => Action, 0, 0, 0, 0, 1, 0, 0, 4, 4, () => AlertFilters]
);
export var AlertFilters = struct(n0, _AF, 0, [_ML, _DFL], [64 | 0, () => DimensionFilterList]);
export var AnomalyGroup = struct(
  n0,
  _AG,
  0,
  [_STt, _ET, _AGI, _AGS, _PMN, _MLIL],
  [0, 0, 0, 1, 0, () => MetricLevelImpactList]
);
export var AnomalyGroupStatistics = struct(n0, _AGSn, 0, [_ESD, _TC, _IMSL], [0, 1, () => ItemizedMetricStatsList]);
export var AnomalyGroupSummary = struct(n0, _AGSno, 0, [_STt, _ET, _AGI, _AGS, _PMN], [0, 0, 0, 1, 0]);
export var AppFlowConfig = struct(n0, _AFC, 0, [_RA, _FN], [0, 0]);
export var AthenaSourceConfig = struct(
  n0,
  _ASC,
  0,
  [_RA, _DN, _DC, _TN, _WGN, _SRP, _BTC],
  [0, 0, 0, 0, 0, 0, () => BackTestConfiguration]
);
export var BackTestConfiguration = struct(n0, _BTC, 0, [_RBTM], [2]);
export var CloudWatchConfig = struct(n0, _CWC, 0, [_RA, _BTC], [0, () => BackTestConfiguration]);
export var ContributionMatrix = struct(n0, _CM, 0, [_DCL], [() => DimensionContributionList]);
export var CreateAlertRequest = struct(
  n0,
  _CAR,
  0,
  [_AN, _AST, _AD, _ADA, _A, _T, _AF],
  [0, 1, 0, 0, () => Action, 128 | 0, () => AlertFilters]
);
export var CreateAlertResponse = struct(n0, _CARr, 0, [_AA], [0]);
export var CreateMetricSetRequest = struct(
  n0,
  _CMSR,
  0,
  [_ADA, _MSN, _MSD, _ML, _O, _TCi, _DL, _MSF, _MS, _Ti, _T, _DFL],
  [
    0,
    0,
    0,
    () => MetricList,
    1,
    () => TimestampColumn,
    64 | 0,
    0,
    () => MetricSource,
    0,
    128 | 0,
    () => MetricSetDimensionFilterList,
  ]
);
export var CreateMetricSetResponse = struct(n0, _CMSRr, 0, [_MSA], [0]);
export var CsvFormatDescriptor = struct(n0, _CFD, 0, [_FC, _C, _CH, _D, _HL, _QS], [0, 0, 2, 0, 64 | 0, 0]);
export var DescribeAlertRequest = struct(n0, _DARes, 0, [_AA], [0]);
export var DescribeAlertResponse = struct(n0, _DAResc, 0, [_Al], [() => Alert]);
export var DescribeMetricSetRequest = struct(n0, _DMSR, 0, [_MSA], [0]);
export var DescribeMetricSetResponse = struct(
  n0,
  _DMSRe,
  0,
  [_MSA, _ADA, _MSN, _MSD, _CT, _LMT, _O, _ML, _TCi, _DL, _MSF, _Ti, _MS, _DFL],
  [
    0,
    0,
    0,
    0,
    4,
    4,
    1,
    () => MetricList,
    () => TimestampColumn,
    64 | 0,
    0,
    0,
    () => MetricSource,
    () => MetricSetDimensionFilterList,
  ]
);
export var DimensionContribution = struct(n0, _DCi, 0, [_DNi, _DVCL], [0, () => DimensionValueContributionList]);
export var DimensionFilter = struct(n0, _DFi, 0, [_DNi, _DVL], [0, 64 | 0]);
export var DimensionNameValue = struct(n0, _DNV, 0, [_DNi, _DV], [0, 0]);
export var DimensionValueContribution = struct(n0, _DVC, 0, [_DV, _CS], [0, 1]);
export var FileFormatDescriptor = struct(
  n0,
  _FFD,
  0,
  [_CFD, _JFD],
  [() => CsvFormatDescriptor, () => JsonFormatDescriptor]
);
export var Filter = struct(n0, _F, 0, [_DV, _FO], [0, 0]);
export var GetAnomalyGroupRequest = struct(n0, _GAGR, 0, [_AGI, _ADA], [0, 0]);
export var GetAnomalyGroupResponse = struct(n0, _GAGRe, 0, [_AG], [() => AnomalyGroup]);
export var GetSampleDataRequest = struct(n0, _GSDR, 0, [_SSC], [() => SampleDataS3SourceConfig]);
export var GetSampleDataResponse = struct(n0, _GSDRe, 0, [_HV, _SR], [64 | 0, list(n0, _SR, 0, 64 | 0)]);
export var ItemizedMetricStats = struct(n0, _IMS, 0, [_MN, _OC], [0, 1]);
export var JsonFormatDescriptor = struct(n0, _JFD, 0, [_FC, _C], [0, 0]);
export var LambdaConfiguration = struct(n0, _LC, 0, [_RA, _LA], [0, 0]);
export var ListAnomalyGroupSummariesRequest = struct(n0, _LAGSR, 0, [_ADA, _STe, _MR, _NT], [0, 1, 1, 0]);
export var ListAnomalyGroupSummariesResponse = struct(
  n0,
  _LAGSRi,
  0,
  [_AGSL, _AGSn, _NT],
  [() => AnomalyGroupSummaryList, () => AnomalyGroupStatistics, 0]
);
export var ListAnomalyGroupTimeSeriesRequest = struct(n0, _LAGTSR, 0, [_ADA, _AGI, _MN, _MR, _NT], [0, 0, 0, 1, 0]);
export var ListAnomalyGroupTimeSeriesResponse = struct(
  n0,
  _LAGTSRi,
  0,
  [_AGI, _MN, _TL, _NT, _TSL],
  [0, 0, 64 | 0, 0, () => TimeSeriesList]
);
export var Metric = struct(n0, _Me, 0, [_MN, _AFg, _Na], [0, 0, 0]);
export var MetricLevelImpact = struct(n0, _MLI, 0, [_MN, _NTS, _CM], [0, 1, () => ContributionMatrix]);
export var MetricSetDimensionFilter = struct(n0, _MSDF, 0, [_Nam, _FL], [0, () => FilterList]);
export var MetricSource = struct(
  n0,
  _MS,
  0,
  [_SSC, _AFC, _CWC, _RDSSC, _RSC, _ASC],
  [
    () => S3SourceConfig,
    () => AppFlowConfig,
    () => CloudWatchConfig,
    () => RDSSourceConfig,
    () => RedshiftSourceConfig,
    () => AthenaSourceConfig,
  ]
);
export var RDSSourceConfig = struct(
  n0,
  _RDSSC,
  0,
  [_DBII, _DH, _DP, _SMA, _DN, _TN, _RA, _VC],
  [0, 0, 1, 0, 0, 0, 0, () => VpcConfiguration]
);
export var RedshiftSourceConfig = struct(
  n0,
  _RSC,
  0,
  [_CI, _DH, _DP, _SMA, _DN, _TN, _RA, _VC],
  [0, 0, 1, 0, 0, 0, 0, () => VpcConfiguration]
);
export var S3SourceConfig = struct(
  n0,
  _SSC,
  0,
  [_RA, _TPL, _HDPL, _FFD],
  [0, 64 | 0, 64 | 0, () => FileFormatDescriptor]
);
export var SampleDataS3SourceConfig = struct(
  n0,
  _SDSSC,
  0,
  [_RA, _TPL, _HDPL, _FFD],
  [0, 64 | 0, 64 | 0, () => FileFormatDescriptor]
);
export var SNSConfiguration = struct(n0, _SNSC, 0, [_RA, _STA, _SF], [0, 0, 0]);
export var TimeSeries = struct(n0, _TS, 0, [_TSI, _DL, _MVL], [0, () => DimensionNameValueList, 64 | 1]);
export var TimestampColumn = struct(n0, _TCi, 0, [_CN, _CF], [0, 0]);
export var UpdateAlertRequest = struct(
  n0,
  _UAR,
  0,
  [_AA, _AD, _AST, _A, _AF],
  [0, 0, 1, () => Action, () => AlertFilters]
);
export var UpdateAlertResponse = struct(n0, _UARp, 0, [_AA], [0]);
export var UpdateMetricSetRequest = struct(
  n0,
  _UMSR,
  0,
  [_MSA, _MSD, _ML, _O, _TCi, _DL, _MSF, _MS, _DFL],
  [0, 0, () => MetricList, 1, () => TimestampColumn, 64 | 0, 0, () => MetricSource, () => MetricSetDimensionFilterList]
);
export var UpdateMetricSetResponse = struct(n0, _UMSRp, 0, [_MSA], [0]);
export var VpcConfiguration = struct(n0, _VC, 0, [_SIL, _SGIL], [64 | 0, 64 | 0]);
export var AnomalyGroupSummaryList = list(n0, _AGSL, 0, () => AnomalyGroupSummary);
export var DimensionContributionList = list(n0, _DCL, 0, () => DimensionContribution);
export var DimensionFilterList = list(n0, _DFL, 0, () => DimensionFilter);
export var DimensionList = 64 | 0;

export var DimensionNameValueList = list(n0, _DNVL, 0, () => DimensionNameValue);
export var DimensionValueContributionList = list(n0, _DVCL, 0, () => DimensionValueContribution);
export var DimensionValueList = 64 | 0;

export var FilterList = list(n0, _FL, 0, () => Filter);
export var HeaderList = 64 | 0;

export var HeaderValueList = 64 | 0;

export var ItemizedMetricStatsList = list(n0, _IMSL, 0, () => ItemizedMetricStats);
export var MetricLevelImpactList = list(n0, _MLIL, 0, () => MetricLevelImpact);
export var MetricList = list(n0, _ML, 0, () => Metric);
export var MetricNameList = 64 | 0;

export var MetricSetDimensionFilterList = list(n0, _MSDFL, 0, () => MetricSetDimensionFilter);
export var MetricValueList = 64 | 1;

export var SampleRow = 64 | 0;

export var SampleRows = list(n0, _SR, 0, 64 | 0);
export var SecurityGroupIdList = 64 | 0;

export var SubnetIdList = 64 | 0;

export var TimeSeriesList = list(n0, _TSL, 0, () => TimeSeries);
export var TimestampList = 64 | 0;

export var CreateAlert = op(
  n0,
  _CA,
  {
    [_h]: ["POST", "/CreateAlert", 200],
  },
  () => CreateAlertRequest,
  () => CreateAlertResponse
);
export var CreateMetricSet = op(
  n0,
  _CMS,
  {
    [_h]: ["POST", "/CreateMetricSet", 200],
  },
  () => CreateMetricSetRequest,
  () => CreateMetricSetResponse
);
export var DescribeAlert = op(
  n0,
  _DAe,
  {
    [_h]: ["POST", "/DescribeAlert", 200],
  },
  () => DescribeAlertRequest,
  () => DescribeAlertResponse
);
export var DescribeMetricSet = op(
  n0,
  _DMSe,
  {
    [_h]: ["POST", "/DescribeMetricSet", 200],
  },
  () => DescribeMetricSetRequest,
  () => DescribeMetricSetResponse
);
export var GetAnomalyGroup = op(
  n0,
  _GAG,
  {
    [_h]: ["POST", "/GetAnomalyGroup", 200],
  },
  () => GetAnomalyGroupRequest,
  () => GetAnomalyGroupResponse
);
export var GetSampleData = op(
  n0,
  _GSD,
  {
    [_h]: ["POST", "/GetSampleData", 200],
  },
  () => GetSampleDataRequest,
  () => GetSampleDataResponse
);
export var ListAnomalyGroupSummaries = op(
  n0,
  _LAGS,
  {
    [_h]: ["POST", "/ListAnomalyGroupSummaries", 200],
  },
  () => ListAnomalyGroupSummariesRequest,
  () => ListAnomalyGroupSummariesResponse
);
export var ListAnomalyGroupTimeSeries = op(
  n0,
  _LAGTS,
  {
    [_h]: ["POST", "/ListAnomalyGroupTimeSeries", 200],
  },
  () => ListAnomalyGroupTimeSeriesRequest,
  () => ListAnomalyGroupTimeSeriesResponse
);
export var UpdateAlert = op(
  n0,
  _UA,
  {
    [_h]: ["POST", "/UpdateAlert", 200],
  },
  () => UpdateAlertRequest,
  () => UpdateAlertResponse
);
export var UpdateMetricSet = op(
  n0,
  _UMS,
  {
    [_h]: ["POST", "/UpdateMetricSet", 200],
  },
  () => UpdateMetricSetRequest,
  () => UpdateMetricSetResponse
);
