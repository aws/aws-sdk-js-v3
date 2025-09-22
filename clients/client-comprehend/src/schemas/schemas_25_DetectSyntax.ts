// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BO,
  _DSe,
  _DSRet,
  _DSRete,
  _EO,
  _LC,
  _LOST,
  _POS,
  _POST,
  _Sc,
  _ST,
  _STy,
  _T,
  _Tag,
  _TI,
  CustomerInputString,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DetectSyntaxRequest = struct(n0, _DSRet, 0, [_T, _LC], [[() => CustomerInputString, 0], 0]);
export var DetectSyntaxResponse = struct(n0, _DSRete, 8, [_ST], [() => ListOfSyntaxTokens]);
export var PartOfSpeechTag = struct(n0, _POST, 0, [_Tag, _Sc], [0, 1]);
export var SyntaxToken = struct(n0, _STy, 0, [_TI, _T, _BO, _EO, _POS], [1, 0, 1, 1, () => PartOfSpeechTag]);
export var ListOfSyntaxTokens = list(n0, _LOST, 0, () => SyntaxToken);
export var DetectSyntax = op(
  n0,
  _DSe,
  0,
  () => DetectSyntaxRequest,
  () => DetectSyntaxResponse
);
