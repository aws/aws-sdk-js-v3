// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceInUseFault as __ResourceInUseFault } from "../models/index";
import {
  _aQE,
  _ASGN,
  _c,
  _COUT,
  _COUTT,
  _DASG,
  _DASGT,
  _DLC,
  _DT,
  _DTT,
  _DWP,
  _DWPA,
  _DWPT,
  _e,
  _FD,
  _hE,
  _LCN,
  _LCNTa,
  _m,
  _RIUF,
  _RPe,
  _SPcal,
  _SPQ,
  _SPus,
  _T,
  n0,
  Unit,
} from "./schemas_0";
import { Tags } from "./schemas_15_Tags";

/* eslint no-var: 0 */

export var CreateOrUpdateTagsType = struct(n0, _COUTT, 0, [_T], [() => Tags]);
export var DeleteAutoScalingGroupType = struct(n0, _DASGT, 0, [_ASGN, _FD], [0, 2]);
export var DeleteTagsType = struct(n0, _DTT, 0, [_T], [() => Tags]);
export var DeleteWarmPoolAnswer = struct(n0, _DWPA, 0, [], []);
export var DeleteWarmPoolType = struct(n0, _DWPT, 0, [_ASGN, _FD], [0, 2]);
export var LaunchConfigurationNameType = struct(n0, _LCNTa, 0, [_LCN], [0]);
export var ResourceInUseFault = error(
  n0,
  _RIUF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ResourceInUse`, 400],
  },
  [_m],
  [0],

  __ResourceInUseFault
);
export var ScalingProcessQuery = struct(n0, _SPQ, 0, [_ASGN, _SPcal], [0, 64 | 0]);
export var ProcessNames = 64 | 0;

export var CreateOrUpdateTags = op(
  n0,
  _COUT,
  0,
  () => CreateOrUpdateTagsType,
  () => Unit
);
export var DeleteAutoScalingGroup = op(
  n0,
  _DASG,
  0,
  () => DeleteAutoScalingGroupType,
  () => Unit
);
export var DeleteLaunchConfiguration = op(
  n0,
  _DLC,
  0,
  () => LaunchConfigurationNameType,
  () => Unit
);
export var DeleteTags = op(
  n0,
  _DT,
  0,
  () => DeleteTagsType,
  () => Unit
);
export var DeleteWarmPool = op(
  n0,
  _DWP,
  0,
  () => DeleteWarmPoolType,
  () => DeleteWarmPoolAnswer
);
export var ResumeProcesses = op(
  n0,
  _RPe,
  0,
  () => ScalingProcessQuery,
  () => Unit
);
export var SuspendProcesses = op(
  n0,
  _SPus,
  0,
  () => ScalingProcessQuery,
  () => Unit
);
