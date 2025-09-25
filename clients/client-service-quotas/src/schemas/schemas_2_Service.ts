// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { QuotaExceededException as __QuotaExceededException } from "../models/index";
import {
  _A,
  _AR,
  _C,
  _c,
  _CI,
  _CIa,
  _CS,
  _CST,
  _D,
  _DV,
  _e,
  _EC,
  _EM,
  _ER,
  _GAWSDSQ,
  _GAWSDSQR,
  _GAWSDSQRe,
  _GQ,
  _GRSQC,
  _GRSQCR,
  _GRSQCRe,
  _GSQ,
  _GSQIRFT,
  _GSQIRFTR,
  _GSQIRFTRe,
  _GSQR,
  _GSQRe,
  _hE,
  _I,
  _LAWSDSQ,
  _LAWSDSQR,
  _LAWSDSQRi,
  _LRSQCH,
  _LRSQCHBQ,
  _LRSQCHBQR,
  _LRSQCHBQRi,
  _LRSQCHR,
  _LRSQCHRi,
  _LSQ,
  _LSQIRIT,
  _LSQIRITR,
  _LSQIRITRi,
  _LSQR,
  _LSQRi,
  _LU,
  _M,
  _MD,
  _MI,
  _MN,
  _MNe,
  _MR,
  _MSR,
  _NT,
  _P,
  _PSQIRIT,
  _PSQIRITR,
  _PSQIRITRu,
  _PU,
  _PV,
  _Q,
  _QA,
  _QAAL,
  _QC,
  _QCI,
  _QCu,
  _QEE,
  _QN,
  _QP,
  _QRAL,
  _Qu,
  _R,
  _RI,
  _RQ,
  _RQe,
  _RSQC,
  _RSQCHLD,
  _RSQI,
  _RSQIR,
  _RSQIRe,
  _S,
  _SC,
  _SCA,
  _SN,
  _SQ,
  _SQIRIT,
  _SQIRITL,
  _SQLD,
  _U,
  _UM,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ErrorReason = struct(n0, _ER, 0, [_EC, _EM], [0, 0]);
export var GetAWSDefaultServiceQuotaRequest = struct(n0, _GAWSDSQR, 0, [_SC, _QC], [0, 0]);
export var GetAWSDefaultServiceQuotaResponse = struct(n0, _GAWSDSQRe, 0, [_Q], [() => ServiceQuota]);
export var GetRequestedServiceQuotaChangeRequest = struct(n0, _GRSQCR, 0, [_RI], [0]);
export var GetRequestedServiceQuotaChangeResponse = struct(n0, _GRSQCRe, 0, [_RQ], [() => RequestedServiceQuotaChange]);
export var GetServiceQuotaIncreaseRequestFromTemplateRequest = struct(n0, _GSQIRFTR, 0, [_SC, _QC, _AR], [0, 0, 0]);
export var GetServiceQuotaIncreaseRequestFromTemplateResponse = struct(
  n0,
  _GSQIRFTRe,
  0,
  [_SQIRIT],
  [() => ServiceQuotaIncreaseRequestInTemplate]
);
export var GetServiceQuotaRequest = struct(n0, _GSQR, 0, [_SC, _QC, _CI], [0, 0, 0]);
export var GetServiceQuotaResponse = struct(n0, _GSQRe, 0, [_Q], [() => ServiceQuota]);
export var ListAWSDefaultServiceQuotasRequest = struct(n0, _LAWSDSQR, 0, [_SC, _NT, _MR], [0, 0, 1]);
export var ListAWSDefaultServiceQuotasResponse = struct(
  n0,
  _LAWSDSQRi,
  0,
  [_NT, _Qu],
  [0, () => ServiceQuotaListDefinition]
);
export var ListRequestedServiceQuotaChangeHistoryByQuotaRequest = struct(
  n0,
  _LRSQCHBQR,
  0,
  [_SC, _QC, _S, _NT, _MR, _QRAL],
  [0, 0, 0, 0, 1, 0]
);
export var ListRequestedServiceQuotaChangeHistoryByQuotaResponse = struct(
  n0,
  _LRSQCHBQRi,
  0,
  [_NT, _RQe],
  [0, () => RequestedServiceQuotaChangeHistoryListDefinition]
);
export var ListRequestedServiceQuotaChangeHistoryRequest = struct(
  n0,
  _LRSQCHR,
  0,
  [_SC, _S, _NT, _MR, _QRAL],
  [0, 0, 0, 1, 0]
);
export var ListRequestedServiceQuotaChangeHistoryResponse = struct(
  n0,
  _LRSQCHRi,
  0,
  [_NT, _RQe],
  [0, () => RequestedServiceQuotaChangeHistoryListDefinition]
);
export var ListServiceQuotaIncreaseRequestsInTemplateRequest = struct(
  n0,
  _LSQIRITR,
  0,
  [_SC, _AR, _NT, _MR],
  [0, 0, 0, 1]
);
export var ListServiceQuotaIncreaseRequestsInTemplateResponse = struct(
  n0,
  _LSQIRITRi,
  0,
  [_SQIRITL, _NT],
  [() => ServiceQuotaIncreaseRequestInTemplateList, 0]
);
export var ListServiceQuotasRequest = struct(n0, _LSQR, 0, [_SC, _NT, _MR, _QC, _QAAL], [0, 0, 1, 0, 0]);
export var ListServiceQuotasResponse = struct(n0, _LSQRi, 0, [_NT, _Qu], [0, () => ServiceQuotaListDefinition]);
export var MetricInfo = struct(n0, _MI, 0, [_MN, _MNe, _MD, _MSR], [0, 0, 128 | 0, 0]);
export var PutServiceQuotaIncreaseRequestIntoTemplateRequest = struct(
  n0,
  _PSQIRITR,
  0,
  [_QC, _SC, _AR, _DV],
  [0, 0, 0, 1]
);
export var PutServiceQuotaIncreaseRequestIntoTemplateResponse = struct(
  n0,
  _PSQIRITRu,
  0,
  [_SQIRIT],
  [() => ServiceQuotaIncreaseRequestInTemplate]
);
export var QuotaContextInfo = struct(n0, _QCI, 0, [_CS, _CST, _CI], [0, 0, 0]);
export var QuotaExceededException = error(
  n0,
  _QEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __QuotaExceededException
);
export var QuotaPeriod = struct(n0, _QP, 0, [_PV, _PU], [1, 0]);
export var RequestedServiceQuotaChange = struct(
  n0,
  _RSQC,
  0,
  [_I, _CIa, _SC, _SN, _QC, _QN, _DV, _S, _C, _LU, _R, _QA, _GQ, _U, _QRAL, _QCu],
  [0, 0, 0, 0, 0, 0, 1, 0, 4, 4, 0, 0, 2, 0, 0, () => QuotaContextInfo]
);
export var RequestServiceQuotaIncreaseRequest = struct(n0, _RSQIR, 0, [_SC, _QC, _DV, _CI, _SCA], [0, 0, 1, 0, 2]);
export var RequestServiceQuotaIncreaseResponse = struct(n0, _RSQIRe, 0, [_RQ], [() => RequestedServiceQuotaChange]);
export var ServiceQuota = struct(
  n0,
  _SQ,
  0,
  [_SC, _SN, _QA, _QC, _QN, _V, _U, _A, _GQ, _UM, _P, _ER, _QAAL, _QCu, _D],
  [0, 0, 0, 0, 0, 1, 0, 2, 2, () => MetricInfo, () => QuotaPeriod, () => ErrorReason, 0, () => QuotaContextInfo, 0]
);
export var ServiceQuotaIncreaseRequestInTemplate = struct(
  n0,
  _SQIRIT,
  0,
  [_SC, _SN, _QC, _QN, _DV, _AR, _U, _GQ],
  [0, 0, 0, 0, 1, 0, 0, 2]
);
export var RequestedServiceQuotaChangeHistoryListDefinition = list(n0, _RSQCHLD, 0, () => RequestedServiceQuotaChange);
export var ServiceQuotaIncreaseRequestInTemplateList = list(
  n0,
  _SQIRITL,
  0,
  () => ServiceQuotaIncreaseRequestInTemplate
);
export var ServiceQuotaListDefinition = list(n0, _SQLD, 0, () => ServiceQuota);
export var MetricDimensionsMapDefinition = 128 | 0;

export var GetAWSDefaultServiceQuota = op(
  n0,
  _GAWSDSQ,
  0,
  () => GetAWSDefaultServiceQuotaRequest,
  () => GetAWSDefaultServiceQuotaResponse
);
export var GetRequestedServiceQuotaChange = op(
  n0,
  _GRSQC,
  0,
  () => GetRequestedServiceQuotaChangeRequest,
  () => GetRequestedServiceQuotaChangeResponse
);
export var GetServiceQuota = op(
  n0,
  _GSQ,
  0,
  () => GetServiceQuotaRequest,
  () => GetServiceQuotaResponse
);
export var GetServiceQuotaIncreaseRequestFromTemplate = op(
  n0,
  _GSQIRFT,
  0,
  () => GetServiceQuotaIncreaseRequestFromTemplateRequest,
  () => GetServiceQuotaIncreaseRequestFromTemplateResponse
);
export var ListAWSDefaultServiceQuotas = op(
  n0,
  _LAWSDSQ,
  0,
  () => ListAWSDefaultServiceQuotasRequest,
  () => ListAWSDefaultServiceQuotasResponse
);
export var ListRequestedServiceQuotaChangeHistory = op(
  n0,
  _LRSQCH,
  0,
  () => ListRequestedServiceQuotaChangeHistoryRequest,
  () => ListRequestedServiceQuotaChangeHistoryResponse
);
export var ListRequestedServiceQuotaChangeHistoryByQuota = op(
  n0,
  _LRSQCHBQ,
  0,
  () => ListRequestedServiceQuotaChangeHistoryByQuotaRequest,
  () => ListRequestedServiceQuotaChangeHistoryByQuotaResponse
);
export var ListServiceQuotaIncreaseRequestsInTemplate = op(
  n0,
  _LSQIRIT,
  0,
  () => ListServiceQuotaIncreaseRequestsInTemplateRequest,
  () => ListServiceQuotaIncreaseRequestsInTemplateResponse
);
export var ListServiceQuotas = op(
  n0,
  _LSQ,
  0,
  () => ListServiceQuotasRequest,
  () => ListServiceQuotasResponse
);
export var PutServiceQuotaIncreaseRequestIntoTemplate = op(
  n0,
  _PSQIRIT,
  0,
  () => PutServiceQuotaIncreaseRequestIntoTemplateRequest,
  () => PutServiceQuotaIncreaseRequestIntoTemplateResponse
);
export var RequestServiceQuotaIncrease = op(
  n0,
  _RSQI,
  0,
  () => RequestServiceQuotaIncreaseRequest,
  () => RequestServiceQuotaIncreaseResponse
);
