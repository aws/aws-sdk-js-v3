// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { LimitExceededException as __LimitExceededException } from "../models/index";
import {
  _AH,
  _ALE,
  _AM,
  _AO,
  _ARN,
  _C,
  _c,
  _CC,
  _CCI,
  _CCO,
  _CL,
  _CLM,
  _CN,
  _Co,
  _CP,
  _CR,
  _CT,
  _DCe,
  _DCIe,
  _DCOe,
  _E,
  _e,
  _EH,
  _GCPe,
  _GCPIe,
  _GCPOe,
  _GMP,
  _GMPI,
  _GMPO,
  _LC,
  _LCI,
  _LCO,
  _LEE,
  _M,
  _MAS,
  _MP,
  _MPR,
  _MPRe,
  _MR,
  _N,
  _NT,
  _OG,
  _OGN,
  _PCPIu,
  _PCPOu,
  _PCPu,
  _PMP,
  _PMPI,
  _PMPO,
  _S,
  _T,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_4_Resource";

/* eslint no-var: 0 */

export var Container = struct(n0, _C, 0, [_E, _CT, _ARN, _N, _S, _ALE], [0, 4, 0, 0, 0, 2]);
export var CorsRule = struct(n0, _CR, 0, [_AO, _AM, _AH, _MAS, _EH], [64 | 0, 64 | 0, 64 | 0, 1, 64 | 0]);
export var CreateContainerInput = struct(n0, _CCI, 0, [_CN, _T], [0, () => TagList]);
export var CreateContainerOutput = struct(n0, _CCO, 0, [_C], [() => Container]);
export var DescribeContainerInput = struct(n0, _DCIe, 0, [_CN], [0]);
export var DescribeContainerOutput = struct(n0, _DCOe, 0, [_C], [() => Container]);
export var GetCorsPolicyInput = struct(n0, _GCPIe, 0, [_CN], [0]);
export var GetCorsPolicyOutput = struct(n0, _GCPOe, 0, [_CP], [() => CorsPolicy]);
export var GetMetricPolicyInput = struct(n0, _GMPI, 0, [_CN], [0]);
export var GetMetricPolicyOutput = struct(n0, _GMPO, 0, [_MP], [() => MetricPolicy]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __LimitExceededException
);
export var ListContainersInput = struct(n0, _LCI, 0, [_NT, _MR], [0, 1]);
export var ListContainersOutput = struct(n0, _LCO, 0, [_Co, _NT], [() => ContainerList, 0]);
export var MetricPolicy = struct(n0, _MP, 0, [_CLM, _MPR], [0, () => MetricPolicyRules]);
export var MetricPolicyRule = struct(n0, _MPRe, 0, [_OG, _OGN], [0, 0]);
export var PutCorsPolicyInput = struct(n0, _PCPIu, 0, [_CN, _CP], [0, () => CorsPolicy]);
export var PutCorsPolicyOutput = struct(n0, _PCPOu, 0, [], []);
export var PutMetricPolicyInput = struct(n0, _PMPI, 0, [_CN, _MP], [0, () => MetricPolicy]);
export var PutMetricPolicyOutput = struct(n0, _PMPO, 0, [], []);
export var Unit = "unit" as const;

export var AllowedHeaders = 64 | 0;

export var AllowedMethods = 64 | 0;

export var AllowedOrigins = 64 | 0;

export var ContainerList = list(n0, _CL, 0, () => Container);
export var CorsPolicy = list(n0, _CP, 0, () => CorsRule);
export var ExposeHeaders = 64 | 0;

export var MetricPolicyRules = list(n0, _MPR, 0, () => MetricPolicyRule);
export var CreateContainer = op(
  n0,
  _CC,
  0,
  () => CreateContainerInput,
  () => CreateContainerOutput
);
export var DescribeContainer = op(
  n0,
  _DCe,
  0,
  () => DescribeContainerInput,
  () => DescribeContainerOutput
);
export var GetCorsPolicy = op(
  n0,
  _GCPe,
  0,
  () => GetCorsPolicyInput,
  () => GetCorsPolicyOutput
);
export var GetMetricPolicy = op(
  n0,
  _GMP,
  0,
  () => GetMetricPolicyInput,
  () => GetMetricPolicyOutput
);
export var ListContainers = op(
  n0,
  _LC,
  0,
  () => ListContainersInput,
  () => ListContainersOutput
);
export var PutCorsPolicy = op(
  n0,
  _PCPu,
  0,
  () => PutCorsPolicyInput,
  () => PutCorsPolicyOutput
);
export var PutMetricPolicy = op(
  n0,
  _PMP,
  0,
  () => PutMetricPolicyInput,
  () => PutMetricPolicyOutput
);
