// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

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
import {
  _AEE,
  _aQE,
  _c,
  _CME,
  _COE,
  _CR,
  _CRI,
  _CRO,
  _CRR,
  _CRRI,
  _CRRO,
  _CT,
  _CTCE,
  _DR,
  _DRI,
  _DRO,
  _DS,
  _e,
  _EC,
  _ET,
  _FM,
  _GR,
  _GRI,
  _GRO,
  _GRRS,
  _GRRSI,
  _GRRSO,
  _GSE,
  _hE,
  _HET,
  _HFE,
  _HIFE,
  _HPE,
  _HPEo,
  _HRT,
  _HS,
  _HSM,
  _HTA,
  _HTN,
  _HTVI,
  _I,
  _ICE,
  _IP,
  _IRE,
  _LR,
  _LRI,
  _LRO,
  _LRR,
  _LRRI,
  _LRRO,
  _M,
  _MR,
  _NFE,
  _NSE,
  _NT,
  _NUE,
  _O,
  _Op,
  _OS,
  _OSp,
  _P,
  _PD,
  _PE,
  _PTE,
  _RA,
  _RAe,
  _RCE,
  _RD,
  _RDe,
  _RM,
  _RNFE,
  _RRSF,
  _RRSS,
  _RT,
  _RTNFE,
  _s,
  _SIEE,
  _SLEE,
  _SM,
  _TE,
  _TN,
  _TNFE,
  _TVI,
  _UAE,
  _UR,
  _URI,
  _URO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var PatchDocument = sim(n0, _PD, 0, 8);
export var Properties = sim(n0, _P, 0, 8);
export var AlreadyExistsException = error(
  n0,
  _AEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AlreadyExistsException`, 400],
  },
  [_M],
  [0],

  __AlreadyExistsException
);
export var CancelResourceRequestInput = struct(n0, _CRRI, 0, [_RT], [0]);
export var CancelResourceRequestOutput = struct(n0, _CRRO, 0, [_PE], [[() => ProgressEvent, 0]]);
export var ClientTokenConflictException = error(
  n0,
  _CTCE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`ClientTokenConflictException`, 409],
  },
  [_M],
  [0],

  __ClientTokenConflictException
);
export var ConcurrentModificationException = error(
  n0,
  _CME,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`ConcurrentModificationException`, 500],
  },
  [_M],
  [0],

  __ConcurrentModificationException
);
export var ConcurrentOperationException = error(
  n0,
  _COE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`ConcurrentOperationException`, 409],
  },
  [_M],
  [0],

  __ConcurrentOperationException
);
export var CreateResourceInput = struct(
  n0,
  _CRI,
  0,
  [_TN, _TVI, _RA, _CT, _DS],
  [0, 0, 0, [0, 4], [() => Properties, 0]]
);
export var CreateResourceOutput = struct(n0, _CRO, 0, [_PE], [[() => ProgressEvent, 0]]);
export var DeleteResourceInput = struct(n0, _DRI, 0, [_TN, _TVI, _RA, _CT, _I], [0, 0, 0, [0, 4], 0]);
export var DeleteResourceOutput = struct(n0, _DRO, 0, [_PE], [[() => ProgressEvent, 0]]);
export var GeneralServiceException = error(
  n0,
  _GSE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`GeneralServiceException`, 400],
  },
  [_M],
  [0],

  __GeneralServiceException
);
export var GetResourceInput = struct(n0, _GRI, 0, [_TN, _TVI, _RA, _I], [0, 0, 0, 0]);
export var GetResourceOutput = struct(n0, _GRO, 0, [_TN, _RD], [0, [() => ResourceDescription, 0]]);
export var GetResourceRequestStatusInput = struct(n0, _GRRSI, 0, [_RT], [0]);
export var GetResourceRequestStatusOutput = struct(
  n0,
  _GRRSO,
  0,
  [_PE, _HPE],
  [[() => ProgressEvent, 0], () => HooksProgressEvent]
);
export var HandlerFailureException = error(
  n0,
  _HFE,
  {
    [_e]: _s,
    [_hE]: 502,
    [_aQE]: [`HandlerFailureException`, 502],
  },
  [_M],
  [0],

  __HandlerFailureException
);
export var HandlerInternalFailureException = error(
  n0,
  _HIFE,
  {
    [_e]: _s,
    [_hE]: 502,
    [_aQE]: [`HandlerInternalFailureException`, 502],
  },
  [_M],
  [0],

  __HandlerInternalFailureException
);
export var HookProgressEvent = struct(
  n0,
  _HPEo,
  0,
  [_HTN, _HTVI, _HTA, _IP, _HS, _HET, _HSM, _FM],
  [0, 0, 0, 0, 0, 4, 0, 0]
);
export var InvalidCredentialsException = error(
  n0,
  _ICE,
  {
    [_e]: _c,
    [_hE]: 401,
    [_aQE]: [`InvalidCredentialsException`, 401],
  },
  [_M],
  [0],

  __InvalidCredentialsException
);
export var InvalidRequestException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidRequestException`, 400],
  },
  [_M],
  [0],

  __InvalidRequestException
);
export var ListResourceRequestsInput = struct(
  n0,
  _LRRI,
  0,
  [_MR, _NT, _RRSF],
  [1, 0, () => ResourceRequestStatusFilter]
);
export var ListResourceRequestsOutput = struct(
  n0,
  _LRRO,
  0,
  [_RRSS, _NT],
  [[() => ResourceRequestStatusSummaries, 0], 0]
);
export var ListResourcesInput = struct(
  n0,
  _LRI,
  0,
  [_TN, _TVI, _RA, _NT, _MR, _RM],
  [0, 0, 0, 0, 1, [() => Properties, 0]]
);
export var ListResourcesOutput = struct(n0, _LRO, 0, [_TN, _RDe, _NT], [0, [() => ResourceDescriptions, 0], 0]);
export var NetworkFailureException = error(
  n0,
  _NFE,
  {
    [_e]: _s,
    [_hE]: 502,
    [_aQE]: [`NetworkFailureException`, 502],
  },
  [_M],
  [0],

  __NetworkFailureException
);
export var NotStabilizedException = error(
  n0,
  _NSE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`NotStabilizedException`, 400],
  },
  [_M],
  [0],

  __NotStabilizedException
);
export var NotUpdatableException = error(
  n0,
  _NUE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`NotUpdatableException`, 400],
  },
  [_M],
  [0],

  __NotUpdatableException
);
export var PrivateTypeException = error(
  n0,
  _PTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`PrivateTypeException`, 400],
  },
  [_M],
  [0],

  __PrivateTypeException
);
export var ProgressEvent = struct(
  n0,
  _PE,
  0,
  [_TN, _I, _RT, _HRT, _O, _OS, _ET, _RM, _SM, _EC, _RAe],
  [0, 0, 0, 0, 0, 0, 4, [() => Properties, 0], 0, 0, 4]
);
export var RequestTokenNotFoundException = error(
  n0,
  _RTNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`RequestTokenNotFoundException`, 404],
  },
  [_M],
  [0],

  __RequestTokenNotFoundException
);
export var ResourceConflictException = error(
  n0,
  _RCE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`ResourceConflictException`, 409],
  },
  [_M],
  [0],

  __ResourceConflictException
);
export var ResourceDescription = struct(n0, _RD, 0, [_I, _P], [0, [() => Properties, 0]]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ResourceNotFoundException`, 404],
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var ResourceRequestStatusFilter = struct(n0, _RRSF, 0, [_Op, _OSp], [64 | 0, 64 | 0]);
export var ServiceInternalErrorException = error(
  n0,
  _SIEE,
  {
    [_e]: _s,
    [_hE]: 502,
    [_aQE]: [`ServiceInternalErrorException`, 502],
  },
  [_M],
  [0],

  __ServiceInternalErrorException
);
export var ServiceLimitExceededException = error(
  n0,
  _SLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ServiceLimitExceededException`, 400],
  },
  [_M],
  [0],

  __ServiceLimitExceededException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`ThrottlingException`, 429],
  },
  [_M],
  [0],

  __ThrottlingException
);
export var TypeNotFoundException = error(
  n0,
  _TNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`TypeNotFoundException`, 404],
  },
  [_M],
  [0],

  __TypeNotFoundException
);
export var UnsupportedActionException = error(
  n0,
  _UAE,
  {
    [_e]: _c,
    [_hE]: 405,
    [_aQE]: [`UnsupportedActionException`, 405],
  },
  [_M],
  [0],

  __UnsupportedActionException
);
export var UpdateResourceInput = struct(
  n0,
  _URI,
  0,
  [_TN, _TVI, _RA, _CT, _I, _PD],
  [0, 0, 0, [0, 4], 0, [() => PatchDocument, 0]]
);
export var UpdateResourceOutput = struct(n0, _URO, 0, [_PE], [[() => ProgressEvent, 0]]);
export var HooksProgressEvent = list(n0, _HPE, 0, () => HookProgressEvent);
export var Operations = 64 | 0;

export var OperationStatuses = 64 | 0;

export var ResourceDescriptions = list(n0, _RDe, 0, [() => ResourceDescription, 0]);
export var ResourceRequestStatusSummaries = list(n0, _RRSS, 0, [() => ProgressEvent, 0]);
export var CancelResourceRequest = op(
  n0,
  _CRR,
  2,
  () => CancelResourceRequestInput,
  () => CancelResourceRequestOutput
);
export var CreateResource = op(
  n0,
  _CR,
  0,
  () => CreateResourceInput,
  () => CreateResourceOutput
);
export var DeleteResource = op(
  n0,
  _DR,
  0,
  () => DeleteResourceInput,
  () => DeleteResourceOutput
);
export var GetResource = op(
  n0,
  _GR,
  0,
  () => GetResourceInput,
  () => GetResourceOutput
);
export var GetResourceRequestStatus = op(
  n0,
  _GRRS,
  0,
  () => GetResourceRequestStatusInput,
  () => GetResourceRequestStatusOutput
);
export var ListResourceRequests = op(
  n0,
  _LRR,
  0,
  () => ListResourceRequestsInput,
  () => ListResourceRequestsOutput
);
export var ListResources = op(
  n0,
  _LR,
  0,
  () => ListResourcesInput,
  () => ListResourcesOutput
);
export var UpdateResource = op(
  n0,
  _UR,
  0,
  () => UpdateResourceInput,
  () => UpdateResourceOutput
);
