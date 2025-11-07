export const _AH = "AllowedHeaders";
export const _ALE = "AccessLoggingEnabled";
export const _AM = "AllowedMethods";
export const _AO = "AllowedOrigins";
export const _ARN = "ARN";
export const _C = "Container";
export const _CC = "CreateContainer";
export const _CCI = "CreateContainerInput";
export const _CCO = "CreateContainerOutput";
export const _CIUE = "ContainerInUseException";
export const _CL = "ContainerList";
export const _CLM = "ContainerLevelMetrics";
export const _CN = "ContainerName";
export const _CNFE = "ContainerNotFoundException";
export const _CP = "CorsPolicy";
export const _CPNFE = "CorsPolicyNotFoundException";
export const _CR = "CorsRule";
export const _CT = "CreationTime";
export const _Co = "Containers";
export const _DC = "DeleteContainer";
export const _DCI = "DeleteContainerInput";
export const _DCIe = "DescribeContainerInput";
export const _DCO = "DeleteContainerOutput";
export const _DCOe = "DescribeContainerOutput";
export const _DCP = "DeleteContainerPolicy";
export const _DCPI = "DeleteContainerPolicyInput";
export const _DCPIe = "DeleteCorsPolicyInput";
export const _DCPO = "DeleteContainerPolicyOutput";
export const _DCPOe = "DeleteCorsPolicyOutput";
export const _DCPe = "DeleteCorsPolicy";
export const _DCe = "DescribeContainer";
export const _DLP = "DeleteLifecyclePolicy";
export const _DLPI = "DeleteLifecyclePolicyInput";
export const _DLPO = "DeleteLifecyclePolicyOutput";
export const _DMP = "DeleteMetricPolicy";
export const _DMPI = "DeleteMetricPolicyInput";
export const _DMPO = "DeleteMetricPolicyOutput";
export const _E = "Endpoint";
export const _EH = "ExposeHeaders";
export const _GCP = "GetContainerPolicy";
export const _GCPI = "GetContainerPolicyInput";
export const _GCPIe = "GetCorsPolicyInput";
export const _GCPO = "GetContainerPolicyOutput";
export const _GCPOe = "GetCorsPolicyOutput";
export const _GCPe = "GetCorsPolicy";
export const _GLP = "GetLifecyclePolicy";
export const _GLPI = "GetLifecyclePolicyInput";
export const _GLPO = "GetLifecyclePolicyOutput";
export const _GMP = "GetMetricPolicy";
export const _GMPI = "GetMetricPolicyInput";
export const _GMPO = "GetMetricPolicyOutput";
export const _ISE = "InternalServerError";
export const _K = "Key";
export const _LC = "ListContainers";
export const _LCI = "ListContainersInput";
export const _LCO = "ListContainersOutput";
export const _LEE = "LimitExceededException";
export const _LP = "LifecyclePolicy";
export const _LTFR = "ListTagsForResource";
export const _LTFRI = "ListTagsForResourceInput";
export const _LTFRO = "ListTagsForResourceOutput";
export const _M = "Message";
export const _MAS = "MaxAgeSeconds";
export const _MP = "MetricPolicy";
export const _MPR = "MetricPolicyRules";
export const _MPRe = "MetricPolicyRule";
export const _MR = "MaxResults";
export const _N = "Name";
export const _NT = "NextToken";
export const _OG = "ObjectGroup";
export const _OGN = "ObjectGroupName";
export const _P = "Policy";
export const _PCP = "PutContainerPolicy";
export const _PCPI = "PutContainerPolicyInput";
export const _PCPIu = "PutCorsPolicyInput";
export const _PCPO = "PutContainerPolicyOutput";
export const _PCPOu = "PutCorsPolicyOutput";
export const _PCPu = "PutCorsPolicy";
export const _PLP = "PutLifecyclePolicy";
export const _PLPI = "PutLifecyclePolicyInput";
export const _PLPO = "PutLifecyclePolicyOutput";
export const _PMP = "PutMetricPolicy";
export const _PMPI = "PutMetricPolicyInput";
export const _PMPO = "PutMetricPolicyOutput";
export const _PNFE = "PolicyNotFoundException";
export const _R = "Resource";
export const _S = "Status";
export const _SAL = "StartAccessLogging";
export const _SALI = "StartAccessLoggingInput";
export const _SALIt = "StopAccessLoggingInput";
export const _SALO = "StartAccessLoggingOutput";
export const _SALOt = "StopAccessLoggingOutput";
export const _SALt = "StopAccessLogging";
export const _T = "Tags";
export const _TK = "TagKeys";
export const _TL = "TagList";
export const _TR = "TagResource";
export const _TRI = "TagResourceInput";
export const _TRO = "TagResourceOutput";
export const _Ta = "Tag";
export const _UR = "UntagResource";
export const _URI = "UntagResourceInput";
export const _URO = "UntagResourceOutput";
export const _V = "Value";
export const _c = "client";
export const _e = "error";
export const _s = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.mediastore";
export const n0 = "com.amazonaws.mediastore";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  ContainerInUseException as __ContainerInUseException,
  ContainerNotFoundException as __ContainerNotFoundException,
  CorsPolicyNotFoundException as __CorsPolicyNotFoundException,
  InternalServerError as __InternalServerError,
  LimitExceededException as __LimitExceededException,
  PolicyNotFoundException as __PolicyNotFoundException,
} from "../models/index";
import { MediaStoreServiceException as __MediaStoreServiceException } from "../models/MediaStoreServiceException";

/* eslint no-var: 0 */

export var Container: StaticStructureSchema = [3, n0, _C, 0, [_E, _CT, _ARN, _N, _S, _ALE], [0, 4, 0, 0, 0, 2]];
export var ContainerInUseException: StaticErrorSchema = [
  -3,
  n0,
  _CIUE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ContainerInUseException, __ContainerInUseException);

export var ContainerNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _CNFE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ContainerNotFoundException, __ContainerNotFoundException);

export var CorsPolicyNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _CPNFE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(CorsPolicyNotFoundException, __CorsPolicyNotFoundException);

export var CorsRule: StaticStructureSchema = [
  3,
  n0,
  _CR,
  0,
  [_AO, _AM, _AH, _MAS, _EH],
  [64 | 0, 64 | 0, 64 | 0, 1, 64 | 0],
];
export var CreateContainerInput: StaticStructureSchema = [3, n0, _CCI, 0, [_CN, _T], [0, () => TagList]];
export var CreateContainerOutput: StaticStructureSchema = [3, n0, _CCO, 0, [_C], [() => Container]];
export var DeleteContainerInput: StaticStructureSchema = [3, n0, _DCI, 0, [_CN], [0]];
export var DeleteContainerOutput: StaticStructureSchema = [3, n0, _DCO, 0, [], []];
export var DeleteContainerPolicyInput: StaticStructureSchema = [3, n0, _DCPI, 0, [_CN], [0]];
export var DeleteContainerPolicyOutput: StaticStructureSchema = [3, n0, _DCPO, 0, [], []];
export var DeleteCorsPolicyInput: StaticStructureSchema = [3, n0, _DCPIe, 0, [_CN], [0]];
export var DeleteCorsPolicyOutput: StaticStructureSchema = [3, n0, _DCPOe, 0, [], []];
export var DeleteLifecyclePolicyInput: StaticStructureSchema = [3, n0, _DLPI, 0, [_CN], [0]];
export var DeleteLifecyclePolicyOutput: StaticStructureSchema = [3, n0, _DLPO, 0, [], []];
export var DeleteMetricPolicyInput: StaticStructureSchema = [3, n0, _DMPI, 0, [_CN], [0]];
export var DeleteMetricPolicyOutput: StaticStructureSchema = [3, n0, _DMPO, 0, [], []];
export var DescribeContainerInput: StaticStructureSchema = [3, n0, _DCIe, 0, [_CN], [0]];
export var DescribeContainerOutput: StaticStructureSchema = [3, n0, _DCOe, 0, [_C], [() => Container]];
export var GetContainerPolicyInput: StaticStructureSchema = [3, n0, _GCPI, 0, [_CN], [0]];
export var GetContainerPolicyOutput: StaticStructureSchema = [3, n0, _GCPO, 0, [_P], [0]];
export var GetCorsPolicyInput: StaticStructureSchema = [3, n0, _GCPIe, 0, [_CN], [0]];
export var GetCorsPolicyOutput: StaticStructureSchema = [3, n0, _GCPOe, 0, [_CP], [() => CorsPolicy]];
export var GetLifecyclePolicyInput: StaticStructureSchema = [3, n0, _GLPI, 0, [_CN], [0]];
export var GetLifecyclePolicyOutput: StaticStructureSchema = [3, n0, _GLPO, 0, [_LP], [0]];
export var GetMetricPolicyInput: StaticStructureSchema = [3, n0, _GMPI, 0, [_CN], [0]];
export var GetMetricPolicyOutput: StaticStructureSchema = [3, n0, _GMPO, 0, [_MP], [() => MetricPolicy]];
export var InternalServerError: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerError, __InternalServerError);

export var LimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(LimitExceededException, __LimitExceededException);

export var ListContainersInput: StaticStructureSchema = [3, n0, _LCI, 0, [_NT, _MR], [0, 1]];
export var ListContainersOutput: StaticStructureSchema = [3, n0, _LCO, 0, [_Co, _NT], [() => ContainerList, 0]];
export var ListTagsForResourceInput: StaticStructureSchema = [3, n0, _LTFRI, 0, [_R], [0]];
export var ListTagsForResourceOutput: StaticStructureSchema = [3, n0, _LTFRO, 0, [_T], [() => TagList]];
export var MetricPolicy: StaticStructureSchema = [3, n0, _MP, 0, [_CLM, _MPR], [0, () => MetricPolicyRules]];
export var MetricPolicyRule: StaticStructureSchema = [3, n0, _MPRe, 0, [_OG, _OGN], [0, 0]];
export var PolicyNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _PNFE,
  {
    [_e]: _c,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(PolicyNotFoundException, __PolicyNotFoundException);

export var PutContainerPolicyInput: StaticStructureSchema = [3, n0, _PCPI, 0, [_CN, _P], [0, 0]];
export var PutContainerPolicyOutput: StaticStructureSchema = [3, n0, _PCPO, 0, [], []];
export var PutCorsPolicyInput: StaticStructureSchema = [3, n0, _PCPIu, 0, [_CN, _CP], [0, () => CorsPolicy]];
export var PutCorsPolicyOutput: StaticStructureSchema = [3, n0, _PCPOu, 0, [], []];
export var PutLifecyclePolicyInput: StaticStructureSchema = [3, n0, _PLPI, 0, [_CN, _LP], [0, 0]];
export var PutLifecyclePolicyOutput: StaticStructureSchema = [3, n0, _PLPO, 0, [], []];
export var PutMetricPolicyInput: StaticStructureSchema = [3, n0, _PMPI, 0, [_CN, _MP], [0, () => MetricPolicy]];
export var PutMetricPolicyOutput: StaticStructureSchema = [3, n0, _PMPO, 0, [], []];
export var StartAccessLoggingInput: StaticStructureSchema = [3, n0, _SALI, 0, [_CN], [0]];
export var StartAccessLoggingOutput: StaticStructureSchema = [3, n0, _SALO, 0, [], []];
export var StopAccessLoggingInput: StaticStructureSchema = [3, n0, _SALIt, 0, [_CN], [0]];
export var StopAccessLoggingOutput: StaticStructureSchema = [3, n0, _SALOt, 0, [], []];
export var Tag: StaticStructureSchema = [3, n0, _Ta, 0, [_K, _V], [0, 0]];
export var TagResourceInput: StaticStructureSchema = [3, n0, _TRI, 0, [_R, _T], [0, () => TagList]];
export var TagResourceOutput: StaticStructureSchema = [3, n0, _TRO, 0, [], []];
export var UntagResourceInput: StaticStructureSchema = [3, n0, _URI, 0, [_R, _TK], [0, 64 | 0]];
export var UntagResourceOutput: StaticStructureSchema = [3, n0, _URO, 0, [], []];
export var __Unit = "unit" as const;

export var MediaStoreServiceException: StaticErrorSchema = [-3, _sm, "MediaStoreServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(MediaStoreServiceException, __MediaStoreServiceException);

export var AllowedHeaders = 64 | 0;

export var AllowedMethods = 64 | 0;

export var AllowedOrigins = 64 | 0;

export var ContainerList: StaticListSchema = [1, n0, _CL, 0, () => Container];
export var CorsPolicy: StaticListSchema = [1, n0, _CP, 0, () => CorsRule];
export var ExposeHeaders = 64 | 0;

export var MetricPolicyRules: StaticListSchema = [1, n0, _MPR, 0, () => MetricPolicyRule];
export var TagKeyList = 64 | 0;

export var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag];
export var CreateContainer: StaticOperationSchema = [
  9,
  n0,
  _CC,
  0,
  () => CreateContainerInput,
  () => CreateContainerOutput,
];
export var DeleteContainer: StaticOperationSchema = [
  9,
  n0,
  _DC,
  0,
  () => DeleteContainerInput,
  () => DeleteContainerOutput,
];
export var DeleteContainerPolicy: StaticOperationSchema = [
  9,
  n0,
  _DCP,
  0,
  () => DeleteContainerPolicyInput,
  () => DeleteContainerPolicyOutput,
];
export var DeleteCorsPolicy: StaticOperationSchema = [
  9,
  n0,
  _DCPe,
  0,
  () => DeleteCorsPolicyInput,
  () => DeleteCorsPolicyOutput,
];
export var DeleteLifecyclePolicy: StaticOperationSchema = [
  9,
  n0,
  _DLP,
  0,
  () => DeleteLifecyclePolicyInput,
  () => DeleteLifecyclePolicyOutput,
];
export var DeleteMetricPolicy: StaticOperationSchema = [
  9,
  n0,
  _DMP,
  0,
  () => DeleteMetricPolicyInput,
  () => DeleteMetricPolicyOutput,
];
export var DescribeContainer: StaticOperationSchema = [
  9,
  n0,
  _DCe,
  0,
  () => DescribeContainerInput,
  () => DescribeContainerOutput,
];
export var GetContainerPolicy: StaticOperationSchema = [
  9,
  n0,
  _GCP,
  0,
  () => GetContainerPolicyInput,
  () => GetContainerPolicyOutput,
];
export var GetCorsPolicy: StaticOperationSchema = [
  9,
  n0,
  _GCPe,
  0,
  () => GetCorsPolicyInput,
  () => GetCorsPolicyOutput,
];
export var GetLifecyclePolicy: StaticOperationSchema = [
  9,
  n0,
  _GLP,
  0,
  () => GetLifecyclePolicyInput,
  () => GetLifecyclePolicyOutput,
];
export var GetMetricPolicy: StaticOperationSchema = [
  9,
  n0,
  _GMP,
  0,
  () => GetMetricPolicyInput,
  () => GetMetricPolicyOutput,
];
export var ListContainers: StaticOperationSchema = [
  9,
  n0,
  _LC,
  0,
  () => ListContainersInput,
  () => ListContainersOutput,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput,
];
export var PutContainerPolicy: StaticOperationSchema = [
  9,
  n0,
  _PCP,
  0,
  () => PutContainerPolicyInput,
  () => PutContainerPolicyOutput,
];
export var PutCorsPolicy: StaticOperationSchema = [
  9,
  n0,
  _PCPu,
  0,
  () => PutCorsPolicyInput,
  () => PutCorsPolicyOutput,
];
export var PutLifecyclePolicy: StaticOperationSchema = [
  9,
  n0,
  _PLP,
  0,
  () => PutLifecyclePolicyInput,
  () => PutLifecyclePolicyOutput,
];
export var PutMetricPolicy: StaticOperationSchema = [
  9,
  n0,
  _PMP,
  0,
  () => PutMetricPolicyInput,
  () => PutMetricPolicyOutput,
];
export var StartAccessLogging: StaticOperationSchema = [
  9,
  n0,
  _SAL,
  0,
  () => StartAccessLoggingInput,
  () => StartAccessLoggingOutput,
];
export var StopAccessLogging: StaticOperationSchema = [
  9,
  n0,
  _SALt,
  0,
  () => StopAccessLoggingInput,
  () => StopAccessLoggingOutput,
];
export var TagResource: StaticOperationSchema = [9, n0, _TR, 0, () => TagResourceInput, () => TagResourceOutput];
export var UntagResource: StaticOperationSchema = [9, n0, _UR, 0, () => UntagResourceInput, () => UntagResourceOutput];
