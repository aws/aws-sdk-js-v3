// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ADS,
  _ARO,
  _COo,
  _CRN,
  _DQSC,
  _DSa,
  _ELTRP,
  _ES,
  _ETxe,
  _FMTRP,
  _GDQRER,
  _GDQRERR,
  _GDQRERRe,
  _GDQRRR,
  _GDQRRRR,
  _GDQRRRRe,
  _GMLTReta,
  _GMLTRR,
  _GMLTRRe,
  _ILTRP,
  _ISP,
  _JI,
  _JN,
  _JRI,
  _LGN,
  _LMO,
  _LSGTRP,
  _NOW,
  _OSP,
  _Pr,
  _Rep,
  _RI,
  _RIu,
  _RNul,
  _Rol,
  _RRe,
  _SO,
  _St,
  _T,
  _TIr,
  _TRI,
  _TRPa,
  _TTas,
  n0,
} from "./schemas_0";
import { DataQualityEvaluationRunAdditionalRunOptions, DataSource, DataSourceMap } from "./schemas_21_Quality";

/* eslint no-var: 0 */

export var ExportLabelsTaskRunProperties = struct(n0, _ELTRP, 0, [_OSP], [0]);
export var FindMatchesTaskRunProperties = struct(n0, _FMTRP, 0, [_JI, _JN, _JRI], [0, 0, 0]);
export var GetDataQualityRuleRecommendationRunRequest = struct(n0, _GDQRRRR, 0, [_RIu], [0]);
export var GetDataQualityRuleRecommendationRunResponse = struct(
  n0,
  _GDQRRRRe,
  0,
  [_RIu, _DSa, _Rol, _NOW, _T, _St, _ES, _SO, _LMO, _COo, _ETxe, _RRe, _CRN, _DQSC],
  [0, () => DataSource, 0, 1, 1, 0, 0, 4, 4, 4, 1, 0, 0, 0]
);
export var GetDataQualityRulesetEvaluationRunRequest = struct(n0, _GDQRERR, 0, [_RIu], [0]);
export var GetDataQualityRulesetEvaluationRunResponse = struct(
  n0,
  _GDQRERRe,
  0,
  [_RIu, _DSa, _Rol, _NOW, _T, _ARO, _St, _ES, _SO, _LMO, _COo, _ETxe, _RNul, _RI, _ADS],
  [
    0,
    () => DataSource,
    0,
    1,
    1,
    () => DataQualityEvaluationRunAdditionalRunOptions,
    0,
    0,
    4,
    4,
    4,
    1,
    64 | 0,
    64 | 0,
    () => DataSourceMap,
  ]
);
export var GetMLTaskRunRequest = struct(n0, _GMLTRR, 0, [_TIr, _TRI], [0, 0]);
export var GetMLTaskRunResponse = struct(
  n0,
  _GMLTRRe,
  0,
  [_TIr, _TRI, _St, _LGN, _Pr, _ES, _SO, _LMO, _COo, _ETxe],
  [0, 0, 0, 0, () => TaskRunProperties, 0, 4, 4, 4, 1]
);
export var ImportLabelsTaskRunProperties = struct(n0, _ILTRP, 0, [_ISP, _Rep], [0, 2]);
export var LabelingSetGenerationTaskRunProperties = struct(n0, _LSGTRP, 0, [_OSP], [0]);
export var TaskRunProperties = struct(
  n0,
  _TRPa,
  0,
  [_TTas, _ILTRP, _ELTRP, _LSGTRP, _FMTRP],
  [
    0,
    () => ImportLabelsTaskRunProperties,
    () => ExportLabelsTaskRunProperties,
    () => LabelingSetGenerationTaskRunProperties,
    () => FindMatchesTaskRunProperties,
  ]
);
export var DataQualityResultIdList = 64 | 0;

export var GetDataQualityRuleRecommendationRun = op(
  n0,
  _GDQRRR,
  0,
  () => GetDataQualityRuleRecommendationRunRequest,
  () => GetDataQualityRuleRecommendationRunResponse
);
export var GetDataQualityRulesetEvaluationRun = op(
  n0,
  _GDQRER,
  0,
  () => GetDataQualityRulesetEvaluationRunRequest,
  () => GetDataQualityRulesetEvaluationRunResponse
);
export var GetMLTaskRun = op(
  n0,
  _GMLTReta,
  0,
  () => GetMLTaskRunRequest,
  () => GetMLTaskRunResponse
);
