// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAd,
  _APK,
  _CLu,
  _DAe,
  _DECL,
  _DPK,
  _EJSP,
  _EN,
  _EPLSP,
  _PKu,
  _UDE,
  _UDER,
  _UDERp,
  _UEL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DevEndpointCustomLibraries = struct(n0, _DECL, 0, [_EPLSP, _EJSP], [0, 0]);
export var UpdateDevEndpointRequest = struct(
  n0,
  _UDER,
  0,
  [_EN, _PKu, _APK, _DPK, _CLu, _UEL, _DAe, _AAd],
  [0, 0, 64 | 0, 64 | 0, () => DevEndpointCustomLibraries, 2, 64 | 0, 128 | 0]
);
export var UpdateDevEndpointResponse = struct(n0, _UDERp, 0, [], []);
export var UpdateDevEndpoint = op(
  n0,
  _UDE,
  0,
  () => UpdateDevEndpointRequest,
  () => UpdateDevEndpointResponse
);
