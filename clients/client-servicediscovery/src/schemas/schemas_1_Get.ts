// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  OperationNotFound as __OperationNotFound,
  RequestLimitExceeded as __RequestLimitExceeded,
  ServiceAlreadyExists as __ServiceAlreadyExists,
} from "../models/index";
import {
  _A,
  _Ar,
  _C,
  _c,
  _CBA,
  _CD,
  _CRI,
  _CS,
  _CSR,
  _CSRr,
  _D,
  _DC,
  _DIi,
  _DIRi,
  _DIRis,
  _DIRisc,
  _DIRR,
  _DIRRi,
  _DP,
  _DR,
  _e,
  _EC,
  _EM,
  _en,
  _F,
  _FT,
  _GI,
  _GIR,
  _GIRe,
  _GN,
  _GNR,
  _GNRe,
  _GO,
  _GOR,
  _GORe,
  _GS,
  _GSA,
  _GSAR,
  _GSARe,
  _GSR,
  _GSRe,
  _HCC,
  _HCCC,
  _hE,
  _HIS,
  _HISL,
  _HN,
  _HP,
  _HS,
  _HZI,
  _I,
  _i,
  _IC,
  _II,
  _In,
  _Ins,
  _IR,
  _IS,
  _ISL,
  _LI,
  _LIR,
  _LIRi,
  _LN,
  _LNR,
  _LNRi,
  _LS,
  _LSR,
  _LSRi,
  _M,
  _MR,
  _N,
  _Na,
  _Nam,
  _NF,
  _NFa,
  _NI,
  _NN,
  _NP,
  _NS,
  _NSL,
  _NT,
  _O,
  _OA,
  _OI,
  _ONF,
  _OP,
  _P,
  _QP,
  _RLE,
  _RO,
  _RP,
  _S,
  _SA,
  _SAE,
  _SAe,
  _SC,
  _Se,
  _SF,
  _SFe,
  _SI,
  _SN,
  _SOA,
  _SS,
  _SSL,
  _St,
  _T,
  _Ta,
  _Ty,
  _UD,
  _Va,
  _xN,
  n0,
} from "./schemas_0";
import { DnsRecordList, FilterValues, HealthCheckConfig } from "./schemas_2_Get";
import { TagList } from "./schemas_3_Create";
import { SOA } from "./schemas_7_Namespace";

/* eslint no-var: 0 */

export var CreateServiceRequest = struct(
  n0,
  _CSR,
  0,
  [_N, _NI, _CRI, _D, _DC, _HCC, _HCCC, _T, _Ty],
  [0, 0, [0, 4], 0, () => DnsConfig, () => HealthCheckConfig, () => HealthCheckCustomConfig, () => TagList, 0]
);
export var CreateServiceResponse = struct(n0, _CSRr, 0, [_S], [() => Service]);
export var DiscoverInstancesRequest = struct(
  n0,
  _DIRi,
  0,
  [_NN, _SN, _MR, _QP, _OP, _HS, _OA],
  [0, 0, 1, 128 | 0, 128 | 0, 0, 0]
);
export var DiscoverInstancesResponse = struct(n0, _DIRis, 0, [_In, _IR], [() => HttpInstanceSummaryList, 1]);
export var DiscoverInstancesRevisionRequest = struct(n0, _DIRR, 0, [_NN, _SN, _OA], [0, 0, 0]);
export var DiscoverInstancesRevisionResponse = struct(n0, _DIRRi, 0, [_IR], [1]);
export var DnsConfig = struct(n0, _DC, 0, [_NI, _RP, _DR], [0, 0, () => DnsRecordList]);
export var DnsProperties = struct(n0, _DP, 0, [_HZI, _SOA], [0, () => SOA]);
export var GetInstanceRequest = struct(n0, _GIR, 0, [_SI, _II], [0, 0]);
export var GetInstanceResponse = struct(n0, _GIRe, 0, [_RO, _Ins], [0, () => Instance]);
export var GetNamespaceRequest = struct(n0, _GNR, 0, [_I], [0]);
export var GetNamespaceResponse = struct(n0, _GNRe, 0, [_Na], [() => Namespace]);
export var GetOperationRequest = struct(n0, _GOR, 0, [_OI, _OA], [0, 0]);
export var GetOperationResponse = struct(n0, _GORe, 0, [_O], [() => Operation]);
export var GetServiceAttributesRequest = struct(n0, _GSAR, 0, [_SI], [0]);
export var GetServiceAttributesResponse = struct(n0, _GSARe, 0, [_SA], [() => ServiceAttributes]);
export var GetServiceRequest = struct(n0, _GSR, 0, [_I], [0]);
export var GetServiceResponse = struct(n0, _GSRe, 0, [_S], [() => Service]);
export var HealthCheckCustomConfig = struct(n0, _HCCC, 0, [_FT], [1]);
export var HttpInstanceSummary = struct(n0, _HIS, 0, [_II, _NN, _SN, _HS, _A], [0, 0, 0, 0, 128 | 0]);
export var HttpProperties = struct(n0, _HP, 0, [_HN], [0]);
export var Instance = struct(n0, _Ins, 0, [_I, _CRI, _A, _CBA], [0, 0, 128 | 0, 0]);
export var InstanceSummary = struct(n0, _IS, 0, [_I, _A, _CBA], [0, 128 | 0, 0]);
export var ListInstancesRequest = struct(n0, _LIR, 0, [_SI, _NT, _MR], [0, 0, 1]);
export var ListInstancesResponse = struct(n0, _LIRi, 0, [_RO, _In, _NT], [0, [() => InstanceSummaryList, 0], 0]);
export var ListNamespacesRequest = struct(n0, _LNR, 0, [_NT, _MR, _F], [0, 1, [() => NamespaceFilters, 0]]);
export var ListNamespacesResponse = struct(n0, _LNRi, 0, [_Nam, _NT], [() => NamespaceSummariesList, 0]);
export var ListServicesRequest = struct(n0, _LSR, 0, [_NT, _MR, _F], [0, 1, [() => ServiceFilters, 0]]);
export var ListServicesResponse = struct(n0, _LSRi, 0, [_Se, _NT], [() => ServiceSummariesList, 0]);
export var Namespace = struct(
  n0,
  _Na,
  0,
  [_I, _Ar, _RO, _N, _Ty, _D, _SC, _P, _CD, _CRI],
  [0, 0, 0, 0, 0, 0, 1, () => NamespaceProperties, 4, 0]
);
export var NamespaceFilter = struct(n0, _NF, 0, [_N, _Va, _C], [0, [() => FilterValues, 0], 0]);
export var NamespaceProperties = struct(n0, _NP, 0, [_DP, _HP], [() => DnsProperties, () => HttpProperties]);
export var NamespaceSummary = struct(
  n0,
  _NS,
  0,
  [_I, _Ar, _RO, _N, _Ty, _D, _SC, _P, _CD],
  [0, 0, 0, 0, 0, 0, 1, () => NamespaceProperties, 4]
);
export var Operation = struct(
  n0,
  _O,
  0,
  [_I, _OA, _Ty, _St, _EM, _EC, _CD, _UD, _Ta],
  [0, 0, 0, 0, 0, 0, 4, 4, 128 | 0]
);
export var OperationNotFound = error(
  n0,
  _ONF,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __OperationNotFound
);
export var RequestLimitExceeded = error(
  n0,
  _RLE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __RequestLimitExceeded
);
export var Service = struct(
  n0,
  _S,
  0,
  [_I, _Ar, _RO, _N, _NI, _D, _IC, _DC, _Ty, _HCC, _HCCC, _CD, _CRI, _CBA],
  [0, 0, 0, 0, 0, 0, 1, () => DnsConfig, 0, () => HealthCheckConfig, () => HealthCheckCustomConfig, 4, 0, 0]
);
export var ServiceAlreadyExists = error(
  n0,
  _SAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _CRI, _SI, _SAe],
  [0, 0, 0, 0],

  __ServiceAlreadyExists
);
export var ServiceAttributes = struct(n0, _SA, 0, [_SAe, _RO, _A], [0, 0, 128 | 0]);
export var ServiceFilter = struct(n0, _SF, 0, [_N, _Va, _C], [0, [() => FilterValues, 0], 0]);
export var ServiceSummary = struct(
  n0,
  _SS,
  0,
  [_I, _Ar, _RO, _N, _Ty, _D, _IC, _DC, _HCC, _HCCC, _CD, _CBA],
  [0, 0, 0, 0, 0, 0, 1, () => DnsConfig, () => HealthCheckConfig, () => HealthCheckCustomConfig, 4, 0]
);
export var HttpInstanceSummaryList = list(n0, _HISL, 0, () => HttpInstanceSummary);
export var InstanceSummaryList = list(n0, _ISL, 0, [
  () => InstanceSummary,
  {
    [_xN]: _IS,
  },
]);
export var NamespaceFilters = list(n0, _NFa, 0, [
  () => NamespaceFilter,
  {
    [_xN]: _i,
  },
]);
export var NamespaceSummariesList = list(n0, _NSL, 0, () => NamespaceSummary);
export var ServiceFilters = list(n0, _SFe, 0, [
  () => ServiceFilter,
  {
    [_xN]: _i,
  },
]);
export var ServiceSummariesList = list(n0, _SSL, 0, () => ServiceSummary);
export var OperationTargetsMap = 128 | 0;

export var CreateService = op(
  n0,
  _CS,
  0,
  () => CreateServiceRequest,
  () => CreateServiceResponse
);
export var DiscoverInstances = op(
  n0,
  _DIi,
  {
    [_en]: ["data-"],
  },
  () => DiscoverInstancesRequest,
  () => DiscoverInstancesResponse
);
export var DiscoverInstancesRevision = op(
  n0,
  _DIRisc,
  {
    [_en]: ["data-"],
  },
  () => DiscoverInstancesRevisionRequest,
  () => DiscoverInstancesRevisionResponse
);
export var GetInstance = op(
  n0,
  _GI,
  0,
  () => GetInstanceRequest,
  () => GetInstanceResponse
);
export var GetNamespace = op(
  n0,
  _GN,
  0,
  () => GetNamespaceRequest,
  () => GetNamespaceResponse
);
export var GetOperation = op(
  n0,
  _GO,
  0,
  () => GetOperationRequest,
  () => GetOperationResponse
);
export var GetService = op(
  n0,
  _GS,
  0,
  () => GetServiceRequest,
  () => GetServiceResponse
);
export var GetServiceAttributes = op(
  n0,
  _GSA,
  0,
  () => GetServiceAttributesRequest,
  () => GetServiceAttributesResponse
);
export var ListInstances = op(
  n0,
  _LI,
  0,
  () => ListInstancesRequest,
  () => ListInstancesResponse
);
export var ListNamespaces = op(
  n0,
  _LN,
  0,
  () => ListNamespacesRequest,
  () => ListNamespacesResponse
);
export var ListServices = op(
  n0,
  _LS,
  0,
  () => ListServicesRequest,
  () => ListServicesResponse
);
