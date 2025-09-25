// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cD,
  _DSMV,
  _DSMVI,
  _DSMVO,
  _eA,
  _LMR,
  _LMRI,
  _LMRO,
  _LSMV,
  _LSMVI,
  _LSMVO,
  _mR,
  _mRA,
  _mRa,
  _MRL,
  _MRLI,
  _nT,
  _sD,
  _sDt,
  _sMA,
  _sMV,
  _sMVA,
  _SMVL,
  _SMVLI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteStateMachineVersionInput = struct(n0, _DSMVI, 0, [_sMVA], [0]);
export var DeleteStateMachineVersionOutput = struct(n0, _DSMVO, 0, [], []);
export var ListMapRunsInput = struct(n0, _LMRI, 0, [_eA, _mR, _nT], [0, 1, 0]);
export var ListMapRunsOutput = struct(n0, _LMRO, 0, [_mRa, _nT], [() => MapRunList, 0]);
export var ListStateMachineVersionsInput = struct(n0, _LSMVI, 0, [_sMA, _nT, _mR], [0, 0, 1]);
export var ListStateMachineVersionsOutput = struct(n0, _LSMVO, 0, [_sMV, _nT], [() => StateMachineVersionList, 0]);
export var MapRunListItem = struct(n0, _MRLI, 0, [_eA, _mRA, _sMA, _sD, _sDt], [0, 0, 0, 4, 4]);
export var StateMachineVersionListItem = struct(n0, _SMVLI, 0, [_sMVA, _cD], [0, 4]);
export var MapRunList = list(n0, _MRL, 0, () => MapRunListItem);
export var StateMachineVersionList = list(n0, _SMVL, 0, () => StateMachineVersionListItem);
export var DeleteStateMachineVersion = op(
  n0,
  _DSMV,
  0,
  () => DeleteStateMachineVersionInput,
  () => DeleteStateMachineVersionOutput
);
export var ListMapRuns = op(
  n0,
  _LMR,
  0,
  () => ListMapRunsInput,
  () => ListMapRunsOutput
);
export var ListStateMachineVersions = op(
  n0,
  _LSMV,
  0,
  () => ListStateMachineVersionsInput,
  () => ListStateMachineVersionsOutput
);
