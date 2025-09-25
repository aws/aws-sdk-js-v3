// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CLI,
  _CLO,
  _CLr,
  _Do,
  _F,
  _L,
  _LAo,
  _Li,
  _LL,
  _LLI,
  _LLO,
  _LM,
  _LML,
  _LN,
  _Lo,
  _NTe,
  _PB,
  _Po,
  _Ta,
  _UDPE,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateLocationInput = struct(n0, _CLI, 0, [_LN, _Ta], [0, () => TagList]);
export var CreateLocationOutput = struct(n0, _CLO, 0, [_L], [() => LocationModel]);
export var ListLocationsInput = struct(n0, _LLI, 0, [_F, _Li, _NTe], [64 | 0, 1, 0]);
export var ListLocationsOutput = struct(n0, _LLO, 0, [_Lo, _NTe], [() => LocationModelList, 0]);
export var LocationModel = struct(n0, _LM, 0, [_LN, _LAo, _PB], [0, 0, () => PingBeacon]);
export var PingBeacon = struct(n0, _PB, 0, [_UDPE], [() => UDPEndpoint]);
export var UDPEndpoint = struct(n0, _UDPE, 0, [_Do, _Po], [0, 1]);
export var LocationFilterList = 64 | 0;

export var LocationModelList = list(n0, _LML, 0, () => LocationModel);
export var CreateLocation = op(
  n0,
  _CLr,
  0,
  () => CreateLocationInput,
  () => CreateLocationOutput
);
export var ListLocations = op(
  n0,
  _LL,
  0,
  () => ListLocationsInput,
  () => ListLocationsOutput
);
