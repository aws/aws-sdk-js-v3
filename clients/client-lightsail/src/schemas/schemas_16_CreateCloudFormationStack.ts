// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aZ,
  _CCFS,
  _CCFSR,
  _CCFSRr,
  _ht,
  _IE,
  _IEL,
  _in,
  _iT,
  _o,
  _pIS,
  _sNo,
  _uD,
  n0,
  OperationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateCloudFormationStackRequest = struct(n0, _CCFSR, 0, [_in], [() => InstanceEntryList]);
export var CreateCloudFormationStackResult = struct(n0, _CCFSRr, 0, [_o], [() => OperationList]);
export var InstanceEntry = struct(n0, _IE, 0, [_sNo, _iT, _pIS, _uD, _aZ], [0, 0, 0, 0, 0]);
export var InstanceEntryList = list(n0, _IEL, 0, () => InstanceEntry);
export var CreateCloudFormationStack = op(
  n0,
  _CCFS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateCloudFormationStack", 200],
  },
  () => CreateCloudFormationStackRequest,
  () => CreateCloudFormationStackResult
);
