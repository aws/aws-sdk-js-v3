// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIcc,
  _AIs,
  _CCT,
  _CCTI,
  _CCTO,
  _CD,
  _CDo,
  _CII,
  _Co,
  _COIr,
  _COOr,
  _COr,
  _CTF,
  _CTI,
  _CTSa,
  _DR,
  _Fa,
  _GCT,
  _GCTI,
  _GCTO,
  _h,
  _I,
  _IP,
  _IT,
  _ITCn,
  _ITE,
  _LI,
  _LIR,
  _LIRLD,
  _LMD,
  _O,
  _OI,
  _OIr,
  _OIu,
  _PO,
  _PT,
  _Q,
  _R,
  _RIP,
  _SCT,
  _SCTI,
  _SCTO,
  _Se,
  _T,
  _TAOBI,
  n0,
} from "./schemas_0";
import { Order } from "./schemas_2_Order";

/* eslint no-var: 0 */

export var CancelCapacityTaskInput = struct(
  n0,
  _CCTI,
  0,
  [_CTI, _OI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var CancelCapacityTaskOutput = struct(n0, _CCTO, 0, [], []);
export var CapacityTaskFailure = struct(n0, _CTF, 0, [_R, _T], [0, 0]);
export var CreateOrderInput = struct(
  n0,
  _COIr,
  0,
  [_OI, _LI, _PO, _PT],
  [0, () => LineItemRequestListDefinition, 0, 0]
);
export var CreateOrderOutput = struct(n0, _COOr, 0, [_O], [() => Order]);
export var GetCapacityTaskInput = struct(
  n0,
  _GCTI,
  0,
  [_CTI, _OI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetCapacityTaskOutput = struct(
  n0,
  _GCTO,
  0,
  [_CTI, _OIu, _OIr, _AIs, _RIP, _ITE, _DR, _CTSa, _Fa, _CD, _CDo, _LMD, _TAOBI],
  [0, 0, 0, 0, () => RequestedInstancePools, () => InstancesToExclude, 2, 0, () => CapacityTaskFailure, 4, 4, 4, 0]
);
export var InstancesToExclude = struct(n0, _ITE, 0, [_I, _AIcc, _Se], [64 | 0, 64 | 0, 64 | 0]);
export var InstanceTypeCapacity = struct(n0, _ITCn, 0, [_IT, _Co], [0, 1]);
export var LineItemRequest = struct(n0, _LIR, 0, [_CII, _Q], [0, 1]);
export var StartCapacityTaskInput = struct(
  n0,
  _SCTI,
  0,
  [_OI, _OIr, _AIs, _IP, _ITE, _DR, _TAOBI],
  [[0, 1], 0, 0, () => RequestedInstancePools, () => InstancesToExclude, 2, 0]
);
export var StartCapacityTaskOutput = struct(
  n0,
  _SCTO,
  0,
  [_CTI, _OIu, _OIr, _AIs, _RIP, _ITE, _DR, _CTSa, _Fa, _CD, _CDo, _LMD, _TAOBI],
  [0, 0, 0, 0, () => RequestedInstancePools, () => InstancesToExclude, 2, 0, () => CapacityTaskFailure, 4, 4, 4, 0]
);
export var AccountIdList = 64 | 0;

export var AWSServiceNameList = 64 | 0;

export var InstanceIdList = 64 | 0;

export var LineItemRequestListDefinition = list(n0, _LIRLD, 0, () => LineItemRequest);
export var RequestedInstancePools = list(n0, _RIP, 0, () => InstanceTypeCapacity);
export var CancelCapacityTask = op(
  n0,
  _CCT,
  {
    [_h]: ["POST", "/outposts/{OutpostIdentifier}/capacity/{CapacityTaskId}", 200],
  },
  () => CancelCapacityTaskInput,
  () => CancelCapacityTaskOutput
);
export var CreateOrder = op(
  n0,
  _COr,
  {
    [_h]: ["POST", "/orders", 200],
  },
  () => CreateOrderInput,
  () => CreateOrderOutput
);
export var GetCapacityTask = op(
  n0,
  _GCT,
  {
    [_h]: ["GET", "/outposts/{OutpostIdentifier}/capacity/{CapacityTaskId}", 200],
  },
  () => GetCapacityTaskInput,
  () => GetCapacityTaskOutput
);
export var StartCapacityTask = op(
  n0,
  _SCT,
  {
    [_h]: ["POST", "/outposts/{OutpostIdentifier}/capacity", 200],
  },
  () => StartCapacityTaskInput,
  () => StartCapacityTaskOutput
);
