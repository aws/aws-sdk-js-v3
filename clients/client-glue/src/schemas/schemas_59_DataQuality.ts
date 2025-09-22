// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AE,
  _AEL,
  _AVc,
  _BPDQSA,
  _BPDQSAR,
  _BPDQSARa,
  _COo,
  _CTl,
  _Date,
  _DIA,
  _FIA,
  _FR,
  _GDQMRet,
  _GDQMRR,
  _GDQMRRe,
  _IA,
  _IAL,
  _IAnc,
  _LB,
  _Mo,
  _PDQPA,
  _PDQPAR,
  _PDQPARu,
  _PI,
  _PVr,
  _SI,
  _SMR,
  _SMRt,
  _UBp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnnotationError = struct(n0, _AE, 0, [_PI, _SI, _FR], [0, 0, 0]);
export var BatchPutDataQualityStatisticAnnotationRequest = struct(
  n0,
  _BPDQSAR,
  0,
  [_IA, _CTl],
  [() => InclusionAnnotationList, 0]
);
export var BatchPutDataQualityStatisticAnnotationResponse = struct(
  n0,
  _BPDQSARa,
  0,
  [_FIA],
  [() => AnnotationErrorList]
);
export var DatapointInclusionAnnotation = struct(n0, _DIA, 0, [_PI, _SI, _IAnc], [0, 0, 0]);
export var GetDataQualityModelResultRequest = struct(n0, _GDQMRR, 0, [_SI, _PI], [0, 0]);
export var GetDataQualityModelResultResponse = struct(n0, _GDQMRRe, 0, [_COo, _Mo], [4, () => StatisticModelResults]);
export var PutDataQualityProfileAnnotationRequest = struct(n0, _PDQPAR, 0, [_PI, _IAnc], [0, 0]);
export var PutDataQualityProfileAnnotationResponse = struct(n0, _PDQPARu, 0, [], []);
export var StatisticModelResult = struct(n0, _SMR, 0, [_LB, _UBp, _PVr, _AVc, _Date, _IAnc], [1, 1, 1, 1, 4, 0]);
export var AnnotationErrorList = list(n0, _AEL, 0, () => AnnotationError);
export var InclusionAnnotationList = list(n0, _IAL, 0, () => DatapointInclusionAnnotation);
export var StatisticModelResults = list(n0, _SMRt, 0, () => StatisticModelResult);
export var BatchPutDataQualityStatisticAnnotation = op(
  n0,
  _BPDQSA,
  0,
  () => BatchPutDataQualityStatisticAnnotationRequest,
  () => BatchPutDataQualityStatisticAnnotationResponse
);
export var GetDataQualityModelResult = op(
  n0,
  _GDQMRet,
  0,
  () => GetDataQualityModelResultRequest,
  () => GetDataQualityModelResultResponse
);
export var PutDataQualityProfileAnnotation = op(
  n0,
  _PDQPA,
  0,
  () => PutDataQualityProfileAnnotationRequest,
  () => PutDataQualityProfileAnnotationResponse
);
