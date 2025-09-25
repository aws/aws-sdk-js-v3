// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _b,
  _cN,
  _dI,
  _di,
  _eN,
  _id,
  _LCOI,
  _LCOi,
  _LCOO,
  _LCPR,
  _LCPRI,
  _LCPRO,
  _LEOI,
  _LEOi,
  _LEOO,
  _LEPR,
  _LEPRI,
  _LEPRO,
  _LRSD,
  _LRSDI,
  _LRSDO,
  _LSIOI,
  _LSIOi,
  _LSIOO,
  _LSIPR,
  _LSIPRI,
  _LSIPRO,
  _LSPO,
  _LSPOI,
  _LSPOO,
  _LSPPR,
  _LSPPRI,
  _LSPPRO,
  _n,
  _nT,
  _o,
  _pa,
  _pE,
  _PR,
  _PRL,
  _pRr,
  _rN,
  _rP,
  _RSD,
  _RSDL,
  _sD,
  _sIN,
  _sN,
  _sTy,
  _ta,
  n0,
} from "./schemas_0";
import { OutputsList } from "./schemas_12_Outputs";

/* eslint no-var: 0 */

export var ListComponentOutputsInput = struct(n0, _LCOI, 0, [_cN, _nT, _dI], [0, 0, 0]);
export var ListComponentOutputsOutput = struct(n0, _LCOO, 0, [_nT, _o], [0, [() => OutputsList, 0]]);
export var ListComponentProvisionedResourcesInput = struct(n0, _LCPRI, 0, [_cN, _nT], [0, 0]);
export var ListComponentProvisionedResourcesOutput = struct(
  n0,
  _LCPRO,
  0,
  [_nT, _pRr],
  [0, () => ProvisionedResourceList]
);
export var ListEnvironmentOutputsInput = struct(n0, _LEOI, 0, [_eN, _nT, _dI], [0, 0, 0]);
export var ListEnvironmentOutputsOutput = struct(n0, _LEOO, 0, [_nT, _o], [0, [() => OutputsList, 0]]);
export var ListEnvironmentProvisionedResourcesInput = struct(n0, _LEPRI, 0, [_eN, _nT], [0, 0]);
export var ListEnvironmentProvisionedResourcesOutput = struct(
  n0,
  _LEPRO,
  0,
  [_nT, _pRr],
  [0, () => ProvisionedResourceList]
);
export var ListRepositorySyncDefinitionsInput = struct(n0, _LRSDI, 0, [_rN, _rP, _sTy, _nT], [0, 0, 0, 0]);
export var ListRepositorySyncDefinitionsOutput = struct(
  n0,
  _LRSDO,
  0,
  [_nT, _sD],
  [0, () => RepositorySyncDefinitionList]
);
export var ListServiceInstanceOutputsInput = struct(n0, _LSIOI, 0, [_sIN, _sN, _nT, _dI], [0, 0, 0, 0]);
export var ListServiceInstanceOutputsOutput = struct(n0, _LSIOO, 0, [_nT, _o], [0, [() => OutputsList, 0]]);
export var ListServiceInstanceProvisionedResourcesInput = struct(n0, _LSIPRI, 0, [_sN, _sIN, _nT], [0, 0, 0]);
export var ListServiceInstanceProvisionedResourcesOutput = struct(
  n0,
  _LSIPRO,
  0,
  [_nT, _pRr],
  [0, () => ProvisionedResourceList]
);
export var ListServicePipelineOutputsInput = struct(n0, _LSPOI, 0, [_sN, _nT, _dI], [0, 0, 0]);
export var ListServicePipelineOutputsOutput = struct(n0, _LSPOO, 0, [_nT, _o], [0, [() => OutputsList, 0]]);
export var ListServicePipelineProvisionedResourcesInput = struct(n0, _LSPPRI, 0, [_sN, _nT], [0, 0]);
export var ListServicePipelineProvisionedResourcesOutput = struct(
  n0,
  _LSPPRO,
  0,
  [_nT, _pRr],
  [0, () => ProvisionedResourceList]
);
export var ProvisionedResource = struct(n0, _PR, 0, [_n, _id, _pE], [0, 0, 0]);
export var RepositorySyncDefinition = struct(n0, _RSD, 0, [_ta, _pa, _b, _di], [0, 0, 0, 0]);
export var ProvisionedResourceList = list(n0, _PRL, 0, () => ProvisionedResource);
export var RepositorySyncDefinitionList = list(n0, _RSDL, 0, () => RepositorySyncDefinition);
export var ListComponentOutputs = op(
  n0,
  _LCOi,
  0,
  () => ListComponentOutputsInput,
  () => ListComponentOutputsOutput
);
export var ListComponentProvisionedResources = op(
  n0,
  _LCPR,
  0,
  () => ListComponentProvisionedResourcesInput,
  () => ListComponentProvisionedResourcesOutput
);
export var ListEnvironmentOutputs = op(
  n0,
  _LEOi,
  0,
  () => ListEnvironmentOutputsInput,
  () => ListEnvironmentOutputsOutput
);
export var ListEnvironmentProvisionedResources = op(
  n0,
  _LEPR,
  0,
  () => ListEnvironmentProvisionedResourcesInput,
  () => ListEnvironmentProvisionedResourcesOutput
);
export var ListRepositorySyncDefinitions = op(
  n0,
  _LRSD,
  0,
  () => ListRepositorySyncDefinitionsInput,
  () => ListRepositorySyncDefinitionsOutput
);
export var ListServiceInstanceOutputs = op(
  n0,
  _LSIOi,
  0,
  () => ListServiceInstanceOutputsInput,
  () => ListServiceInstanceOutputsOutput
);
export var ListServiceInstanceProvisionedResources = op(
  n0,
  _LSIPR,
  0,
  () => ListServiceInstanceProvisionedResourcesInput,
  () => ListServiceInstanceProvisionedResourcesOutput
);
export var ListServicePipelineOutputs = op(
  n0,
  _LSPO,
  0,
  () => ListServicePipelineOutputsInput,
  () => ListServicePipelineOutputsOutput
);
export var ListServicePipelineProvisionedResources = op(
  n0,
  _LSPPR,
  0,
  () => ListServicePipelineProvisionedResourcesInput,
  () => ListServicePipelineProvisionedResourcesOutput
);
