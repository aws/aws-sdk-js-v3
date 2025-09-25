// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _EN, _ESI, _Ex, _Exp, _Im, _LE, _LEI, _LEO, _LI, _LII, _LIO, _N, _NT, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Export = struct(n0, _Ex, 0, [_ESI, _N, _V], [0, 0, 0]);
export var ListExportsInput = struct(n0, _LEI, 0, [_NT], [0]);
export var ListExportsOutput = struct(n0, _LEO, 0, [_Exp, _NT], [() => Exports, 0]);
export var ListImportsInput = struct(n0, _LII, 0, [_EN, _NT], [0, 0]);
export var ListImportsOutput = struct(n0, _LIO, 0, [_Im, _NT], [64 | 0, 0]);
export var Exports = list(n0, _Exp, 0, () => Export);
export var Imports = 64 | 0;

export var ListExports = op(
  n0,
  _LE,
  0,
  () => ListExportsInput,
  () => ListExportsOutput
);
export var ListImports = op(
  n0,
  _LI,
  0,
  () => ListImportsInput,
  () => ListImportsOutput
);
