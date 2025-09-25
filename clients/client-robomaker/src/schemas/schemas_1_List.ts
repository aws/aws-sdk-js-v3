// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _cRC,
  _dAC,
  _dC,
  _DJ,
  _dJ,
  _DJe,
  _F,
  _f,
  _fC,
  _fD,
  _Fi,
  _fi,
  _Fl,
  _Fle,
  _fR,
  _fRC,
  _fWC,
  _gJ,
  _h,
  _LDJ,
  _lDJ,
  _LDJR,
  _LDJRi,
  _lDS,
  _lDT,
  _LF,
  _LFR,
  _LFRi,
  _LR,
  _LRA,
  _LRAR,
  _LRARi,
  _LRR,
  _LRRi,
  _LSA,
  _LSAR,
  _LSARi,
  _LSJ,
  _LSJB,
  _LSJBR,
  _LSJBRi,
  _LSJR,
  _LSJRi,
  _lUA,
  _LW,
  _LWEJ,
  _LWEJR,
  _LWEJRi,
  _LWGJ,
  _LWGJR,
  _LWGJRi,
  _LWR,
  _LWRi,
  _LWT,
  _LWTR,
  _LWTRi,
  _mR,
  _n,
  _nT,
  _oL,
  _pRC,
  _RAS,
  _rAS,
  _RASo,
  _ro,
  _rSS,
  _s,
  _SAS,
  _sAS,
  _SASi,
  _SJBS,
  _sJBS,
  _SJBSi,
  _sJS,
  _sSS,
  _sWC,
  _te,
  _TS,
  _tS,
  _TSe,
  _v,
  _va,
  _vQ,
  _w,
  _wC,
  _WEJS,
  _wEJS,
  _WEJSo,
  _WGJS,
  _wGJS,
  _WGJSo,
  _WS,
  _wS,
  _WSo,
  n0,
} from "./schemas_0";
import { RobotSoftwareSuite, SimulationSoftwareSuite } from "./schemas_4_Application";
import { DeploymentApplicationConfigs, DeploymentConfig } from "./schemas_5_Job";
import { Robots } from "./schemas_6_Describe";
import { WorldCount } from "./schemas_7_Generation";
import { OutputLocation } from "./schemas_10_Job";
import { SimulationJobSummaries } from "./schemas_16_Simulation";

/* eslint no-var: 0 */

export var DeploymentJob = struct(
  n0,
  _DJ,
  0,
  [_a, _f, _s, _dAC, _dC, _fR, _fC, _cA],
  [0, 0, 0, () => DeploymentApplicationConfigs, () => DeploymentConfig, 0, 0, 4]
);
export var Filter = struct(n0, _F, 0, [_n, _va], [0, 64 | 0]);
export var Fleet = struct(n0, _Fl, 0, [_n, _a, _cA, _lDS, _lDJ, _lDT], [0, 0, 4, 0, 0, 4]);
export var ListDeploymentJobsRequest = struct(n0, _LDJR, 0, [_fi, _nT, _mR], [() => Filters, 0, 1]);
export var ListDeploymentJobsResponse = struct(n0, _LDJRi, 0, [_dJ, _nT], [() => DeploymentJobs, 0]);
export var ListFleetsRequest = struct(n0, _LFR, 0, [_nT, _mR, _fi], [0, 1, () => Filters]);
export var ListFleetsResponse = struct(n0, _LFRi, 0, [_fD, _nT], [() => Fleets, 0]);
export var ListRobotApplicationsRequest = struct(n0, _LRAR, 0, [_vQ, _nT, _mR, _fi], [0, 0, 1, () => Filters]);
export var ListRobotApplicationsResponse = struct(n0, _LRARi, 0, [_rAS, _nT], [() => RobotApplicationSummaries, 0]);
export var ListRobotsRequest = struct(n0, _LRR, 0, [_nT, _mR, _fi], [0, 1, () => Filters]);
export var ListRobotsResponse = struct(n0, _LRRi, 0, [_ro, _nT], [() => Robots, 0]);
export var ListSimulationApplicationsRequest = struct(n0, _LSAR, 0, [_vQ, _nT, _mR, _fi], [0, 0, 1, () => Filters]);
export var ListSimulationApplicationsResponse = struct(
  n0,
  _LSARi,
  0,
  [_sAS, _nT],
  [() => SimulationApplicationSummaries, 0]
);
export var ListSimulationJobBatchesRequest = struct(n0, _LSJBR, 0, [_nT, _mR, _fi], [0, 1, () => Filters]);
export var ListSimulationJobBatchesResponse = struct(
  n0,
  _LSJBRi,
  0,
  [_sJBS, _nT],
  [() => SimulationJobBatchSummaries, 0]
);
export var ListSimulationJobsRequest = struct(n0, _LSJR, 0, [_nT, _mR, _fi], [0, 1, () => Filters]);
export var ListSimulationJobsResponse = struct(n0, _LSJRi, 0, [_sJS, _nT], [() => SimulationJobSummaries, 0]);
export var ListWorldExportJobsRequest = struct(n0, _LWEJR, 0, [_nT, _mR, _fi], [0, 1, () => Filters]);
export var ListWorldExportJobsResponse = struct(n0, _LWEJRi, 0, [_wEJS, _nT], [() => WorldExportJobSummaries, 0]);
export var ListWorldGenerationJobsRequest = struct(n0, _LWGJR, 0, [_nT, _mR, _fi], [0, 1, () => Filters]);
export var ListWorldGenerationJobsResponse = struct(
  n0,
  _LWGJRi,
  0,
  [_wGJS, _nT],
  [() => WorldGenerationJobSummaries, 0]
);
export var ListWorldsRequest = struct(n0, _LWR, 0, [_nT, _mR, _fi], [0, 1, () => Filters]);
export var ListWorldsResponse = struct(n0, _LWRi, 0, [_wS, _nT], [() => WorldSummaries, 0]);
export var ListWorldTemplatesRequest = struct(n0, _LWTR, 0, [_nT, _mR], [0, 1]);
export var ListWorldTemplatesResponse = struct(n0, _LWTRi, 0, [_tS, _nT], [() => TemplateSummaries, 0]);
export var RobotApplicationSummary = struct(
  n0,
  _RAS,
  0,
  [_n, _a, _v, _lUA, _rSS],
  [0, 0, 0, 4, () => RobotSoftwareSuite]
);
export var SimulationApplicationSummary = struct(
  n0,
  _SAS,
  0,
  [_n, _a, _v, _lUA, _rSS, _sSS],
  [0, 0, 0, 4, () => RobotSoftwareSuite, () => SimulationSoftwareSuite]
);
export var SimulationJobBatchSummary = struct(
  n0,
  _SJBS,
  0,
  [_a, _lUA, _cA, _s, _fRC, _pRC, _cRC],
  [0, 4, 4, 0, 1, 1, 1]
);
export var TemplateSummary = struct(n0, _TS, 0, [_a, _cA, _lUA, _n, _v], [0, 4, 4, 0, 0]);
export var WorldExportJobSummary = struct(
  n0,
  _WEJS,
  0,
  [_a, _s, _cA, _w, _oL],
  [0, 0, 4, 64 | 0, () => OutputLocation]
);
export var WorldGenerationJobSummary = struct(
  n0,
  _WGJS,
  0,
  [_a, _te, _cA, _s, _wC, _sWC, _fWC],
  [0, 0, 4, 0, () => WorldCount, 1, 1]
);
export var WorldSummary = struct(n0, _WS, 0, [_a, _cA, _gJ, _te], [0, 4, 0, 0]);
export var DeploymentJobs = list(n0, _DJe, 0, () => DeploymentJob);
export var Filters = list(n0, _Fi, 0, () => Filter);
export var FilterValues = 64 | 0;

export var Fleets = list(n0, _Fle, 0, () => Fleet);
export var RobotApplicationSummaries = list(n0, _RASo, 0, () => RobotApplicationSummary);
export var SimulationApplicationSummaries = list(n0, _SASi, 0, () => SimulationApplicationSummary);
export var SimulationJobBatchSummaries = list(n0, _SJBSi, 0, () => SimulationJobBatchSummary);
export var TemplateSummaries = list(n0, _TSe, 0, () => TemplateSummary);
export var WorldExportJobSummaries = list(n0, _WEJSo, 0, () => WorldExportJobSummary);
export var WorldGenerationJobSummaries = list(n0, _WGJSo, 0, () => WorldGenerationJobSummary);
export var WorldSummaries = list(n0, _WSo, 0, () => WorldSummary);
export var ListDeploymentJobs = op(
  n0,
  _LDJ,
  {
    [_h]: ["POST", "/listDeploymentJobs", 200],
  },
  () => ListDeploymentJobsRequest,
  () => ListDeploymentJobsResponse
);
export var ListFleets = op(
  n0,
  _LF,
  {
    [_h]: ["POST", "/listFleets", 200],
  },
  () => ListFleetsRequest,
  () => ListFleetsResponse
);
export var ListRobotApplications = op(
  n0,
  _LRA,
  {
    [_h]: ["POST", "/listRobotApplications", 200],
  },
  () => ListRobotApplicationsRequest,
  () => ListRobotApplicationsResponse
);
export var ListRobots = op(
  n0,
  _LR,
  {
    [_h]: ["POST", "/listRobots", 200],
  },
  () => ListRobotsRequest,
  () => ListRobotsResponse
);
export var ListSimulationApplications = op(
  n0,
  _LSA,
  {
    [_h]: ["POST", "/listSimulationApplications", 200],
  },
  () => ListSimulationApplicationsRequest,
  () => ListSimulationApplicationsResponse
);
export var ListSimulationJobBatches = op(
  n0,
  _LSJB,
  {
    [_h]: ["POST", "/listSimulationJobBatches", 200],
  },
  () => ListSimulationJobBatchesRequest,
  () => ListSimulationJobBatchesResponse
);
export var ListSimulationJobs = op(
  n0,
  _LSJ,
  {
    [_h]: ["POST", "/listSimulationJobs", 200],
  },
  () => ListSimulationJobsRequest,
  () => ListSimulationJobsResponse
);
export var ListWorldExportJobs = op(
  n0,
  _LWEJ,
  {
    [_h]: ["POST", "/listWorldExportJobs", 200],
  },
  () => ListWorldExportJobsRequest,
  () => ListWorldExportJobsResponse
);
export var ListWorldGenerationJobs = op(
  n0,
  _LWGJ,
  {
    [_h]: ["POST", "/listWorldGenerationJobs", 200],
  },
  () => ListWorldGenerationJobsRequest,
  () => ListWorldGenerationJobsResponse
);
export var ListWorlds = op(
  n0,
  _LW,
  {
    [_h]: ["POST", "/listWorlds", 200],
  },
  () => ListWorldsRequest,
  () => ListWorldsResponse
);
export var ListWorldTemplates = op(
  n0,
  _LWT,
  {
    [_h]: ["POST", "/listWorldTemplates", 200],
  },
  () => ListWorldTemplatesRequest,
  () => ListWorldTemplatesResponse
);
