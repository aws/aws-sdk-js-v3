// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AAc,
  _CRAA,
  _DCRAA,
  _DCRAAR,
  _DCRAARe,
  _FLE,
  _FLSB,
  _FLSP,
  _UCRAA,
  _UCRAAR,
  _UCRAARp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CustomRoutingAcceleratorAttributes = struct(n0, _CRAA, 0, [_FLE, _FLSB, _FLSP], [2, 0, 0]);
export var DescribeCustomRoutingAcceleratorAttributesRequest = struct(n0, _DCRAAR, 0, [_AA], [0]);
export var DescribeCustomRoutingAcceleratorAttributesResponse = struct(
  n0,
  _DCRAARe,
  0,
  [_AAc],
  [() => CustomRoutingAcceleratorAttributes]
);
export var UpdateCustomRoutingAcceleratorAttributesRequest = struct(
  n0,
  _UCRAAR,
  0,
  [_AA, _FLE, _FLSB, _FLSP],
  [0, 2, 0, 0]
);
export var UpdateCustomRoutingAcceleratorAttributesResponse = struct(
  n0,
  _UCRAARp,
  0,
  [_AAc],
  [() => CustomRoutingAcceleratorAttributes]
);
export var DescribeCustomRoutingAcceleratorAttributes = op(
  n0,
  _DCRAA,
  0,
  () => DescribeCustomRoutingAcceleratorAttributesRequest,
  () => DescribeCustomRoutingAcceleratorAttributesResponse
);
export var UpdateCustomRoutingAcceleratorAttributes = op(
  n0,
  _UCRAA,
  0,
  () => UpdateCustomRoutingAcceleratorAttributesRequest,
  () => UpdateCustomRoutingAcceleratorAttributesResponse
);
