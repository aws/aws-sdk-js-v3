// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { BatchSizeLimitExceededException as __BatchSizeLimitExceededException } from "../models/index";
import {
  _BDDL,
  _BDDLIR,
  _BDDLR,
  _BDDLRa,
  _BDE,
  _BDEIR,
  _BDER,
  _BDERa,
  _BDKP,
  _BDKPIR,
  _BDKPR,
  _BDKPRa,
  _BDS,
  _BDSa,
  _BDSIR,
  _BDSIRa,
  _BDSR,
  _BDSRa,
  _BDSRat,
  _BDSRatc,
  _BDTS,
  _BDTSIR,
  _BDTSR,
  _BDTSRa,
  _BIE,
  _BIEL,
  _BSLEE,
  _c,
  _CISL,
  _E,
  _e,
  _EC,
  _EL,
  _EM,
  _hE,
  _I,
  _KP,
  _L,
  _LC,
  _LODDLR,
  _LODER,
  _LODKPR,
  _LODSR,
  _LODSRi,
  _LODTSR,
  _M,
  _RL,
  _Se,
  _SS,
  _ST,
  _TL,
  CustomerInputString,
  n0,
} from "./schemas_0";
import { ListOfDominantLanguages } from "./schemas_9_DominantLanguage";
import { ListOfKeyPhrases } from "./schemas_12_Phrases";
import { ListOfSyntaxTokens } from "./schemas_25_DetectSyntax";
import { ListOfEntities } from "./schemas_30_DetectEntities";
import { ListOfTargetedSentimentEntities, SentimentScore } from "./schemas_33_Detect";

/* eslint no-var: 0 */

export var BatchDetectDominantLanguageItemResult = struct(n0, _BDDLIR, 0, [_I, _L], [1, () => ListOfDominantLanguages]);
export var BatchDetectDominantLanguageRequest = struct(n0, _BDDLR, 0, [_TL], [[() => CustomerInputStringList, 0]]);
export var BatchDetectDominantLanguageResponse = struct(
  n0,
  _BDDLRa,
  8,
  [_RL, _EL],
  [() => ListOfDetectDominantLanguageResult, () => BatchItemErrorList]
);
export var BatchDetectEntitiesItemResult = struct(n0, _BDEIR, 0, [_I, _E], [1, () => ListOfEntities]);
export var BatchDetectEntitiesRequest = struct(n0, _BDER, 0, [_TL, _LC], [[() => CustomerInputStringList, 0], 0]);
export var BatchDetectEntitiesResponse = struct(
  n0,
  _BDERa,
  8,
  [_RL, _EL],
  [() => ListOfDetectEntitiesResult, () => BatchItemErrorList]
);
export var BatchDetectKeyPhrasesItemResult = struct(n0, _BDKPIR, 0, [_I, _KP], [1, () => ListOfKeyPhrases]);
export var BatchDetectKeyPhrasesRequest = struct(n0, _BDKPR, 0, [_TL, _LC], [[() => CustomerInputStringList, 0], 0]);
export var BatchDetectKeyPhrasesResponse = struct(
  n0,
  _BDKPRa,
  8,
  [_RL, _EL],
  [() => ListOfDetectKeyPhrasesResult, () => BatchItemErrorList]
);
export var BatchDetectSentimentItemResult = struct(n0, _BDSIR, 0, [_I, _Se, _SS], [1, 0, () => SentimentScore]);
export var BatchDetectSentimentRequest = struct(n0, _BDSR, 0, [_TL, _LC], [[() => CustomerInputStringList, 0], 0]);
export var BatchDetectSentimentResponse = struct(
  n0,
  _BDSRa,
  8,
  [_RL, _EL],
  [() => ListOfDetectSentimentResult, () => BatchItemErrorList]
);
export var BatchDetectSyntaxItemResult = struct(n0, _BDSIRa, 0, [_I, _ST], [1, () => ListOfSyntaxTokens]);
export var BatchDetectSyntaxRequest = struct(n0, _BDSRat, 0, [_TL, _LC], [[() => CustomerInputStringList, 0], 0]);
export var BatchDetectSyntaxResponse = struct(
  n0,
  _BDSRatc,
  8,
  [_RL, _EL],
  [() => ListOfDetectSyntaxResult, () => BatchItemErrorList]
);
export var BatchDetectTargetedSentimentItemResult = struct(
  n0,
  _BDTSIR,
  0,
  [_I, _E],
  [1, () => ListOfTargetedSentimentEntities]
);
export var BatchDetectTargetedSentimentRequest = struct(
  n0,
  _BDTSR,
  0,
  [_TL, _LC],
  [[() => CustomerInputStringList, 0], 0]
);
export var BatchDetectTargetedSentimentResponse = struct(
  n0,
  _BDTSRa,
  8,
  [_RL, _EL],
  [() => ListOfDetectTargetedSentimentResult, () => BatchItemErrorList]
);
export var BatchItemError = struct(n0, _BIE, 0, [_I, _EC, _EM], [1, 0, 0]);
export var BatchSizeLimitExceededException = error(
  n0,
  _BSLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __BatchSizeLimitExceededException
);
export var BatchItemErrorList = list(n0, _BIEL, 0, () => BatchItemError);
export var CustomerInputStringList = list(n0, _CISL, 8, [() => CustomerInputString, 0]);
export var ListOfDetectDominantLanguageResult = list(n0, _LODDLR, 0, () => BatchDetectDominantLanguageItemResult);
export var ListOfDetectEntitiesResult = list(n0, _LODER, 0, () => BatchDetectEntitiesItemResult);
export var ListOfDetectKeyPhrasesResult = list(n0, _LODKPR, 0, () => BatchDetectKeyPhrasesItemResult);
export var ListOfDetectSentimentResult = list(n0, _LODSR, 0, () => BatchDetectSentimentItemResult);
export var ListOfDetectSyntaxResult = list(n0, _LODSRi, 0, () => BatchDetectSyntaxItemResult);
export var ListOfDetectTargetedSentimentResult = list(n0, _LODTSR, 0, () => BatchDetectTargetedSentimentItemResult);
export var BatchDetectDominantLanguage = op(
  n0,
  _BDDL,
  0,
  () => BatchDetectDominantLanguageRequest,
  () => BatchDetectDominantLanguageResponse
);
export var BatchDetectEntities = op(
  n0,
  _BDE,
  0,
  () => BatchDetectEntitiesRequest,
  () => BatchDetectEntitiesResponse
);
export var BatchDetectKeyPhrases = op(
  n0,
  _BDKP,
  0,
  () => BatchDetectKeyPhrasesRequest,
  () => BatchDetectKeyPhrasesResponse
);
export var BatchDetectSentiment = op(
  n0,
  _BDS,
  0,
  () => BatchDetectSentimentRequest,
  () => BatchDetectSentimentResponse
);
export var BatchDetectSyntax = op(
  n0,
  _BDSa,
  0,
  () => BatchDetectSyntaxRequest,
  () => BatchDetectSyntaxResponse
);
export var BatchDetectTargetedSentiment = op(
  n0,
  _BDTS,
  0,
  () => BatchDetectTargetedSentimentRequest,
  () => BatchDetectTargetedSentimentResponse
);
