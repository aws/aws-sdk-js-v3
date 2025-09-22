// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cA,
  _cAom,
  _cN,
  _com,
  _cRA,
  _CSL,
  _CSo,
  _d,
  _dep,
  _dN,
  _DS,
  _dS,
  _DSL,
  _dSM,
  _eACI,
  _eACn,
  _EACS,
  _EACSL,
  _eAI,
  _eN,
  _env,
  _ESL,
  _ESn,
  _eT,
  _ETF,
  _ETFL,
  _ETS,
  _ETSL,
  _ETVS,
  _ETVSL,
  _f,
  _i,
  _k,
  _lADI,
  _LC,
  _LCI,
  _LCO,
  _LD,
  _lDAA,
  _LDI,
  _LDO,
  _lDSA,
  _LE,
  _LEAC,
  _LEACI,
  _LEACO,
  _LEI,
  _LEO,
  _LET,
  _LETI,
  _LETO,
  _LETV,
  _LETVI,
  _LETVO,
  _lMA,
  _LS,
  _lSDI,
  _LSI,
  _LSIF,
  _LSIFL,
  _LSII,
  _LSIi,
  _LSIO,
  _LSO,
  _LST,
  _LSTI,
  _LSTO,
  _LSTV,
  _LSTVI,
  _LSTVO,
  _mAI,
  _mR,
  _mV,
  _mVi,
  _n,
  _nT,
  _pP,
  _pr,
  _pSRAr,
  _rA,
  _rAe,
  _rB,
  _rMV,
  _rV,
  _sB,
  _se,
  _sIe,
  _sIN,
  _SISe,
  _SISL,
  _sM,
  _sN,
  _sO,
  _SS,
  _SSL,
  _st,
  _sta,
  _STS,
  _STSL,
  _STVS,
  _STVSL,
  _tA,
  _te,
  _tMV,
  _tMVe,
  _tN,
  _tRCA,
  _tRT,
  _tVe,
  _v,
  Description,
  n0,
  StatusMessage,
} from "./schemas_0";
import { DisplayName } from "./schemas_8_Template";

/* eslint no-var: 0 */

export var ComponentSummary = struct(
  n0,
  _CSo,
  0,
  [_n, _ar, _eN, _sN, _sIN, _cA, _lMA, _lDAA, _lDSA, _dS, _dSM, _lADI, _lSDI],
  [0, 0, 0, 0, 0, 4, 4, 4, 4, 0, [() => StatusMessage, 0], 0, 0]
);
export var DeploymentSummary = struct(
  n0,
  _DS,
  0,
  [_i, _ar, _tA, _tRCA, _tRT, _cA, _lMA, _cAom, _eN, _sN, _sIN, _cN, _lADI, _lSDI, _dS],
  [0, 0, 0, 4, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0]
);
export var EnvironmentAccountConnectionSummary = struct(
  n0,
  _EACS,
  0,
  [_i, _ar, _mAI, _eAI, _rA, _eN, _rAe, _lMA, _st, _cRA],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, 0]
);
export var EnvironmentSummary = struct(
  n0,
  _ESn,
  0,
  [_n, _d, _cA, _lDAA, _lDSA, _ar, _tN, _tMV, _tMVe, _dS, _dSM, _pSRAr, _eACI, _eAI, _pr, _cRA, _lADI, _lSDI],
  [0, [() => Description, 0], 4, 4, 4, 0, 0, 0, 0, 0, [() => StatusMessage, 0], 0, 0, 0, 0, 0, 0, 0]
);
export var EnvironmentTemplateFilter = struct(n0, _ETF, 0, [_tN, _mV], [0, 0]);
export var EnvironmentTemplateSummary = struct(
  n0,
  _ETS,
  0,
  [_n, _ar, _cA, _lMA, _dN, _d, _rV, _pr],
  [0, 0, 4, 4, [() => DisplayName, 0], [() => Description, 0], 0, 0]
);
export var EnvironmentTemplateVersionSummary = struct(
  n0,
  _ETVS,
  0,
  [_tN, _mV, _mVi, _rMV, _st, _sM, _d, _ar, _cA, _lMA],
  [0, 0, 0, 0, 0, [() => StatusMessage, 0], [() => Description, 0], 0, 4, 4]
);
export var ListComponentsInput = struct(n0, _LCI, 0, [_nT, _eN, _sN, _sIN, _mR], [0, 0, 0, 0, 1]);
export var ListComponentsOutput = struct(n0, _LCO, 0, [_nT, _com], [0, [() => ComponentSummaryList, 0]]);
export var ListDeploymentsInput = struct(n0, _LDI, 0, [_nT, _eN, _sN, _sIN, _cN, _mR], [0, 0, 0, 0, 0, 1]);
export var ListDeploymentsOutput = struct(n0, _LDO, 0, [_nT, _dep], [0, () => DeploymentSummaryList]);
export var ListEnvironmentAccountConnectionsInput = struct(
  n0,
  _LEACI,
  0,
  [_rB, _eN, _sta, _nT, _mR],
  [0, 0, 64 | 0, 0, 1]
);
export var ListEnvironmentAccountConnectionsOutput = struct(
  n0,
  _LEACO,
  0,
  [_eACn, _nT],
  [() => EnvironmentAccountConnectionSummaryList, 0]
);
export var ListEnvironmentsInput = struct(n0, _LEI, 0, [_nT, _mR, _eT], [0, 1, () => EnvironmentTemplateFilterList]);
export var ListEnvironmentsOutput = struct(n0, _LEO, 0, [_nT, _env], [0, [() => EnvironmentSummaryList, 0]]);
export var ListEnvironmentTemplatesInput = struct(n0, _LETI, 0, [_nT, _mR], [0, 1]);
export var ListEnvironmentTemplatesOutput = struct(
  n0,
  _LETO,
  0,
  [_nT, _te],
  [0, [() => EnvironmentTemplateSummaryList, 0]]
);
export var ListEnvironmentTemplateVersionsInput = struct(n0, _LETVI, 0, [_nT, _mR, _tN, _mV], [0, 1, 0, 0]);
export var ListEnvironmentTemplateVersionsOutput = struct(
  n0,
  _LETVO,
  0,
  [_nT, _tVe],
  [0, [() => EnvironmentTemplateVersionSummaryList, 0]]
);
export var ListServiceInstancesFilter = struct(n0, _LSIF, 0, [_k, _v], [0, 0]);
export var ListServiceInstancesInput = struct(
  n0,
  _LSII,
  0,
  [_sN, _nT, _mR, _f, _sB, _sO],
  [0, 0, 1, () => ListServiceInstancesFilterList, 0, 0]
);
export var ListServiceInstancesOutput = struct(n0, _LSIO, 0, [_nT, _sIe], [0, [() => ServiceInstanceSummaryList, 0]]);
export var ListServicesInput = struct(n0, _LSI, 0, [_nT, _mR], [0, 1]);
export var ListServicesOutput = struct(n0, _LSO, 0, [_nT, _se], [0, [() => ServiceSummaryList, 0]]);
export var ListServiceTemplatesInput = struct(n0, _LSTI, 0, [_nT, _mR], [0, 1]);
export var ListServiceTemplatesOutput = struct(n0, _LSTO, 0, [_nT, _te], [0, [() => ServiceTemplateSummaryList, 0]]);
export var ListServiceTemplateVersionsInput = struct(n0, _LSTVI, 0, [_nT, _mR, _tN, _mV], [0, 1, 0, 0]);
export var ListServiceTemplateVersionsOutput = struct(
  n0,
  _LSTVO,
  0,
  [_nT, _tVe],
  [0, [() => ServiceTemplateVersionSummaryList, 0]]
);
export var ServiceInstanceSummary = struct(
  n0,
  _SISe,
  0,
  [_n, _ar, _cA, _lDAA, _lDSA, _sN, _eN, _tN, _tMV, _tMVe, _dS, _dSM, _lADI, _lSDI],
  [0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, [() => StatusMessage, 0], 0, 0]
);
export var ServiceSummary = struct(
  n0,
  _SS,
  0,
  [_n, _d, _ar, _tN, _cA, _lMA, _st, _sM],
  [0, [() => Description, 0], 0, 0, 4, 4, 0, [() => StatusMessage, 0]]
);
export var ServiceTemplateSummary = struct(
  n0,
  _STS,
  0,
  [_n, _ar, _cA, _lMA, _dN, _d, _rV, _pP],
  [0, 0, 4, 4, [() => DisplayName, 0], [() => Description, 0], 0, 0]
);
export var ServiceTemplateVersionSummary = struct(
  n0,
  _STVS,
  0,
  [_tN, _mV, _mVi, _rMV, _st, _sM, _d, _ar, _cA, _lMA],
  [0, 0, 0, 0, 0, [() => StatusMessage, 0], [() => Description, 0], 0, 4, 4]
);
export var ComponentSummaryList = list(n0, _CSL, 0, [() => ComponentSummary, 0]);
export var DeploymentSummaryList = list(n0, _DSL, 0, () => DeploymentSummary);
export var EnvironmentAccountConnectionStatusList = 64 | 0;

export var EnvironmentAccountConnectionSummaryList = list(n0, _EACSL, 0, () => EnvironmentAccountConnectionSummary);
export var EnvironmentSummaryList = list(n0, _ESL, 0, [() => EnvironmentSummary, 0]);
export var EnvironmentTemplateFilterList = list(n0, _ETFL, 0, () => EnvironmentTemplateFilter);
export var EnvironmentTemplateSummaryList = list(n0, _ETSL, 0, [() => EnvironmentTemplateSummary, 0]);
export var EnvironmentTemplateVersionSummaryList = list(n0, _ETVSL, 0, [() => EnvironmentTemplateVersionSummary, 0]);
export var ListServiceInstancesFilterList = list(n0, _LSIFL, 0, () => ListServiceInstancesFilter);
export var ServiceInstanceSummaryList = list(n0, _SISL, 0, [() => ServiceInstanceSummary, 0]);
export var ServiceSummaryList = list(n0, _SSL, 0, [() => ServiceSummary, 0]);
export var ServiceTemplateSummaryList = list(n0, _STSL, 0, [() => ServiceTemplateSummary, 0]);
export var ServiceTemplateVersionSummaryList = list(n0, _STVSL, 0, [() => ServiceTemplateVersionSummary, 0]);
export var ListComponents = op(
  n0,
  _LC,
  0,
  () => ListComponentsInput,
  () => ListComponentsOutput
);
export var ListDeployments = op(
  n0,
  _LD,
  0,
  () => ListDeploymentsInput,
  () => ListDeploymentsOutput
);
export var ListEnvironmentAccountConnections = op(
  n0,
  _LEAC,
  0,
  () => ListEnvironmentAccountConnectionsInput,
  () => ListEnvironmentAccountConnectionsOutput
);
export var ListEnvironments = op(
  n0,
  _LE,
  0,
  () => ListEnvironmentsInput,
  () => ListEnvironmentsOutput
);
export var ListEnvironmentTemplates = op(
  n0,
  _LET,
  0,
  () => ListEnvironmentTemplatesInput,
  () => ListEnvironmentTemplatesOutput
);
export var ListEnvironmentTemplateVersions = op(
  n0,
  _LETV,
  0,
  () => ListEnvironmentTemplateVersionsInput,
  () => ListEnvironmentTemplateVersionsOutput
);
export var ListServiceInstances = op(
  n0,
  _LSIi,
  0,
  () => ListServiceInstancesInput,
  () => ListServiceInstancesOutput
);
export var ListServices = op(
  n0,
  _LS,
  0,
  () => ListServicesInput,
  () => ListServicesOutput
);
export var ListServiceTemplates = op(
  n0,
  _LST,
  0,
  () => ListServiceTemplatesInput,
  () => ListServiceTemplatesOutput
);
export var ListServiceTemplateVersions = op(
  n0,
  _LSTV,
  0,
  () => ListServiceTemplateVersionsInput,
  () => ListServiceTemplateVersionsOutput
);
