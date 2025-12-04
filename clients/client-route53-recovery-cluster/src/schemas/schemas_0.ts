const _ADE = "AccessDeniedException";
const _CE = "ConflictException";
const _CPA = "ControlPanelArn";
const _CPN = "ControlPanelName";
const _ETUE = "EndpointTemporarilyUnavailableException";
const _GRCS = "GetRoutingControlState";
const _GRCSR = "GetRoutingControlStateRequest";
const _GRCSRe = "GetRoutingControlStateResponse";
const _ISE = "InternalServerException";
const _LRC = "ListRoutingControls";
const _LRCR = "ListRoutingControlsRequest";
const _LRCRi = "ListRoutingControlsResponse";
const _MR = "MaxResults";
const _NT = "NextToken";
const _O = "Owner";
const _RA = "Retry-After";
const _RC = "RoutingControls";
const _RCA = "RoutingControlArn";
const _RCN = "RoutingControlName";
const _RCS = "RoutingControlState";
const _RCo = "RoutingControl";
const _RNFE = "ResourceNotFoundException";
const _SLEE = "ServiceLimitExceededException";
const _SRTO = "SafetyRulesToOverride";
const _TE = "ThrottlingException";
const _URCS = "UpdateRoutingControlState";
const _URCSE = "UpdateRoutingControlStateEntry";
const _URCSEp = "UpdateRoutingControlStateEntries";
const _URCSR = "UpdateRoutingControlStateRequest";
const _URCSRp = "UpdateRoutingControlStateResponse";
const _URCSRpd = "UpdateRoutingControlStatesRequest";
const _URCSRpda = "UpdateRoutingControlStatesResponse";
const _URCSp = "UpdateRoutingControlStates";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _c = "client";
const _e = "error";
const _f = "fields";
const _hE = "httpError";
const _hH = "httpHeader";
const _lC = "limitCode";
const _m = "message";
const _n = "name";
const _r = "reason";
const _rAS = "retryAfterSeconds";
const _rI = "resourceId";
const _rT = "resourceType";
const _s = "server";
const _sC = "serviceCode";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.route53recoverycluster";
const n0 = "com.amazonaws.route53recoverycluster";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  EndpointTemporarilyUnavailableException as __EndpointTemporarilyUnavailableException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceLimitExceededException as __ServiceLimitExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { Route53RecoveryClusterServiceException as __Route53RecoveryClusterServiceException } from "../models/Route53RecoveryClusterServiceException";

/* eslint no-var: 0 */
export var AccessDeniedException: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_m], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);
export var ConflictException: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 409 }, [_m, _rI, _rT], [0, 0, 0]];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);
export var EndpointTemporarilyUnavailableException: StaticErrorSchema = [
  -3,
  n0,
  _ETUE,
  { [_e]: _s, [_hE]: 503 },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(EndpointTemporarilyUnavailableException, __EndpointTemporarilyUnavailableException);
export var GetRoutingControlStateRequest: StaticStructureSchema = [3, n0, _GRCSR, 0, [_RCA], [0]];
export var GetRoutingControlStateResponse: StaticStructureSchema = [3, n0, _GRCSRe, 0, [_RCA, _RCS, _RCN], [0, 0, 0]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  { [_e]: _s, [_hE]: 500 },
  [_m, _rAS],
  [0, [1, { [_hH]: _RA }]],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);
export var ListRoutingControlsRequest: StaticStructureSchema = [3, n0, _LRCR, 0, [_CPA, _NT, _MR], [0, 0, 1]];
export var ListRoutingControlsResponse: StaticStructureSchema = [
  3,
  n0,
  _LRCRi,
  0,
  [_RC, _NT],
  [() => RoutingControls, 0],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m, _rI, _rT],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);
export var RoutingControl: StaticStructureSchema = [
  3,
  n0,
  _RCo,
  0,
  [_CPA, _CPN, _RCA, _RCN, _RCS, _O],
  [0, 0, 0, 0, 0, 0],
];
export var ServiceLimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SLEE,
  { [_e]: _c, [_hE]: 402 },
  [_m, _rI, _rT, _lC, _sC],
  [0, 0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ServiceLimitExceededException, __ServiceLimitExceededException);
export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _rAS],
  [0, [1, { [_hH]: _RA }]],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);
export var UpdateRoutingControlStateEntry: StaticStructureSchema = [3, n0, _URCSE, 0, [_RCA, _RCS], [0, 0]];
export var UpdateRoutingControlStateRequest: StaticStructureSchema = [
  3,
  n0,
  _URCSR,
  0,
  [_RCA, _RCS, _SRTO],
  [0, 0, 64 | 0],
];
export var UpdateRoutingControlStateResponse: StaticStructureSchema = [3, n0, _URCSRp, 0, [], []];
export var UpdateRoutingControlStatesRequest: StaticStructureSchema = [
  3,
  n0,
  _URCSRpd,
  0,
  [_URCSEp, _SRTO],
  [() => UpdateRoutingControlStateEntries, 64 | 0],
];
export var UpdateRoutingControlStatesResponse: StaticStructureSchema = [3, n0, _URCSRpda, 0, [], []];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _r, _f],
  [0, 0, () => ValidationExceptionFieldList],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);
export var ValidationExceptionField: StaticStructureSchema = [3, n0, _VEF, 0, [_n, _m], [0, 0]];
export var __Unit = "unit" as const;
export var Route53RecoveryClusterServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "Route53RecoveryClusterServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(Route53RecoveryClusterServiceException, __Route53RecoveryClusterServiceException);
export var Arns = 64 | 0;
export var RoutingControls: StaticListSchema = [1, n0, _RC, 0, () => RoutingControl];
export var UpdateRoutingControlStateEntries: StaticListSchema = [
  1,
  n0,
  _URCSEp,
  0,
  () => UpdateRoutingControlStateEntry,
];
export var ValidationExceptionFieldList: StaticListSchema = [1, n0, _VEFL, 0, () => ValidationExceptionField];
export var GetRoutingControlState: StaticOperationSchema = [
  9,
  n0,
  _GRCS,
  0,
  () => GetRoutingControlStateRequest,
  () => GetRoutingControlStateResponse,
];
export var ListRoutingControls: StaticOperationSchema = [
  9,
  n0,
  _LRC,
  0,
  () => ListRoutingControlsRequest,
  () => ListRoutingControlsResponse,
];
export var UpdateRoutingControlState: StaticOperationSchema = [
  9,
  n0,
  _URCS,
  0,
  () => UpdateRoutingControlStateRequest,
  () => UpdateRoutingControlStateResponse,
];
export var UpdateRoutingControlStates: StaticOperationSchema = [
  9,
  n0,
  _URCSp,
  0,
  () => UpdateRoutingControlStatesRequest,
  () => UpdateRoutingControlStatesResponse,
];
