// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASC,
  _CCs,
  _CDC,
  _CDu,
  _CHo,
  _Cl,
  _Cla,
  _Clas,
  _CLl,
  _CPus,
  _CTre,
  _De,
  _DVT,
  _GC,
  _GCetl,
  _GCetla,
  _GCRetl,
  _GCRetla,
  _GCRetlas,
  _GCRetlass,
  _GP,
  _H,
  _JC,
  _JP,
  _LU,
  _MRax,
  _N,
  _NTe,
  _QS,
  _RTo,
  _Se,
  _Ver,
  _XMLC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Classifier = struct(
  n0,
  _Cl,
  0,
  [_GC, _XMLC, _JC, _CCs],
  [() => GrokClassifier, () => XMLClassifier, () => JsonClassifier, () => CsvClassifier]
);
export var CsvClassifier = struct(
  n0,
  _CCs,
  0,
  [_N, _CTre, _LU, _Ver, _De, _QS, _CHo, _H, _DVT, _ASC, _CDC, _CDu, _Se],
  [0, 4, 4, 1, 0, 0, 0, 64 | 0, 2, 2, 2, 64 | 0, 0]
);
export var GetClassifierRequest = struct(n0, _GCRetl, 0, [_N], [0]);
export var GetClassifierResponse = struct(n0, _GCRetla, 0, [_Cl], [() => Classifier]);
export var GetClassifiersRequest = struct(n0, _GCRetlas, 0, [_MRax, _NTe], [1, 0]);
export var GetClassifiersResponse = struct(n0, _GCRetlass, 0, [_Cla, _NTe], [() => ClassifierList, 0]);
export var GrokClassifier = struct(n0, _GC, 0, [_N, _Clas, _CTre, _LU, _Ver, _GP, _CPus], [0, 0, 4, 4, 1, 0, 0]);
export var JsonClassifier = struct(n0, _JC, 0, [_N, _CTre, _LU, _Ver, _JP], [0, 4, 4, 1, 0]);
export var XMLClassifier = struct(n0, _XMLC, 0, [_N, _Clas, _CTre, _LU, _Ver, _RTo], [0, 0, 4, 4, 1, 0]);
export var ClassifierList = list(n0, _CLl, 0, () => Classifier);
export var GetClassifier = op(
  n0,
  _GCetl,
  0,
  () => GetClassifierRequest,
  () => GetClassifierResponse
);
export var GetClassifiers = op(
  n0,
  _GCetla,
  0,
  () => GetClassifiersRequest,
  () => GetClassifiersResponse
);
