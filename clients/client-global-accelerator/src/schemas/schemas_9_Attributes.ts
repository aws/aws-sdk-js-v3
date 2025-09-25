// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _AAc, _DAA, _DAAR, _DAARe, _FLE, _FLSB, _FLSP, _UAA, _UAAR, _UAARp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AcceleratorAttributes = struct(n0, _AAc, 0, [_FLE, _FLSB, _FLSP], [2, 0, 0]);
export var DescribeAcceleratorAttributesRequest = struct(n0, _DAAR, 0, [_AA], [0]);
export var DescribeAcceleratorAttributesResponse = struct(n0, _DAARe, 0, [_AAc], [() => AcceleratorAttributes]);
export var UpdateAcceleratorAttributesRequest = struct(n0, _UAAR, 0, [_AA, _FLE, _FLSB, _FLSP], [0, 2, 0, 0]);
export var UpdateAcceleratorAttributesResponse = struct(n0, _UAARp, 0, [_AAc], [() => AcceleratorAttributes]);
export var DescribeAcceleratorAttributes = op(
  n0,
  _DAA,
  0,
  () => DescribeAcceleratorAttributesRequest,
  () => DescribeAcceleratorAttributesResponse
);
export var UpdateAcceleratorAttributes = op(
  n0,
  _UAA,
  0,
  () => UpdateAcceleratorAttributesRequest,
  () => UpdateAcceleratorAttributesResponse
);
