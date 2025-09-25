// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _CTA,
  _CTB,
  _DFD,
  _DFDR,
  _DFDRe,
  _FDA,
  _FDN,
  _FDS,
  _FDSl,
  _FDSlo,
  _FR,
  _LFD,
  _LFDR,
  _LFDRi,
  _MR,
  _NT,
  _SO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFlowDefinitionRequest = struct(n0, _DFDR, 0, [_FDN], [0]);
export var DeleteFlowDefinitionResponse = struct(n0, _DFDRe, 0, [], []);
export var FlowDefinitionSummary = struct(n0, _FDSl, 0, [_FDN, _FDA, _FDS, _CT, _FR], [0, 0, 0, 4, 0]);
export var ListFlowDefinitionsRequest = struct(n0, _LFDR, 0, [_CTA, _CTB, _SO, _NT, _MR], [4, 4, 0, 0, 1]);
export var ListFlowDefinitionsResponse = struct(n0, _LFDRi, 0, [_FDSlo, _NT], [() => FlowDefinitionSummaries, 0]);
export var FlowDefinitionSummaries = list(n0, _FDSlo, 0, () => FlowDefinitionSummary);
export var DeleteFlowDefinition = op(
  n0,
  _DFD,
  0,
  () => DeleteFlowDefinitionRequest,
  () => DeleteFlowDefinitionResponse
);
export var ListFlowDefinitions = op(
  n0,
  _LFD,
  0,
  () => ListFlowDefinitionsRequest,
  () => ListFlowDefinitionsResponse
);
