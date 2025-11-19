const _AH = "AllowedHeaders";
const _ALE = "AccessLoggingEnabled";
const _AM = "AllowedMethods";
const _AO = "AllowedOrigins";
const _ARN = "ARN";
const _C = "Container";
const _CC = "CreateContainer";
const _CCI = "CreateContainerInput";
const _CCO = "CreateContainerOutput";
const _CIUE = "ContainerInUseException";
const _CL = "ContainerList";
const _CLM = "ContainerLevelMetrics";
const _CN = "ContainerName";
const _CNFE = "ContainerNotFoundException";
const _CP = "CorsPolicy";
const _CPNFE = "CorsPolicyNotFoundException";
const _CR = "CorsRule";
const _CT = "CreationTime";
const _Co = "Containers";
const _DC = "DeleteContainer";
const _DCI = "DeleteContainerInput";
const _DCIe = "DescribeContainerInput";
const _DCO = "DeleteContainerOutput";
const _DCOe = "DescribeContainerOutput";
const _DCP = "DeleteContainerPolicy";
const _DCPI = "DeleteContainerPolicyInput";
const _DCPIe = "DeleteCorsPolicyInput";
const _DCPO = "DeleteContainerPolicyOutput";
const _DCPOe = "DeleteCorsPolicyOutput";
const _DCPe = "DeleteCorsPolicy";
const _DCe = "DescribeContainer";
const _DLP = "DeleteLifecyclePolicy";
const _DLPI = "DeleteLifecyclePolicyInput";
const _DLPO = "DeleteLifecyclePolicyOutput";
const _DMP = "DeleteMetricPolicy";
const _DMPI = "DeleteMetricPolicyInput";
const _DMPO = "DeleteMetricPolicyOutput";
const _E = "Endpoint";
const _EH = "ExposeHeaders";
const _GCP = "GetContainerPolicy";
const _GCPI = "GetContainerPolicyInput";
const _GCPIe = "GetCorsPolicyInput";
const _GCPO = "GetContainerPolicyOutput";
const _GCPOe = "GetCorsPolicyOutput";
const _GCPe = "GetCorsPolicy";
const _GLP = "GetLifecyclePolicy";
const _GLPI = "GetLifecyclePolicyInput";
const _GLPO = "GetLifecyclePolicyOutput";
const _GMP = "GetMetricPolicy";
const _GMPI = "GetMetricPolicyInput";
const _GMPO = "GetMetricPolicyOutput";
const _ISE = "InternalServerError";
const _K = "Key";
const _LC = "ListContainers";
const _LCI = "ListContainersInput";
const _LCO = "ListContainersOutput";
const _LEE = "LimitExceededException";
const _LP = "LifecyclePolicy";
const _LTFR = "ListTagsForResource";
const _LTFRI = "ListTagsForResourceInput";
const _LTFRO = "ListTagsForResourceOutput";
const _M = "Message";
const _MAS = "MaxAgeSeconds";
const _MP = "MetricPolicy";
const _MPR = "MetricPolicyRules";
const _MPRe = "MetricPolicyRule";
const _MR = "MaxResults";
const _N = "Name";
const _NT = "NextToken";
const _OG = "ObjectGroup";
const _OGN = "ObjectGroupName";
const _P = "Policy";
const _PCP = "PutContainerPolicy";
const _PCPI = "PutContainerPolicyInput";
const _PCPIu = "PutCorsPolicyInput";
const _PCPO = "PutContainerPolicyOutput";
const _PCPOu = "PutCorsPolicyOutput";
const _PCPu = "PutCorsPolicy";
const _PLP = "PutLifecyclePolicy";
const _PLPI = "PutLifecyclePolicyInput";
const _PLPO = "PutLifecyclePolicyOutput";
const _PMP = "PutMetricPolicy";
const _PMPI = "PutMetricPolicyInput";
const _PMPO = "PutMetricPolicyOutput";
const _PNFE = "PolicyNotFoundException";
const _R = "Resource";
const _S = "Status";
const _SAL = "StartAccessLogging";
const _SALI = "StartAccessLoggingInput";
const _SALIt = "StopAccessLoggingInput";
const _SALO = "StartAccessLoggingOutput";
const _SALOt = "StopAccessLoggingOutput";
const _SALt = "StopAccessLogging";
const _T = "Tags";
const _TK = "TagKeys";
const _TL = "TagList";
const _TR = "TagResource";
const _TRI = "TagResourceInput";
const _TRO = "TagResourceOutput";
const _Ta = "Tag";
const _UR = "UntagResource";
const _URI = "UntagResourceInput";
const _URO = "UntagResourceOutput";
const _V = "Value";
const _c = "client";
const _e = "error";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.mediastore";
const n0 = "com.amazonaws.mediastore";

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
} from "../models/errors";
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
