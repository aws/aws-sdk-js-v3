// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AL,
  _D,
  _EWRI,
  _FR,
  _GPPO,
  _GPPOI,
  _GPPOO,
  _IT,
  _K,
  _NPPEWR,
  _NPPEWRI,
  _NPPEWRO,
  _NPT,
  _NUPPEWR,
  _NUPPEWRI,
  _NUPPEWRO,
  _OK,
  _OKu,
  _Ou,
  _OV,
  _PPIr,
  _PPN,
  _PS,
  _PTa,
  _RIe,
  _RIes,
  _RO,
  _ROe,
  _S,
  _UT,
  _UTRI,
  _V,
  _WT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EngineWorkflowResourceIdentifier = struct(n0, _EWRI, 0, [_UT], [() => UniqueTagResourceIdentifier]);
export var GetProvisionedProductOutputsInput = struct(
  n0,
  _GPPOI,
  0,
  [_AL, _PPIr, _PPN, _OK, _PS, _PTa],
  [0, 0, 0, 64 | 0, 1, 0]
);
export var GetProvisionedProductOutputsOutput = struct(n0, _GPPOO, 0, [_Ou, _NPT], [() => RecordOutputs, 0]);
export var NotifyProvisionProductEngineWorkflowResultInput = struct(
  n0,
  _NPPEWRI,
  0,
  [_WT, _RIe, _S, _FR, _RIes, _Ou, _IT],
  [0, 0, 0, 0, () => EngineWorkflowResourceIdentifier, () => RecordOutputs, [0, 4]]
);
export var NotifyProvisionProductEngineWorkflowResultOutput = struct(n0, _NPPEWRO, 0, [], []);
export var NotifyUpdateProvisionedProductEngineWorkflowResultInput = struct(
  n0,
  _NUPPEWRI,
  0,
  [_WT, _RIe, _S, _FR, _Ou, _IT],
  [0, 0, 0, 0, () => RecordOutputs, [0, 4]]
);
export var NotifyUpdateProvisionedProductEngineWorkflowResultOutput = struct(n0, _NUPPEWRO, 0, [], []);
export var RecordOutput = struct(n0, _ROe, 0, [_OKu, _OV, _D], [0, 0, 0]);
export var UniqueTagResourceIdentifier = struct(n0, _UTRI, 0, [_K, _V], [0, 0]);
export var OutputKeys = 64 | 0;

export var RecordOutputs = list(n0, _RO, 0, () => RecordOutput);
export var GetProvisionedProductOutputs = op(
  n0,
  _GPPO,
  0,
  () => GetProvisionedProductOutputsInput,
  () => GetProvisionedProductOutputsOutput
);
export var NotifyProvisionProductEngineWorkflowResult = op(
  n0,
  _NPPEWR,
  0,
  () => NotifyProvisionProductEngineWorkflowResultInput,
  () => NotifyProvisionProductEngineWorkflowResultOutput
);
export var NotifyUpdateProvisionedProductEngineWorkflowResult = op(
  n0,
  _NUPPEWR,
  0,
  () => NotifyUpdateProvisionedProductEngineWorkflowResultInput,
  () => NotifyUpdateProvisionedProductEngineWorkflowResultOutput
);
