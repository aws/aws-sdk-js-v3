// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import {
  _A,
  _c,
  _CA,
  _CD,
  _CDIo,
  _CDL,
  _CDo,
  _CI,
  _CL,
  _CS,
  _D,
  _DCM,
  _DCMI,
  _e,
  _FCP,
  _Fi,
  _GC,
  _GCI,
  _GCM,
  _GCMI,
  _GCMO,
  _GCO,
  _h,
  _hE,
  _hQ,
  _I,
  _K,
  _LC,
  _LCI,
  _LCO,
  _LDARA,
  _LDERN,
  _LMA,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MA,
  _MI,
  _N,
  _NT,
  _P,
  _R,
  _RA,
  _RNFE,
  _SS,
  _ST,
  _T,
  _Ta,
  _TE,
  _TK,
  _tK,
  _TR,
  _TRI,
  _TV,
  _UCD,
  _UCDI,
  _UCM,
  _UCMI,
  _UR,
  _URI,
  _Va,
  n0,
} from "./schemas_0";
import { FiltersList, StatusSummariesList, Unit } from "./schemas_1_Configuration";
import { TagsMap } from "./schemas_5_Configuration";

/* eslint no-var: 0 */

export var ConfigurationDefinition = struct(n0, _CD, 0, [_T, _P, _TV, _LDERN, _LDARA, _I], [0, 128 | 0, 0, 0, 0, 0]);
export var ConfigurationSummary = struct(
  n0,
  _CS,
  0,
  [_I, _MA, _CDIo, _T, _TV, _R, _A, _CA, _FCP, _SS],
  [0, 0, 0, 0, 0, 0, 0, 5, 128 | 0, () => StatusSummariesList]
);
export var DeleteConfigurationManagerInput = struct(n0, _DCMI, 0, [_MA], [[0, 1]]);
export var GetConfigurationInput = struct(n0, _GCI, 0, [_CI], [[0, 1]]);
export var GetConfigurationManagerInput = struct(n0, _GCMI, 0, [_MA], [[0, 1]]);
export var GetConfigurationManagerOutput = struct(
  n0,
  _GCMO,
  0,
  [_MA, _D, _N, _CA, _LMA, _SS, _CDo, _Ta],
  [0, 0, 0, 5, 5, () => StatusSummariesList, () => ConfigurationDefinitionsList, [() => TagsMap, 0]]
);
export var GetConfigurationOutput = struct(
  n0,
  _GCO,
  0,
  [_I, _MA, _CDIo, _T, _TV, _A, _R, _CA, _LMA, _SS, _P],
  [0, 0, 0, 0, 0, 0, 0, 5, 5, () => StatusSummariesList, 128 | 0]
);
export var ListConfigurationsInput = struct(n0, _LCI, 0, [_ST, _MI, _Fi, _MA, _CDIo], [0, 1, () => FiltersList, 0, 0]);
export var ListConfigurationsOutput = struct(n0, _LCO, 0, [_CL, _NT], [() => ConfigurationsList, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [[() => Tags, 0]]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var TagEntry = struct(n0, _TE, 8, [_K, _Va], [0, 0]);
export var TagResourceInput = struct(
  n0,
  _TRI,
  0,
  [_RA, _Ta],
  [
    [0, 1],
    [() => TagsMap, 0],
  ]
);
export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_RA, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UpdateConfigurationDefinitionInput = struct(
  n0,
  _UCDI,
  0,
  [_MA, _I, _TV, _P, _LDERN, _LDARA],
  [[0, 1], [0, 1], 0, 128 | 0, 0, 0]
);
export var UpdateConfigurationManagerInput = struct(n0, _UCMI, 0, [_MA, _N, _D], [[0, 1], 0, 0]);
export var ConfigurationDefinitionsList = list(n0, _CDL, 0, () => ConfigurationDefinition);
export var ConfigurationsList = list(n0, _CL, 0, () => ConfigurationSummary);
export var TagKeys = 64 | 0;

export var Tags = list(n0, _Ta, 8, [() => TagEntry, 0]);
export var DeleteConfigurationManager = op(
  n0,
  _DCM,
  {
    [_h]: ["DELETE", "/configurationManager/{ManagerArn}", 200],
  },
  () => DeleteConfigurationManagerInput,
  () => Unit
);
export var GetConfiguration = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/getConfiguration/{ConfigurationId}", 200],
  },
  () => GetConfigurationInput,
  () => GetConfigurationOutput
);
export var GetConfigurationManager = op(
  n0,
  _GCM,
  {
    [_h]: ["GET", "/configurationManager/{ManagerArn}", 200],
  },
  () => GetConfigurationManagerInput,
  () => GetConfigurationManagerOutput
);
export var ListConfigurations = op(
  n0,
  _LC,
  {
    [_h]: ["POST", "/listConfigurations", 200],
  },
  () => ListConfigurationsInput,
  () => ListConfigurationsOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["PUT", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceInput,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 200],
  },
  () => UntagResourceInput,
  () => Unit
);
export var UpdateConfigurationDefinition = op(
  n0,
  _UCD,
  {
    [_h]: ["PUT", "/configurationDefinition/{ManagerArn}/{Id}", 200],
  },
  () => UpdateConfigurationDefinitionInput,
  () => Unit
);
export var UpdateConfigurationManager = op(
  n0,
  _UCM,
  {
    [_h]: ["PUT", "/configurationManager/{ManagerArn}", 200],
  },
  () => UpdateConfigurationManagerInput,
  () => Unit
);
