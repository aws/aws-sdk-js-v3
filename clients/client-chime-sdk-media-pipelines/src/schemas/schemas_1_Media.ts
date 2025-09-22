// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ATCAPC,
  _ATPC,
  _CASC,
  _CIT,
  _CRO,
  _CRTo,
  _CT,
  _D,
  _DARA,
  _De,
  _E,
  _EPRS,
  _FPR,
  _GMIPC,
  _GMIPCR,
  _GMIPCRe,
  _h,
  _I,
  _IDC,
  _IL,
  _IML,
  _IT,
  _K,
  _KDSSC,
  _KMC,
  _LC,
  _LFSC,
  _LMN,
  _LO,
  _MIPC,
  _MIPCA,
  _MIPCE,
  _MIPCEe,
  _MIPCI,
  _MIPCN,
  _N,
  _OEKMSKI,
  _OL,
  _PCAS,
  _PET,
  _PL,
  _PRS,
  _RARA,
  _RFF,
  _RN,
  _RTAC,
  _RTAR,
  _RTARL,
  _Ru,
  _SCe,
  _SQSC,
  _SRSC,
  _SSL,
  _SSS,
  _STe,
  _STSC,
  _T,
  _TPi,
  _UT,
  _VAPC,
  _VESC,
  _VFM,
  _VFN,
  _VFNo,
  _VN,
  _VNo,
  _VTAS,
  Arn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AmazonTranscribeCallAnalyticsProcessorConfiguration = struct(
  n0,
  _ATCAPC,
  0,
  [_LC, _VN, _VFN, _VFM, _LMN, _EPRS, _PRS, _CIT, _CRTo, _PET, _FPR, _PCAS, _CASC],
  [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, () => PostCallAnalyticsSettings, 64 | 0]
);
export var AmazonTranscribeProcessorConfiguration = struct(
  n0,
  _ATPC,
  0,
  [_LC, _VN, _VFN, _VFM, _SSL, _EPRS, _PRS, _CIT, _CRTo, _PET, _LMN, _FPR, _IL, _IML, _LO, _PL, _VNo, _VFNo],
  [0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0]
);
export var GetMediaInsightsPipelineConfigurationRequest = struct(n0, _GMIPCR, 0, [_I], [[0, 1]]);
export var GetMediaInsightsPipelineConfigurationResponse = struct(
  n0,
  _GMIPCRe,
  0,
  [_MIPC],
  [[() => MediaInsightsPipelineConfiguration, 0]]
);
export var IssueDetectionConfiguration = struct(n0, _IDC, 0, [_RN], [0]);
export var KeywordMatchConfiguration = struct(n0, _KMC, 0, [_RN, _K, _N], [0, 64 | 0, 2]);
export var KinesisDataStreamSinkConfiguration = struct(n0, _KDSSC, 0, [_IT], [[() => Arn, 0]]);
export var LambdaFunctionSinkConfiguration = struct(n0, _LFSC, 0, [_IT], [[() => Arn, 0]]);
export var MediaInsightsPipelineConfiguration = struct(
  n0,
  _MIPC,
  0,
  [_MIPCN, _MIPCA, _RARA, _RTAC, _E, _MIPCI, _CT, _UT],
  [
    0,
    [() => Arn, 0],
    [() => Arn, 0],
    () => RealTimeAlertConfiguration,
    [() => MediaInsightsPipelineConfigurationElements, 0],
    0,
    5,
    5,
  ]
);
export var MediaInsightsPipelineConfigurationElement = struct(
  n0,
  _MIPCE,
  0,
  [_T, _ATCAPC, _ATPC, _KDSSC, _SRSC, _VAPC, _LFSC, _SQSC, _STSC, _VESC],
  [
    0,
    () => AmazonTranscribeCallAnalyticsProcessorConfiguration,
    () => AmazonTranscribeProcessorConfiguration,
    [() => KinesisDataStreamSinkConfiguration, 0],
    [() => S3RecordingSinkConfiguration, 0],
    () => VoiceAnalyticsProcessorConfiguration,
    [() => LambdaFunctionSinkConfiguration, 0],
    [() => SqsQueueSinkConfiguration, 0],
    [() => SnsTopicSinkConfiguration, 0],
    () => VoiceEnhancementSinkConfiguration,
  ]
);
export var PostCallAnalyticsSettings = struct(n0, _PCAS, 0, [_OL, _DARA, _CRO, _OEKMSKI], [0, 0, 0, 0]);
export var RealTimeAlertConfiguration = struct(n0, _RTAC, 0, [_D, _Ru], [2, () => RealTimeAlertRuleList]);
export var RealTimeAlertRule = struct(
  n0,
  _RTAR,
  0,
  [_T, _KMC, _SCe, _IDC],
  [0, () => KeywordMatchConfiguration, () => SentimentConfiguration, () => IssueDetectionConfiguration]
);
export var S3RecordingSinkConfiguration = struct(n0, _SRSC, 0, [_De, _RFF], [[() => Arn, 0], 0]);
export var SentimentConfiguration = struct(n0, _SCe, 0, [_RN, _STe, _TPi], [0, 0, 1]);
export var SnsTopicSinkConfiguration = struct(n0, _STSC, 0, [_IT], [[() => Arn, 0]]);
export var SqsQueueSinkConfiguration = struct(n0, _SQSC, 0, [_IT], [[() => Arn, 0]]);
export var VoiceAnalyticsProcessorConfiguration = struct(n0, _VAPC, 0, [_SSS, _VTAS], [0, 0]);
export var VoiceEnhancementSinkConfiguration = struct(n0, _VESC, 0, [_D], [2]);
export var CategoryNameList = 64 | 0;

export var KeywordMatchWordList = 64 | 0;

export var MediaInsightsPipelineConfigurationElements = list(n0, _MIPCEe, 0, [
  () => MediaInsightsPipelineConfigurationElement,
  0,
]);
export var RealTimeAlertRuleList = list(n0, _RTARL, 0, () => RealTimeAlertRule);
export var GetMediaInsightsPipelineConfiguration = op(
  n0,
  _GMIPC,
  {
    [_h]: ["GET", "/media-insights-pipeline-configurations/{Identifier}", 200],
  },
  () => GetMediaInsightsPipelineConfigurationRequest,
  () => GetMediaInsightsPipelineConfigurationResponse
);
