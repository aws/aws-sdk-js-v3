const _ADE = "AccessDeniedException";
const _AT = "AttachedTo";
const _ATL = "AttachedToList";
const _E = "Evaluation";
const _Ev = "Evaluations";
const _GRAD = "GetRequestAuthorizationDetails";
const _GRADI = "GetRequestAuthorizationDetailsInput";
const _GRADO = "GetRequestAuthorizationDetailsOutput";
const _ISE = "InternalServerException";
const _MP = "MatchedPolicy";
const _MPL = "MatchedPolicyList";
const _MS = "MatchedStatement";
const _MSL = "MatchedStatementList";
const _PI = "PolicyInfo";
const _PIL = "PolicyInfoList";
const _RNFE = "ResourceNotFoundException";
const _VE = "ValidationException";
const _a = "arn";
const _aI = "authorizationId";
const _aT = "attachedTo";
const _ac = "action";
const _c = "client";
const _co = "context";
const _e = "error";
const _eE = "evaluatedEffect";
const _ev = "evaluations";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _i = "inline";
const _m = "message";
const _mP = "matchedPolicies";
const _mS = "matchedStatements";
const _nT = "nextToken";
const _p = "policies";
const _r = "resource";
const _rC = "requestContext";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.iamtoolbox";
const _se = "server";
const _si = "sid";
const _t = "type";
const _u = "uri";
const n0 = "com.amazonaws.iamtoolbox";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  InternalServerException,
  ResourceNotFoundException,
  ValidationException,
} from "../models/errors";
import { IAMToolboxServiceException } from "../models/IAMToolboxServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var IAMToolboxServiceException$: StaticErrorSchema = [-3, _s, "IAMToolboxServiceException", 0, [], []];
_s_registry.registerError(IAMToolboxServiceException$, IAMToolboxServiceException);
const n0_registry = TypeRegistry.for(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0], 1
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m],
  [0], 1
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m],
  [0], 1
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0], 1
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
export var AttachedTo$: StaticStructureSchema = [3, n0, _AT,
  0,
  [_a],
  [0]
];
export var Evaluation$: StaticStructureSchema = [3, n0, _E,
  0,
  [_ac, _r, _co, _eE, _mP],
  [0, 0, 128 | 15, 0, () => MatchedPolicyList], 2
];
export var GetRequestAuthorizationDetailsInput$: StaticStructureSchema = [3, n0, _GRADI,
  0,
  [_aI, _nT],
  [[0, 1], [0, { [_hQ]: _nT }]], 1
];
export var GetRequestAuthorizationDetailsOutput$: StaticStructureSchema = [3, n0, _GRADO,
  0,
  [_rC, _ev, _p, _nT],
  [128 | 15, () => Evaluations, () => PolicyInfoList, 0], 3
];
export var MatchedPolicy$: StaticStructureSchema = [3, n0, _MP,
  0,
  [_u, _mS],
  [0, () => MatchedStatementList], 1
];
export var MatchedStatement$: StaticStructureSchema = [3, n0, _MS,
  0,
  [_si, _eE],
  [0, 0]
];
export var PolicyInfo$: StaticStructureSchema = [3, n0, _PI,
  0,
  [_t, _i, _u, _aT],
  [0, 2, 0, () => AttachedToList]
];
var AttachedToList: StaticListSchema = [1, n0, _ATL,
  0, () => AttachedTo$
];
var Evaluations: StaticListSchema = [1, n0, _Ev,
  0, () => Evaluation$
];
var MatchedPolicyList: StaticListSchema = [1, n0, _MPL,
  0, () => MatchedPolicy$
];
var MatchedStatementList: StaticListSchema = [1, n0, _MSL,
  0, () => MatchedStatement$
];
var PolicyInfoList: StaticListSchema = [1, n0, _PIL,
  0, () => PolicyInfo$
];
var AuthorizationContext = 128 | 15;
export var GetRequestAuthorizationDetails$: StaticOperationSchema = [9, n0, _GRAD,
  { [_h]: ["GET", "/authorization-details/{authorizationId}", 200] }, () => GetRequestAuthorizationDetailsInput$, () => GetRequestAuthorizationDetailsOutput$
];
