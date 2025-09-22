// smithy-typescript generated code
import { list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _AA,
  _aAI,
  _aAIP,
  _aAw,
  _aPc,
  _aRw,
  _cA,
  _cB,
  _cP,
  _CPI,
  _CPO,
  _CPPI,
  _CPPO,
  _CPPr,
  _CPr,
  _de,
  _dI,
  _dIo,
  _dM,
  _dO,
  _DPP,
  _DPPI,
  _DPPO,
  _dUI,
  _dUIo,
  _eBIn,
  _EC,
  _eC,
  _ECL,
  _ECN,
  _eCNn,
  _ECP,
  _ECPD,
  _ECPL,
  _ECUP,
  _ECUPL,
  _EDD,
  _eDD,
  _EFR,
  _eFR,
  _EFRL,
  _eInvi,
  _eP,
  _ERA,
  _eRAn,
  _fR,
  _GP,
  _GPI,
  _GPO,
  _GPPe,
  _GPPI,
  _GPPO,
  _gT,
  _hQ,
  _ht,
  _i,
  _id,
  _iE,
  _it,
  _LPP,
  _LPPI,
  _LPPO,
  _lUA,
  _mRa,
  _n,
  _nT,
  _oDS,
  _pO,
  _pPI,
  _PPN,
  _PPS,
  _PPSr,
  _pPV,
  _pS,
  _Re,
  _rN,
  _rNP,
  _rPes,
  _s,
  _sAPI,
  _sB,
  _sO,
  _sPs,
  _uP,
  _UPI,
  _UPO,
  _UPP,
  _UPp,
  _UPPI,
  _UPPO,
  _v,
  Description,
  n0,
  ProjectName,
} from "./schemas_0";
import { FailureReasons } from "./schemas_19_Project";
import { EnvironmentConfigurationId } from "./schemas_65_Environment";
import { EnvironmentParametersList } from "./schemas_68_Environment";
import { EnvironmentError } from "./schemas_69_Project";

/* eslint no-var: 0 */

export var EnvironmentConfigurationName = sim(n0, _ECN, 0, 8);
export var ProjectProfileName = sim(n0, _PPN, 0, 8);
export var CreateProjectInput = struct(
  n0,
  _CPI,
  0,
  [_dI, _n, _de, _gT, _dUI, _pPI, _uP],
  [
    [0, 1],
    [() => ProjectName, 0],
    [() => Description, 0],
    64 | 0,
    0,
    0,
    [() => EnvironmentConfigurationUserParametersList, 0],
  ]
);
export var CreateProjectOutput = struct(
  n0,
  _CPO,
  0,
  [_dIo, _id, _n, _de, _pS, _fR, _cB, _cA, _lUA, _gT, _dUI, _pPI, _uP, _eDD],
  [
    0,
    0,
    [() => ProjectName, 0],
    [() => Description, 0],
    0,
    () => FailureReasons,
    0,
    5,
    5,
    64 | 0,
    0,
    0,
    [() => EnvironmentConfigurationUserParametersList, 0],
    () => EnvironmentDeploymentDetails,
  ]
);
export var CreateProjectProfileInput = struct(
  n0,
  _CPPI,
  0,
  [_dI, _n, _de, _s, _eC, _dUIo],
  [[0, 1], [() => ProjectProfileName, 0], [() => Description, 0], 0, [() => EnvironmentConfigurationsList, 0], 0]
);
export var CreateProjectProfileOutput = struct(
  n0,
  _CPPO,
  0,
  [_dIo, _id, _n, _de, _s, _eC, _cB, _cA, _lUA, _dUI],
  [0, 0, [() => ProjectProfileName, 0], [() => Description, 0], 0, [() => EnvironmentConfigurationsList, 0], 0, 5, 5, 0]
);
export var DeleteProjectProfileInput = struct(
  n0,
  _DPPI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteProjectProfileOutput = struct(n0, _DPPO, 0, [], []);
export var EnvironmentConfiguration = struct(
  n0,
  _EC,
  0,
  [_n, _id, _eBIn, _de, _dM, _cP, _aAw, _aPc, _aRw, _dO],
  [
    [() => EnvironmentConfigurationName, 0],
    [() => EnvironmentConfigurationId, 0],
    0,
    [() => Description, 0],
    0,
    () => EnvironmentConfigurationParametersDetails,
    () => AwsAccount,
    64 | 0,
    () => Region,
    1,
  ]
);
export var EnvironmentConfigurationParameter = struct(n0, _ECP, 0, [_n, _v, _iE], [0, 0, 2]);
export var EnvironmentConfigurationParametersDetails = struct(
  n0,
  _ECPD,
  0,
  [_sPs, _pO, _rPes],
  [0, () => EnvironmentConfigurationParametersList, () => EnvironmentConfigurationParametersList]
);
export var EnvironmentConfigurationUserParameter = struct(
  n0,
  _ECUP,
  0,
  [_eInvi, _eRAn, _eCNn, _eP],
  [0, () => EnvironmentResolvedAccount, [() => EnvironmentConfigurationName, 0], () => EnvironmentParametersList]
);
export var EnvironmentDeploymentDetails = struct(n0, _EDD, 0, [_oDS, _eFR], [0, () => EnvironmentFailureReasons]);
export var EnvironmentResolvedAccount = struct(n0, _ERA, 0, [_aAI, _rN, _sAPI], [0, 0, 0]);
export var GetProjectInput = struct(
  n0,
  _GPI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetProjectOutput = struct(
  n0,
  _GPO,
  0,
  [_dIo, _id, _n, _de, _pS, _fR, _cB, _cA, _lUA, _gT, _dUI, _pPI, _uP, _eDD],
  [
    0,
    0,
    [() => ProjectName, 0],
    [() => Description, 0],
    0,
    () => FailureReasons,
    0,
    5,
    5,
    64 | 0,
    0,
    0,
    [() => EnvironmentConfigurationUserParametersList, 0],
    () => EnvironmentDeploymentDetails,
  ]
);
export var GetProjectProfileInput = struct(
  n0,
  _GPPI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetProjectProfileOutput = struct(
  n0,
  _GPPO,
  0,
  [_dIo, _id, _n, _de, _s, _eC, _cB, _cA, _lUA, _dUI],
  [0, 0, [() => ProjectProfileName, 0], [() => Description, 0], 0, [() => EnvironmentConfigurationsList, 0], 0, 5, 5, 0]
);
export var ListProjectProfilesInput = struct(
  n0,
  _LPPI,
  0,
  [_dI, _n, _sB, _sO, _nT, _mRa],
  [
    [0, 1],
    [
      () => ProjectProfileName,
      {
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _sB,
      },
    ],
    [
      0,
      {
        [_hQ]: _sO,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListProjectProfilesOutput = struct(n0, _LPPO, 0, [_it, _nT], [[() => ProjectProfileSummaries, 0], 0]);
export var ProjectProfileSummary = struct(
  n0,
  _PPS,
  0,
  [_dIo, _id, _n, _de, _s, _cB, _cA, _lUA, _dUI],
  [0, 0, [() => ProjectProfileName, 0], [() => Description, 0], 0, 0, 5, 5, 0]
);
export var UpdateProjectInput = struct(
  n0,
  _UPI,
  0,
  [_dI, _i, _n, _de, _gT, _dUI, _eDD, _uP, _pPV],
  [
    [0, 1],
    [0, 1],
    [() => ProjectName, 0],
    [() => Description, 0],
    64 | 0,
    0,
    () => EnvironmentDeploymentDetails,
    [() => EnvironmentConfigurationUserParametersList, 0],
    0,
  ]
);
export var UpdateProjectOutput = struct(
  n0,
  _UPO,
  0,
  [_dIo, _id, _n, _de, _pS, _fR, _cB, _cA, _lUA, _gT, _dUI, _pPI, _uP, _eDD],
  [
    0,
    0,
    [() => ProjectName, 0],
    [() => Description, 0],
    0,
    () => FailureReasons,
    0,
    5,
    5,
    64 | 0,
    0,
    0,
    [() => EnvironmentConfigurationUserParametersList, 0],
    () => EnvironmentDeploymentDetails,
  ]
);
export var UpdateProjectProfileInput = struct(
  n0,
  _UPPI,
  0,
  [_dI, _i, _n, _de, _s, _eC, _dUIo],
  [
    [0, 1],
    [0, 1],
    [() => ProjectProfileName, 0],
    [() => Description, 0],
    0,
    [() => EnvironmentConfigurationsList, 0],
    0,
  ]
);
export var UpdateProjectProfileOutput = struct(
  n0,
  _UPPO,
  0,
  [_dIo, _id, _n, _de, _s, _eC, _cB, _cA, _lUA, _dUI],
  [0, 0, [() => ProjectProfileName, 0], [() => Description, 0], 0, [() => EnvironmentConfigurationsList, 0], 0, 5, 5, 0]
);
export var AccountPoolList = 64 | 0;

export var EnvironmentConfigurationParametersList = list(n0, _ECPL, 0, () => EnvironmentConfigurationParameter);
export var EnvironmentConfigurationsList = list(n0, _ECL, 0, [() => EnvironmentConfiguration, 0]);
export var EnvironmentConfigurationUserParametersList = list(n0, _ECUPL, 0, [
  () => EnvironmentConfigurationUserParameter,
  0,
]);
export var EnvironmentFailureReasonsList = list(n0, _EFRL, 0, () => EnvironmentError);
export var ProjectProfileSummaries = list(n0, _PPSr, 0, [() => ProjectProfileSummary, 0]);
export var EnvironmentFailureReasons = map(n0, _EFR, 0, 0, () => EnvironmentFailureReasonsList);
export var AwsAccount = uni(n0, _AA, 0, [_aAI, _aAIP], [0, 0]);
export var Region = uni(n0, _Re, 0, [_rN, _rNP], [0, 0]);
export var CreateProject = op(
  n0,
  _CPr,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/projects", 201],
  },
  () => CreateProjectInput,
  () => CreateProjectOutput
);
export var CreateProjectProfile = op(
  n0,
  _CPPr,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/project-profiles", 201],
  },
  () => CreateProjectProfileInput,
  () => CreateProjectProfileOutput
);
export var DeleteProjectProfile = op(
  n0,
  _DPP,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/project-profiles/{identifier}", 204],
  },
  () => DeleteProjectProfileInput,
  () => DeleteProjectProfileOutput
);
export var GetProject = op(
  n0,
  _GP,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/projects/{identifier}", 200],
  },
  () => GetProjectInput,
  () => GetProjectOutput
);
export var GetProjectProfile = op(
  n0,
  _GPPe,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/project-profiles/{identifier}", 200],
  },
  () => GetProjectProfileInput,
  () => GetProjectProfileOutput
);
export var ListProjectProfiles = op(
  n0,
  _LPP,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/project-profiles", 200],
  },
  () => ListProjectProfilesInput,
  () => ListProjectProfilesOutput
);
export var UpdateProject = op(
  n0,
  _UPp,
  {
    [_ht]: ["PATCH", "/v2/domains/{domainIdentifier}/projects/{identifier}", 200],
  },
  () => UpdateProjectInput,
  () => UpdateProjectOutput
);
export var UpdateProjectProfile = op(
  n0,
  _UPP,
  {
    [_ht]: ["PATCH", "/v2/domains/{domainIdentifier}/project-profiles/{identifier}", 200],
  },
  () => UpdateProjectProfileInput,
  () => UpdateProjectProfileOutput
);
