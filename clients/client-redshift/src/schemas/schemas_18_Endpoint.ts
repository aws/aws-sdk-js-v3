// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  EndpointAuthorizationAlreadyExistsFault as __EndpointAuthorizationAlreadyExistsFault,
  EndpointAuthorizationsPerClusterLimitExceededFault as __EndpointAuthorizationsPerClusterLimitExceededFault,
  InvalidAuthorizationStateFault as __InvalidAuthorizationStateFault,
} from "../models/index";
import {
  _AAVPC,
  _Ac,
  _AEAM,
  _AEAu,
  _aQE,
  _ATu,
  _AVPC,
  _c,
  _CIl,
  _CS,
  _DEAesc,
  _DEAMes,
  _e,
  _EAAEF,
  _EALn,
  _EAn,
  _EAndp,
  _EAPCLEF,
  _ECn,
  _G,
  _Gr,
  _hE,
  _IASF,
  _M,
  _m,
  _MR,
  _St,
  _VI,
  _VIL,
  _VIpc,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AuthorizeEndpointAccessMessage = struct(
  n0,
  _AEAM,
  0,
  [_CIl, _Ac, _VI],
  [0, 0, [() => VpcIdentifierList, 0]]
);
export var DescribeEndpointAuthorizationMessage = struct(n0, _DEAMes, 0, [_CIl, _Ac, _G, _MR, _M], [0, 0, 2, 1, 0]);
export var EndpointAuthorization = struct(
  n0,
  _EAn,
  0,
  [_Gr, _G, _CIl, _ATu, _CS, _St, _AAVPC, _AVPC, _ECn],
  [0, 0, 0, 4, 0, 0, 2, [() => VpcIdentifierList, 0], 1]
);
export var EndpointAuthorizationAlreadyExistsFault = error(
  n0,
  _EAAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`EndpointAuthorizationAlreadyExists`, 400],
  },
  [_m],
  [0],

  __EndpointAuthorizationAlreadyExistsFault
);
export var EndpointAuthorizationList = struct(n0, _EALn, 0, [_EALn, _M], [[() => EndpointAuthorizations, 0], 0]);
export var EndpointAuthorizationsPerClusterLimitExceededFault = error(
  n0,
  _EAPCLEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`EndpointAuthorizationsPerClusterLimitExceeded`, 400],
  },
  [_m],
  [0],

  __EndpointAuthorizationsPerClusterLimitExceededFault
);
export var InvalidAuthorizationStateFault = error(
  n0,
  _IASF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidAuthorizationState`, 400],
  },
  [_m],
  [0],

  __InvalidAuthorizationStateFault
);
export var EndpointAuthorizations = list(n0, _EAndp, 0, [() => EndpointAuthorization, 0]);
export var VpcIdentifierList = list(n0, _VIL, 0, [
  0,
  {
    [_xN]: _VIpc,
  },
]);
export var AuthorizeEndpointAccess = op(
  n0,
  _AEAu,
  0,
  () => AuthorizeEndpointAccessMessage,
  () => EndpointAuthorization
);
export var DescribeEndpointAuthorization = op(
  n0,
  _DEAesc,
  0,
  () => DescribeEndpointAuthorizationMessage,
  () => EndpointAuthorizationList
);
