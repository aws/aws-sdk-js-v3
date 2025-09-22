// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CSI,
  _CSO,
  _CSr,
  _CT,
  _DSes,
  _DSIe,
  _DSO,
  _Li,
  _LSI,
  _LSi,
  _LSO,
  _N,
  _NTe,
  _SA,
  _Sc,
  _Scr,
  _SI,
  _SLc,
  _SLt,
  _SOD,
  _Ta,
  _USI,
  _USO,
  _USp,
  _V,
  _ZF,
  n0,
  TagList,
} from "./schemas_0";
import { S3Location } from "./schemas_59_Script";

/* eslint no-var: 0 */

export var CreateScriptInput = struct(
  n0,
  _CSI,
  0,
  [_N, _V, _SLt, _ZF, _Ta],
  [0, 0, () => S3Location, 21, () => TagList]
);
export var CreateScriptOutput = struct(n0, _CSO, 0, [_Sc], [() => Script]);
export var DescribeScriptInput = struct(n0, _DSIe, 0, [_SI], [0]);
export var DescribeScriptOutput = struct(n0, _DSO, 0, [_Sc], [() => Script]);
export var ListScriptsInput = struct(n0, _LSI, 0, [_Li, _NTe], [1, 0]);
export var ListScriptsOutput = struct(n0, _LSO, 0, [_Scr, _NTe], [() => ScriptList, 0]);
export var Script = struct(n0, _Sc, 0, [_SI, _SA, _N, _V, _SOD, _CT, _SLt], [0, 0, 0, 0, 1, 4, () => S3Location]);
export var UpdateScriptInput = struct(n0, _USI, 0, [_SI, _N, _V, _SLt, _ZF], [0, 0, 0, () => S3Location, 21]);
export var UpdateScriptOutput = struct(n0, _USO, 0, [_Sc], [() => Script]);
export var ScriptList = list(n0, _SLc, 0, () => Script);
export var CreateScript = op(
  n0,
  _CSr,
  0,
  () => CreateScriptInput,
  () => CreateScriptOutput
);
export var DescribeScript = op(
  n0,
  _DSes,
  0,
  () => DescribeScriptInput,
  () => DescribeScriptOutput
);
export var ListScripts = op(
  n0,
  _LSi,
  0,
  () => ListScriptsInput,
  () => ListScriptsOutput
);
export var UpdateScript = op(
  n0,
  _USp,
  0,
  () => UpdateScriptInput,
  () => UpdateScriptOutput
);
