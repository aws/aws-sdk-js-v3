// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { LimitExceededException as __LimitExceededException } from "../models/index";
import {
  _AN,
  _ANRS,
  _ARC,
  _ART,
  _c,
  _CAS,
  _CASR,
  _CASRr,
  _e,
  _FRC,
  _II,
  _ISPC,
  _LEE,
  _M,
  _OI,
  _RCu,
  _SA,
  _SAR,
  _SARt,
  _SN,
  _SRC,
  _SRCq,
  n0,
} from "./schemas_0";
import { InputStartingPositionConfiguration } from "./schemas_17_Application";

/* eslint no-var: 0 */

export var ApplicationRestoreConfiguration = struct(n0, _ARC, 0, [_ART, _SN], [0, 0]);
export var CreateApplicationSnapshotRequest = struct(n0, _CASR, 0, [_AN, _SN], [0, 0]);
export var CreateApplicationSnapshotResponse = struct(n0, _CASRr, 0, [], []);
export var FlinkRunConfiguration = struct(n0, _FRC, 0, [_ANRS], [2]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __LimitExceededException
);
export var RunConfiguration = struct(
  n0,
  _RCu,
  0,
  [_FRC, _SRC, _ARC],
  [() => FlinkRunConfiguration, () => SqlRunConfigurations, () => ApplicationRestoreConfiguration]
);
export var SqlRunConfiguration = struct(n0, _SRCq, 0, [_II, _ISPC], [0, () => InputStartingPositionConfiguration]);
export var StartApplicationRequest = struct(n0, _SAR, 0, [_AN, _RCu], [0, () => RunConfiguration]);
export var StartApplicationResponse = struct(n0, _SARt, 0, [_OI], [0]);
export var SqlRunConfigurations = list(n0, _SRC, 0, () => SqlRunConfiguration);
export var CreateApplicationSnapshot = op(
  n0,
  _CAS,
  0,
  () => CreateApplicationSnapshotRequest,
  () => CreateApplicationSnapshotResponse
);
export var StartApplication = op(
  n0,
  _SA,
  0,
  () => StartApplicationRequest,
  () => StartApplicationResponse
);
