// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aAI,
  _aAR,
  _au,
  _bV,
  _cA,
  _CAP,
  _CAPL,
  _cB,
  _CEA,
  _CEB,
  _CEBI,
  _CEBO,
  _CEI,
  _CEO,
  _CEP,
  _CEPI,
  _CEPO,
  _CEr,
  _CP,
  _CPL,
  _De,
  _de,
  _dI,
  _dIe,
  _dIo,
  _dO,
  _DP,
  _dP,
  _dS,
  _dT,
  _dVe,
  _eA,
  _eAI,
  _EAL,
  _eAR,
  _eBI,
  _eBIn,
  _eCI,
  _ePI,
  _ePIn,
  _eTM,
  _fRa,
  _fT,
  _GEB,
  _GEBI,
  _GEBO,
  _GEe,
  _GEI,
  _GEO,
  _GEP,
  _GEPI,
  _GEPO,
  _gT,
  _ht,
  _i,
  _id,
  _iDC,
  _iE,
  _iO,
  _iUS,
  _k,
  _kN,
  _lD,
  _mes,
  _n,
  _par,
  _pI,
  _pIr,
  _pP,
  _pR,
  _pro,
  _R,
  _RL,
  _s,
  _sTM,
  _ty,
  _uA,
  _UEB,
  _UEBI,
  _UEBO,
  _UEI,
  _UEO,
  _UEP,
  _UEp,
  _UEPI,
  _UEPO,
  _uP,
  _v,
  Description,
  n0,
} from "./schemas_0";
import { EnvironmentName, EnvironmentProfileName } from "./schemas_5_Environment";
import { ProvisioningProperties } from "./schemas_27_Environment";
import { EnvironmentConfigurationId } from "./schemas_65_Environment";
import { EnvironmentParametersList } from "./schemas_68_Environment";
import { EnvironmentError } from "./schemas_69_Project";

/* eslint no-var: 0 */

export var ConfigurableActionParameter = struct(n0, _CAP, 0, [_k, _v], [0, 0]);
export var ConfigurableEnvironmentAction = struct(
  n0,
  _CEA,
  0,
  [_ty, _au, _par],
  [0, 0, () => ConfigurableActionParameterList]
);
export var CreateEnvironmentBlueprintInput = struct(
  n0,
  _CEBI,
  0,
  [_dI, _n, _de, _pP, _uP],
  [[0, 1], 0, [() => Description, 0], () => ProvisioningProperties, [() => CustomParameterList, 0]]
);
export var CreateEnvironmentBlueprintOutput = struct(
  n0,
  _CEBO,
  0,
  [_id, _n, _de, _pro, _pP, _dP, _uP, _gT, _cA, _uA],
  [
    0,
    0,
    [() => Description, 0],
    0,
    () => ProvisioningProperties,
    () => DeploymentProperties,
    [() => CustomParameterList, 0],
    64 | 0,
    5,
    5,
  ]
);
export var CreateEnvironmentInput = struct(
  n0,
  _CEI,
  0,
  [_pIr, _dI, _de, _n, _ePI, _uP, _gT, _eAI, _eAR, _eBI, _dO, _eCI],
  [0, [0, 1], 0, 0, 0, () => EnvironmentParametersList, 64 | 0, 0, 0, 0, 1, 0]
);
export var CreateEnvironmentOutput = struct(
  n0,
  _CEO,
  0,
  [_pI, _id, _dIo, _cB, _cA, _uA, _n, _de, _ePIn, _aAI, _aAR, _pro, _pR, _s, _eA, _gT, _uP, _lD, _pP, _dP, _eBIn, _eCI],
  [
    0,
    0,
    0,
    0,
    5,
    5,
    [() => EnvironmentName, 0],
    [() => Description, 0],
    0,
    0,
    0,
    0,
    () => ResourceList,
    0,
    () => EnvironmentActionList,
    64 | 0,
    [() => CustomParameterList, 0],
    () => Deployment,
    () => ProvisioningProperties,
    () => DeploymentProperties,
    0,
    [() => EnvironmentConfigurationId, 0],
  ]
);
export var CreateEnvironmentProfileInput = struct(
  n0,
  _CEPI,
  0,
  [_dI, _n, _de, _eBI, _pIr, _uP, _aAI, _aAR],
  [[0, 1], [() => EnvironmentProfileName, 0], [() => Description, 0], 0, 0, () => EnvironmentParametersList, 0, 0]
);
export var CreateEnvironmentProfileOutput = struct(
  n0,
  _CEPO,
  0,
  [_id, _dIo, _aAI, _aAR, _cB, _cA, _uA, _n, _de, _eBIn, _pI, _uP],
  [0, 0, 0, 0, 0, 5, 5, [() => EnvironmentProfileName, 0], [() => Description, 0], 0, 0, [() => CustomParameterList, 0]]
);
export var CustomParameter = struct(
  n0,
  _CP,
  0,
  [_kN, _de, _fT, _dVe, _iE, _iO, _iUS],
  [0, [() => Description, 0], 0, 0, 2, 2, 2]
);
export var Deployment = struct(
  n0,
  _De,
  0,
  [_dIe, _dT, _dS, _fRa, _mes, _iDC],
  [0, 0, 0, () => EnvironmentError, 64 | 0, 2]
);
export var DeploymentProperties = struct(n0, _DP, 0, [_sTM, _eTM], [1, 1]);
export var GetEnvironmentBlueprintInput = struct(
  n0,
  _GEBI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetEnvironmentBlueprintOutput = struct(
  n0,
  _GEBO,
  0,
  [_id, _n, _de, _pro, _pP, _dP, _uP, _gT, _cA, _uA],
  [
    0,
    0,
    [() => Description, 0],
    0,
    () => ProvisioningProperties,
    () => DeploymentProperties,
    [() => CustomParameterList, 0],
    64 | 0,
    5,
    5,
  ]
);
export var GetEnvironmentInput = struct(
  n0,
  _GEI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetEnvironmentOutput = struct(
  n0,
  _GEO,
  0,
  [_pI, _id, _dIo, _cB, _cA, _uA, _n, _de, _ePIn, _aAI, _aAR, _pro, _pR, _s, _eA, _gT, _uP, _lD, _pP, _dP, _eBIn, _eCI],
  [
    0,
    0,
    0,
    0,
    5,
    5,
    [() => EnvironmentName, 0],
    [() => Description, 0],
    0,
    0,
    0,
    0,
    () => ResourceList,
    0,
    () => EnvironmentActionList,
    64 | 0,
    [() => CustomParameterList, 0],
    () => Deployment,
    () => ProvisioningProperties,
    () => DeploymentProperties,
    0,
    [() => EnvironmentConfigurationId, 0],
  ]
);
export var GetEnvironmentProfileInput = struct(
  n0,
  _GEPI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetEnvironmentProfileOutput = struct(
  n0,
  _GEPO,
  0,
  [_id, _dIo, _aAI, _aAR, _cB, _cA, _uA, _n, _de, _eBIn, _pI, _uP],
  [0, 0, 0, 0, 0, 5, 5, [() => EnvironmentProfileName, 0], [() => Description, 0], 0, 0, [() => CustomParameterList, 0]]
);
export var Resource = struct(n0, _R, 0, [_pro, _n, _v, _ty], [0, 0, 0, 0]);
export var UpdateEnvironmentBlueprintInput = struct(
  n0,
  _UEBI,
  0,
  [_dI, _i, _de, _pP, _uP],
  [[0, 1], [0, 1], 0, () => ProvisioningProperties, [() => CustomParameterList, 0]]
);
export var UpdateEnvironmentBlueprintOutput = struct(
  n0,
  _UEBO,
  0,
  [_id, _n, _de, _pro, _pP, _dP, _uP, _gT, _cA, _uA],
  [
    0,
    0,
    [() => Description, 0],
    0,
    () => ProvisioningProperties,
    () => DeploymentProperties,
    [() => CustomParameterList, 0],
    64 | 0,
    5,
    5,
  ]
);
export var UpdateEnvironmentInput = struct(
  n0,
  _UEI,
  0,
  [_dI, _i, _n, _de, _gT, _bV, _uP],
  [[0, 1], [0, 1], 0, 0, 64 | 0, 0, () => EnvironmentParametersList]
);
export var UpdateEnvironmentOutput = struct(
  n0,
  _UEO,
  0,
  [_pI, _id, _dIo, _cB, _cA, _uA, _n, _de, _ePIn, _aAI, _aAR, _pro, _pR, _s, _eA, _gT, _uP, _lD, _pP, _dP, _eBIn, _eCI],
  [
    0,
    0,
    0,
    0,
    5,
    5,
    [() => EnvironmentName, 0],
    [() => Description, 0],
    0,
    0,
    0,
    0,
    () => ResourceList,
    0,
    () => EnvironmentActionList,
    64 | 0,
    [() => CustomParameterList, 0],
    () => Deployment,
    () => ProvisioningProperties,
    () => DeploymentProperties,
    0,
    [() => EnvironmentConfigurationId, 0],
  ]
);
export var UpdateEnvironmentProfileInput = struct(
  n0,
  _UEPI,
  0,
  [_dI, _i, _n, _de, _uP, _aAI, _aAR],
  [[0, 1], [0, 1], [() => EnvironmentProfileName, 0], 0, () => EnvironmentParametersList, 0, 0]
);
export var UpdateEnvironmentProfileOutput = struct(
  n0,
  _UEPO,
  0,
  [_id, _dIo, _aAI, _aAR, _cB, _cA, _uA, _n, _de, _eBIn, _pI, _uP],
  [0, 0, 0, 0, 0, 5, 5, [() => EnvironmentProfileName, 0], [() => Description, 0], 0, 0, [() => CustomParameterList, 0]]
);
export var ConfigurableActionParameterList = list(n0, _CAPL, 0, () => ConfigurableActionParameter);
export var CustomParameterList = list(n0, _CPL, 0, [() => CustomParameter, 0]);
export var DeploymentMessagesList = 64 | 0;

export var EnvironmentActionList = list(n0, _EAL, 0, () => ConfigurableEnvironmentAction);
export var ResourceList = list(n0, _RL, 0, () => Resource);
export var CreateEnvironment = op(
  n0,
  _CEr,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/environments", 201],
  },
  () => CreateEnvironmentInput,
  () => CreateEnvironmentOutput
);
export var CreateEnvironmentBlueprint = op(
  n0,
  _CEB,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/environment-blueprints", 201],
  },
  () => CreateEnvironmentBlueprintInput,
  () => CreateEnvironmentBlueprintOutput
);
export var CreateEnvironmentProfile = op(
  n0,
  _CEP,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/environment-profiles", 201],
  },
  () => CreateEnvironmentProfileInput,
  () => CreateEnvironmentProfileOutput
);
export var GetEnvironment = op(
  n0,
  _GEe,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/environments/{identifier}", 200],
  },
  () => GetEnvironmentInput,
  () => GetEnvironmentOutput
);
export var GetEnvironmentBlueprint = op(
  n0,
  _GEB,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/environment-blueprints/{identifier}", 200],
  },
  () => GetEnvironmentBlueprintInput,
  () => GetEnvironmentBlueprintOutput
);
export var GetEnvironmentProfile = op(
  n0,
  _GEP,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/environment-profiles/{identifier}", 200],
  },
  () => GetEnvironmentProfileInput,
  () => GetEnvironmentProfileOutput
);
export var UpdateEnvironment = op(
  n0,
  _UEp,
  {
    [_ht]: ["PATCH", "/v2/domains/{domainIdentifier}/environments/{identifier}", 200],
  },
  () => UpdateEnvironmentInput,
  () => UpdateEnvironmentOutput
);
export var UpdateEnvironmentBlueprint = op(
  n0,
  _UEB,
  {
    [_ht]: ["PATCH", "/v2/domains/{domainIdentifier}/environment-blueprints/{identifier}", 200],
  },
  () => UpdateEnvironmentBlueprintInput,
  () => UpdateEnvironmentBlueprintOutput
);
export var UpdateEnvironmentProfile = op(
  n0,
  _UEP,
  {
    [_ht]: ["PATCH", "/v2/domains/{domainIdentifier}/environment-profiles/{identifier}", 200],
  },
  () => UpdateEnvironmentProfileInput,
  () => UpdateEnvironmentProfileOutput
);
