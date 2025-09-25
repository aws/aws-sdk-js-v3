// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ADV,
  _ADVR,
  _ADVRs,
  _Co,
  _CT,
  _CVr,
  _CVRre,
  _CVRrea,
  _DV,
  _DVele,
  _DVesc,
  _DVL,
  _DVRel,
  _DVRele,
  _DVRescr,
  _DVRescri,
  _FRa,
  _h,
  _I,
  _II,
  _LC,
  _LDV,
  _LDVR,
  _LDVRi,
  _LMT,
  _MRa,
  _N,
  _NSW,
  _NT,
  _S,
  _SVe,
  _SVR,
  _SVRe,
  _Ta,
  _VAo,
  _VI,
  _VNo,
  _Vo,
  _VSLo,
  _VSo,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateDefaultVocabularyRequest = struct(n0, _ADVR, 0, [_II, _LC, _VI], [[0, 1], [0, 1], 0]);
export var AssociateDefaultVocabularyResponse = struct(n0, _ADVRs, 0, [], []);
export var CreateVocabularyRequest = struct(
  n0,
  _CVRre,
  0,
  [_CT, _II, _VNo, _LC, _Co, _Ta],
  [[0, 4], [0, 1], 0, 0, 0, 128 | 0]
);
export var CreateVocabularyResponse = struct(n0, _CVRrea, 0, [_VAo, _VI, _S], [0, 0, 0]);
export var DefaultVocabulary = struct(n0, _DV, 0, [_II, _LC, _VI, _VNo], [0, 0, 0, 0]);
export var DeleteVocabularyRequest = struct(
  n0,
  _DVRel,
  0,
  [_II, _VI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteVocabularyResponse = struct(n0, _DVRele, 0, [_VAo, _VI, _S], [0, 0, 0]);
export var DescribeVocabularyRequest = struct(
  n0,
  _DVRescr,
  0,
  [_II, _VI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeVocabularyResponse = struct(n0, _DVRescri, 0, [_Vo], [() => Vocabulary]);
export var ListDefaultVocabulariesRequest = struct(n0, _LDVR, 0, [_II, _LC, _MRa, _NT], [[0, 1], 0, 1, 0]);
export var ListDefaultVocabulariesResponse = struct(n0, _LDVRi, 0, [_DVL, _NT], [() => DefaultVocabularyList, 0]);
export var SearchVocabulariesRequest = struct(n0, _SVR, 0, [_II, _MRa, _NT, _S, _NSW, _LC], [[0, 1], 1, 0, 0, 0, 0]);
export var SearchVocabulariesResponse = struct(n0, _SVRe, 0, [_VSLo, _NT], [() => VocabularySummaryList, 0]);
export var Vocabulary = struct(
  n0,
  _Vo,
  0,
  [_N, _I, _A, _LC, _S, _LMT, _FRa, _Co, _Ta],
  [0, 0, 0, 0, 0, 4, 0, 0, 128 | 0]
);
export var VocabularySummary = struct(n0, _VSo, 0, [_N, _I, _A, _LC, _S, _LMT, _FRa], [0, 0, 0, 0, 0, 4, 0]);
export var DefaultVocabularyList = list(n0, _DVL, 0, () => DefaultVocabulary);
export var VocabularySummaryList = list(n0, _VSLo, 0, () => VocabularySummary);
export var AssociateDefaultVocabulary = op(
  n0,
  _ADV,
  {
    [_h]: ["PUT", "/default-vocabulary/{InstanceId}/{LanguageCode}", 200],
  },
  () => AssociateDefaultVocabularyRequest,
  () => AssociateDefaultVocabularyResponse
);
export var CreateVocabulary = op(
  n0,
  _CVr,
  {
    [_h]: ["POST", "/vocabulary/{InstanceId}", 200],
  },
  () => CreateVocabularyRequest,
  () => CreateVocabularyResponse
);
export var DeleteVocabulary = op(
  n0,
  _DVele,
  {
    [_h]: ["POST", "/vocabulary-remove/{InstanceId}/{VocabularyId}", 200],
  },
  () => DeleteVocabularyRequest,
  () => DeleteVocabularyResponse
);
export var DescribeVocabulary = op(
  n0,
  _DVesc,
  {
    [_h]: ["GET", "/vocabulary/{InstanceId}/{VocabularyId}", 200],
  },
  () => DescribeVocabularyRequest,
  () => DescribeVocabularyResponse
);
export var ListDefaultVocabularies = op(
  n0,
  _LDV,
  {
    [_h]: ["POST", "/default-vocabulary-summary/{InstanceId}", 200],
  },
  () => ListDefaultVocabulariesRequest,
  () => ListDefaultVocabulariesResponse
);
export var SearchVocabularies = op(
  n0,
  _SVe,
  {
    [_h]: ["POST", "/vocabulary-summary/{InstanceId}", 200],
  },
  () => SearchVocabulariesRequest,
  () => SearchVocabulariesResponse
);
