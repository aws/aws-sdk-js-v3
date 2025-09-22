// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _BO, _DKP, _DKPR, _DKPRe, _EO, _KP, _KPe, _LC, _LOKP, _Sc, _T, CustomerInputString, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DetectKeyPhrasesRequest = struct(n0, _DKPR, 0, [_T, _LC], [[() => CustomerInputString, 0], 0]);
export var DetectKeyPhrasesResponse = struct(n0, _DKPRe, 8, [_KP], [() => ListOfKeyPhrases]);
export var KeyPhrase = struct(n0, _KPe, 0, [_Sc, _T, _BO, _EO], [1, 0, 1, 1]);
export var ListOfKeyPhrases = list(n0, _LOKP, 0, () => KeyPhrase);
export var DetectKeyPhrases = op(
  n0,
  _DKP,
  0,
  () => DetectKeyPhrasesRequest,
  () => DetectKeyPhrasesResponse
);
