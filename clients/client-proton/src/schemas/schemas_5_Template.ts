// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _ar,
  _bu,
  _cA,
  _CET,
  _cET,
  _CETI,
  _CETIL,
  _CETL,
  _CETV,
  _CETVI,
  _CETVO,
  _CSTV,
  _CSTVI,
  _CSTVO,
  _cT,
  _d,
  _DETV,
  _DETVI,
  _DETVO,
  _DSTV,
  _DSTVI,
  _DSTVO,
  _ETV,
  _eTV,
  _GETV,
  _GETVI,
  _GETVO,
  _GSTV,
  _GSTVI,
  _GSTVO,
  _k,
  _lMA,
  _mT,
  _mV,
  _mVi,
  _rMV,
  _s,
  _s_,
  _sc,
  _sCS,
  _sM,
  _so,
  _SOS,
  _st,
  _STV,
  _sTV,
  _t,
  _tN,
  _TS,
  _TVSI,
  _UETV,
  _UETVI,
  _UETVO,
  _USTV,
  _USTVI,
  _USTVO,
  Description,
  n0,
  StatusMessage,
} from "./schemas_0";
import { TagList } from "./schemas_20_Create";

/* eslint no-var: 0 */

export var TemplateSchema = sim(n0, _TS, 0, {
  [_mT]: _a,
  [_s]: 1,
});
export var CompatibleEnvironmentTemplate = struct(n0, _CET, 0, [_tN, _mV], [0, 0]);
export var CompatibleEnvironmentTemplateInput = struct(n0, _CETI, 0, [_tN, _mV], [0, 0]);
export var CreateEnvironmentTemplateVersionInput = struct(
  n0,
  _CETVI,
  0,
  [_cT, _tN, _d, _mV, _so, _t],
  [[0, 4], 0, [() => Description, 0], 0, () => TemplateVersionSourceInput, () => TagList]
);
export var CreateEnvironmentTemplateVersionOutput = struct(
  n0,
  _CETVO,
  0,
  [_eTV],
  [[() => EnvironmentTemplateVersion, 0]]
);
export var CreateServiceTemplateVersionInput = struct(
  n0,
  _CSTVI,
  0,
  [_cT, _tN, _d, _mV, _so, _cET, _t, _sCS],
  [
    [0, 4],
    0,
    [() => Description, 0],
    0,
    () => TemplateVersionSourceInput,
    () => CompatibleEnvironmentTemplateInputList,
    () => TagList,
    64 | 0,
  ]
);
export var CreateServiceTemplateVersionOutput = struct(n0, _CSTVO, 0, [_sTV], [[() => ServiceTemplateVersion, 0]]);
export var DeleteEnvironmentTemplateVersionInput = struct(n0, _DETVI, 0, [_tN, _mV, _mVi], [0, 0, 0]);
export var DeleteEnvironmentTemplateVersionOutput = struct(
  n0,
  _DETVO,
  0,
  [_eTV],
  [[() => EnvironmentTemplateVersion, 0]]
);
export var DeleteServiceTemplateVersionInput = struct(n0, _DSTVI, 0, [_tN, _mV, _mVi], [0, 0, 0]);
export var DeleteServiceTemplateVersionOutput = struct(n0, _DSTVO, 0, [_sTV], [[() => ServiceTemplateVersion, 0]]);
export var EnvironmentTemplateVersion = struct(
  n0,
  _ETV,
  0,
  [_tN, _mV, _mVi, _rMV, _st, _sM, _d, _ar, _cA, _lMA, _sc],
  [0, 0, 0, 0, 0, [() => StatusMessage, 0], [() => Description, 0], 0, 4, 4, [() => TemplateSchema, 0]]
);
export var GetEnvironmentTemplateVersionInput = struct(n0, _GETVI, 0, [_tN, _mV, _mVi], [0, 0, 0]);
export var GetEnvironmentTemplateVersionOutput = struct(n0, _GETVO, 0, [_eTV], [[() => EnvironmentTemplateVersion, 0]]);
export var GetServiceTemplateVersionInput = struct(n0, _GSTVI, 0, [_tN, _mV, _mVi], [0, 0, 0]);
export var GetServiceTemplateVersionOutput = struct(n0, _GSTVO, 0, [_sTV], [[() => ServiceTemplateVersion, 0]]);
export var S3ObjectSource = struct(n0, _SOS, 0, [_bu, _k], [0, 0]);
export var ServiceTemplateVersion = struct(
  n0,
  _STV,
  0,
  [_tN, _mV, _mVi, _rMV, _st, _sM, _d, _ar, _cA, _lMA, _cET, _sc, _sCS],
  [
    0,
    0,
    0,
    0,
    0,
    [() => StatusMessage, 0],
    [() => Description, 0],
    0,
    4,
    4,
    () => CompatibleEnvironmentTemplateList,
    [() => TemplateSchema, 0],
    64 | 0,
  ]
);
export var UpdateEnvironmentTemplateVersionInput = struct(
  n0,
  _UETVI,
  0,
  [_tN, _mV, _mVi, _d, _st],
  [0, 0, 0, [() => Description, 0], 0]
);
export var UpdateEnvironmentTemplateVersionOutput = struct(
  n0,
  _UETVO,
  0,
  [_eTV],
  [[() => EnvironmentTemplateVersion, 0]]
);
export var UpdateServiceTemplateVersionInput = struct(
  n0,
  _USTVI,
  0,
  [_tN, _mV, _mVi, _d, _st, _cET, _sCS],
  [0, 0, 0, [() => Description, 0], 0, () => CompatibleEnvironmentTemplateInputList, 64 | 0]
);
export var UpdateServiceTemplateVersionOutput = struct(n0, _USTVO, 0, [_sTV], [[() => ServiceTemplateVersion, 0]]);
export var CompatibleEnvironmentTemplateInputList = list(n0, _CETIL, 0, () => CompatibleEnvironmentTemplateInput);
export var CompatibleEnvironmentTemplateList = list(n0, _CETL, 0, () => CompatibleEnvironmentTemplate);
export var ServiceTemplateSupportedComponentSourceInputList = 64 | 0;

export var TemplateVersionSourceInput = uni(n0, _TVSI, 0, [_s_], [() => S3ObjectSource]);
export var CreateEnvironmentTemplateVersion = op(
  n0,
  _CETV,
  2,
  () => CreateEnvironmentTemplateVersionInput,
  () => CreateEnvironmentTemplateVersionOutput
);
export var CreateServiceTemplateVersion = op(
  n0,
  _CSTV,
  2,
  () => CreateServiceTemplateVersionInput,
  () => CreateServiceTemplateVersionOutput
);
export var DeleteEnvironmentTemplateVersion = op(
  n0,
  _DETV,
  2,
  () => DeleteEnvironmentTemplateVersionInput,
  () => DeleteEnvironmentTemplateVersionOutput
);
export var DeleteServiceTemplateVersion = op(
  n0,
  _DSTV,
  2,
  () => DeleteServiceTemplateVersionInput,
  () => DeleteServiceTemplateVersionOutput
);
export var GetEnvironmentTemplateVersion = op(
  n0,
  _GETV,
  0,
  () => GetEnvironmentTemplateVersionInput,
  () => GetEnvironmentTemplateVersionOutput
);
export var GetServiceTemplateVersion = op(
  n0,
  _GSTV,
  0,
  () => GetServiceTemplateVersionInput,
  () => GetServiceTemplateVersionOutput
);
export var UpdateEnvironmentTemplateVersion = op(
  n0,
  _UETV,
  0,
  () => UpdateEnvironmentTemplateVersionInput,
  () => UpdateEnvironmentTemplateVersionOutput
);
export var UpdateServiceTemplateVersion = op(
  n0,
  _USTV,
  0,
  () => UpdateServiceTemplateVersionInput,
  () => UpdateServiceTemplateVersionOutput
);
