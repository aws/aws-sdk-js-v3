// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CSSM,
  _CSSMI,
  _CTr,
  _DSSM,
  _DSSMI,
  _GSSM,
  _GSSMI,
  _GSSMO,
  _II,
  _IN,
  _ITd,
  _LMT,
  _SItu,
  _SM,
  _SMD,
  _SPA,
  _USSM,
  _USSMI,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateStudioSessionMappingInput = struct(n0, _CSSMI, 0, [_SItu, _II, _IN, _ITd, _SPA], [0, 0, 0, 0, 0]);
export var DeleteStudioSessionMappingInput = struct(n0, _DSSMI, 0, [_SItu, _II, _IN, _ITd], [0, 0, 0, 0]);
export var GetStudioSessionMappingInput = struct(n0, _GSSMI, 0, [_SItu, _II, _IN, _ITd], [0, 0, 0, 0]);
export var GetStudioSessionMappingOutput = struct(n0, _GSSMO, 0, [_SM], [() => SessionMappingDetail]);
export var SessionMappingDetail = struct(n0, _SMD, 0, [_SItu, _II, _IN, _ITd, _SPA, _CTr, _LMT], [0, 0, 0, 0, 0, 4, 4]);
export var UpdateStudioSessionMappingInput = struct(n0, _USSMI, 0, [_SItu, _II, _IN, _ITd, _SPA], [0, 0, 0, 0, 0]);
export var CreateStudioSessionMapping = op(
  n0,
  _CSSM,
  0,
  () => CreateStudioSessionMappingInput,
  () => Unit
);
export var DeleteStudioSessionMapping = op(
  n0,
  _DSSM,
  0,
  () => DeleteStudioSessionMappingInput,
  () => Unit
);
export var GetStudioSessionMapping = op(
  n0,
  _GSSM,
  0,
  () => GetStudioSessionMappingInput,
  () => GetStudioSessionMappingOutput
);
export var UpdateStudioSessionMapping = op(
  n0,
  _USSM,
  0,
  () => UpdateStudioSessionMappingInput,
  () => Unit
);
