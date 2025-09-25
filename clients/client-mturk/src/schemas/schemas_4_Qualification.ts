// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AG,
  _AGV,
  _AK,
  _CQT,
  _CQTR,
  _CQTRr,
  _CT,
  _De,
  _GQT,
  _GQTR,
  _GQTRe,
  _IR,
  _K,
  _N,
  _QT,
  _QTI,
  _QTS,
  _RDIS,
  _TDIS,
  _Te,
  _UQT,
  _UQTR,
  _UQTRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateQualificationTypeRequest = struct(
  n0,
  _CQTR,
  0,
  [_N, _K, _De, _QTS, _RDIS, _Te, _AK, _TDIS, _AG, _AGV],
  [0, 0, 0, 0, 1, 0, 0, 1, 2, 1]
);
export var CreateQualificationTypeResponse = struct(n0, _CQTRr, 0, [_QT], [() => QualificationType]);
export var GetQualificationTypeRequest = struct(n0, _GQTR, 0, [_QTI], [0]);
export var GetQualificationTypeResponse = struct(n0, _GQTRe, 0, [_QT], [() => QualificationType]);
export var QualificationType = struct(
  n0,
  _QT,
  0,
  [_QTI, _CT, _N, _De, _K, _QTS, _Te, _TDIS, _AK, _RDIS, _IR, _AG, _AGV],
  [0, 4, 0, 0, 0, 0, 0, 1, 0, 1, 2, 2, 1]
);
export var UpdateQualificationTypeRequest = struct(
  n0,
  _UQTR,
  0,
  [_QTI, _De, _QTS, _Te, _AK, _TDIS, _RDIS, _AG, _AGV],
  [0, 0, 0, 0, 0, 1, 1, 2, 1]
);
export var UpdateQualificationTypeResponse = struct(n0, _UQTRp, 0, [_QT], [() => QualificationType]);
export var CreateQualificationType = op(
  n0,
  _CQT,
  0,
  () => CreateQualificationTypeRequest,
  () => CreateQualificationTypeResponse
);
export var GetQualificationType = op(
  n0,
  _GQT,
  2,
  () => GetQualificationTypeRequest,
  () => GetQualificationTypeResponse
);
export var UpdateQualificationType = op(
  n0,
  _UQT,
  0,
  () => UpdateQualificationTypeRequest,
  () => UpdateQualificationTypeResponse
);
