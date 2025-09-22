// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _GSS, _GSSR, _GSSRe, _PNH, _PNQ, _PNro, _PNS, _PNSL, _PNSr, _Res, _SQ, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSearchSuggestionsRequest = struct(n0, _GSSR, 0, [_Res, _SQ], [0, () => SuggestionQuery]);
export var GetSearchSuggestionsResponse = struct(n0, _GSSRe, 0, [_PNS], [() => PropertyNameSuggestionList]);
export var PropertyNameQuery = struct(n0, _PNQ, 0, [_PNH], [0]);
export var PropertyNameSuggestion = struct(n0, _PNSr, 0, [_PNro], [0]);
export var SuggestionQuery = struct(n0, _SQ, 0, [_PNQ], [() => PropertyNameQuery]);
export var PropertyNameSuggestionList = list(n0, _PNSL, 0, () => PropertyNameSuggestion);
export var GetSearchSuggestions = op(
  n0,
  _GSS,
  0,
  () => GetSearchSuggestionsRequest,
  () => GetSearchSuggestionsResponse
);
