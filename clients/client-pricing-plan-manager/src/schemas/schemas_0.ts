const _ADE = "AccessDeniedException";
const _APS = "ApprovePaidSubscription";
const _APSI = "ApprovePaidSubscriptionInput";
const _APSO = "ApprovePaidSubscriptionOutput";
const _ARTS = "AssociateResourcesToSubscription";
const _ARTSI = "AssociateResourcesToSubscriptionInput";
const _ARTSO = "AssociateResourcesToSubscriptionOutput";
const _CE = "ConflictException";
const _CS = "CancelSubscription";
const _CSC = "CancelSubscriptionChange";
const _CSCI = "CancelSubscriptionChangeInput";
const _CSCO = "CancelSubscriptionChangeOutput";
const _CSI = "CancelSubscriptionInput";
const _CSIr = "CreateSubscriptionInput";
const _CSO = "CancelSubscriptionOutput";
const _CSOr = "CreateSubscriptionOutput";
const _CSr = "CreateSubscription";
const _DRFS = "DisassociateResourcesFromSubscription";
const _DRFSI = "DisassociateResourcesFromSubscriptionInput";
const _DRFSO = "DisassociateResourcesFromSubscriptionOutput";
const _ET = "ETag";
const _GS = "GetSubscription";
const _GSI = "GetSubscriptionInput";
const _GSO = "GetSubscriptionOutput";
const _IM = "If-Match";
const _ISE = "InternalServerException";
const _LS = "ListSubscriptions";
const _LSI = "ListSubscriptionsInput";
const _LSO = "ListSubscriptionsOutput";
const _RNFE = "ResourceNotFoundException";
const _S = "Subscription";
const _SC = "ScheduledChange";
const _SQEE = "ServiceQuotaExceededException";
const _SS = "SubscriptionSummary";
const _SSL = "SubscriptionSummaryList";
const _TE = "ThrottlingException";
const _US = "UpdateSubscription";
const _USI = "UpdateSubscriptionInput";
const _USO = "UpdateSubscriptionOutput";
const _VE = "ValidationException";
const _a = "arn";
const _aM = "approvalMode";
const _c = "client";
const _cA = "createdAt";
const _cT = "clientToken";
const _cTh = "changeType";
const _e = "error";
const _eD = "effectiveDate";
const _eT = "eTag";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _iM = "ifMatch";
const _m = "message";
const _nT = "nextToken";
const _pF = "planFamily";
const _pT = "planTier";
const _rA = "resourceArns";
const _rI = "resourceId";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.pricingplanmanager";
const _sC = "scheduledChange";
const _sR = "statusReason";
const _sS = "subscriptionSummaries";
const _se = "server";
const _st = "status";
const _su = "subscription";
const _uA = "updatedAt";
const _uL = "usageLevel";
const n0 = "com.amazonaws.pricingplanmanager";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";
import { PricingPlanManagerServiceException } from "../models/PricingPlanManagerServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var PricingPlanManagerServiceException$: StaticErrorSchema = [-3, _s, "PricingPlanManagerServiceException", 0, [], []];
_s_registry.registerError(PricingPlanManagerServiceException$, PricingPlanManagerServiceException);
const n0_registry = TypeRegistry.for(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0], 1
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_m, _rI],
  [0, 0], 2
];
n0_registry.registerError(ConflictException$, ConflictException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m],
  [0], 1
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m, _rI],
  [0, 0], 2
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m],
  [0], 1
];
n0_registry.registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m],
  [0]
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _rI],
  [0, 0], 1
];
n0_registry.registerError(ValidationException$, ValidationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var ApprovePaidSubscriptionInput$: StaticStructureSchema = [3, n0, _APSI,
  0,
  [_a, _iM, _cT],
  [0, [0, { [_hH]: _IM }], [0, 4]], 2
];
export var ApprovePaidSubscriptionOutput$: StaticStructureSchema = [3, n0, _APSO,
  0,
  [_su, _eT],
  [[() => Subscription$, 16], [0, { [_hH]: _ET }]], 2
];
export var AssociateResourcesToSubscriptionInput$: StaticStructureSchema = [3, n0, _ARTSI,
  0,
  [_a, _rA, _iM, _cT],
  [0, 64 | 0, [0, { [_hH]: _IM }], [0, 4]], 3
];
export var AssociateResourcesToSubscriptionOutput$: StaticStructureSchema = [3, n0, _ARTSO,
  0,
  [_su, _eT],
  [[() => Subscription$, 16], [0, { [_hH]: _ET }]], 2
];
export var CancelSubscriptionChangeInput$: StaticStructureSchema = [3, n0, _CSCI,
  0,
  [_a, _iM, _cT],
  [0, [0, { [_hH]: _IM }], [0, 4]], 2
];
export var CancelSubscriptionChangeOutput$: StaticStructureSchema = [3, n0, _CSCO,
  0,
  [_su, _eT],
  [[() => Subscription$, 16], [0, { [_hH]: _ET }]], 2
];
export var CancelSubscriptionInput$: StaticStructureSchema = [3, n0, _CSI,
  0,
  [_a, _iM, _cT],
  [0, [0, { [_hH]: _IM }], [0, 4]], 2
];
export var CancelSubscriptionOutput$: StaticStructureSchema = [3, n0, _CSO,
  0,
  [_su, _eT],
  [[() => Subscription$, 16], [0, { [_hH]: _ET }]], 2
];
export var CreateSubscriptionInput$: StaticStructureSchema = [3, n0, _CSIr,
  0,
  [_pF, _pT, _rA, _uL, _aM, _cT],
  [0, 0, 64 | 0, 0, 0, [0, 4]], 3
];
export var CreateSubscriptionOutput$: StaticStructureSchema = [3, n0, _CSOr,
  0,
  [_su, _eT],
  [[() => Subscription$, 16], [0, { [_hH]: _ET }]], 2
];
export var DisassociateResourcesFromSubscriptionInput$: StaticStructureSchema = [3, n0, _DRFSI,
  0,
  [_a, _rA, _iM, _cT],
  [0, 64 | 0, [0, { [_hH]: _IM }], [0, 4]], 3
];
export var DisassociateResourcesFromSubscriptionOutput$: StaticStructureSchema = [3, n0, _DRFSO,
  0,
  [_su, _eT],
  [[() => Subscription$, 16], [0, { [_hH]: _ET }]], 2
];
export var GetSubscriptionInput$: StaticStructureSchema = [3, n0, _GSI,
  0,
  [_a],
  [0], 1
];
export var GetSubscriptionOutput$: StaticStructureSchema = [3, n0, _GSO,
  0,
  [_su, _eT],
  [[() => Subscription$, 16], [0, { [_hH]: _ET }]], 2
];
export var ListSubscriptionsInput$: StaticStructureSchema = [3, n0, _LSI,
  0,
  [_nT],
  [0]
];
export var ListSubscriptionsOutput$: StaticStructureSchema = [3, n0, _LSO,
  0,
  [_sS, _nT],
  [() => SubscriptionSummaryList, 0], 1
];
export var ScheduledChange$: StaticStructureSchema = [3, n0, _SC,
  0,
  [_cTh, _eD, _pT, _uL],
  [0, 5, 0, 0], 1
];
export var Subscription$: StaticStructureSchema = [3, n0, _S,
  0,
  [_a, _pF, _pT, _st, _rA, _cA, _uA, _uL, _sC, _sR],
  [0, 0, 0, 0, 64 | 0, 5, 5, 0, () => ScheduledChange$, 0], 7
];
export var SubscriptionSummary$: StaticStructureSchema = [3, n0, _SS,
  0,
  [_a, _pF, _pT, _st, _rA, _cA, _uA, _eT, _uL, _sC, _sR],
  [0, 0, 0, 0, 64 | 0, 5, 5, 0, 0, () => ScheduledChange$, 0], 8
];
export var UpdateSubscriptionInput$: StaticStructureSchema = [3, n0, _USI,
  0,
  [_a, _pT, _iM, _uL, _cT],
  [0, 0, [0, { [_hH]: _IM }], 0, [0, 4]], 3
];
export var UpdateSubscriptionOutput$: StaticStructureSchema = [3, n0, _USO,
  0,
  [_su, _eT],
  [[() => Subscription$, 16], [0, { [_hH]: _ET }]], 2
];
var ResourceArns = 64 | 0;
var SubscriptionSummaryList: StaticListSchema = [1, n0, _SSL,
  0, () => SubscriptionSummary$
];
export var ApprovePaidSubscription$: StaticOperationSchema = [9, n0, _APS,
  { [_h]: ["POST", "/v1/ApprovePaidSubscription", 200] }, () => ApprovePaidSubscriptionInput$, () => ApprovePaidSubscriptionOutput$
];
export var AssociateResourcesToSubscription$: StaticOperationSchema = [9, n0, _ARTS,
  { [_h]: ["POST", "/v1/AssociateResourcesToSubscription", 200] }, () => AssociateResourcesToSubscriptionInput$, () => AssociateResourcesToSubscriptionOutput$
];
export var CancelSubscription$: StaticOperationSchema = [9, n0, _CS,
  { [_h]: ["POST", "/v1/CancelSubscription", 200] }, () => CancelSubscriptionInput$, () => CancelSubscriptionOutput$
];
export var CancelSubscriptionChange$: StaticOperationSchema = [9, n0, _CSC,
  { [_h]: ["POST", "/v1/CancelSubscriptionChange", 200] }, () => CancelSubscriptionChangeInput$, () => CancelSubscriptionChangeOutput$
];
export var CreateSubscription$: StaticOperationSchema = [9, n0, _CSr,
  { [_h]: ["POST", "/v1/CreateSubscription", 200] }, () => CreateSubscriptionInput$, () => CreateSubscriptionOutput$
];
export var DisassociateResourcesFromSubscription$: StaticOperationSchema = [9, n0, _DRFS,
  { [_h]: ["POST", "/v1/DisassociateResourcesFromSubscription", 200] }, () => DisassociateResourcesFromSubscriptionInput$, () => DisassociateResourcesFromSubscriptionOutput$
];
export var GetSubscription$: StaticOperationSchema = [9, n0, _GS,
  { [_h]: ["POST", "/v1/GetSubscription", 200] }, () => GetSubscriptionInput$, () => GetSubscriptionOutput$
];
export var ListSubscriptions$: StaticOperationSchema = [9, n0, _LS,
  { [_h]: ["POST", "/v1/ListSubscriptions", 200] }, () => ListSubscriptionsInput$, () => ListSubscriptionsOutput$
];
export var UpdateSubscription$: StaticOperationSchema = [9, n0, _US,
  { [_h]: ["POST", "/v1/UpdateSubscription", 200] }, () => UpdateSubscriptionInput$, () => UpdateSubscriptionOutput$
];
