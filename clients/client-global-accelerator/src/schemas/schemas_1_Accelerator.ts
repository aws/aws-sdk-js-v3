// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AA,
  _AATTE,
  _ACRT,
  _ACRTR,
  _AE,
  _AEc,
  _CAR,
  _CAr,
  _CARr,
  _CCRA,
  _CCRAR,
  _CCRARr,
  _CRA,
  _CT,
  _DA,
  _DAes,
  _DARe,
  _DARes,
  _DATTE,
  _DCRAe,
  _DCRARe,
  _DCRARes,
  _DCRT,
  _DCRTR,
  _DN,
  _DP,
  _DSDN,
  _E,
  _EGA,
  _EI,
  _Ev,
  _IA,
  _IAF,
  _IAT,
  _IF,
  _IS,
  _ISp,
  _IT,
  _LMT,
  _M,
  _N,
  _S,
  _T,
  _Ta,
  _UA,
  _UAR,
  _UARp,
  _UCRA,
  _UCRAR,
  _UCRARp,
  n0,
  Unit,
} from "./schemas_0";
import { Tags } from "./schemas_12_Create";

/* eslint no-var: 0 */

export var Accelerator = struct(
  n0,
  _A,
  0,
  [_AA, _N, _IAT, _E, _IS, _DN, _S, _CT, _LMT, _DSDN, _Ev],
  [0, 0, 0, 2, () => IpSets, 0, 0, 4, 4, 0, () => AcceleratorEvents]
);
export var AcceleratorEvent = struct(n0, _AE, 0, [_M, _T], [0, 4]);
export var AllowCustomRoutingTrafficRequest = struct(
  n0,
  _ACRTR,
  0,
  [_EGA, _EI, _DA, _DP, _AATTE],
  [0, 0, 64 | 0, 64 | 1, 2]
);
export var CreateAcceleratorRequest = struct(
  n0,
  _CAR,
  0,
  [_N, _IAT, _IA, _E, _IT, _Ta],
  [0, 0, 64 | 0, 2, [0, 4], () => Tags]
);
export var CreateAcceleratorResponse = struct(n0, _CARr, 0, [_A], [() => Accelerator]);
export var CreateCustomRoutingAcceleratorRequest = struct(
  n0,
  _CCRAR,
  0,
  [_N, _IAT, _IA, _E, _IT, _Ta],
  [0, 0, 64 | 0, 2, [0, 4], () => Tags]
);
export var CreateCustomRoutingAcceleratorResponse = struct(n0, _CCRARr, 0, [_A], [() => CustomRoutingAccelerator]);
export var CustomRoutingAccelerator = struct(
  n0,
  _CRA,
  0,
  [_AA, _N, _IAT, _E, _IS, _DN, _S, _CT, _LMT],
  [0, 0, 0, 2, () => IpSets, 0, 0, 4, 4]
);
export var DenyCustomRoutingTrafficRequest = struct(
  n0,
  _DCRTR,
  0,
  [_EGA, _EI, _DA, _DP, _DATTE],
  [0, 0, 64 | 0, 64 | 1, 2]
);
export var DescribeAcceleratorRequest = struct(n0, _DARe, 0, [_AA], [0]);
export var DescribeAcceleratorResponse = struct(n0, _DARes, 0, [_A], [() => Accelerator]);
export var DescribeCustomRoutingAcceleratorRequest = struct(n0, _DCRARe, 0, [_AA], [0]);
export var DescribeCustomRoutingAcceleratorResponse = struct(n0, _DCRARes, 0, [_A], [() => CustomRoutingAccelerator]);
export var IpSet = struct(n0, _ISp, 0, [_IF, _IA, _IAF], [0, 64 | 0, 0]);
export var UpdateAcceleratorRequest = struct(n0, _UAR, 0, [_AA, _N, _IAT, _IA, _E], [0, 0, 0, 64 | 0, 2]);
export var UpdateAcceleratorResponse = struct(n0, _UARp, 0, [_A], [() => Accelerator]);
export var UpdateCustomRoutingAcceleratorRequest = struct(
  n0,
  _UCRAR,
  0,
  [_AA, _N, _IAT, _IA, _E],
  [0, 0, 0, 64 | 0, 2]
);
export var UpdateCustomRoutingAcceleratorResponse = struct(n0, _UCRARp, 0, [_A], [() => CustomRoutingAccelerator]);
export var AcceleratorEvents = list(n0, _AEc, 0, () => AcceleratorEvent);
export var DestinationAddresses = 64 | 0;

export var DestinationPorts = 64 | 1;

export var IpAddresses = 64 | 0;

export var IpSets = list(n0, _IS, 0, () => IpSet);
export var AllowCustomRoutingTraffic = op(
  n0,
  _ACRT,
  0,
  () => AllowCustomRoutingTrafficRequest,
  () => Unit
);
export var CreateAccelerator = op(
  n0,
  _CAr,
  0,
  () => CreateAcceleratorRequest,
  () => CreateAcceleratorResponse
);
export var CreateCustomRoutingAccelerator = op(
  n0,
  _CCRA,
  0,
  () => CreateCustomRoutingAcceleratorRequest,
  () => CreateCustomRoutingAcceleratorResponse
);
export var DenyCustomRoutingTraffic = op(
  n0,
  _DCRT,
  0,
  () => DenyCustomRoutingTrafficRequest,
  () => Unit
);
export var DescribeAccelerator = op(
  n0,
  _DAes,
  0,
  () => DescribeAcceleratorRequest,
  () => DescribeAcceleratorResponse
);
export var DescribeCustomRoutingAccelerator = op(
  n0,
  _DCRAe,
  0,
  () => DescribeCustomRoutingAcceleratorRequest,
  () => DescribeCustomRoutingAcceleratorResponse
);
export var UpdateAccelerator = op(
  n0,
  _UA,
  0,
  () => UpdateAcceleratorRequest,
  () => UpdateAcceleratorResponse
);
export var UpdateCustomRoutingAccelerator = op(
  n0,
  _UCRA,
  0,
  () => UpdateCustomRoutingAcceleratorRequest,
  () => UpdateCustomRoutingAcceleratorResponse
);
