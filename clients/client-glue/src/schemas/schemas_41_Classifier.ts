// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ASC,
  _CCCR,
  _CCre,
  _CCRre,
  _CCRrea,
  _CCs,
  _CDC,
  _CDu,
  _CGCR,
  _CHo,
  _CJCR,
  _Clas,
  _CPus,
  _CXMLCR,
  _De,
  _DVT,
  _GC,
  _GP,
  _H,
  _JC,
  _JP,
  _N,
  _QS,
  _RTo,
  _Se,
  _UCCR,
  _UCp,
  _UCRpd,
  _UCRpda,
  _UGCR,
  _UJCR,
  _UXMLCR,
  _XMLC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateClassifierRequest = struct(
  n0,
  _CCRre,
  0,
  [_GC, _XMLC, _JC, _CCs],
  [
    () => CreateGrokClassifierRequest,
    () => CreateXMLClassifierRequest,
    () => CreateJsonClassifierRequest,
    () => CreateCsvClassifierRequest,
  ]
);
export var CreateClassifierResponse = struct(n0, _CCRrea, 0, [], []);
export var CreateCsvClassifierRequest = struct(
  n0,
  _CCCR,
  0,
  [_N, _De, _QS, _CHo, _H, _DVT, _ASC, _CDC, _CDu, _Se],
  [0, 0, 0, 0, 64 | 0, 2, 2, 2, 64 | 0, 0]
);
export var CreateGrokClassifierRequest = struct(n0, _CGCR, 0, [_Clas, _N, _GP, _CPus], [0, 0, 0, 0]);
export var CreateJsonClassifierRequest = struct(n0, _CJCR, 0, [_N, _JP], [0, 0]);
export var CreateXMLClassifierRequest = struct(n0, _CXMLCR, 0, [_Clas, _N, _RTo], [0, 0, 0]);
export var UpdateClassifierRequest = struct(
  n0,
  _UCRpd,
  0,
  [_GC, _XMLC, _JC, _CCs],
  [
    () => UpdateGrokClassifierRequest,
    () => UpdateXMLClassifierRequest,
    () => UpdateJsonClassifierRequest,
    () => UpdateCsvClassifierRequest,
  ]
);
export var UpdateClassifierResponse = struct(n0, _UCRpda, 0, [], []);
export var UpdateCsvClassifierRequest = struct(
  n0,
  _UCCR,
  0,
  [_N, _De, _QS, _CHo, _H, _DVT, _ASC, _CDC, _CDu, _Se],
  [0, 0, 0, 0, 64 | 0, 2, 2, 2, 64 | 0, 0]
);
export var UpdateGrokClassifierRequest = struct(n0, _UGCR, 0, [_N, _Clas, _GP, _CPus], [0, 0, 0, 0]);
export var UpdateJsonClassifierRequest = struct(n0, _UJCR, 0, [_N, _JP], [0, 0]);
export var UpdateXMLClassifierRequest = struct(n0, _UXMLCR, 0, [_N, _Clas, _RTo], [0, 0, 0]);
export var CsvHeader = 64 | 0;

export var CustomDatatypes = 64 | 0;

export var CreateClassifier = op(
  n0,
  _CCre,
  0,
  () => CreateClassifierRequest,
  () => CreateClassifierResponse
);
export var UpdateClassifier = op(
  n0,
  _UCp,
  0,
  () => UpdateClassifierRequest,
  () => UpdateClassifierResponse
);
