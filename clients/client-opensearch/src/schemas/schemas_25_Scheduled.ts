// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BSI,
  _Ca,
  _CCu,
  _D,
  _DN,
  _DRIe,
  _DRIR,
  _DRIRe,
  _Du,
  _FP,
  _h,
  _hQ,
  _IC,
  _Id_,
  _IT,
  _LSA,
  _LSAR,
  _LSARi,
  _Ma,
  _MR,
  _mR,
  _NT,
  _nT,
  _POa,
  _RCe,
  _RI,
  _rI,
  _RIe,
  _RII,
  _RIL,
  _RIOI,
  _RN,
  _S,
  _SAc,
  _SAch,
  _SAL,
  _SB,
  _Sev,
  _ST,
  _St,
  _STc,
  _Ty,
  _UPs,
  n0,
} from "./schemas_0";
import { RecurringChargeList } from "./schemas_1_Describe";

/* eslint no-var: 0 */

export var DescribeReservedInstancesRequest = struct(
  n0,
  _DRIR,
  0,
  [_RII, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _rI,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var DescribeReservedInstancesResponse = struct(n0, _DRIRe, 0, [_NT, _RI], [0, [() => ReservedInstanceList, 0]]);
export var ListScheduledActionsRequest = struct(
  n0,
  _LSAR,
  0,
  [_DN, _MR, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListScheduledActionsResponse = struct(n0, _LSARi, 0, [_SAc, _NT], [() => ScheduledActionsList, 0]);
export var ReservedInstance = struct(
  n0,
  _RIe,
  0,
  [_RN, _RII, _BSI, _RIOI, _IT, _ST, _Du, _FP, _UPs, _CCu, _IC, _St, _POa, _RCe],
  [0, 0, 1, 0, 0, 4, 1, 1, 1, 0, 1, 0, 0, [() => RecurringChargeList, 0]]
);
export var ScheduledAction = struct(
  n0,
  _SAch,
  0,
  [_Id_, _Ty, _Sev, _STc, _D, _SB, _S, _Ma, _Ca],
  [0, 0, 0, 1, 0, 0, 0, 2, 2]
);
export var ReservedInstanceList = list(n0, _RIL, 0, [() => ReservedInstance, 0]);
export var ScheduledActionsList = list(n0, _SAL, 0, () => ScheduledAction);
export var DescribeReservedInstances = op(
  n0,
  _DRIe,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/reservedInstances", 200],
  },
  () => DescribeReservedInstancesRequest,
  () => DescribeReservedInstancesResponse
);
export var ListScheduledActions = op(
  n0,
  _LSA,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/domain/{DomainName}/scheduledActions", 200],
  },
  () => ListScheduledActionsRequest,
  () => ListScheduledActionsResponse
);
