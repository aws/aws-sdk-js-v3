// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _CA,
  _CCRL,
  _CCRLR,
  _CCRLRr,
  _CL,
  _CLR,
  _CLRr,
  _CRL,
  _FP,
  _IT,
  _L,
  _LA,
  _PR,
  _Pr,
  _PRo,
  _TP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateCustomRoutingListenerRequest = struct(n0, _CCRLR, 0, [_AA, _PR, _IT], [0, () => PortRanges, [0, 4]]);
export var CreateCustomRoutingListenerResponse = struct(n0, _CCRLRr, 0, [_L], [() => CustomRoutingListener]);
export var CreateListenerRequest = struct(n0, _CLR, 0, [_AA, _PR, _Pr, _CA, _IT], [0, () => PortRanges, 0, 0, [0, 4]]);
export var CreateListenerResponse = struct(n0, _CLRr, 0, [_L], [() => Listener]);
export var CustomRoutingListener = struct(n0, _CRL, 0, [_LA, _PR], [0, () => PortRanges]);
export var Listener = struct(n0, _L, 0, [_LA, _PR, _Pr, _CA], [0, () => PortRanges, 0, 0]);
export var PortRange = struct(n0, _PRo, 0, [_FP, _TP], [1, 1]);
export var PortRanges = list(n0, _PR, 0, () => PortRange);
export var CreateCustomRoutingListener = op(
  n0,
  _CCRL,
  0,
  () => CreateCustomRoutingListenerRequest,
  () => CreateCustomRoutingListenerResponse
);
export var CreateListener = op(
  n0,
  _CL,
  0,
  () => CreateListenerRequest,
  () => CreateListenerResponse
);
