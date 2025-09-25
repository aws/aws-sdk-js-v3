// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _aDL,
  _aDU,
  _am,
  _att,
  _b,
  _bI,
  _BS,
  _BSu,
  _cA,
  _ca,
  _cB,
  _CU,
  _de,
  _dN,
  _end,
  _fI,
  _fIl,
  _GB,
  _GBR,
  _GBRe,
  _h,
  _HC,
  _hC,
  _HCS,
  _hP,
  _hQ,
  _l,
  _LB,
  _LBR,
  _LBRi,
  _mR,
  _n,
  _nT,
  _qSA,
  _RBA,
  _RBAL,
  _sB,
  _sc,
  _st,
  _sTS,
  _t,
  _tP,
  _u,
  _uA,
  _uB,
  _uTR,
  _UW,
  _UWR,
  _UWRp,
  _v,
  _va,
  _WAC,
  _WACL,
  _WACLo,
  _WACo,
  _WC,
  _wI,
  Description,
  n0,
} from "./schemas_0";
import { HostPropertiesRequest } from "./schemas_1_Worker";
import { LogConfiguration } from "./schemas_4_Worker";
import { BudgetSchedule, UsageTrackingResource } from "./schemas_12_Budget";

/* eslint no-var: 0 */

export var HostConfigurationScript = sim(n0, _HCS, 0, 8);
export var BudgetSummary = struct(
  n0,
  _BS,
  0,
  [_bI, _uTR, _st, _dN, _de, _aDL, _u, _cB, _cA, _uB, _uA],
  [0, () => UsageTrackingResource, 0, 0, [() => Description, 0], 1, () => ConsumedUsages, 0, 5, 0, 5]
);
export var ConsumedUsages = struct(n0, _CU, 0, [_aDU], [1]);
export var GetBudgetRequest = struct(
  n0,
  _GBR,
  0,
  [_fI, _bI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetBudgetResponse = struct(
  n0,
  _GBRe,
  0,
  [_bI, _uTR, _st, _dN, _de, _aDL, _u, _a, _sc, _cB, _cA, _uB, _uA, _qSA],
  [
    0,
    () => UsageTrackingResource,
    0,
    0,
    [() => Description, 0],
    1,
    () => ConsumedUsages,
    [() => ResponseBudgetActionList, 0],
    () => BudgetSchedule,
    0,
    5,
    0,
    5,
    5,
  ]
);
export var HostConfiguration = struct(n0, _HC, 0, [_sB, _sTS], [[() => HostConfigurationScript, 0], 1]);
export var ListBudgetsRequest = struct(
  n0,
  _LBR,
  0,
  [_nT, _fI, _mR, _st],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
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
        [_hQ]: _st,
      },
    ],
  ]
);
export var ListBudgetsResponse = struct(n0, _LBRi, 0, [_nT, _b], [0, [() => BudgetSummaries, 0]]);
export var ResponseBudgetAction = struct(n0, _RBA, 0, [_t, _tP, _de], [0, 1, [() => Description, 0]]);
export var UpdateWorkerRequest = struct(
  n0,
  _UWR,
  0,
  [_fI, _fIl, _wI, _st, _ca, _hP],
  [[0, 1], [0, 1], [0, 1], 0, () => WorkerCapabilities, () => HostPropertiesRequest]
);
export var UpdateWorkerResponse = struct(
  n0,
  _UWRp,
  0,
  [_l, _hC],
  [() => LogConfiguration, [() => HostConfiguration, 0]]
);
export var WorkerAmountCapability = struct(n0, _WAC, 0, [_n, _va], [0, 1]);
export var WorkerAttributeCapability = struct(n0, _WACo, 0, [_n, _v], [0, 64 | 0]);
export var WorkerCapabilities = struct(
  n0,
  _WC,
  0,
  [_am, _att],
  [() => WorkerAmountCapabilityList, () => WorkerAttributeCapabilityList]
);
export var AttributeCapabilityValuesList = 64 | 0;

export var BudgetSummaries = list(n0, _BSu, 0, [() => BudgetSummary, 0]);
export var ResponseBudgetActionList = list(n0, _RBAL, 0, [() => ResponseBudgetAction, 0]);
export var WorkerAmountCapabilityList = list(n0, _WACL, 0, () => WorkerAmountCapability);
export var WorkerAttributeCapabilityList = list(n0, _WACLo, 0, () => WorkerAttributeCapability);
export var GetBudget = op(
  n0,
  _GB,
  {
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/budgets/{budgetId}", 200],
    [_end]: ["management."],
  },
  () => GetBudgetRequest,
  () => GetBudgetResponse
);
export var ListBudgets = op(
  n0,
  _LB,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/budgets", 200],
  },
  () => ListBudgetsRequest,
  () => ListBudgetsResponse
);
export var UpdateWorker = op(
  n0,
  _UW,
  {
    [_h]: ["PATCH", "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}", 200],
    [_end]: ["scheduling."],
  },
  () => UpdateWorkerRequest,
  () => UpdateWorkerResponse
);
