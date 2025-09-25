// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aAI,
  _ATSc,
  _ATScc,
  _bN,
  _CDE,
  _CDER,
  _CDERr,
  _cI,
  _cO,
  _cT,
  _cTo,
  _cTr,
  _d,
  _da,
  _de,
  _dEI,
  _DERS,
  _DERSe,
  _DES,
  _DESL,
  _DESS,
  _DESSL,
  _dN,
  _eC,
  _eCr,
  _ELE,
  _ELEv,
  _eN,
  _EP,
  _eS,
  _eT,
  _eTn,
  _eTv,
  _eTve,
  _F,
  _f,
  _Fi,
  _GDE,
  _GDER,
  _GDERe,
  _hCI,
  _hQ,
  _ht,
  _I,
  _i,
  _Id,
  _id,
  _iT,
  _it,
  _iTM,
  _k,
  _LAT,
  _LATR,
  _LATRi,
  _LDE,
  _LDER,
  _LDERi,
  _LDES,
  _LDESR,
  _LDESRi,
  _LEL,
  _LELR,
  _LELRi,
  _LP,
  _LPR,
  _LPRi,
  _LSRB,
  _LSRBI,
  _LSRBIi,
  _LSRBR,
  _LSRBRi,
  _LSRI,
  _LSRIi,
  _LSRis,
  _LSRR,
  _LSRRi,
  _lUT,
  _LW,
  _LWR,
  _LWRi,
  _LWRis,
  _LWRR,
  _LWRRi,
  _mR,
  _n,
  _nT,
  _oT,
  _p,
  _PI,
  _pI,
  _pIr,
  _pIri,
  _PLF,
  _PLFr,
  _pN,
  _PS,
  _pS,
  _PSC,
  _PSr,
  _PSro,
  _r,
  _re,
  _RI,
  _rI,
  _RIe,
  _rM,
  _rN,
  _rP,
  _rPe,
  _ru,
  _sB,
  _sBN,
  _sIA,
  _sIGB,
  _sN,
  _sR,
  _sRN,
  _sRt,
  _st,
  _sTt,
  _sTta,
  _uA,
  _UI,
  _uI,
  _uN,
  _uT,
  _va,
  _vCN,
  _WDS,
  _wI,
  _wN,
  _WRS,
  _WRSC,
  _WRSCL,
  _WRSo,
  _WS,
  _WSC,
  _WSCL,
  _WSo,
  n0,
} from "./schemas_0";
import { IdeConfigurationList } from "./schemas_4_Dev";
import { WorkflowRunStatusReasons } from "./schemas_15_Workflow";

/* eslint no-var: 0 */

export var AccessTokenSummary = struct(n0, _ATSc, 0, [_i, _n, _eT], [0, 0, 5]);
export var CreateDevEnvironmentRequest = struct(
  n0,
  _CDER,
  0,
  [_sN, _pN, _r, _cT, _a, _id, _iT, _iTM, _pS, _vCN],
  [
    [0, 1],
    [0, 1],
    () => RepositoriesInput,
    0,
    0,
    () => IdeConfigurationList,
    0,
    1,
    () => PersistentStorageConfiguration,
    0,
  ]
);
export var CreateDevEnvironmentResponse = struct(n0, _CDERr, 0, [_sN, _pN, _i, _vCN], [0, 0, 0, 0]);
export var DevEnvironmentRepositorySummary = struct(n0, _DERS, 0, [_rN, _bN], [0, 0]);
export var DevEnvironmentSessionSummary = struct(n0, _DESS, 0, [_sN, _pN, _dEI, _sTt, _i], [0, 0, 0, 5, 0]);
export var DevEnvironmentSummary = struct(
  n0,
  _DES,
  0,
  [_sN, _pN, _i, _lUT, _cI, _st, _sR, _r, _a, _id, _iT, _iTM, _pS, _vCN],
  [0, 0, 0, 5, 0, 0, 0, () => DevEnvironmentRepositorySummaries, 0, () => Ides, 0, 1, () => PersistentStorage, 0]
);
export var EventLogEntry = struct(
  n0,
  _ELE,
  0,
  [_i, _eN, _eTv, _eC, _eS, _eTve, _oT, _uI, _pI, _rI, _rP, _rPe, _eCr, _sIA, _uA],
  [
    0,
    0,
    0,
    0,
    0,
    5,
    0,
    () => UserIdentity,
    () => ProjectInformation,
    0,
    () => EventPayload,
    () => EventPayload,
    0,
    0,
    0,
  ]
);
export var EventPayload = struct(n0, _EP, 0, [_cTo, _da], [0, 0]);
export var Filter = struct(n0, _F, 0, [_k, _va, _cO], [0, 64 | 0, 0]);
export var GetDevEnvironmentRequest = struct(
  n0,
  _GDER,
  0,
  [_sN, _pN, _i],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetDevEnvironmentResponse = struct(
  n0,
  _GDERe,
  0,
  [_sN, _pN, _i, _lUT, _cI, _st, _sR, _r, _a, _id, _iT, _iTM, _pS, _vCN],
  [0, 0, 0, 5, 0, 0, 0, () => DevEnvironmentRepositorySummaries, 0, () => Ides, 0, 1, () => PersistentStorage, 0]
);
export var Ide = struct(n0, _I, 0, [_ru, _n], [0, 0]);
export var ListAccessTokensRequest = struct(n0, _LATR, 0, [_mR, _nT], [1, 0]);
export var ListAccessTokensResponse = struct(n0, _LATRi, 0, [_it, _nT], [() => AccessTokenSummaries, 0]);
export var ListDevEnvironmentSessionsRequest = struct(
  n0,
  _LDESR,
  0,
  [_sN, _pN, _dEI, _nT, _mR],
  [[0, 1], [0, 1], [0, 1], 0, 1]
);
export var ListDevEnvironmentSessionsResponse = struct(
  n0,
  _LDESRi,
  0,
  [_it, _nT],
  [() => DevEnvironmentSessionsSummaryList, 0]
);
export var ListDevEnvironmentsRequest = struct(
  n0,
  _LDER,
  0,
  [_sN, _pN, _f, _nT, _mR],
  [[0, 1], 0, () => Filters, 0, 1]
);
export var ListDevEnvironmentsResponse = struct(n0, _LDERi, 0, [_it, _nT], [() => DevEnvironmentSummaryList, 0]);
export var ListEventLogsRequest = struct(n0, _LELR, 0, [_sN, _sTta, _eTn, _eN, _nT, _mR], [[0, 1], 5, 5, 0, 0, 1]);
export var ListEventLogsResponse = struct(n0, _LELRi, 0, [_nT, _it], [0, () => EventLogEntries]);
export var ListProjectsRequest = struct(n0, _LPR, 0, [_sN, _nT, _mR, _f], [[0, 1], 0, 1, () => ProjectListFilters]);
export var ListProjectsResponse = struct(n0, _LPRi, 0, [_nT, _it], [0, () => ProjectSummaries]);
export var ListSourceRepositoriesItem = struct(n0, _LSRI, 0, [_i, _n, _d, _lUT, _cTr], [0, 0, 0, 5, 5]);
export var ListSourceRepositoriesRequest = struct(n0, _LSRR, 0, [_sN, _pN, _nT, _mR], [[0, 1], [0, 1], 0, 1]);
export var ListSourceRepositoriesResponse = struct(n0, _LSRRi, 0, [_it, _nT], [() => ListSourceRepositoriesItems, 0]);
export var ListSourceRepositoryBranchesItem = struct(n0, _LSRBI, 0, [_re, _n, _lUT, _hCI], [0, 0, 5, 0]);
export var ListSourceRepositoryBranchesRequest = struct(
  n0,
  _LSRBR,
  0,
  [_sN, _pN, _sRN, _nT, _mR],
  [[0, 1], [0, 1], [0, 1], 0, 1]
);
export var ListSourceRepositoryBranchesResponse = struct(
  n0,
  _LSRBRi,
  0,
  [_nT, _it],
  [0, () => ListSourceRepositoryBranchesItems]
);
export var ListWorkflowRunsRequest = struct(
  n0,
  _LWRR,
  0,
  [_sN, _wI, _pN, _nT, _mR, _sB],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _wI,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    () => WorkflowRunSortCriteriaList,
  ]
);
export var ListWorkflowRunsResponse = struct(n0, _LWRRi, 0, [_nT, _it], [0, () => WorkflowRunSummaries]);
export var ListWorkflowsRequest = struct(
  n0,
  _LWR,
  0,
  [_sN, _pN, _nT, _mR, _sB],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    () => WorkflowSortCriteriaList,
  ]
);
export var ListWorkflowsResponse = struct(n0, _LWRi, 0, [_nT, _it], [0, () => WorkflowSummaries]);
export var PersistentStorage = struct(n0, _PS, 0, [_sIGB], [1]);
export var PersistentStorageConfiguration = struct(n0, _PSC, 0, [_sIGB], [1]);
export var ProjectInformation = struct(n0, _PI, 0, [_n, _pIr], [0, 0]);
export var ProjectListFilter = struct(n0, _PLF, 0, [_k, _va, _cO], [0, 64 | 0, 0]);
export var ProjectSummary = struct(n0, _PSr, 0, [_n, _dN, _d], [0, 0, 0]);
export var RepositoryInput = struct(n0, _RI, 0, [_rN, _bN], [0, 0]);
export var UserIdentity = struct(n0, _UI, 0, [_uT, _pIri, _uN, _aAI], [0, 0, 0, 0]);
export var WorkflowDefinitionSummary = struct(n0, _WDS, 0, [_p], [0]);
export var WorkflowRunSortCriteria = struct(n0, _WRSC, 0, [], []);
export var WorkflowRunSummary = struct(
  n0,
  _WRS,
  0,
  [_i, _wI, _wN, _st, _sRt, _sTta, _eTn, _lUT],
  [0, 0, 0, 0, () => WorkflowRunStatusReasons, 5, 5, 5]
);
export var WorkflowSortCriteria = struct(n0, _WSC, 0, [], []);
export var WorkflowSummary = struct(
  n0,
  _WS,
  0,
  [_i, _n, _sRN, _sBN, _de, _cTr, _lUT, _rM, _st],
  [0, 0, 0, 0, () => WorkflowDefinitionSummary, 5, 5, 0, 0]
);
export var AccessTokenSummaries = list(n0, _ATScc, 0, () => AccessTokenSummary);
export var DevEnvironmentRepositorySummaries = list(n0, _DERSe, 0, () => DevEnvironmentRepositorySummary);
export var DevEnvironmentSessionsSummaryList = list(n0, _DESSL, 0, () => DevEnvironmentSessionSummary);
export var DevEnvironmentSummaryList = list(n0, _DESL, 0, () => DevEnvironmentSummary);
export var EventLogEntries = list(n0, _ELEv, 0, () => EventLogEntry);
export var Filters = list(n0, _Fi, 0, () => Filter);
export var Ides = list(n0, _Id, 0, () => Ide);
export var ListSourceRepositoriesItems = list(n0, _LSRIi, 0, () => ListSourceRepositoriesItem);
export var ListSourceRepositoryBranchesItems = list(n0, _LSRBIi, 0, () => ListSourceRepositoryBranchesItem);
export var ProjectListFilters = list(n0, _PLFr, 0, () => ProjectListFilter);
export var ProjectSummaries = list(n0, _PSro, 0, () => ProjectSummary);
export var RepositoriesInput = list(n0, _RIe, 0, () => RepositoryInput);
export var StringList = 64 | 0;

export var WorkflowRunSortCriteriaList = list(n0, _WRSCL, 0, () => WorkflowRunSortCriteria);
export var WorkflowRunSummaries = list(n0, _WRSo, 0, () => WorkflowRunSummary);
export var WorkflowSortCriteriaList = list(n0, _WSCL, 0, () => WorkflowSortCriteria);
export var WorkflowSummaries = list(n0, _WSo, 0, () => WorkflowSummary);
export var CreateDevEnvironment = op(
  n0,
  _CDE,
  {
    [_ht]: ["PUT", "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments", 201],
  },
  () => CreateDevEnvironmentRequest,
  () => CreateDevEnvironmentResponse
);
export var GetDevEnvironment = op(
  n0,
  _GDE,
  {
    [_ht]: ["GET", "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}", 200],
  },
  () => GetDevEnvironmentRequest,
  () => GetDevEnvironmentResponse
);
export var ListAccessTokens = op(
  n0,
  _LAT,
  {
    [_ht]: ["POST", "/v1/accessTokens", 200],
  },
  () => ListAccessTokensRequest,
  () => ListAccessTokensResponse
);
export var ListDevEnvironments = op(
  n0,
  _LDE,
  {
    [_ht]: ["POST", "/v1/spaces/{spaceName}/devEnvironments", 200],
  },
  () => ListDevEnvironmentsRequest,
  () => ListDevEnvironmentsResponse
);
export var ListDevEnvironmentSessions = op(
  n0,
  _LDES,
  {
    [_ht]: ["POST", "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{devEnvironmentId}/sessions", 200],
  },
  () => ListDevEnvironmentSessionsRequest,
  () => ListDevEnvironmentSessionsResponse
);
export var ListEventLogs = op(
  n0,
  _LEL,
  {
    [_ht]: ["POST", "/v1/spaces/{spaceName}/eventLogs", 200],
  },
  () => ListEventLogsRequest,
  () => ListEventLogsResponse
);
export var ListProjects = op(
  n0,
  _LP,
  {
    [_ht]: ["POST", "/v1/spaces/{spaceName}/projects", 200],
  },
  () => ListProjectsRequest,
  () => ListProjectsResponse
);
export var ListSourceRepositories = op(
  n0,
  _LSRis,
  {
    [_ht]: ["POST", "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories", 200],
  },
  () => ListSourceRepositoriesRequest,
  () => ListSourceRepositoriesResponse
);
export var ListSourceRepositoryBranches = op(
  n0,
  _LSRB,
  {
    [_ht]: [
      "POST",
      "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/branches",
      200,
    ],
  },
  () => ListSourceRepositoryBranchesRequest,
  () => ListSourceRepositoryBranchesResponse
);
export var ListWorkflowRuns = op(
  n0,
  _LWRis,
  {
    [_ht]: ["POST", "/v1/spaces/{spaceName}/projects/{projectName}/workflowRuns", 200],
  },
  () => ListWorkflowRunsRequest,
  () => ListWorkflowRunsResponse
);
export var ListWorkflows = op(
  n0,
  _LW,
  {
    [_ht]: ["POST", "/v1/spaces/{spaceName}/projects/{projectName}/workflows", 200],
  },
  () => ListWorkflowsRequest,
  () => ListWorkflowsResponse
);
