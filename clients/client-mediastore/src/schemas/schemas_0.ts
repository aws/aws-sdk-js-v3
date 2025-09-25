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
export const n0 = "com.amazonaws.mediastore";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  ContainerInUseException as __ContainerInUseException,
  ContainerNotFoundException as __ContainerNotFoundException,
  InternalServerError as __InternalServerError,
} from "../models/index";
import { MediaStoreServiceException as __MediaStoreServiceException } from "../models/MediaStoreServiceException";

/* eslint no-var: 0 */

export var ContainerInUseException = error(
  n0,
  _CIUE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ContainerInUseException
);
export var ContainerNotFoundException = error(
  n0,
  _CNFE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ContainerNotFoundException
);
export var InternalServerError = error(
  n0,
  _ISE,
  {
    [_e]: _s,
  },
  [_M],
  [0],

  __InternalServerError
);
export var MediaStoreServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.mediastore",
  "MediaStoreServiceException",
  0,
  [],
  [],
  __MediaStoreServiceException
);
