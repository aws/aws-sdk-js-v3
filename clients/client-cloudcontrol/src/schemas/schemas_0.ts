const _AEE = "AlreadyExistsException";
const _CME = "ConcurrentModificationException";
const _COE = "ConcurrentOperationException";
const _CR = "CreateResource";
const _CRI = "CreateResourceInput";
const _CRO = "CreateResourceOutput";
const _CRR = "CancelResourceRequest";
const _CRRI = "CancelResourceRequestInput";
const _CRRO = "CancelResourceRequestOutput";
const _CT = "ClientToken";
const _CTCE = "ClientTokenConflictException";
const _DR = "DeleteResource";
const _DRI = "DeleteResourceInput";
const _DRO = "DeleteResourceOutput";
const _DS = "DesiredState";
const _EC = "ErrorCode";
const _ET = "EventTime";
const _FM = "FailureMode";
const _GR = "GetResource";
const _GRI = "GetResourceInput";
const _GRO = "GetResourceOutput";
const _GRRS = "GetResourceRequestStatus";
const _GRRSI = "GetResourceRequestStatusInput";
const _GRRSO = "GetResourceRequestStatusOutput";
const _GSE = "GeneralServiceException";
const _HET = "HookEventTime";
const _HFE = "HandlerFailureException";
const _HIFE = "HandlerInternalFailureException";
const _HPE = "HooksProgressEvent";
const _HPEo = "HookProgressEvent";
const _HRT = "HooksRequestToken";
const _HS = "HookStatus";
const _HSM = "HookStatusMessage";
const _HTA = "HookTypeArn";
const _HTN = "HookTypeName";
const _HTVI = "HookTypeVersionId";
const _I = "Identifier";
const _ICE = "InvalidCredentialsException";
const _IP = "InvocationPoint";
const _IRE = "InvalidRequestException";
const _LR = "ListResources";
const _LRI = "ListResourcesInput";
const _LRO = "ListResourcesOutput";
const _LRR = "ListResourceRequests";
const _LRRI = "ListResourceRequestsInput";
const _LRRO = "ListResourceRequestsOutput";
const _M = "Message";
const _MR = "MaxResults";
const _NFE = "NetworkFailureException";
const _NSE = "NotStabilizedException";
const _NT = "NextToken";
const _NUE = "NotUpdatableException";
const _O = "Operation";
const _OS = "OperationStatus";
const _OSp = "OperationStatuses";
const _Op = "Operations";
const _P = "Properties";
const _PD = "PatchDocument";
const _PE = "ProgressEvent";
const _PTE = "PrivateTypeException";
const _RA = "RoleArn";
const _RAe = "RetryAfter";
const _RCE = "ResourceConflictException";
const _RD = "ResourceDescription";
const _RDe = "ResourceDescriptions";
const _RM = "ResourceModel";
const _RNFE = "ResourceNotFoundException";
const _RRSF = "ResourceRequestStatusFilter";
const _RRSS = "ResourceRequestStatusSummaries";
const _RT = "RequestToken";
const _RTNFE = "RequestTokenNotFoundException";
const _SIEE = "ServiceInternalErrorException";
const _SLEE = "ServiceLimitExceededException";
const _SM = "StatusMessage";
const _TE = "ThrottlingException";
const _TN = "TypeName";
const _TNFE = "TypeNotFoundException";
const _TVI = "TypeVersionId";
const _UAE = "UnsupportedActionException";
const _UR = "UpdateResource";
const _URI = "UpdateResourceInput";
const _URO = "UpdateResourceOutput";
const _aQE = "awsQueryError";
const _c = "client";
const _e = "error";
const _hE = "httpError";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.cloudcontrol";
const n0 = "com.amazonaws.cloudcontrol";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { CloudControlServiceException } from "../models/CloudControlServiceException";
import {
  AlreadyExistsException,
  ClientTokenConflictException,
  ConcurrentModificationException,
  ConcurrentOperationException,
  GeneralServiceException,
  HandlerFailureException,
  HandlerInternalFailureException,
  InvalidCredentialsException,
  InvalidRequestException,
  NetworkFailureException,
  NotStabilizedException,
  NotUpdatableException,
  PrivateTypeException,
  RequestTokenNotFoundException,
  ResourceConflictException,
  ResourceNotFoundException,
  ServiceInternalErrorException,
  ServiceLimitExceededException,
  ThrottlingException,
  TypeNotFoundException,
  UnsupportedActionException,
} from "../models/errors";

/* eslint no-var: 0 */
var PatchDocument: StaticSimpleSchema = [0, n0, _PD, 8, 0];
var Properties: StaticSimpleSchema = [0, n0, _P, 8, 0];
export var AlreadyExistsException$: StaticErrorSchema = [
  -3,
  n0,
  _AEE,
  { [_e]: _c, [_hE]: 400, [_aQE]: [`AlreadyExistsException`, 400] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(AlreadyExistsException$, AlreadyExistsException);
export var CancelResourceRequestInput$: StaticStructureSchema = [3, n0, _CRRI, 0, [_RT], [0]];
export var CancelResourceRequestOutput$: StaticStructureSchema = [3, n0, _CRRO, 0, [_PE], [[() => ProgressEvent$, 0]]];
export var ClientTokenConflictException$: StaticErrorSchema = [
  -3,
  n0,
  _CTCE,
  { [_e]: _c, [_hE]: 409, [_aQE]: [`ClientTokenConflictException`, 409] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ClientTokenConflictException$, ClientTokenConflictException);
export var ConcurrentModificationException$: StaticErrorSchema = [
  -3,
  n0,
  _CME,
  { [_e]: _s, [_hE]: 500, [_aQE]: [`ConcurrentModificationException`, 500] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ConcurrentModificationException$, ConcurrentModificationException);
export var ConcurrentOperationException$: StaticErrorSchema = [
  -3,
  n0,
  _COE,
  { [_e]: _c, [_hE]: 409, [_aQE]: [`ConcurrentOperationException`, 409] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ConcurrentOperationException$, ConcurrentOperationException);
export var CreateResourceInput$: StaticStructureSchema = [
  3,
  n0,
  _CRI,
  0,
  [_TN, _TVI, _RA, _CT, _DS],
  [0, 0, 0, [0, 4], [() => Properties, 0]],
];
export var CreateResourceOutput$: StaticStructureSchema = [3, n0, _CRO, 0, [_PE], [[() => ProgressEvent$, 0]]];
export var DeleteResourceInput$: StaticStructureSchema = [
  3,
  n0,
  _DRI,
  0,
  [_TN, _TVI, _RA, _CT, _I],
  [0, 0, 0, [0, 4], 0],
];
export var DeleteResourceOutput$: StaticStructureSchema = [3, n0, _DRO, 0, [_PE], [[() => ProgressEvent$, 0]]];
export var GeneralServiceException$: StaticErrorSchema = [
  -3,
  n0,
  _GSE,
  { [_e]: _c, [_hE]: 400, [_aQE]: [`GeneralServiceException`, 400] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(GeneralServiceException$, GeneralServiceException);
export var GetResourceInput$: StaticStructureSchema = [3, n0, _GRI, 0, [_TN, _TVI, _RA, _I], [0, 0, 0, 0]];
export var GetResourceOutput$: StaticStructureSchema = [
  3,
  n0,
  _GRO,
  0,
  [_TN, _RD],
  [0, [() => ResourceDescription$, 0]],
];
export var GetResourceRequestStatusInput$: StaticStructureSchema = [3, n0, _GRRSI, 0, [_RT], [0]];
export var GetResourceRequestStatusOutput$: StaticStructureSchema = [
  3,
  n0,
  _GRRSO,
  0,
  [_PE, _HPE],
  [[() => ProgressEvent$, 0], () => HooksProgressEvent],
];
export var HandlerFailureException$: StaticErrorSchema = [
  -3,
  n0,
  _HFE,
  { [_e]: _s, [_hE]: 502, [_aQE]: [`HandlerFailureException`, 502] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(HandlerFailureException$, HandlerFailureException);
export var HandlerInternalFailureException$: StaticErrorSchema = [
  -3,
  n0,
  _HIFE,
  { [_e]: _s, [_hE]: 502, [_aQE]: [`HandlerInternalFailureException`, 502] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(HandlerInternalFailureException$, HandlerInternalFailureException);
export var HookProgressEvent$: StaticStructureSchema = [
  3,
  n0,
  _HPEo,
  0,
  [_HTN, _HTVI, _HTA, _IP, _HS, _HET, _HSM, _FM],
  [0, 0, 0, 0, 0, 4, 0, 0],
];
export var InvalidCredentialsException$: StaticErrorSchema = [
  -3,
  n0,
  _ICE,
  { [_e]: _c, [_hE]: 401, [_aQE]: [`InvalidCredentialsException`, 401] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidCredentialsException$, InvalidCredentialsException);
export var InvalidRequestException$: StaticErrorSchema = [
  -3,
  n0,
  _IRE,
  { [_e]: _c, [_hE]: 400, [_aQE]: [`InvalidRequestException`, 400] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidRequestException$, InvalidRequestException);
export var ListResourceRequestsInput$: StaticStructureSchema = [
  3,
  n0,
  _LRRI,
  0,
  [_MR, _NT, _RRSF],
  [1, 0, () => ResourceRequestStatusFilter$],
];
export var ListResourceRequestsOutput$: StaticStructureSchema = [
  3,
  n0,
  _LRRO,
  0,
  [_RRSS, _NT],
  [[() => ResourceRequestStatusSummaries, 0], 0],
];
export var ListResourcesInput$: StaticStructureSchema = [
  3,
  n0,
  _LRI,
  0,
  [_TN, _TVI, _RA, _NT, _MR, _RM],
  [0, 0, 0, 0, 1, [() => Properties, 0]],
];
export var ListResourcesOutput$: StaticStructureSchema = [
  3,
  n0,
  _LRO,
  0,
  [_TN, _RDe, _NT],
  [0, [() => ResourceDescriptions, 0], 0],
];
export var NetworkFailureException$: StaticErrorSchema = [
  -3,
  n0,
  _NFE,
  { [_e]: _s, [_hE]: 502, [_aQE]: [`NetworkFailureException`, 502] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(NetworkFailureException$, NetworkFailureException);
export var NotStabilizedException$: StaticErrorSchema = [
  -3,
  n0,
  _NSE,
  { [_e]: _c, [_hE]: 400, [_aQE]: [`NotStabilizedException`, 400] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(NotStabilizedException$, NotStabilizedException);
export var NotUpdatableException$: StaticErrorSchema = [
  -3,
  n0,
  _NUE,
  { [_e]: _c, [_hE]: 400, [_aQE]: [`NotUpdatableException`, 400] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(NotUpdatableException$, NotUpdatableException);
export var PrivateTypeException$: StaticErrorSchema = [
  -3,
  n0,
  _PTE,
  { [_e]: _c, [_hE]: 400, [_aQE]: [`PrivateTypeException`, 400] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(PrivateTypeException$, PrivateTypeException);
export var ProgressEvent$: StaticStructureSchema = [
  3,
  n0,
  _PE,
  0,
  [_TN, _I, _RT, _HRT, _O, _OS, _ET, _RM, _SM, _EC, _RAe],
  [0, 0, 0, 0, 0, 0, 4, [() => Properties, 0], 0, 0, 4],
];
export var RequestTokenNotFoundException$: StaticErrorSchema = [
  -3,
  n0,
  _RTNFE,
  { [_e]: _c, [_hE]: 404, [_aQE]: [`RequestTokenNotFoundException`, 404] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(RequestTokenNotFoundException$, RequestTokenNotFoundException);
export var ResourceConflictException$: StaticErrorSchema = [
  -3,
  n0,
  _RCE,
  { [_e]: _c, [_hE]: 409, [_aQE]: [`ResourceConflictException`, 409] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceConflictException$, ResourceConflictException);
export var ResourceDescription$: StaticStructureSchema = [3, n0, _RD, 0, [_I, _P], [0, [() => Properties, 0]]];
export var ResourceNotFoundException$: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  { [_e]: _c, [_hE]: 404, [_aQE]: [`ResourceNotFoundException`, 404] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ResourceRequestStatusFilter$: StaticStructureSchema = [3, n0, _RRSF, 0, [_Op, _OSp], [64 | 0, 64 | 0]];
export var ServiceInternalErrorException$: StaticErrorSchema = [
  -3,
  n0,
  _SIEE,
  { [_e]: _s, [_hE]: 502, [_aQE]: [`ServiceInternalErrorException`, 502] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceInternalErrorException$, ServiceInternalErrorException);
export var ServiceLimitExceededException$: StaticErrorSchema = [
  -3,
  n0,
  _SLEE,
  { [_e]: _c, [_hE]: 400, [_aQE]: [`ServiceLimitExceededException`, 400] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceLimitExceededException$, ServiceLimitExceededException);
export var ThrottlingException$: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  { [_e]: _c, [_hE]: 429, [_aQE]: [`ThrottlingException`, 429] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var TypeNotFoundException$: StaticErrorSchema = [
  -3,
  n0,
  _TNFE,
  { [_e]: _c, [_hE]: 404, [_aQE]: [`TypeNotFoundException`, 404] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(TypeNotFoundException$, TypeNotFoundException);
export var UnsupportedActionException$: StaticErrorSchema = [
  -3,
  n0,
  _UAE,
  { [_e]: _c, [_hE]: 405, [_aQE]: [`UnsupportedActionException`, 405] },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(UnsupportedActionException$, UnsupportedActionException);
export var UpdateResourceInput$: StaticStructureSchema = [
  3,
  n0,
  _URI,
  0,
  [_TN, _TVI, _RA, _CT, _I, _PD],
  [0, 0, 0, [0, 4], 0, [() => PatchDocument, 0]],
];
export var UpdateResourceOutput$: StaticStructureSchema = [3, n0, _URO, 0, [_PE], [[() => ProgressEvent$, 0]]];
export var CloudControlServiceException$: StaticErrorSchema = [-3, _sm, "CloudControlServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(CloudControlServiceException$, CloudControlServiceException);
var HooksProgressEvent: StaticListSchema = [1, n0, _HPE, 0, () => HookProgressEvent$];
var Operations = 64 | 0;
var OperationStatuses = 64 | 0;
var ResourceDescriptions: StaticListSchema = [1, n0, _RDe, 0, [() => ResourceDescription$, 0]];
var ResourceRequestStatusSummaries: StaticListSchema = [1, n0, _RRSS, 0, [() => ProgressEvent$, 0]];
export var CancelResourceRequest$: StaticOperationSchema = [
  9,
  n0,
  _CRR,
  2,
  () => CancelResourceRequestInput$,
  () => CancelResourceRequestOutput$,
];
export var CreateResource$: StaticOperationSchema = [
  9,
  n0,
  _CR,
  0,
  () => CreateResourceInput$,
  () => CreateResourceOutput$,
];
export var DeleteResource$: StaticOperationSchema = [
  9,
  n0,
  _DR,
  0,
  () => DeleteResourceInput$,
  () => DeleteResourceOutput$,
];
export var GetResource$: StaticOperationSchema = [9, n0, _GR, 0, () => GetResourceInput$, () => GetResourceOutput$];
export var GetResourceRequestStatus$: StaticOperationSchema = [
  9,
  n0,
  _GRRS,
  0,
  () => GetResourceRequestStatusInput$,
  () => GetResourceRequestStatusOutput$,
];
export var ListResourceRequests$: StaticOperationSchema = [
  9,
  n0,
  _LRR,
  0,
  () => ListResourceRequestsInput$,
  () => ListResourceRequestsOutput$,
];
export var ListResources$: StaticOperationSchema = [
  9,
  n0,
  _LR,
  0,
  () => ListResourcesInput$,
  () => ListResourcesOutput$,
];
export var UpdateResource$: StaticOperationSchema = [
  9,
  n0,
  _UR,
  0,
  () => UpdateResourceInput$,
  () => UpdateResourceOutput$,
];
