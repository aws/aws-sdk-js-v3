// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  CannotDeleteException as __CannotDeleteException,
  InternalServiceException as __InternalServiceException,
} from "../models/index";
import {
  _a,
  _ac,
  _act,
  _art,
  _bMi,
  _c,
  _CDE,
  _cr,
  _cTA,
  _cTB,
  _CTGP,
  _CTGPR,
  _CTGPRr,
  _CTGU,
  _CTGUR,
  _CTGURr,
  _d,
  _DTGP,
  _DTGPR,
  _DTGPRe,
  _du,
  _e,
  _eIS,
  _end,
  _eTA,
  _eTB,
  _exp,
  _file,
  _GTGP,
  _GTGPR,
  _GTGPRe,
  _GTGS,
  _GTGSR,
  _GTGSRe,
  _hE,
  _ISE,
  _LTGP,
  _LTGPR,
  _LTGPRi,
  _LTGS,
  _LTGSA,
  _LTGSAi,
  _LTGSAR,
  _LTGSARi,
  _LTGSARis,
  _LTGSARist,
  _LTGSR,
  _LTGSRi,
  _m,
  _mRa,
  _n,
  _nT,
  _pA,
  _rM,
  _sA,
  _sC,
  _se,
  _sGI,
  _sI,
  _sIu,
  _sP,
  _SS,
  _st,
  _sta,
  _t,
  _TGP,
  _tGP,
  _TGPe,
  _tGPe,
  _TGS,
  _tGS,
  _TGSA,
  _TGSAe,
  _TGSAes,
  _TGSAest,
  _TGSe,
  _tGSe,
  _TGVC,
  _u,
  _UTGP,
  _UTGPR,
  _UTGPRp,
  _vC,
  _vI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveString = sim(n0, _SS, 0, 8);
export var CannotDeleteException = error(
  n0,
  _CDE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __CannotDeleteException
);
export var CreateTestGridProjectRequest = struct(n0, _CTGPR, 0, [_n, _d, _vC], [0, 0, () => TestGridVpcConfig]);
export var CreateTestGridProjectResult = struct(n0, _CTGPRr, 0, [_tGP], [() => TestGridProject]);
export var CreateTestGridUrlRequest = struct(n0, _CTGUR, 0, [_pA, _eIS], [0, 1]);
export var CreateTestGridUrlResult = struct(n0, _CTGURr, 0, [_u, _exp], [[() => SensitiveString, 0], 4]);
export var DeleteTestGridProjectRequest = struct(n0, _DTGPR, 0, [_pA], [0]);
export var DeleteTestGridProjectResult = struct(n0, _DTGPRe, 0, [], []);
export var GetTestGridProjectRequest = struct(n0, _GTGPR, 0, [_pA], [0]);
export var GetTestGridProjectResult = struct(n0, _GTGPRe, 0, [_tGP], [() => TestGridProject]);
export var GetTestGridSessionRequest = struct(n0, _GTGSR, 0, [_pA, _sI, _sA], [0, 0, 0]);
export var GetTestGridSessionResult = struct(n0, _GTGSRe, 0, [_tGS], [() => TestGridSession]);
export var InternalServiceException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServiceException
);
export var ListTestGridProjectsRequest = struct(n0, _LTGPR, 0, [_mRa, _nT], [1, 0]);
export var ListTestGridProjectsResult = struct(n0, _LTGPRi, 0, [_tGPe, _nT], [() => TestGridProjects, 0]);
export var ListTestGridSessionActionsRequest = struct(n0, _LTGSAR, 0, [_sA, _mRa, _nT], [0, 1, 0]);
export var ListTestGridSessionActionsResult = struct(n0, _LTGSARi, 0, [_ac, _nT], [() => TestGridSessionActions, 0]);
export var ListTestGridSessionArtifactsRequest = struct(n0, _LTGSARis, 0, [_sA, _t, _mRa, _nT], [0, 0, 1, 0]);
export var ListTestGridSessionArtifactsResult = struct(
  n0,
  _LTGSARist,
  0,
  [_art, _nT],
  [[() => TestGridSessionArtifacts, 0], 0]
);
export var ListTestGridSessionsRequest = struct(
  n0,
  _LTGSR,
  0,
  [_pA, _st, _cTA, _cTB, _eTA, _eTB, _mRa, _nT],
  [0, 0, 4, 4, 4, 4, 1, 0]
);
export var ListTestGridSessionsResult = struct(n0, _LTGSRi, 0, [_tGSe, _nT], [() => TestGridSessions, 0]);
export var TestGridProject = struct(n0, _TGP, 0, [_a, _n, _d, _vC, _cr], [0, 0, 0, () => TestGridVpcConfig, 4]);
export var TestGridSession = struct(n0, _TGS, 0, [_a, _st, _cr, _end, _bMi, _sP], [0, 0, 4, 4, 1, 0]);
export var TestGridSessionAction = struct(n0, _TGSA, 0, [_act, _sta, _du, _sC, _rM], [0, 4, 1, 0, 0]);
export var TestGridSessionArtifact = struct(n0, _TGSAe, 0, [_file, _t, _u], [0, 0, [() => SensitiveString, 0]]);
export var TestGridVpcConfig = struct(n0, _TGVC, 0, [_sGI, _sIu, _vI], [64 | 0, 64 | 0, 0]);
export var UpdateTestGridProjectRequest = struct(n0, _UTGPR, 0, [_pA, _n, _d, _vC], [0, 0, 0, () => TestGridVpcConfig]);
export var UpdateTestGridProjectResult = struct(n0, _UTGPRp, 0, [_tGP], [() => TestGridProject]);
export var SecurityGroupIds = 64 | 0;

export var SubnetIds = 64 | 0;

export var TestGridProjects = list(n0, _TGPe, 0, () => TestGridProject);
export var TestGridSessionActions = list(n0, _TGSAes, 0, () => TestGridSessionAction);
export var TestGridSessionArtifacts = list(n0, _TGSAest, 0, [() => TestGridSessionArtifact, 0]);
export var TestGridSessions = list(n0, _TGSe, 0, () => TestGridSession);
export var CreateTestGridProject = op(
  n0,
  _CTGP,
  0,
  () => CreateTestGridProjectRequest,
  () => CreateTestGridProjectResult
);
export var CreateTestGridUrl = op(
  n0,
  _CTGU,
  0,
  () => CreateTestGridUrlRequest,
  () => CreateTestGridUrlResult
);
export var DeleteTestGridProject = op(
  n0,
  _DTGP,
  0,
  () => DeleteTestGridProjectRequest,
  () => DeleteTestGridProjectResult
);
export var GetTestGridProject = op(
  n0,
  _GTGP,
  0,
  () => GetTestGridProjectRequest,
  () => GetTestGridProjectResult
);
export var GetTestGridSession = op(
  n0,
  _GTGS,
  0,
  () => GetTestGridSessionRequest,
  () => GetTestGridSessionResult
);
export var ListTestGridProjects = op(
  n0,
  _LTGP,
  0,
  () => ListTestGridProjectsRequest,
  () => ListTestGridProjectsResult
);
export var ListTestGridSessionActions = op(
  n0,
  _LTGSA,
  0,
  () => ListTestGridSessionActionsRequest,
  () => ListTestGridSessionActionsResult
);
export var ListTestGridSessionArtifacts = op(
  n0,
  _LTGSAi,
  0,
  () => ListTestGridSessionArtifactsRequest,
  () => ListTestGridSessionArtifactsResult
);
export var ListTestGridSessions = op(
  n0,
  _LTGS,
  0,
  () => ListTestGridSessionsRequest,
  () => ListTestGridSessionsResult
);
export var UpdateTestGridProject = op(
  n0,
  _UTGP,
  0,
  () => UpdateTestGridProjectRequest,
  () => UpdateTestGridProjectResult
);
