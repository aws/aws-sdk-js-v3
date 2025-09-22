// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _aC,
  _AN,
  _AP,
  _API,
  _Ar,
  _At,
  _AVC,
  _b,
  _BAP,
  _BP,
  _BRS,
  _cP,
  _CPS,
  _CPSI,
  _CT,
  _D,
  _Da,
  _DAe,
  _DARes,
  _DAResc,
  _De,
  _DLC,
  _DRe,
  _DRRe,
  _DRRes,
  _DU,
  _EC,
  _EEC,
  _EECSMT,
  _EET,
  _ELRT,
  _EP,
  _EPc,
  _ESA,
  _EST,
  _ex,
  _f,
  _FA,
  _G,
  _HP,
  _HPt,
  _Id,
  _In,
  _IP,
  _IPM,
  _IT,
  _ITn,
  _JD,
  _JN,
  _K,
  _KP,
  _LT,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _MEAIS,
  _MGI,
  _MRA,
  _N,
  _NC,
  _PC,
  _PCl,
  _PKP,
  _PPL,
  _PPV,
  _PS,
  _PSl,
  _PT,
  _PV,
  _QSP,
  _RA,
  _RAo,
  _RARN,
  _RCP,
  _RCT,
  _RCTu,
  _RD,
  _RDe,
  _RDP,
  _RET,
  _RI,
  _RN,
  _RP,
  _RS,
  _RST,
  _S,
  _SB,
  _SG,
  _Si,
  _SMA,
  _SMPP,
  _SMPPa,
  _SMPPL,
  _SN,
  _SP,
  _Sq,
  _SR,
  _Su,
  _t,
  _Ta,
  _Targ,
  _TC,
  _TDA,
  _TK,
  _TLa,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _V,
  _Va,
  _w,
  _WE,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_3_Resource";

/* eslint no-var: 0 */

export var AwsVpcConfiguration = struct(n0, _AVC, 0, [_Su, _SG, _API], [64 | 0, 64 | 0, 0]);
export var BatchArrayProperties = struct(n0, _BAP, 0, [_Si], [1]);
export var BatchParameters = struct(
  n0,
  _BP,
  0,
  [_JD, _JN, _AP, _RS],
  [0, 0, () => BatchArrayProperties, () => BatchRetryStrategy]
);
export var BatchRetryStrategy = struct(n0, _BRS, 0, [_At], [1]);
export var CapacityProviderStrategyItem = struct(n0, _CPSI, 0, [_cP, _w, _b], [0, 1, 1]);
export var DeadLetterConfig = struct(n0, _DLC, 0, [_Ar], [0]);
export var DescribeArchiveRequest = struct(n0, _DARes, 0, [_AN], [0]);
export var DescribeArchiveResponse = struct(
  n0,
  _DAResc,
  0,
  [_AA, _AN, _ESA, _D, _EP, _S, _SR, _RD, _SB, _EC, _CT],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 4]
);
export var DescribeReplayRequest = struct(n0, _DRRe, 0, [_RN], [0]);
export var DescribeReplayResponse = struct(
  n0,
  _DRRes,
  0,
  [_RN, _RA, _D, _S, _SR, _ESA, _De, _EST, _EET, _ELRT, _RST, _RET],
  [0, 0, 0, 0, 0, 0, () => ReplayDestination, 4, 4, 4, 4, 4]
);
export var EcsParameters = struct(
  n0,
  _EPc,
  0,
  [_TDA, _TC, _LT, _NC, _PV, _G, _CPS, _EECSMT, _EEC, _PC, _PS, _PT, _RI, _Ta],
  [
    0,
    1,
    0,
    () => NetworkConfiguration,
    0,
    0,
    () => CapacityProviderStrategy,
    2,
    2,
    () => PlacementConstraints,
    () => PlacementStrategies,
    0,
    0,
    () => TagList,
  ]
);
export var HttpParameters = struct(n0, _HPt, 0, [_PPV, _HP, _QSP], [64 | 0, 128 | 0, 128 | 0]);
export var InputTransformer = struct(n0, _IT, 0, [_IPM, _ITn], [128 | 0, 0]);
export var KinesisParameters = struct(n0, _KP, 0, [_PKP], [0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RARN], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [() => TagList]);
export var NetworkConfiguration = struct(n0, _NC, 0, [_aC], [() => AwsVpcConfiguration]);
export var PlacementConstraint = struct(n0, _PCl, 0, [_t, _ex], [0, 0]);
export var PlacementStrategy = struct(n0, _PS, 0, [_t, _f], [0, 0]);
export var RedshiftDataParameters = struct(n0, _RDP, 0, [_SMA, _Da, _DU, _Sq, _SN, _WE], [0, 0, 0, 0, 0, 2]);
export var ReplayDestination = struct(n0, _RDe, 0, [_Ar, _FA], [0, 64 | 0]);
export var RetryPolicy = struct(n0, _RP, 0, [_MRA, _MEAIS], [1, 1]);
export var RunCommandParameters = struct(n0, _RCP, 0, [_RCT], [() => RunCommandTargets]);
export var RunCommandTarget = struct(n0, _RCTu, 0, [_K, _Va], [0, 64 | 0]);
export var SageMakerPipelineParameter = struct(n0, _SMPP, 0, [_N, _V], [0, 0]);
export var SageMakerPipelineParameters = struct(n0, _SMPPa, 0, [_PPL], [() => SageMakerPipelineParameterList]);
export var SqsParameters = struct(n0, _SP, 0, [_MGI], [0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _Ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var Target = struct(
  n0,
  _Targ,
  0,
  [_Id, _Ar, _RAo, _In, _IP, _IT, _KP, _RCP, _EPc, _BP, _SP, _HPt, _RDP, _SMPPa, _DLC, _RP],
  [
    0,
    0,
    0,
    0,
    0,
    () => InputTransformer,
    () => KinesisParameters,
    () => RunCommandParameters,
    () => EcsParameters,
    () => BatchParameters,
    () => SqsParameters,
    () => HttpParameters,
    () => RedshiftDataParameters,
    () => SageMakerPipelineParameters,
    () => DeadLetterConfig,
    () => RetryPolicy,
  ]
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var CapacityProviderStrategy = list(n0, _CPS, 0, () => CapacityProviderStrategyItem);
export var PathParameterList = 64 | 0;

export var PlacementConstraints = list(n0, _PC, 0, () => PlacementConstraint);
export var PlacementStrategies = list(n0, _PSl, 0, () => PlacementStrategy);
export var ReplayDestinationFilters = 64 | 0;

export var RunCommandTargets = list(n0, _RCT, 0, () => RunCommandTarget);
export var RunCommandTargetValues = 64 | 0;

export var SageMakerPipelineParameterList = list(n0, _SMPPL, 0, () => SageMakerPipelineParameter);
export var StringList = 64 | 0;

export var TagKeyList = 64 | 0;

export var TargetList = list(n0, _TLa, 0, () => Target);
export var HeaderParametersMap = 128 | 0;

export var QueryStringParametersMap = 128 | 0;

export var TransformerPaths = 128 | 0;

export var DescribeArchive = op(
  n0,
  _DAe,
  0,
  () => DescribeArchiveRequest,
  () => DescribeArchiveResponse
);
export var DescribeReplay = op(
  n0,
  _DRe,
  0,
  () => DescribeReplayRequest,
  () => DescribeReplayResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
