// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _ar,
  _cA,
  _CETIr,
  _CETO,
  _CETr,
  _CST,
  _CSTI,
  _CSTO,
  _d,
  _DET,
  _DETI,
  _DETO,
  _DN,
  _dN,
  _DST,
  _DSTI,
  _DSTO,
  _eK,
  _ET,
  _eTn,
  _GET,
  _GETI,
  _GETO,
  _GST,
  _GSTI,
  _GSTO,
  _lMA,
  _n,
  _pP,
  _pr,
  _rV,
  _ST,
  _sTe,
  _t,
  _UET,
  _UETI,
  _UETO,
  _UST,
  _USTI,
  _USTO,
  Description,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_20_Create";

/* eslint no-var: 0 */

export var DisplayName = sim(n0, _DN, 0, 8);
export var CreateEnvironmentTemplateInput = struct(
  n0,
  _CETIr,
  0,
  [_n, _dN, _d, _eK, _pr, _t],
  [0, [() => DisplayName, 0], [() => Description, 0], 0, 0, () => TagList]
);
export var CreateEnvironmentTemplateOutput = struct(n0, _CETO, 0, [_eTn], [[() => EnvironmentTemplate, 0]]);
export var CreateServiceTemplateInput = struct(
  n0,
  _CSTI,
  0,
  [_n, _dN, _d, _eK, _pP, _t],
  [0, [() => DisplayName, 0], [() => Description, 0], 0, 0, () => TagList]
);
export var CreateServiceTemplateOutput = struct(n0, _CSTO, 0, [_sTe], [[() => ServiceTemplate, 0]]);
export var DeleteEnvironmentTemplateInput = struct(n0, _DETI, 0, [_n], [0]);
export var DeleteEnvironmentTemplateOutput = struct(n0, _DETO, 0, [_eTn], [[() => EnvironmentTemplate, 0]]);
export var DeleteServiceTemplateInput = struct(n0, _DSTI, 0, [_n], [0]);
export var DeleteServiceTemplateOutput = struct(n0, _DSTO, 0, [_sTe], [[() => ServiceTemplate, 0]]);
export var EnvironmentTemplate = struct(
  n0,
  _ET,
  0,
  [_n, _ar, _cA, _lMA, _dN, _d, _rV, _eK, _pr],
  [0, 0, 4, 4, [() => DisplayName, 0], [() => Description, 0], 0, 0, 0]
);
export var GetEnvironmentTemplateInput = struct(n0, _GETI, 0, [_n], [0]);
export var GetEnvironmentTemplateOutput = struct(n0, _GETO, 0, [_eTn], [[() => EnvironmentTemplate, 0]]);
export var GetServiceTemplateInput = struct(n0, _GSTI, 0, [_n], [0]);
export var GetServiceTemplateOutput = struct(n0, _GSTO, 0, [_sTe], [[() => ServiceTemplate, 0]]);
export var ServiceTemplate = struct(
  n0,
  _ST,
  0,
  [_n, _ar, _cA, _lMA, _dN, _d, _rV, _eK, _pP],
  [0, 0, 4, 4, [() => DisplayName, 0], [() => Description, 0], 0, 0, 0]
);
export var UpdateEnvironmentTemplateInput = struct(
  n0,
  _UETI,
  0,
  [_n, _dN, _d],
  [0, [() => DisplayName, 0], [() => Description, 0]]
);
export var UpdateEnvironmentTemplateOutput = struct(n0, _UETO, 0, [_eTn], [[() => EnvironmentTemplate, 0]]);
export var UpdateServiceTemplateInput = struct(
  n0,
  _USTI,
  0,
  [_n, _dN, _d],
  [0, [() => DisplayName, 0], [() => Description, 0]]
);
export var UpdateServiceTemplateOutput = struct(n0, _USTO, 0, [_sTe], [[() => ServiceTemplate, 0]]);
export var CreateEnvironmentTemplate = op(
  n0,
  _CETr,
  2,
  () => CreateEnvironmentTemplateInput,
  () => CreateEnvironmentTemplateOutput
);
export var CreateServiceTemplate = op(
  n0,
  _CST,
  2,
  () => CreateServiceTemplateInput,
  () => CreateServiceTemplateOutput
);
export var DeleteEnvironmentTemplate = op(
  n0,
  _DET,
  2,
  () => DeleteEnvironmentTemplateInput,
  () => DeleteEnvironmentTemplateOutput
);
export var DeleteServiceTemplate = op(
  n0,
  _DST,
  2,
  () => DeleteServiceTemplateInput,
  () => DeleteServiceTemplateOutput
);
export var GetEnvironmentTemplate = op(
  n0,
  _GET,
  0,
  () => GetEnvironmentTemplateInput,
  () => GetEnvironmentTemplateOutput
);
export var GetServiceTemplate = op(
  n0,
  _GST,
  0,
  () => GetServiceTemplateInput,
  () => GetServiceTemplateOutput
);
export var UpdateEnvironmentTemplate = op(
  n0,
  _UET,
  0,
  () => UpdateEnvironmentTemplateInput,
  () => UpdateEnvironmentTemplateOutput
);
export var UpdateServiceTemplate = op(
  n0,
  _UST,
  0,
  () => UpdateServiceTemplateInput,
  () => UpdateServiceTemplateOutput
);
