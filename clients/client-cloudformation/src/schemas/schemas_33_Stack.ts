// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CSR,
  _CSRI,
  _CSRO,
  _D,
  _ESC,
  _ETC,
  _ETCI,
  _ETCO,
  _P,
  _RM,
  _SD,
  _SDt,
  _SN,
  _SRI,
  _TB,
  _TURL,
  _U,
  n0,
} from "./schemas_0";
import { ResourceMapping } from "./schemas_2_Stack";
import { _Parameters } from "./schemas_16_Stack";

/* eslint no-var: 0 */

export var CreateStackRefactorInput = struct(
  n0,
  _CSRI,
  0,
  [_D, _ESC, _RM, _SD],
  [0, 2, () => ResourceMappings, () => StackDefinitions]
);
export var CreateStackRefactorOutput = struct(n0, _CSRO, 0, [_SRI], [0]);
export var EstimateTemplateCostInput = struct(n0, _ETCI, 0, [_TB, _TURL, _P], [0, 0, () => _Parameters]);
export var EstimateTemplateCostOutput = struct(n0, _ETCO, 0, [_U], [0]);
export var StackDefinition = struct(n0, _SDt, 0, [_SN, _TB, _TURL], [0, 0, 0]);
export var ResourceMappings = list(n0, _RM, 0, () => ResourceMapping);
export var StackDefinitions = list(n0, _SD, 0, () => StackDefinition);
export var CreateStackRefactor = op(
  n0,
  _CSR,
  0,
  () => CreateStackRefactorInput,
  () => CreateStackRefactorOutput
);
export var EstimateTemplateCost = op(
  n0,
  _ETC,
  0,
  () => EstimateTemplateCostInput,
  () => EstimateTemplateCostOutput
);
