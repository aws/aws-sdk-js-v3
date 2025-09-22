// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ad,
  _CIl,
  _DEAes,
  _DEAMe,
  _EA,
  _EAL,
  _EAnd,
  _ECT,
  _EN,
  _ESn,
  _M,
  _MR,
  _Po,
  _RO,
  _SGN,
  _VEp,
  _VIp,
  _VSG,
  n0,
  VpcEndpoint,
  VpcSecurityGroupMembershipList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEndpointAccessMessage = struct(n0, _DEAMe, 0, [_CIl, _RO, _EN, _VIp, _MR, _M], [0, 0, 0, 0, 1, 0]);
export var EndpointAccess = struct(
  n0,
  _EA,
  0,
  [_CIl, _RO, _SGN, _ESn, _EN, _ECT, _Po, _Ad, _VSG, _VEp],
  [0, 0, 0, 0, 0, 4, 1, 0, [() => VpcSecurityGroupMembershipList, 0], [() => VpcEndpoint, 0]]
);
export var EndpointAccessList = struct(n0, _EAL, 0, [_EAL, _M], [[() => EndpointAccesses, 0], 0]);
export var EndpointAccesses = list(n0, _EAnd, 0, [() => EndpointAccess, 0]);
export var DescribeEndpointAccess = op(
  n0,
  _DEAes,
  0,
  () => DescribeEndpointAccessMessage,
  () => EndpointAccessList
);
