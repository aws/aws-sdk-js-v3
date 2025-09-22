// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AN,
  _AT,
  _At,
  _AV,
  _CDR,
  _CDr,
  _CDRr,
  _CE,
  _CER,
  _CERr,
  _CF,
  _CFR,
  _CFRr,
  _Co,
  _CT,
  _CWIA,
  _CWIAR,
  _CWIARr,
  _CWIF,
  _CWIFR,
  _CWIFRr,
  _D,
  _DAa,
  _DDes,
  _DDRe,
  _DDRes,
  _DF,
  _DFes,
  _DFRe,
  _DFRes,
  _DGA,
  _DN,
  _DS,
  _DT,
  _DWIAe,
  _DWIARe,
  _DWIARes,
  _DWIFe,
  _DWIFRe,
  _DWIFRes,
  _EA,
  _EC,
  _ECx,
  _EDT,
  _EN,
  _ETRIM,
  _EV,
  _F,
  _FA,
  _FN,
  _FT,
  _LMT,
  _M,
  _O,
  _PA,
  _RA,
  _S,
  _SA,
  _SAc,
  _SC,
  _SDT,
  _St,
  _Ta,
  _TF,
  _TSC,
  _TSCi,
  _TSI,
  _TSRDS,
  _TSS,
  _TST,
  _TSTi,
  _V,
  _WIAA,
  _WIAN,
  _WIFAh,
  _WIFN,
  n0,
  S3Config,
  Tags,
} from "./schemas_0";
import { EncryptionConfig } from "./schemas_4_Predictor";
import { DataSource } from "./schemas_28_Describe";
import { ExplainabilityConfig } from "./schemas_35_Explainability";

/* eslint no-var: 0 */

export var Action = struct(n0, _A, 0, [_AN, _O, _V], [0, 0, 1]);
export var CreateDatasetRequest = struct(
  n0,
  _CDR,
  0,
  [_DN, _D, _DT, _DF, _S, _EC, _Ta],
  [0, 0, 0, 0, () => Schema, () => EncryptionConfig, [() => Tags, 0]]
);
export var CreateDatasetResponse = struct(n0, _CDRr, 0, [_DAa], [0]);
export var CreateExplainabilityRequest = struct(
  n0,
  _CER,
  0,
  [_EN, _RA, _ECx, _DS, _S, _EV, _SDT, _EDT, _Ta],
  [0, 0, () => ExplainabilityConfig, () => DataSource, () => Schema, 2, 0, 0, [() => Tags, 0]]
);
export var CreateExplainabilityResponse = struct(n0, _CERr, 0, [_EA], [0]);
export var CreateForecastRequest = struct(
  n0,
  _CFR,
  0,
  [_FN, _PA, _FT, _Ta, _TSS],
  [0, 0, 64 | 0, [() => Tags, 0], () => TimeSeriesSelector]
);
export var CreateForecastResponse = struct(n0, _CFRr, 0, [_FA], [0]);
export var CreateWhatIfAnalysisRequest = struct(
  n0,
  _CWIAR,
  0,
  [_WIAN, _FA, _TSS, _Ta],
  [0, 0, () => TimeSeriesSelector, [() => Tags, 0]]
);
export var CreateWhatIfAnalysisResponse = struct(n0, _CWIARr, 0, [_WIAA], [0]);
export var CreateWhatIfForecastRequest = struct(
  n0,
  _CWIFR,
  0,
  [_WIFN, _WIAA, _TST, _TSRDS, _Ta],
  [0, 0, () => TimeSeriesTransformations, () => TimeSeriesReplacementsDataSource, [() => Tags, 0]]
);
export var CreateWhatIfForecastResponse = struct(n0, _CWIFRr, 0, [_WIFAh], [0]);
export var DescribeDatasetRequest = struct(n0, _DDRe, 0, [_DAa], [0]);
export var DescribeDatasetResponse = struct(
  n0,
  _DDRes,
  0,
  [_DAa, _DN, _D, _DT, _DF, _S, _EC, _St, _CT, _LMT],
  [0, 0, 0, 0, 0, () => Schema, () => EncryptionConfig, 0, 4, 4]
);
export var DescribeForecastRequest = struct(n0, _DFRe, 0, [_FA], [0]);
export var DescribeForecastResponse = struct(
  n0,
  _DFRes,
  0,
  [_FA, _FN, _FT, _PA, _DGA, _ETRIM, _St, _M, _CT, _LMT, _TSS],
  [0, 0, 64 | 0, 0, 0, 1, 0, 0, 4, 4, () => TimeSeriesSelector]
);
export var DescribeWhatIfAnalysisRequest = struct(n0, _DWIARe, 0, [_WIAA], [0]);
export var DescribeWhatIfAnalysisResponse = struct(
  n0,
  _DWIARes,
  0,
  [_WIAN, _WIAA, _FA, _ETRIM, _St, _M, _CT, _LMT, _TSS],
  [0, 0, 0, 1, 0, 0, 4, 4, () => TimeSeriesSelector]
);
export var DescribeWhatIfForecastRequest = struct(n0, _DWIFRe, 0, [_WIFAh], [0]);
export var DescribeWhatIfForecastResponse = struct(
  n0,
  _DWIFRes,
  0,
  [_WIFN, _WIFAh, _WIAA, _ETRIM, _St, _M, _CT, _LMT, _TST, _TSRDS, _FT],
  [0, 0, 0, 1, 0, 0, 4, 4, () => TimeSeriesTransformations, () => TimeSeriesReplacementsDataSource, 64 | 0]
);
export var Schema = struct(n0, _S, 0, [_At], [() => SchemaAttributes]);
export var SchemaAttribute = struct(n0, _SA, 0, [_AN, _AT], [0, 0]);
export var TimeSeriesCondition = struct(n0, _TSC, 0, [_AN, _AV, _Co], [0, 0, 0]);
export var TimeSeriesIdentifiers = struct(n0, _TSI, 0, [_DS, _S, _F], [() => DataSource, () => Schema, 0]);
export var TimeSeriesReplacementsDataSource = struct(
  n0,
  _TSRDS,
  0,
  [_SC, _S, _F, _TF],
  [() => S3Config, () => Schema, 0, 0]
);
export var TimeSeriesSelector = struct(n0, _TSS, 0, [_TSI], [() => TimeSeriesIdentifiers]);
export var TimeSeriesTransformation = struct(n0, _TSTi, 0, [_A, _TSCi], [() => Action, () => TimeSeriesConditions]);
export var SchemaAttributes = list(n0, _SAc, 0, () => SchemaAttribute);
export var TimeSeriesConditions = list(n0, _TSCi, 0, () => TimeSeriesCondition);
export var TimeSeriesTransformations = list(n0, _TST, 0, () => TimeSeriesTransformation);
export var CreateDataset = op(
  n0,
  _CDr,
  0,
  () => CreateDatasetRequest,
  () => CreateDatasetResponse
);
export var CreateExplainability = op(
  n0,
  _CE,
  0,
  () => CreateExplainabilityRequest,
  () => CreateExplainabilityResponse
);
export var CreateForecast = op(
  n0,
  _CF,
  0,
  () => CreateForecastRequest,
  () => CreateForecastResponse
);
export var CreateWhatIfAnalysis = op(
  n0,
  _CWIA,
  0,
  () => CreateWhatIfAnalysisRequest,
  () => CreateWhatIfAnalysisResponse
);
export var CreateWhatIfForecast = op(
  n0,
  _CWIF,
  0,
  () => CreateWhatIfForecastRequest,
  () => CreateWhatIfForecastResponse
);
export var DescribeDataset = op(
  n0,
  _DDes,
  2,
  () => DescribeDatasetRequest,
  () => DescribeDatasetResponse
);
export var DescribeForecast = op(
  n0,
  _DFes,
  2,
  () => DescribeForecastRequest,
  () => DescribeForecastResponse
);
export var DescribeWhatIfAnalysis = op(
  n0,
  _DWIAe,
  2,
  () => DescribeWhatIfAnalysisRequest,
  () => DescribeWhatIfAnalysisResponse
);
export var DescribeWhatIfForecast = op(
  n0,
  _DWIFe,
  2,
  () => DescribeWhatIfForecastRequest,
  () => DescribeWhatIfForecastResponse
);
