// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  AccessToClusterDeniedFault as __AccessToClusterDeniedFault,
  EndpointAlreadyExistsFault as __EndpointAlreadyExistsFault,
  EndpointAuthorizationNotFoundFault as __EndpointAuthorizationNotFoundFault,
  EndpointsPerAuthorizationLimitExceededFault as __EndpointsPerAuthorizationLimitExceededFault,
  EndpointsPerClusterLimitExceededFault as __EndpointsPerClusterLimitExceededFault,
  InvalidClusterSecurityGroupStateFault as __InvalidClusterSecurityGroupStateFault,
  InvalidEndpointStateFault as __InvalidEndpointStateFault,
} from "../models/index";
import {
  _Ac,
  _ACSGI,
  _ACSGIM,
  _ACSGIR,
  _aQE,
  _ATCDF,
  _c,
  _CEA,
  _CEAM,
  _CIDRIP,
  _CIl,
  _CSG,
  _CSGN,
  _DCSG,
  _DCSGM,
  _DEAe,
  _DEAM,
  _e,
  _EAEF,
  _EANFF,
  _ECSGN,
  _ECSGOI,
  _EN,
  _EPALEF,
  _EPCLEF,
  _F,
  _hE,
  _ICSGSF,
  _IESF,
  _m,
  _MEA,
  _MEAM,
  _RCSGI,
  _RCSGIM,
  _RCSGIR,
  _REA,
  _REAM,
  _RO,
  _SGN,
  _VI,
  _VSGI,
  n0,
  Unit,
} from "./schemas_0";
import { EndpointAuthorization, VpcIdentifierList } from "./schemas_18_Endpoint";
import { EndpointAccess } from "./schemas_35_Endpoint";
import { ClusterSecurityGroup } from "./schemas_50_ClusterSecurity";
import { VpcSecurityGroupIdList } from "./schemas_71_Cluster";

/* eslint no-var: 0 */

export var AccessToClusterDeniedFault = error(
  n0,
  _ATCDF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AccessToClusterDenied`, 400],
  },
  [_m],
  [0],

  __AccessToClusterDeniedFault
);
export var AuthorizeClusterSecurityGroupIngressMessage = struct(
  n0,
  _ACSGIM,
  0,
  [_CSGN, _CIDRIP, _ECSGN, _ECSGOI],
  [0, 0, 0, 0]
);
export var AuthorizeClusterSecurityGroupIngressResult = struct(
  n0,
  _ACSGIR,
  0,
  [_CSG],
  [[() => ClusterSecurityGroup, 0]]
);
export var CreateEndpointAccessMessage = struct(
  n0,
  _CEAM,
  0,
  [_CIl, _RO, _EN, _SGN, _VSGI],
  [0, 0, 0, 0, [() => VpcSecurityGroupIdList, 0]]
);
export var DeleteClusterSecurityGroupMessage = struct(n0, _DCSGM, 0, [_CSGN], [0]);
export var DeleteEndpointAccessMessage = struct(n0, _DEAM, 0, [_EN], [0]);
export var EndpointAlreadyExistsFault = error(
  n0,
  _EAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`EndpointAlreadyExists`, 400],
  },
  [_m],
  [0],

  __EndpointAlreadyExistsFault
);
export var EndpointAuthorizationNotFoundFault = error(
  n0,
  _EANFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`EndpointAuthorizationNotFound`, 404],
  },
  [_m],
  [0],

  __EndpointAuthorizationNotFoundFault
);
export var EndpointsPerAuthorizationLimitExceededFault = error(
  n0,
  _EPALEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`EndpointsPerAuthorizationLimitExceeded`, 400],
  },
  [_m],
  [0],

  __EndpointsPerAuthorizationLimitExceededFault
);
export var EndpointsPerClusterLimitExceededFault = error(
  n0,
  _EPCLEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`EndpointsPerClusterLimitExceeded`, 400],
  },
  [_m],
  [0],

  __EndpointsPerClusterLimitExceededFault
);
export var InvalidClusterSecurityGroupStateFault = error(
  n0,
  _ICSGSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidClusterSecurityGroupState`, 400],
  },
  [_m],
  [0],

  __InvalidClusterSecurityGroupStateFault
);
export var InvalidEndpointStateFault = error(
  n0,
  _IESF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidEndpointState`, 400],
  },
  [_m],
  [0],

  __InvalidEndpointStateFault
);
export var ModifyEndpointAccessMessage = struct(n0, _MEAM, 0, [_EN, _VSGI], [0, [() => VpcSecurityGroupIdList, 0]]);
export var RevokeClusterSecurityGroupIngressMessage = struct(
  n0,
  _RCSGIM,
  0,
  [_CSGN, _CIDRIP, _ECSGN, _ECSGOI],
  [0, 0, 0, 0]
);
export var RevokeClusterSecurityGroupIngressResult = struct(n0, _RCSGIR, 0, [_CSG], [[() => ClusterSecurityGroup, 0]]);
export var RevokeEndpointAccessMessage = struct(
  n0,
  _REAM,
  0,
  [_CIl, _Ac, _VI, _F],
  [0, 0, [() => VpcIdentifierList, 0], 2]
);
export var AuthorizeClusterSecurityGroupIngress = op(
  n0,
  _ACSGI,
  0,
  () => AuthorizeClusterSecurityGroupIngressMessage,
  () => AuthorizeClusterSecurityGroupIngressResult
);
export var CreateEndpointAccess = op(
  n0,
  _CEA,
  0,
  () => CreateEndpointAccessMessage,
  () => EndpointAccess
);
export var DeleteClusterSecurityGroup = op(
  n0,
  _DCSG,
  0,
  () => DeleteClusterSecurityGroupMessage,
  () => Unit
);
export var DeleteEndpointAccess = op(
  n0,
  _DEAe,
  0,
  () => DeleteEndpointAccessMessage,
  () => EndpointAccess
);
export var ModifyEndpointAccess = op(
  n0,
  _MEA,
  0,
  () => ModifyEndpointAccessMessage,
  () => EndpointAccess
);
export var RevokeClusterSecurityGroupIngress = op(
  n0,
  _RCSGI,
  0,
  () => RevokeClusterSecurityGroupIngressMessage,
  () => RevokeClusterSecurityGroupIngressResult
);
export var RevokeEndpointAccess = op(
  n0,
  _REA,
  0,
  () => RevokeEndpointAccessMessage,
  () => EndpointAuthorization
);
