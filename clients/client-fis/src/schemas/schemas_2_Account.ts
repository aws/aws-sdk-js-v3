// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aIc,
  _cT,
  _CTAC,
  _CTACR,
  _CTACRr,
  _d,
  _DTAC,
  _DTACR,
  _DTACRe,
  _eI,
  _ETAC,
  _ETACL,
  _ETACS,
  _eTI,
  _GETAC,
  _GETACR,
  _GETACRe,
  _GTAC,
  _GTACR,
  _GTACRe,
  _h,
  _hQ,
  _LETAC,
  _LETACR,
  _LETACRi,
  _LTAC,
  _LTACR,
  _LTACRi,
  _mR,
  _nT,
  _rA,
  _TAC,
  _tAC,
  _tACa,
  _TACL,
  _TACS,
  _UTAC,
  _UTACR,
  _UTACRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTargetAccountConfigurationRequest = struct(
  n0,
  _CTACR,
  0,
  [_cT, _eTI, _aIc, _rA, _d],
  [[0, 4], [0, 1], [0, 1], 0, 0]
);
export var CreateTargetAccountConfigurationResponse = struct(
  n0,
  _CTACRr,
  0,
  [_tAC],
  [() => TargetAccountConfiguration]
);
export var DeleteTargetAccountConfigurationRequest = struct(
  n0,
  _DTACR,
  0,
  [_eTI, _aIc],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteTargetAccountConfigurationResponse = struct(
  n0,
  _DTACRe,
  0,
  [_tAC],
  [() => TargetAccountConfiguration]
);
export var ExperimentTargetAccountConfiguration = struct(n0, _ETAC, 0, [_rA, _aIc, _d], [0, 0, 0]);
export var ExperimentTargetAccountConfigurationSummary = struct(n0, _ETACS, 0, [_rA, _aIc, _d], [0, 0, 0]);
export var GetExperimentTargetAccountConfigurationRequest = struct(
  n0,
  _GETACR,
  0,
  [_eI, _aIc],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetExperimentTargetAccountConfigurationResponse = struct(
  n0,
  _GETACRe,
  0,
  [_tAC],
  [() => ExperimentTargetAccountConfiguration]
);
export var GetTargetAccountConfigurationRequest = struct(
  n0,
  _GTACR,
  0,
  [_eTI, _aIc],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetTargetAccountConfigurationResponse = struct(n0, _GTACRe, 0, [_tAC], [() => TargetAccountConfiguration]);
export var ListExperimentTargetAccountConfigurationsRequest = struct(
  n0,
  _LETACR,
  0,
  [_eI, _nT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListExperimentTargetAccountConfigurationsResponse = struct(
  n0,
  _LETACRi,
  0,
  [_tACa, _nT],
  [() => ExperimentTargetAccountConfigurationList, 0]
);
export var ListTargetAccountConfigurationsRequest = struct(
  n0,
  _LTACR,
  0,
  [_eTI, _mR, _nT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
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
export var ListTargetAccountConfigurationsResponse = struct(
  n0,
  _LTACRi,
  0,
  [_tACa, _nT],
  [() => TargetAccountConfigurationList, 0]
);
export var TargetAccountConfiguration = struct(n0, _TAC, 0, [_rA, _aIc, _d], [0, 0, 0]);
export var TargetAccountConfigurationSummary = struct(n0, _TACS, 0, [_rA, _aIc, _d], [0, 0, 0]);
export var UpdateTargetAccountConfigurationRequest = struct(
  n0,
  _UTACR,
  0,
  [_eTI, _aIc, _rA, _d],
  [[0, 1], [0, 1], 0, 0]
);
export var UpdateTargetAccountConfigurationResponse = struct(
  n0,
  _UTACRp,
  0,
  [_tAC],
  [() => TargetAccountConfiguration]
);
export var ExperimentTargetAccountConfigurationList = list(
  n0,
  _ETACL,
  0,
  () => ExperimentTargetAccountConfigurationSummary
);
export var TargetAccountConfigurationList = list(n0, _TACL, 0, () => TargetAccountConfigurationSummary);
export var CreateTargetAccountConfiguration = op(
  n0,
  _CTAC,
  {
    [_h]: ["POST", "/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}", 200],
  },
  () => CreateTargetAccountConfigurationRequest,
  () => CreateTargetAccountConfigurationResponse
);
export var DeleteTargetAccountConfiguration = op(
  n0,
  _DTAC,
  {
    [_h]: ["DELETE", "/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}", 200],
  },
  () => DeleteTargetAccountConfigurationRequest,
  () => DeleteTargetAccountConfigurationResponse
);
export var GetExperimentTargetAccountConfiguration = op(
  n0,
  _GETAC,
  {
    [_h]: ["GET", "/experiments/{experimentId}/targetAccountConfigurations/{accountId}", 200],
  },
  () => GetExperimentTargetAccountConfigurationRequest,
  () => GetExperimentTargetAccountConfigurationResponse
);
export var GetTargetAccountConfiguration = op(
  n0,
  _GTAC,
  {
    [_h]: ["GET", "/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}", 200],
  },
  () => GetTargetAccountConfigurationRequest,
  () => GetTargetAccountConfigurationResponse
);
export var ListExperimentTargetAccountConfigurations = op(
  n0,
  _LETAC,
  {
    [_h]: ["GET", "/experiments/{experimentId}/targetAccountConfigurations", 200],
  },
  () => ListExperimentTargetAccountConfigurationsRequest,
  () => ListExperimentTargetAccountConfigurationsResponse
);
export var ListTargetAccountConfigurations = op(
  n0,
  _LTAC,
  {
    [_h]: ["GET", "/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations", 200],
  },
  () => ListTargetAccountConfigurationsRequest,
  () => ListTargetAccountConfigurationsResponse
);
export var UpdateTargetAccountConfiguration = op(
  n0,
  _UTAC,
  {
    [_h]: ["PATCH", "/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}", 200],
  },
  () => UpdateTargetAccountConfigurationRequest,
  () => UpdateTargetAccountConfigurationResponse
);
