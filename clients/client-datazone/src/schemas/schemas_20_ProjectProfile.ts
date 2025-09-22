// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _cA,
  _dI,
  _dIo,
  _EBC,
  _EBCI,
  _eBI,
  _eBIn,
  _eRn,
  _eRPB,
  _GEBC,
  _GEBCI,
  _GEBCO,
  _gP,
  _hQ,
  _ht,
  _it,
  _LEBC,
  _LEBCI,
  _LEBCO,
  _LFC,
  _lFC,
  _lRESL,
  _lRR,
  _mARA,
  _mRa,
  _nT,
  _PCL,
  _PCr,
  _pCro,
  _PEBC,
  _PEBCI,
  _PEBCO,
  _pRA,
  _rPe,
  _RPM,
  _uA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EnvironmentBlueprintConfigurationItem = struct(
  n0,
  _EBCI,
  0,
  [_dIo, _eBIn, _pRA, _eRPB, _mARA, _eRn, _rPe, _cA, _uA, _pCro],
  [0, 0, 0, 0, 0, 64 | 0, map(n0, _RPM, 0, 0, 128 | 0), 5, 5, () => ProvisioningConfigurationList]
);
export var GetEnvironmentBlueprintConfigurationInput = struct(
  n0,
  _GEBCI,
  0,
  [_dI, _eBI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetEnvironmentBlueprintConfigurationOutput = struct(
  n0,
  _GEBCO,
  0,
  [_dIo, _eBIn, _pRA, _eRPB, _mARA, _eRn, _rPe, _cA, _uA, _pCro],
  [0, 0, 0, 0, 0, 64 | 0, map(n0, _RPM, 0, 0, 128 | 0), 5, 5, () => ProvisioningConfigurationList]
);
export var LakeFormationConfiguration = struct(n0, _LFC, 0, [_lRR, _lRESL], [0, 64 | 0]);
export var ListEnvironmentBlueprintConfigurationsInput = struct(
  n0,
  _LEBCI,
  0,
  [_dI, _mRa, _nT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListEnvironmentBlueprintConfigurationsOutput = struct(
  n0,
  _LEBCO,
  0,
  [_it, _nT],
  [() => EnvironmentBlueprintConfigurations, 0]
);
export var PutEnvironmentBlueprintConfigurationInput = struct(
  n0,
  _PEBCI,
  0,
  [_dI, _eBI, _pRA, _mARA, _eRPB, _eRn, _rPe, _gP, _pCro],
  [[0, 1], [0, 1], 0, 0, 0, 64 | 0, map(n0, _RPM, 0, 0, 128 | 0), 128 | 0, () => ProvisioningConfigurationList]
);
export var PutEnvironmentBlueprintConfigurationOutput = struct(
  n0,
  _PEBCO,
  0,
  [_dIo, _eBIn, _pRA, _eRPB, _mARA, _eRn, _rPe, _cA, _uA, _pCro],
  [0, 0, 0, 0, 0, 64 | 0, map(n0, _RPM, 0, 0, 128 | 0), 5, 5, () => ProvisioningConfigurationList]
);
export var EnabledRegionList = 64 | 0;

export var EnvironmentBlueprintConfigurations = list(n0, _EBC, 0, () => EnvironmentBlueprintConfigurationItem);
export var ProvisioningConfigurationList = list(n0, _PCL, 0, () => ProvisioningConfiguration);
export var S3LocationList = 64 | 0;

export var GlobalParameterMap = 128 | 0;

export var RegionalParameter = 128 | 0;

export var RegionalParameterMap = map(n0, _RPM, 0, 0, 128 | 0);
export var ProvisioningConfiguration = uni(n0, _PCr, 0, [_lFC], [() => LakeFormationConfiguration]);
export var GetEnvironmentBlueprintConfiguration = op(
  n0,
  _GEBC,
  {
    [_ht]: [
      "GET",
      "/v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}",
      200,
    ],
  },
  () => GetEnvironmentBlueprintConfigurationInput,
  () => GetEnvironmentBlueprintConfigurationOutput
);
export var ListEnvironmentBlueprintConfigurations = op(
  n0,
  _LEBC,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/environment-blueprint-configurations", 200],
  },
  () => ListEnvironmentBlueprintConfigurationsInput,
  () => ListEnvironmentBlueprintConfigurationsOutput
);
export var PutEnvironmentBlueprintConfiguration = op(
  n0,
  _PEBC,
  {
    [_ht]: [
      "PUT",
      "/v2/domains/{domainIdentifier}/environment-blueprint-configurations/{environmentBlueprintIdentifier}",
      200,
    ],
  },
  () => PutEnvironmentBlueprintConfigurationInput,
  () => PutEnvironmentBlueprintConfigurationOutput
);
