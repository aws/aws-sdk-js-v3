// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _aL,
  _aV,
  _cL,
  _EAM,
  _eI,
  _eIn,
  _En,
  _en,
  _eT,
  _eTN,
  _eTv,
  _Ev,
  _eV,
  _eve,
  _EVM,
  _GE,
  _GER,
  _GERe,
  _lOE,
  _lT,
  _SE,
  _SER,
  _SERe,
  _vV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var attributeValue = sim(n0, _aV, 0, 8);
export var variableValue = sim(n0, _vV, 0, 8);
export var Entity = struct(n0, _En, 8, [_eT, _eIn], [0, 0]);
export var Event = struct(
  n0,
  _Ev,
  0,
  [_eI, _eTN, _eTv, _eV, _cL, _lT, _en],
  [0, 0, 0, [() => EventAttributeMap, 0], 0, 0, [() => listOfEntities, 0]]
);
export var GetEventRequest = struct(n0, _GER, 0, [_eI, _eTN], [0, 0]);
export var GetEventResult = struct(n0, _GERe, 0, [_eve], [[() => Event, 0]]);
export var SendEventRequest = struct(
  n0,
  _SER,
  0,
  [_eI, _eTN, _eTv, _eV, _aL, _lT, _en],
  [0, 0, 0, [() => EventVariableMap, 0], 0, 0, [() => listOfEntities, 0]]
);
export var SendEventResult = struct(n0, _SERe, 0, [], []);
export var listOfEntities = list(n0, _lOE, 0, [() => Entity, 0]);
export var EventAttributeMap = map(n0, _EAM, 0, [0, 0], [() => attributeValue, 0]);
export var EventVariableMap = map(n0, _EVM, 0, [0, 0], [() => variableValue, 0]);
export var GetEvent = op(
  n0,
  _GE,
  0,
  () => GetEventRequest,
  () => GetEventResult
);
export var SendEvent = op(
  n0,
  _SE,
  0,
  () => SendEventRequest,
  () => SendEventResult
);
