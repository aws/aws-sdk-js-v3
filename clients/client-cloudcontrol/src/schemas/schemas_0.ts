export const _AEE = "AlreadyExistsException";
export const _CME = "ConcurrentModificationException";
export const _COE = "ConcurrentOperationException";
export const _CR = "CreateResource";
export const _CRI = "CreateResourceInput";
export const _CRO = "CreateResourceOutput";
export const _CRR = "CancelResourceRequest";
export const _CRRI = "CancelResourceRequestInput";
export const _CRRO = "CancelResourceRequestOutput";
export const _CT = "ClientToken";
export const _CTCE = "ClientTokenConflictException";
export const _DR = "DeleteResource";
export const _DRI = "DeleteResourceInput";
export const _DRO = "DeleteResourceOutput";
export const _DS = "DesiredState";
export const _EC = "ErrorCode";
export const _ET = "EventTime";
export const _FM = "FailureMode";
export const _GR = "GetResource";
export const _GRI = "GetResourceInput";
export const _GRO = "GetResourceOutput";
export const _GRRS = "GetResourceRequestStatus";
export const _GRRSI = "GetResourceRequestStatusInput";
export const _GRRSO = "GetResourceRequestStatusOutput";
export const _GSE = "GeneralServiceException";
export const _HET = "HookEventTime";
export const _HFE = "HandlerFailureException";
export const _HIFE = "HandlerInternalFailureException";
export const _HPE = "HooksProgressEvent";
export const _HPEo = "HookProgressEvent";
export const _HRT = "HooksRequestToken";
export const _HS = "HookStatus";
export const _HSM = "HookStatusMessage";
export const _HTA = "HookTypeArn";
export const _HTN = "HookTypeName";
export const _HTVI = "HookTypeVersionId";
export const _I = "Identifier";
export const _ICE = "InvalidCredentialsException";
export const _IP = "InvocationPoint";
export const _IRE = "InvalidRequestException";
export const _LR = "ListResources";
export const _LRI = "ListResourcesInput";
export const _LRO = "ListResourcesOutput";
export const _LRR = "ListResourceRequests";
export const _LRRI = "ListResourceRequestsInput";
export const _LRRO = "ListResourceRequestsOutput";
export const _M = "Message";
export const _MR = "MaxResults";
export const _NFE = "NetworkFailureException";
export const _NSE = "NotStabilizedException";
export const _NT = "NextToken";
export const _NUE = "NotUpdatableException";
export const _O = "Operation";
export const _OS = "OperationStatus";
export const _OSp = "OperationStatuses";
export const _Op = "Operations";
export const _P = "Properties";
export const _PD = "PatchDocument";
export const _PE = "ProgressEvent";
export const _PTE = "PrivateTypeException";
export const _RA = "RoleArn";
export const _RAe = "RetryAfter";
export const _RCE = "ResourceConflictException";
export const _RD = "ResourceDescription";
export const _RDe = "ResourceDescriptions";
export const _RM = "ResourceModel";
export const _RNFE = "ResourceNotFoundException";
export const _RRSF = "ResourceRequestStatusFilter";
export const _RRSS = "ResourceRequestStatusSummaries";
export const _RT = "RequestToken";
export const _RTNFE = "RequestTokenNotFoundException";
export const _SIEE = "ServiceInternalErrorException";
export const _SLEE = "ServiceLimitExceededException";
export const _SM = "StatusMessage";
export const _TE = "ThrottlingException";
export const _TN = "TypeName";
export const _TNFE = "TypeNotFoundException";
export const _TVI = "TypeVersionId";
export const _UAE = "UnsupportedActionException";
export const _UR = "UpdateResource";
export const _URI = "UpdateResourceInput";
export const _URO = "UpdateResourceOutput";
export const _aQE = "awsQueryError";
export const _c = "client";
export const _e = "error";
export const _hE = "httpError";
export const _s = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.cloudcontrol";
export const n0 = "com.amazonaws.cloudcontrol";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { CloudControlServiceException as __CloudControlServiceException } from "../models/CloudControlServiceException";
import {
  AlreadyExistsException as __AlreadyExistsException,
  ClientTokenConflictException as __ClientTokenConflictException,
  ConcurrentModificationException as __ConcurrentModificationException,
  ConcurrentOperationException as __ConcurrentOperationException,
  GeneralServiceException as __GeneralServiceException,
  HandlerFailureException as __HandlerFailureException,
  HandlerInternalFailureException as __HandlerInternalFailureException,
  InvalidCredentialsException as __InvalidCredentialsException,
  InvalidRequestException as __InvalidRequestException,
  NetworkFailureException as __NetworkFailureException,
  NotStabilizedException as __NotStabilizedException,
  NotUpdatableException as __NotUpdatableException,
  PrivateTypeException as __PrivateTypeException,
  RequestTokenNotFoundException as __RequestTokenNotFoundException,
  ResourceConflictException as __ResourceConflictException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceInternalErrorException as __ServiceInternalErrorException,
  ServiceLimitExceededException as __ServiceLimitExceededException,
  ThrottlingException as __ThrottlingException,
  TypeNotFoundException as __TypeNotFoundException,
  UnsupportedActionException as __UnsupportedActionException,
} from "../models/index";

/* eslint no-var: 0 */

export var PatchDocument: StaticSimpleSchema = [0, n0, _PD, 8, 0];
export var Properties: StaticSimpleSchema = [0, n0, _P, 8, 0];
export var AlreadyExistsException: StaticErrorSchema = [
  -3,
  n0,
  _AEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AlreadyExistsException`, 400],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(AlreadyExistsException, __AlreadyExistsException);

export var CancelResourceRequestInput: StaticStructureSchema = [3, n0, _CRRI, 0, [_RT], [0]];
export var CancelResourceRequestOutput: StaticStructureSchema = [3, n0, _CRRO, 0, [_PE], [[() => ProgressEvent, 0]]];
export var ClientTokenConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CTCE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`ClientTokenConflictException`, 409],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ClientTokenConflictException, __ClientTokenConflictException);

export var ConcurrentModificationException: StaticErrorSchema = [
  -3,
  n0,
  _CME,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`ConcurrentModificationException`, 500],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ConcurrentModificationException, __ConcurrentModificationException);

export var ConcurrentOperationException: StaticErrorSchema = [
  -3,
  n0,
  _COE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`ConcurrentOperationException`, 409],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ConcurrentOperationException, __ConcurrentOperationException);

export var CreateResourceInput: StaticStructureSchema = [
  3,
  n0,
  _CRI,
  0,
  [_TN, _TVI, _RA, _CT, _DS],
  [0, 0, 0, [0, 4], [() => Properties, 0]],
];
export var CreateResourceOutput: StaticStructureSchema = [3, n0, _CRO, 0, [_PE], [[() => ProgressEvent, 0]]];
export var DeleteResourceInput: StaticStructureSchema = [
  3,
  n0,
  _DRI,
  0,
  [_TN, _TVI, _RA, _CT, _I],
  [0, 0, 0, [0, 4], 0],
];
export var DeleteResourceOutput: StaticStructureSchema = [3, n0, _DRO, 0, [_PE], [[() => ProgressEvent, 0]]];
export var GeneralServiceException: StaticErrorSchema = [
  -3,
  n0,
  _GSE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`GeneralServiceException`, 400],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(GeneralServiceException, __GeneralServiceException);

export var GetResourceInput: StaticStructureSchema = [3, n0, _GRI, 0, [_TN, _TVI, _RA, _I], [0, 0, 0, 0]];
export var GetResourceOutput: StaticStructureSchema = [3, n0, _GRO, 0, [_TN, _RD], [0, [() => ResourceDescription, 0]]];
export var GetResourceRequestStatusInput: StaticStructureSchema = [3, n0, _GRRSI, 0, [_RT], [0]];
export var GetResourceRequestStatusOutput: StaticStructureSchema = [
  3,
  n0,
  _GRRSO,
  0,
  [_PE, _HPE],
  [[() => ProgressEvent, 0], () => HooksProgressEvent],
];
export var HandlerFailureException: StaticErrorSchema = [
  -3,
  n0,
  _HFE,
  {
    [_e]: _s,
    [_hE]: 502,
    [_aQE]: [`HandlerFailureException`, 502],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(HandlerFailureException, __HandlerFailureException);

export var HandlerInternalFailureException: StaticErrorSchema = [
  -3,
  n0,
  _HIFE,
  {
    [_e]: _s,
    [_hE]: 502,
    [_aQE]: [`HandlerInternalFailureException`, 502],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(HandlerInternalFailureException, __HandlerInternalFailureException);

export var HookProgressEvent: StaticStructureSchema = [
  3,
  n0,
  _HPEo,
  0,
  [_HTN, _HTVI, _HTA, _IP, _HS, _HET, _HSM, _FM],
  [0, 0, 0, 0, 0, 4, 0, 0],
];
export var InvalidCredentialsException: StaticErrorSchema = [
  -3,
  n0,
  _ICE,
  {
    [_e]: _c,
    [_hE]: 401,
    [_aQE]: [`InvalidCredentialsException`, 401],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidCredentialsException, __InvalidCredentialsException);

export var InvalidRequestException: StaticErrorSchema = [
  -3,
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidRequestException`, 400],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidRequestException, __InvalidRequestException);

export var ListResourceRequestsInput: StaticStructureSchema = [
  3,
  n0,
  _LRRI,
  0,
  [_MR, _NT, _RRSF],
  [1, 0, () => ResourceRequestStatusFilter],
];
export var ListResourceRequestsOutput: StaticStructureSchema = [
  3,
  n0,
  _LRRO,
  0,
  [_RRSS, _NT],
  [[() => ResourceRequestStatusSummaries, 0], 0],
];
export var ListResourcesInput: StaticStructureSchema = [
  3,
  n0,
  _LRI,
  0,
  [_TN, _TVI, _RA, _NT, _MR, _RM],
  [0, 0, 0, 0, 1, [() => Properties, 0]],
];
export var ListResourcesOutput: StaticStructureSchema = [
  3,
  n0,
  _LRO,
  0,
  [_TN, _RDe, _NT],
  [0, [() => ResourceDescriptions, 0], 0],
];
export var NetworkFailureException: StaticErrorSchema = [
  -3,
  n0,
  _NFE,
  {
    [_e]: _s,
    [_hE]: 502,
    [_aQE]: [`NetworkFailureException`, 502],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(NetworkFailureException, __NetworkFailureException);

export var NotStabilizedException: StaticErrorSchema = [
  -3,
  n0,
  _NSE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`NotStabilizedException`, 400],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(NotStabilizedException, __NotStabilizedException);

export var NotUpdatableException: StaticErrorSchema = [
  -3,
  n0,
  _NUE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`NotUpdatableException`, 400],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(NotUpdatableException, __NotUpdatableException);

export var PrivateTypeException: StaticErrorSchema = [
  -3,
  n0,
  _PTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`PrivateTypeException`, 400],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(PrivateTypeException, __PrivateTypeException);

export var ProgressEvent: StaticStructureSchema = [
  3,
  n0,
  _PE,
  0,
  [_TN, _I, _RT, _HRT, _O, _OS, _ET, _RM, _SM, _EC, _RAe],
  [0, 0, 0, 0, 0, 0, 4, [() => Properties, 0], 0, 0, 4],
];
export var RequestTokenNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RTNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`RequestTokenNotFoundException`, 404],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(RequestTokenNotFoundException, __RequestTokenNotFoundException);

export var ResourceConflictException: StaticErrorSchema = [
  -3,
  n0,
  _RCE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`ResourceConflictException`, 409],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceConflictException, __ResourceConflictException);

export var ResourceDescription: StaticStructureSchema = [3, n0, _RD, 0, [_I, _P], [0, [() => Properties, 0]]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ResourceNotFoundException`, 404],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ResourceRequestStatusFilter: StaticStructureSchema = [3, n0, _RRSF, 0, [_Op, _OSp], [64 | 0, 64 | 0]];
export var ServiceInternalErrorException: StaticErrorSchema = [
  -3,
  n0,
  _SIEE,
  {
    [_e]: _s,
    [_hE]: 502,
    [_aQE]: [`ServiceInternalErrorException`, 502],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceInternalErrorException, __ServiceInternalErrorException);

export var ServiceLimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ServiceLimitExceededException`, 400],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ServiceLimitExceededException, __ServiceLimitExceededException);

export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`ThrottlingException`, 429],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var TypeNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _TNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`TypeNotFoundException`, 404],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(TypeNotFoundException, __TypeNotFoundException);

export var UnsupportedActionException: StaticErrorSchema = [
  -3,
  n0,
  _UAE,
  {
    [_e]: _c,
    [_hE]: 405,
    [_aQE]: [`UnsupportedActionException`, 405],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(UnsupportedActionException, __UnsupportedActionException);

export var UpdateResourceInput: StaticStructureSchema = [
  3,
  n0,
  _URI,
  0,
  [_TN, _TVI, _RA, _CT, _I, _PD],
  [0, 0, 0, [0, 4], 0, [() => PatchDocument, 0]],
];
export var UpdateResourceOutput: StaticStructureSchema = [3, n0, _URO, 0, [_PE], [[() => ProgressEvent, 0]]];
export var CloudControlServiceException: StaticErrorSchema = [-3, _sm, "CloudControlServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(CloudControlServiceException, __CloudControlServiceException);

export var HooksProgressEvent: StaticListSchema = [1, n0, _HPE, 0, () => HookProgressEvent];
export var Operations = 64 | 0;

export var OperationStatuses = 64 | 0;

export var ResourceDescriptions: StaticListSchema = [1, n0, _RDe, 0, [() => ResourceDescription, 0]];
export var ResourceRequestStatusSummaries: StaticListSchema = [1, n0, _RRSS, 0, [() => ProgressEvent, 0]];
export var CancelResourceRequest: StaticOperationSchema = [
  9,
  n0,
  _CRR,
  2,
  () => CancelResourceRequestInput,
  () => CancelResourceRequestOutput,
];
export var CreateResource: StaticOperationSchema = [
  9,
  n0,
  _CR,
  0,
  () => CreateResourceInput,
  () => CreateResourceOutput,
];
export var DeleteResource: StaticOperationSchema = [
  9,
  n0,
  _DR,
  0,
  () => DeleteResourceInput,
  () => DeleteResourceOutput,
];
export var GetResource: StaticOperationSchema = [9, n0, _GR, 0, () => GetResourceInput, () => GetResourceOutput];
export var GetResourceRequestStatus: StaticOperationSchema = [
  9,
  n0,
  _GRRS,
  0,
  () => GetResourceRequestStatusInput,
  () => GetResourceRequestStatusOutput,
];
export var ListResourceRequests: StaticOperationSchema = [
  9,
  n0,
  _LRR,
  0,
  () => ListResourceRequestsInput,
  () => ListResourceRequestsOutput,
];
export var ListResources: StaticOperationSchema = [9, n0, _LR, 0, () => ListResourcesInput, () => ListResourcesOutput];
export var UpdateResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  0,
  () => UpdateResourceInput,
  () => UpdateResourceOutput,
];
