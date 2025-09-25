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
export const n0 = "com.amazonaws.cloudcontrol";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { CloudControlServiceException as __CloudControlServiceException } from "../models/CloudControlServiceException";

/* eslint no-var: 0 */

export var CloudControlServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.cloudcontrol",
  "CloudControlServiceException",
  0,
  [],
  [],
  __CloudControlServiceException
);
