// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CCM,
  _CCMI,
  _CCMO,
  _CDI,
  _CDIL,
  _CDo,
  _CDS,
  _CDSL,
  _CDSo,
  _CML,
  _CMLo,
  _CMS,
  _D,
  _F,
  _FCP,
  _Fi,
  _FL,
  _h,
  _I,
  _K,
  _LCM,
  _LCMI,
  _LCMO,
  _LDARA,
  _LDERN,
  _LUA,
  _MA,
  _MI,
  _N,
  _NT,
  _P,
  _S,
  _SD,
  _SM,
  _SS,
  _SSL,
  _SSt,
  _ST,
  _STt,
  _T,
  _Ta,
  _TV,
  _V,
  n0,
} from "./schemas_0";
import { TagsMap } from "./schemas_5_Configuration";

/* eslint no-var: 0 */

export var ConfigurationDefinitionInput = struct(n0, _CDI, 0, [_T, _P, _TV, _LDERN, _LDARA], [0, 128 | 0, 0, 0, 0]);
export var ConfigurationDefinitionSummary = struct(n0, _CDS, 0, [_I, _T, _TV, _FCP], [0, 0, 0, 128 | 0]);
export var ConfigurationManagerSummary = struct(
  n0,
  _CMS,
  0,
  [_MA, _D, _N, _SS, _CDSo],
  [0, 0, 0, () => StatusSummariesList, () => ConfigurationDefinitionSummariesList]
);
export var CreateConfigurationManagerInput = struct(
  n0,
  _CCMI,
  0,
  [_N, _D, _CDo, _Ta],
  [0, 0, () => ConfigurationDefinitionsInputList, [() => TagsMap, 0]]
);
export var CreateConfigurationManagerOutput = struct(n0, _CCMO, 0, [_MA], [0]);
export var Filter = struct(n0, _F, 0, [_K, _V], [0, 64 | 0]);
export var ListConfigurationManagersInput = struct(n0, _LCMI, 0, [_ST, _MI, _Fi], [0, 1, () => FiltersList]);
export var ListConfigurationManagersOutput = struct(n0, _LCMO, 0, [_CML, _NT], [() => ConfigurationManagerList, 0]);
export var StatusSummary = struct(n0, _SSt, 0, [_STt, _S, _SM, _LUA, _SD], [0, 0, 0, 5, 128 | 0]);
export var Unit = "unit" as const;

export var ConfigurationDefinitionsInputList = list(n0, _CDIL, 0, () => ConfigurationDefinitionInput);
export var ConfigurationDefinitionSummariesList = list(n0, _CDSL, 0, () => ConfigurationDefinitionSummary);
export var ConfigurationManagerList = list(n0, _CMLo, 0, () => ConfigurationManagerSummary);
export var FiltersList = list(n0, _FL, 0, () => Filter);
export var FilterValues = 64 | 0;

export var StatusSummariesList = list(n0, _SSL, 0, () => StatusSummary);
export var ConfigurationParametersMap = 128 | 0;

export var StatusDetails = 128 | 0;

export var CreateConfigurationManager = op(
  n0,
  _CCM,
  {
    [_h]: ["POST", "/configurationManager", 200],
  },
  () => CreateConfigurationManagerInput,
  () => CreateConfigurationManagerOutput
);
export var ListConfigurationManagers = op(
  n0,
  _LCM,
  {
    [_h]: ["POST", "/listConfigurationManagers", 200],
  },
  () => ListConfigurationManagersInput,
  () => ListConfigurationManagersOutput
);
