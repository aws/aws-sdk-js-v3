// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DR, _DRR, _DRRe, _LMT, _LR, _LRR, _LRRi, _NT, _PSa, _Re, _Rel, _RI, _RN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRelayRequest = struct(n0, _DRR, 0, [_RI], [0]);
export var DeleteRelayResponse = struct(n0, _DRRe, 0, [], []);
export var ListRelaysRequest = struct(n0, _LRR, 0, [_PSa, _NT], [1, 0]);
export var ListRelaysResponse = struct(n0, _LRRi, 0, [_Re, _NT], [() => Relays, 0]);
export var Relay = struct(n0, _Rel, 0, [_RI, _RN, _LMT], [0, 0, 4]);
export var Relays = list(n0, _Re, 0, () => Relay);
export var DeleteRelay = op(
  n0,
  _DR,
  2,
  () => DeleteRelayRequest,
  () => DeleteRelayResponse
);
export var ListRelays = op(
  n0,
  _LR,
  0,
  () => ListRelaysRequest,
  () => ListRelaysResponse
);
