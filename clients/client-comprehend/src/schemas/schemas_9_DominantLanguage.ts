// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DDL, _DDLR, _DDLRe, _DLo, _L, _LC, _LODL, _Sc, _T, CustomerInputString, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DetectDominantLanguageRequest = struct(n0, _DDLR, 0, [_T], [[() => CustomerInputString, 0]]);
export var DetectDominantLanguageResponse = struct(n0, _DDLRe, 8, [_L], [() => ListOfDominantLanguages]);
export var DominantLanguage = struct(n0, _DLo, 0, [_LC, _Sc], [0, 1]);
export var ListOfDominantLanguages = list(n0, _LODL, 0, () => DominantLanguage);
export var DetectDominantLanguage = op(
  n0,
  _DDL,
  0,
  () => DetectDominantLanguageRequest,
  () => DetectDominantLanguageResponse
);
