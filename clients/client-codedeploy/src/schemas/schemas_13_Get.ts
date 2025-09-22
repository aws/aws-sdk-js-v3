// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ApplicationLimitExceededException as __ApplicationLimitExceededException } from "../models/index";
import {
  _AI,
  _aI,
  _AIL,
  _aIp,
  _ALEEp,
  _aN,
  _aNp,
  _ap,
  _BGA,
  _BGAI,
  _BGAO,
  _c,
  _CA,
  _CAI,
  _CAO,
  _cP,
  _cT,
  _er,
  _GA,
  _GAI,
  _GAO,
  _gHAN,
  _lTGH,
  _m,
  _t,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_16_OnPremises";

/* eslint no-var: 0 */

export var ApplicationInfo = struct(n0, _AI, 0, [_aI, _aN, _cT, _lTGH, _gHAN, _cP], [0, 0, 4, 2, 0, 0]);
export var ApplicationLimitExceededException = error(
  n0,
  _ALEEp,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __ApplicationLimitExceededException
);
export var BatchGetApplicationsInput = struct(n0, _BGAI, 0, [_aNp], [64 | 0]);
export var BatchGetApplicationsOutput = struct(n0, _BGAO, 0, [_aIp], [() => ApplicationsInfoList]);
export var CreateApplicationInput = struct(n0, _CAI, 0, [_aN, _cP, _t], [0, 0, () => TagList]);
export var CreateApplicationOutput = struct(n0, _CAO, 0, [_aI], [0]);
export var GetApplicationInput = struct(n0, _GAI, 0, [_aN], [0]);
export var GetApplicationOutput = struct(n0, _GAO, 0, [_ap], [() => ApplicationInfo]);
export var ApplicationsInfoList = list(n0, _AIL, 0, () => ApplicationInfo);
export var BatchGetApplications = op(
  n0,
  _BGA,
  0,
  () => BatchGetApplicationsInput,
  () => BatchGetApplicationsOutput
);
export var CreateApplication = op(
  n0,
  _CA,
  0,
  () => CreateApplicationInput,
  () => CreateApplicationOutput
);
export var GetApplication = op(
  n0,
  _GA,
  0,
  () => GetApplicationInput,
  () => GetApplicationOutput
);
