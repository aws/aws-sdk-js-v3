// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _Ac,
  _ASct,
  _BL,
  _CAl,
  _CAre,
  _CB,
  _CBr,
  _CCQ,
  _CCQR,
  _CCQRr,
  _CEVC,
  _CISC,
  _CISCl,
  _CLCC,
  _Cou,
  _CQA,
  _CQC,
  _CQI,
  _CQR,
  _CQRC,
  _CQRCL,
  _CQS,
  _CQSL,
  _CQSo,
  _CQT,
  _CQV,
  _CT,
  _D,
  _DCQe,
  _DCQRe,
  _DCQRes,
  _EVC,
  _FR,
  _FSW,
  _IT,
  _LCQ,
  _LCQR,
  _LCQRi,
  _LMB,
  _LMT,
  _MIGB,
  _MR,
  _N,
  _NCa,
  _NT,
  _OCn,
  _PTT,
  _RSC,
  _RV,
  _SBo,
  _SO,
  _SSU,
  _St,
  _Str,
  _T,
  _TNea,
  _TVar,
  _UCQ,
  _UCQR,
  _UCQRp,
  _VCp,
  _VKKI,
  _VSIGB,
  n0,
  TagList,
  UserContext,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterEbsVolumeConfig = struct(n0, _CEVC, 0, [_VSIGB, _VKKI, _RV], [1, 0, 2]);
export var ClusterLifeCycleConfig = struct(n0, _CLCC, 0, [_SSU, _OCn], [0, 0]);
export var ComputeQuotaConfig = struct(
  n0,
  _CQC,
  0,
  [_CQR, _RSC, _PTT],
  [() => ComputeQuotaResourceConfigList, () => ResourceSharingConfig, 0]
);
export var ComputeQuotaResourceConfig = struct(n0, _CQRC, 0, [_IT, _Cou, _Ac, _VCp, _MIGB], [0, 1, 1, 1, 1]);
export var ComputeQuotaSummary = struct(
  n0,
  _CQS,
  0,
  [_CQA, _CQI, _N, _CQV, _St, _CAl, _CQC, _CQT, _ASct, _CT, _LMT],
  [0, 0, 0, 1, 0, 0, () => ComputeQuotaConfig, () => ComputeQuotaTarget, 0, 4, 4]
);
export var ComputeQuotaTarget = struct(n0, _CQT, 0, [_TNea, _FSW], [0, 1]);
export var CreateComputeQuotaRequest = struct(
  n0,
  _CCQR,
  0,
  [_N, _D, _CAl, _CQC, _CQT, _ASct, _T],
  [0, 0, 0, () => ComputeQuotaConfig, () => ComputeQuotaTarget, 0, () => TagList]
);
export var CreateComputeQuotaResponse = struct(n0, _CCQRr, 0, [_CQA, _CQI], [0, 0]);
export var DescribeComputeQuotaRequest = struct(n0, _DCQRe, 0, [_CQI, _CQV], [0, 1]);
export var DescribeComputeQuotaResponse = struct(
  n0,
  _DCQRes,
  0,
  [_CQA, _CQI, _N, _D, _CQV, _St, _FR, _CAl, _CQC, _CQT, _ASct, _CT, _CB, _LMT, _LMB],
  [
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    () => ComputeQuotaConfig,
    () => ComputeQuotaTarget,
    0,
    4,
    () => UserContext,
    4,
    () => UserContext,
  ]
);
export var ListComputeQuotasRequest = struct(
  n0,
  _LCQR,
  0,
  [_CAre, _CBr, _NCa, _St, _CAl, _SBo, _SO, _NT, _MR],
  [4, 4, 0, 0, 0, 0, 0, 0, 1]
);
export var ListComputeQuotasResponse = struct(n0, _LCQRi, 0, [_CQSo, _NT], [() => ComputeQuotaSummaryList, 0]);
export var ResourceSharingConfig = struct(n0, _RSC, 0, [_Str, _BL], [0, 1]);
export var UpdateComputeQuotaRequest = struct(
  n0,
  _UCQR,
  0,
  [_CQI, _TVar, _CQC, _CQT, _ASct, _D],
  [0, 1, () => ComputeQuotaConfig, () => ComputeQuotaTarget, 0, 0]
);
export var UpdateComputeQuotaResponse = struct(n0, _UCQRp, 0, [_CQA, _CQV], [0, 1]);
export var ClusterInstanceStorageConfigs = list(n0, _CISC, 0, () => ClusterInstanceStorageConfig);
export var ComputeQuotaResourceConfigList = list(n0, _CQRCL, 0, () => ComputeQuotaResourceConfig);
export var ComputeQuotaSummaryList = list(n0, _CQSL, 0, () => ComputeQuotaSummary);
export var ClusterInstanceStorageConfig = uni(n0, _CISCl, 0, [_EVC], [() => ClusterEbsVolumeConfig]);
export var CreateComputeQuota = op(
  n0,
  _CCQ,
  0,
  () => CreateComputeQuotaRequest,
  () => CreateComputeQuotaResponse
);
export var DescribeComputeQuota = op(
  n0,
  _DCQe,
  0,
  () => DescribeComputeQuotaRequest,
  () => DescribeComputeQuotaResponse
);
export var ListComputeQuotas = op(
  n0,
  _LCQ,
  0,
  () => ListComputeQuotasRequest,
  () => ListComputeQuotasResponse
);
export var UpdateComputeQuota = op(
  n0,
  _UCQ,
  0,
  () => UpdateComputeQuotaRequest,
  () => UpdateComputeQuotaResponse
);
