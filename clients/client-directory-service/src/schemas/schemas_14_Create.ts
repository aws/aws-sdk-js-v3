// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  EnableAlreadyInProgressException as __EnableAlreadyInProgressException,
  EntityAlreadyExistsException as __EntityAlreadyExistsException,
  IpRouteLimitExceededException as __IpRouteLimitExceededException,
} from "../models/index";
import {
  _AIR,
  _AIRR,
  _AIRRd,
  _Al,
  _At,
  _Att,
  _c,
  _CA,
  _CAR,
  _CAr,
  _CARr,
  _CC,
  _CCF,
  _CCFR,
  _CCFRr,
  _CCR,
  _CCRr,
  _CFIA,
  _CIi,
  _CIo,
  _CLS,
  _CLSR,
  _CLSRr,
  _CNo,
  _Co,
  _CP,
  _CT,
  _CTR,
  _CTRr,
  _D,
  _DI,
  _DIA,
  _e,
  _EAEE,
  _EAIPE,
  _ECAEP,
  _ECAEPR,
  _ECAEPRn,
  _ER,
  _ERR,
  _ERRn,
  _IR,
  _IRLEE,
  _IRp,
  _LGN,
  _M,
  _Na,
  _OUDN,
  _P,
  _PCA,
  _RDN,
  _RI,
  _RSa,
  _SAe,
  _TD,
  _TI,
  _TP,
  _TT,
  _USGFDC,
  _Val,
  n0,
} from "./schemas_0";
import { RadiusSettings } from "./schemas_2_Radius";

/* eslint no-var: 0 */

export var ComputerPassword = sim(n0, _CP, 0, 8);
export var TrustPassword = sim(n0, _TP, 0, 8);
export var AddIpRoutesRequest = struct(n0, _AIRR, 0, [_DI, _IR, _USGFDC], [0, () => IpRoutes, 2]);
export var AddIpRoutesResult = struct(n0, _AIRRd, 0, [], []);
export var Attribute = struct(n0, _At, 0, [_Na, _Val], [0, 0]);
export var Computer = struct(n0, _Co, 0, [_CIo, _CNo, _CA], [0, 0, () => Attributes]);
export var CreateAliasRequest = struct(n0, _CAR, 0, [_DI, _Al], [0, 0]);
export var CreateAliasResult = struct(n0, _CARr, 0, [_DI, _Al], [0, 0]);
export var CreateComputerRequest = struct(
  n0,
  _CCR,
  0,
  [_DI, _CNo, _P, _OUDN, _CA],
  [0, 0, [() => ComputerPassword, 0], 0, () => Attributes]
);
export var CreateComputerResult = struct(n0, _CCRr, 0, [_Co], [() => Computer]);
export var CreateConditionalForwarderRequest = struct(n0, _CCFR, 0, [_DI, _RDN, _DIA], [0, 0, 64 | 0]);
export var CreateConditionalForwarderResult = struct(n0, _CCFRr, 0, [], []);
export var CreateLogSubscriptionRequest = struct(n0, _CLSR, 0, [_DI, _LGN], [0, 0]);
export var CreateLogSubscriptionResult = struct(n0, _CLSRr, 0, [], []);
export var CreateTrustRequest = struct(
  n0,
  _CTR,
  0,
  [_DI, _RDN, _TP, _TD, _TT, _CFIA, _SAe],
  [0, 0, [() => TrustPassword, 0], 0, 0, 64 | 0, 0]
);
export var CreateTrustResult = struct(n0, _CTRr, 0, [_TI], [0]);
export var EnableAlreadyInProgressException = error(
  n0,
  _EAIPE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __EnableAlreadyInProgressException
);
export var EnableCAEnrollmentPolicyRequest = struct(n0, _ECAEPR, 0, [_DI, _PCA], [0, 0]);
export var EnableCAEnrollmentPolicyResult = struct(n0, _ECAEPRn, 0, [], []);
export var EnableRadiusRequest = struct(n0, _ERR, 0, [_DI, _RSa], [0, [() => RadiusSettings, 0]]);
export var EnableRadiusResult = struct(n0, _ERRn, 0, [], []);
export var EntityAlreadyExistsException = error(
  n0,
  _EAEE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __EntityAlreadyExistsException
);
export var IpRoute = struct(n0, _IRp, 0, [_CIi, _D], [0, 0]);
export var IpRouteLimitExceededException = error(
  n0,
  _IRLEE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __IpRouteLimitExceededException
);
export var Attributes = list(n0, _Att, 0, () => Attribute);
export var IpRoutes = list(n0, _IR, 0, () => IpRoute);
export var AddIpRoutes = op(
  n0,
  _AIR,
  0,
  () => AddIpRoutesRequest,
  () => AddIpRoutesResult
);
export var CreateAlias = op(
  n0,
  _CAr,
  0,
  () => CreateAliasRequest,
  () => CreateAliasResult
);
export var CreateComputer = op(
  n0,
  _CC,
  0,
  () => CreateComputerRequest,
  () => CreateComputerResult
);
export var CreateConditionalForwarder = op(
  n0,
  _CCF,
  0,
  () => CreateConditionalForwarderRequest,
  () => CreateConditionalForwarderResult
);
export var CreateLogSubscription = op(
  n0,
  _CLS,
  0,
  () => CreateLogSubscriptionRequest,
  () => CreateLogSubscriptionResult
);
export var CreateTrust = op(
  n0,
  _CT,
  0,
  () => CreateTrustRequest,
  () => CreateTrustResult
);
export var EnableCAEnrollmentPolicy = op(
  n0,
  _ECAEP,
  0,
  () => EnableCAEnrollmentPolicyRequest,
  () => EnableCAEnrollmentPolicyResult
);
export var EnableRadius = op(
  n0,
  _ER,
  0,
  () => EnableRadiusRequest,
  () => EnableRadiusResult
);
