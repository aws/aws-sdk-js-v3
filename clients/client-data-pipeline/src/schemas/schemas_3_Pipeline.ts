// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _AP,
  _API,
  _APO,
  _ca,
  _err,
  _erro,
  _F,
  _f,
  _fL,
  _i,
  _k,
  _n,
  _PA,
  _PAL,
  _pI,
  _PO,
  _pO,
  _pOa,
  _POi,
  _POL,
  _POLi,
  _PPD,
  _PPDI,
  _PPDO,
  _PV,
  _pV,
  _PVL,
  _RTP,
  _RTPI,
  _RTPO,
  _rV,
  _sT,
  _sV,
  _tI,
  _VE,
  _vE,
  _VEa,
  _VPD,
  _VPDI,
  _VPDO,
  _VW,
  _vW,
  _VWa,
  _w,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActivatePipelineInput = struct(n0, _API, 0, [_pI, _pV, _sT], [0, () => ParameterValueList, 4]);
export var ActivatePipelineOutput = struct(n0, _APO, 0, [], []);
export var Field = struct(n0, _F, 0, [_k, _sV, _rV], [0, 0, 0]);
export var ParameterAttribute = struct(n0, _PA, 0, [_k, _sV], [0, 0]);
export var ParameterObject = struct(n0, _PO, 0, [_i, _a], [0, () => ParameterAttributeList]);
export var ParameterValue = struct(n0, _PV, 0, [_i, _sV], [0, 0]);
export var PipelineObject = struct(n0, _POi, 0, [_i, _n, _f], [0, 0, () => fieldList]);
export var PutPipelineDefinitionInput = struct(
  n0,
  _PPDI,
  0,
  [_pI, _pO, _pOa, _pV],
  [0, () => PipelineObjectList, () => ParameterObjectList, () => ParameterValueList]
);
export var PutPipelineDefinitionOutput = struct(
  n0,
  _PPDO,
  0,
  [_vE, _vW, _err],
  [() => ValidationErrors, () => ValidationWarnings, 2]
);
export var ReportTaskProgressInput = struct(n0, _RTPI, 0, [_tI, _f], [0, () => fieldList]);
export var ReportTaskProgressOutput = struct(n0, _RTPO, 0, [_ca], [2]);
export var ValidatePipelineDefinitionInput = struct(
  n0,
  _VPDI,
  0,
  [_pI, _pO, _pOa, _pV],
  [0, () => PipelineObjectList, () => ParameterObjectList, () => ParameterValueList]
);
export var ValidatePipelineDefinitionOutput = struct(
  n0,
  _VPDO,
  0,
  [_vE, _vW, _err],
  [() => ValidationErrors, () => ValidationWarnings, 2]
);
export var ValidationError = struct(n0, _VE, 0, [_i, _erro], [0, 64 | 0]);
export var ValidationWarning = struct(n0, _VW, 0, [_i, _w], [0, 64 | 0]);
export var fieldList = list(n0, _fL, 0, () => Field);
export var ParameterAttributeList = list(n0, _PAL, 0, () => ParameterAttribute);
export var ParameterObjectList = list(n0, _POL, 0, () => ParameterObject);
export var ParameterValueList = list(n0, _PVL, 0, () => ParameterValue);
export var PipelineObjectList = list(n0, _POLi, 0, () => PipelineObject);
export var ValidationErrors = list(n0, _VEa, 0, () => ValidationError);
export var validationMessages = 64 | 0;

export var ValidationWarnings = list(n0, _VWa, 0, () => ValidationWarning);
export var ActivatePipeline = op(
  n0,
  _AP,
  0,
  () => ActivatePipelineInput,
  () => ActivatePipelineOutput
);
export var PutPipelineDefinition = op(
  n0,
  _PPD,
  0,
  () => PutPipelineDefinitionInput,
  () => PutPipelineDefinitionOutput
);
export var ReportTaskProgress = op(
  n0,
  _RTP,
  0,
  () => ReportTaskProgressInput,
  () => ReportTaskProgressOutput
);
export var ValidatePipelineDefinition = op(
  n0,
  _VPD,
  0,
  () => ValidatePipelineDefinitionInput,
  () => ValidatePipelineDefinitionOutput
);
