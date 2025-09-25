// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _CC,
  _CCI,
  _CCO,
  _co,
  _CSII,
  _CSIO,
  _CSIr,
  _cT,
  _d,
  _dT,
  _eN,
  _ma,
  _mT,
  _n,
  _s,
  _sI,
  _sIN,
  _sN,
  _sp,
  _sS,
  _t,
  _tF,
  _TMC,
  _tMV,
  _tMVe,
  _UC,
  _UCI,
  _UCO,
  _USII,
  _USIO,
  _USIp,
  Description,
  n0,
  SpecContents,
} from "./schemas_0";
import { Component } from "./schemas_4_Component";
import { TemplateFileContents } from "./schemas_15_Deployment";
import { TagList } from "./schemas_20_Create";
import { ServiceInstance } from "./schemas_23_Service";

/* eslint no-var: 0 */

export var TemplateManifestContents = sim(n0, _TMC, 0, {
  [_mT]: _a,
  [_s]: 1,
});
export var CreateComponentInput = struct(
  n0,
  _CCI,
  0,
  [_n, _d, _sN, _sIN, _eN, _tF, _ma, _sS, _t, _cT],
  [
    0,
    [() => Description, 0],
    0,
    0,
    0,
    [() => TemplateFileContents, 0],
    [() => TemplateManifestContents, 0],
    [() => SpecContents, 0],
    () => TagList,
    [0, 4],
  ]
);
export var CreateComponentOutput = struct(n0, _CCO, 0, [_co], [[() => Component, 0]]);
export var CreateServiceInstanceInput = struct(
  n0,
  _CSII,
  0,
  [_n, _sN, _sp, _tMV, _tMVe, _t, _cT],
  [0, 0, [() => SpecContents, 0], 0, 0, () => TagList, [0, 4]]
);
export var CreateServiceInstanceOutput = struct(n0, _CSIO, 0, [_sI], [[() => ServiceInstance, 0]]);
export var UpdateComponentInput = struct(
  n0,
  _UCI,
  0,
  [_n, _dT, _d, _sN, _sIN, _sS, _tF, _cT],
  [0, 0, [() => Description, 0], 0, 0, [() => SpecContents, 0], [() => TemplateFileContents, 0], [0, 4]]
);
export var UpdateComponentOutput = struct(n0, _UCO, 0, [_co], [[() => Component, 0]]);
export var UpdateServiceInstanceInput = struct(
  n0,
  _USII,
  0,
  [_n, _sN, _dT, _sp, _tMV, _tMVe, _cT],
  [0, 0, 0, [() => SpecContents, 0], 0, 0, [0, 4]]
);
export var UpdateServiceInstanceOutput = struct(n0, _USIO, 0, [_sI], [[() => ServiceInstance, 0]]);
export var CreateComponent = op(
  n0,
  _CC,
  2,
  () => CreateComponentInput,
  () => CreateComponentOutput
);
export var CreateServiceInstance = op(
  n0,
  _CSIr,
  2,
  () => CreateServiceInstanceInput,
  () => CreateServiceInstanceOutput
);
export var UpdateComponent = op(
  n0,
  _UC,
  0,
  () => UpdateComponentInput,
  () => UpdateComponentOutput
);
export var UpdateServiceInstance = op(
  n0,
  _USIp,
  0,
  () => UpdateServiceInstanceInput,
  () => UpdateServiceInstanceOutput
);
