// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AV,
  _CA,
  _Ca,
  _CR,
  _D,
  _DTe,
  _DV,
  _GTS,
  _GTSI,
  _GTSO,
  _LRIo,
  _Me,
  _NE,
  _P,
  _PCa,
  _PD,
  _PDa,
  _PK,
  _PTa,
  _RIe,
  _RIS,
  _RISe,
  _RT,
  _RTe,
  _SN,
  _SSN,
  _TB,
  _TP,
  _TPem,
  _TSC,
  _TURL,
  _TURTAW,
  _URT,
  _Ve,
  _VT,
  _VTI,
  _VTO,
  _W,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetTemplateSummaryInput = struct(
  n0,
  _GTSI,
  0,
  [_TB, _TURL, _SN, _SSN, _CA, _TSC],
  [0, 0, 0, 0, 0, () => TemplateSummaryConfig]
);
export var GetTemplateSummaryOutput = struct(
  n0,
  _GTSO,
  0,
  [_P, _D, _Ca, _CR, _RTe, _Ve, _Me, _DTe, _RIS, _W],
  [() => ParameterDeclarations, 0, 64 | 0, 0, 64 | 0, 0, 0, 64 | 0, () => ResourceIdentifierSummaries, () => Warnings]
);
export var ParameterConstraints = struct(n0, _PCa, 0, [_AV], [64 | 0]);
export var ParameterDeclaration = struct(
  n0,
  _PD,
  0,
  [_PK, _DV, _PTa, _NE, _D, _PCa],
  [0, 0, 0, 2, 0, () => ParameterConstraints]
);
export var ResourceIdentifierSummary = struct(n0, _RISe, 0, [_RT, _LRIo, _RIe], [0, 64 | 0, 64 | 0]);
export var TemplateParameter = struct(n0, _TP, 0, [_PK, _DV, _NE, _D], [0, 0, 2, 0]);
export var TemplateSummaryConfig = struct(n0, _TSC, 0, [_TURTAW], [2]);
export var ValidateTemplateInput = struct(n0, _VTI, 0, [_TB, _TURL], [0, 0]);
export var ValidateTemplateOutput = struct(
  n0,
  _VTO,
  0,
  [_P, _D, _Ca, _CR, _DTe],
  [() => TemplateParameters, 0, 64 | 0, 0, 64 | 0]
);
export var Warnings = struct(n0, _W, 0, [_URT], [64 | 0]);
export var AllowedValues = 64 | 0;

export var Capabilities = 64 | 0;

export var ParameterDeclarations = list(n0, _PDa, 0, () => ParameterDeclaration);
export var ResourceIdentifiers = 64 | 0;

export var ResourceIdentifierSummaries = list(n0, _RIS, 0, () => ResourceIdentifierSummary);
export var TemplateParameters = list(n0, _TPem, 0, () => TemplateParameter);
export var TransformsList = 64 | 0;

export var GetTemplateSummary = op(
  n0,
  _GTS,
  0,
  () => GetTemplateSummaryInput,
  () => GetTemplateSummaryOutput
);
export var ValidateTemplate = op(
  n0,
  _VT,
  0,
  () => ValidateTemplateInput,
  () => ValidateTemplateOutput
);
