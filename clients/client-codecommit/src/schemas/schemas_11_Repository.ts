// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidRepositoryTriggerBranchNameException as __InvalidRepositoryTriggerBranchNameException,
  InvalidRepositoryTriggerCustomDataException as __InvalidRepositoryTriggerCustomDataException,
  InvalidRepositoryTriggerDestinationArnException as __InvalidRepositoryTriggerDestinationArnException,
  InvalidRepositoryTriggerEventsException as __InvalidRepositoryTriggerEventsException,
  InvalidRepositoryTriggerNameException as __InvalidRepositoryTriggerNameException,
  InvalidRepositoryTriggerRegionException as __InvalidRepositoryTriggerRegionException,
  MaximumBranchesExceededException as __MaximumBranchesExceededException,
  MaximumRepositoryTriggersExceededException as __MaximumRepositoryTriggersExceededException,
  RepositoryTriggerBranchNameListRequiredException as __RepositoryTriggerBranchNameListRequiredException,
  RepositoryTriggerDestinationArnRequiredException as __RepositoryTriggerDestinationArnRequiredException,
  RepositoryTriggerEventsListRequiredException as __RepositoryTriggerEventsListRequiredException,
  RepositoryTriggerNameRequiredException as __RepositoryTriggerNameRequiredException,
  RepositoryTriggersListRequiredException as __RepositoryTriggersListRequiredException,
} from "../models/index";
import {
  _bra,
  _c,
  _cDu,
  _cIon,
  _dA,
  _e,
  _eve,
  _fE,
  _fMa,
  _GRT,
  _GRTI,
  _GRTO,
  _IRTBNE,
  _IRTCDE,
  _IRTDAE,
  _IRTEE,
  _IRTNE,
  _IRTRE,
  _LB,
  _LBI,
  _LBO,
  _m,
  _MBEE,
  _MRTEE,
  _n,
  _nT,
  _PRTI,
  _PRTO,
  _PRTu,
  _rN,
  _RT,
  _RTBNLRE,
  _RTDARE,
  _RTEF,
  _RTEFL,
  _RTELRE,
  _RTL,
  _RTLRE,
  _RTNRE,
  _sE,
  _tr,
  _tri,
  _TRT,
  _TRTI,
  _TRTO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetRepositoryTriggersInput = struct(n0, _GRTI, 0, [_rN], [0]);
export var GetRepositoryTriggersOutput = struct(n0, _GRTO, 0, [_cIon, _tr], [0, () => RepositoryTriggersList]);
export var InvalidRepositoryTriggerBranchNameException = error(
  n0,
  _IRTBNE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidRepositoryTriggerBranchNameException
);
export var InvalidRepositoryTriggerCustomDataException = error(
  n0,
  _IRTCDE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidRepositoryTriggerCustomDataException
);
export var InvalidRepositoryTriggerDestinationArnException = error(
  n0,
  _IRTDAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidRepositoryTriggerDestinationArnException
);
export var InvalidRepositoryTriggerEventsException = error(
  n0,
  _IRTEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidRepositoryTriggerEventsException
);
export var InvalidRepositoryTriggerNameException = error(
  n0,
  _IRTNE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidRepositoryTriggerNameException
);
export var InvalidRepositoryTriggerRegionException = error(
  n0,
  _IRTRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidRepositoryTriggerRegionException
);
export var ListBranchesInput = struct(n0, _LBI, 0, [_rN, _nT], [0, 0]);
export var ListBranchesOutput = struct(n0, _LBO, 0, [_bra, _nT], [64 | 0, 0]);
export var MaximumBranchesExceededException = error(
  n0,
  _MBEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __MaximumBranchesExceededException
);
export var MaximumRepositoryTriggersExceededException = error(
  n0,
  _MRTEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __MaximumRepositoryTriggersExceededException
);
export var PutRepositoryTriggersInput = struct(n0, _PRTI, 0, [_rN, _tr], [0, () => RepositoryTriggersList]);
export var PutRepositoryTriggersOutput = struct(n0, _PRTO, 0, [_cIon], [0]);
export var RepositoryTrigger = struct(n0, _RT, 0, [_n, _dA, _cDu, _bra, _eve], [0, 0, 0, 64 | 0, 64 | 0]);
export var RepositoryTriggerBranchNameListRequiredException = error(
  n0,
  _RTBNLRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RepositoryTriggerBranchNameListRequiredException
);
export var RepositoryTriggerDestinationArnRequiredException = error(
  n0,
  _RTDARE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RepositoryTriggerDestinationArnRequiredException
);
export var RepositoryTriggerEventsListRequiredException = error(
  n0,
  _RTELRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RepositoryTriggerEventsListRequiredException
);
export var RepositoryTriggerExecutionFailure = struct(n0, _RTEF, 0, [_tri, _fMa], [0, 0]);
export var RepositoryTriggerNameRequiredException = error(
  n0,
  _RTNRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RepositoryTriggerNameRequiredException
);
export var RepositoryTriggersListRequiredException = error(
  n0,
  _RTLRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RepositoryTriggersListRequiredException
);
export var TestRepositoryTriggersInput = struct(n0, _TRTI, 0, [_rN, _tr], [0, () => RepositoryTriggersList]);
export var TestRepositoryTriggersOutput = struct(
  n0,
  _TRTO,
  0,
  [_sE, _fE],
  [64 | 0, () => RepositoryTriggerExecutionFailureList]
);
export var BranchNameList = 64 | 0;

export var RepositoryTriggerEventList = 64 | 0;

export var RepositoryTriggerExecutionFailureList = list(n0, _RTEFL, 0, () => RepositoryTriggerExecutionFailure);
export var RepositoryTriggerNameList = 64 | 0;

export var RepositoryTriggersList = list(n0, _RTL, 0, () => RepositoryTrigger);
export var GetRepositoryTriggers = op(
  n0,
  _GRT,
  0,
  () => GetRepositoryTriggersInput,
  () => GetRepositoryTriggersOutput
);
export var ListBranches = op(
  n0,
  _LB,
  0,
  () => ListBranchesInput,
  () => ListBranchesOutput
);
export var PutRepositoryTriggers = op(
  n0,
  _PRTu,
  0,
  () => PutRepositoryTriggersInput,
  () => PutRepositoryTriggersOutput
);
export var TestRepositoryTriggers = op(
  n0,
  _TRT,
  0,
  () => TestRepositoryTriggersInput,
  () => TestRepositoryTriggersOutput
);
