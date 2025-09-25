// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ATC,
  _aTC,
  _EC,
  _eC,
  _EP,
  _EPL,
  _ePL,
  _eT,
  _eVT,
  _pAT,
  _sAo,
  _sE,
  _SUC,
  _sUC,
  _US,
  _USR,
  _USRp,
  _w,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutoTrainingConfig = struct(n0, _ATC, 0, [_sE], [0]);
export var EventParameters = struct(n0, _EP, 0, [_eT, _eVT, _w], [0, 1, 1]);
export var EventsConfig = struct(n0, _EC, 0, [_ePL], [() => EventParametersList]);
export var SolutionUpdateConfig = struct(n0, _SUC, 0, [_aTC, _eC], [() => AutoTrainingConfig, () => EventsConfig]);
export var UpdateSolutionRequest = struct(n0, _USR, 0, [_sAo, _pAT, _sUC], [0, 2, () => SolutionUpdateConfig]);
export var UpdateSolutionResponse = struct(n0, _USRp, 0, [_sAo], [0]);
export var EventParametersList = list(n0, _EPL, 0, () => EventParameters);
export var UpdateSolution = op(
  n0,
  _US,
  0,
  () => UpdateSolutionRequest,
  () => UpdateSolutionResponse
);
