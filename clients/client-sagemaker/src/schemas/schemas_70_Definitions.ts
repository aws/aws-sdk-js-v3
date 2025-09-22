// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _CTA,
  _CTB,
  _EN,
  _JDS,
  _LDQJD,
  _LDQJDR,
  _LDQJDRi,
  _LMBJD,
  _LMBJDR,
  _LMBJDRi,
  _LMEJD,
  _LMEJDR,
  _LMEJDRi,
  _LMQJD,
  _LMQJDR,
  _LMQJDRi,
  _MJDA,
  _MJDN,
  _MJDS,
  _MJDSL,
  _MR,
  _NCa,
  _NT,
  _SBo,
  _SO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListDataQualityJobDefinitionsRequest = struct(
  n0,
  _LDQJDR,
  0,
  [_EN, _SBo, _SO, _NT, _MR, _NCa, _CTB, _CTA],
  [0, 0, 0, 0, 1, 0, 4, 4]
);
export var ListDataQualityJobDefinitionsResponse = struct(
  n0,
  _LDQJDRi,
  0,
  [_JDS, _NT],
  [() => MonitoringJobDefinitionSummaryList, 0]
);
export var ListModelBiasJobDefinitionsRequest = struct(
  n0,
  _LMBJDR,
  0,
  [_EN, _SBo, _SO, _NT, _MR, _NCa, _CTB, _CTA],
  [0, 0, 0, 0, 1, 0, 4, 4]
);
export var ListModelBiasJobDefinitionsResponse = struct(
  n0,
  _LMBJDRi,
  0,
  [_JDS, _NT],
  [() => MonitoringJobDefinitionSummaryList, 0]
);
export var ListModelExplainabilityJobDefinitionsRequest = struct(
  n0,
  _LMEJDR,
  0,
  [_EN, _SBo, _SO, _NT, _MR, _NCa, _CTB, _CTA],
  [0, 0, 0, 0, 1, 0, 4, 4]
);
export var ListModelExplainabilityJobDefinitionsResponse = struct(
  n0,
  _LMEJDRi,
  0,
  [_JDS, _NT],
  [() => MonitoringJobDefinitionSummaryList, 0]
);
export var ListModelQualityJobDefinitionsRequest = struct(
  n0,
  _LMQJDR,
  0,
  [_EN, _SBo, _SO, _NT, _MR, _NCa, _CTB, _CTA],
  [0, 0, 0, 0, 1, 0, 4, 4]
);
export var ListModelQualityJobDefinitionsResponse = struct(
  n0,
  _LMQJDRi,
  0,
  [_JDS, _NT],
  [() => MonitoringJobDefinitionSummaryList, 0]
);
export var MonitoringJobDefinitionSummary = struct(n0, _MJDS, 0, [_MJDN, _MJDA, _CT, _EN], [0, 0, 4, 0]);
export var MonitoringJobDefinitionSummaryList = list(n0, _MJDSL, 0, () => MonitoringJobDefinitionSummary);
export var ListDataQualityJobDefinitions = op(
  n0,
  _LDQJD,
  0,
  () => ListDataQualityJobDefinitionsRequest,
  () => ListDataQualityJobDefinitionsResponse
);
export var ListModelBiasJobDefinitions = op(
  n0,
  _LMBJD,
  0,
  () => ListModelBiasJobDefinitionsRequest,
  () => ListModelBiasJobDefinitionsResponse
);
export var ListModelExplainabilityJobDefinitions = op(
  n0,
  _LMEJD,
  0,
  () => ListModelExplainabilityJobDefinitionsRequest,
  () => ListModelExplainabilityJobDefinitionsResponse
);
export var ListModelQualityJobDefinitions = op(
  n0,
  _LMQJD,
  0,
  () => ListModelQualityJobDefinitionsRequest,
  () => ListModelQualityJobDefinitionsResponse
);
