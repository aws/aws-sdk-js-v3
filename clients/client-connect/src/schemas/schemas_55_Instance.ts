// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _CIR,
  _CIr,
  _CIRr,
  _CT,
  _CTre,
  _DA,
  _DIes,
  _DIi,
  _DIRe,
  _DIRes,
  _GSIE,
  _h,
  _I,
  _IAn,
  _IAU,
  _ICE,
  _II,
  _IMT,
  _In,
  _ISn,
  _ISR,
  _M,
  _OCE,
  _RCe,
  _Reg,
  _RS,
  _RSR,
  _RSSe,
  _RSSL,
  _SR,
  _SRo,
  _SRt,
  _Ta,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DirectoryAlias = sim(n0, _DA, 0, 8);
export var CreateInstanceRequest = struct(
  n0,
  _CIR,
  0,
  [_CT, _IMT, _IAn, _DIi, _ICE, _OCE, _Ta],
  [[0, 4], 0, [() => DirectoryAlias, 0], 0, 2, 2, 128 | 0]
);
export var CreateInstanceResponse = struct(n0, _CIRr, 0, [_I, _A], [0, 0]);
export var DescribeInstanceRequest = struct(n0, _DIRe, 0, [_II], [[0, 1]]);
export var DescribeInstanceResponse = struct(
  n0,
  _DIRes,
  0,
  [_In, _RCe],
  [[() => Instance, 0], () => ReplicationConfiguration]
);
export var Instance = struct(
  n0,
  _In,
  0,
  [_I, _A, _IMT, _IAn, _CTre, _SR, _ISn, _SRt, _ICE, _OCE, _IAU, _Ta],
  [0, 0, 0, [() => DirectoryAlias, 0], 4, 0, 0, () => InstanceStatusReason, 2, 2, 0, 128 | 0]
);
export var InstanceStatusReason = struct(n0, _ISR, 0, [_M], [0]);
export var ReplicationConfiguration = struct(
  n0,
  _RCe,
  0,
  [_RSSL, _SRo, _GSIE],
  [() => ReplicationStatusSummaryList, 0, 0]
);
export var ReplicationStatusSummary = struct(n0, _RSSe, 0, [_Reg, _RS, _RSR], [0, 0, 0]);
export var ReplicationStatusSummaryList = list(n0, _RSSL, 0, () => ReplicationStatusSummary);
export var CreateInstance = op(
  n0,
  _CIr,
  {
    [_h]: ["PUT", "/instance", 200],
  },
  () => CreateInstanceRequest,
  () => CreateInstanceResponse
);
export var DescribeInstance = op(
  n0,
  _DIes,
  {
    [_h]: ["GET", "/instance/{InstanceId}", 200],
  },
  () => DescribeInstanceRequest,
  () => DescribeInstanceResponse
);
