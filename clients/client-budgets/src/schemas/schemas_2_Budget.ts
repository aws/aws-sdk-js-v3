// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  BillingViewHealthStatusException as __BillingViewHealthStatusException,
  ExpiredNextTokenException as __ExpiredNextTokenException,
  InvalidNextTokenException as __InvalidNextTokenException,
} from "../models/index";
import {
  _A,
  _AA,
  _AAD,
  _AAT,
  _Ac,
  _AH,
  _AHc,
  _AHD,
  _AI,
  _AIc,
  _Am,
  _An,
  _AS,
  _B,
  _BA,
  _BAAA,
  _BAAAL,
  _BAP,
  _BL,
  _BN,
  _BNFA,
  _BNFAL,
  _BPH,
  _BT,
  _Bu,
  _BVA,
  _BVHSE,
  _c,
  _CB,
  _CBR,
  _CBRr,
  _CC,
  _CCV,
  _CF,
  _CS,
  _CT,
  _DBAFA,
  _DBAFAR,
  _DBAFARe,
  _DBAFB,
  _DBAFBR,
  _DBAFBRe,
  _DBAH,
  _DBAHR,
  _DBAHRe,
  _DBe,
  _DBes,
  _DBNFA,
  _DBNFAR,
  _DBNFARe,
  _DBPH,
  _DBPHR,
  _DBPHRe,
  _DBRes,
  _DBResc,
  _DBRescr,
  _DBRescri,
  _Di,
  _DNFB,
  _DNFBR,
  _DNFBRe,
  _DSFN,
  _DSFNR,
  _DSFNRe,
  _E,
  _e,
  _EDV,
  _En,
  _ENTE,
  _ET,
  _Ex,
  _FE,
  _FS,
  _hE,
  _HO,
  _HS,
  _IC,
  _ID,
  _INTE,
  _IOS,
  _IR,
  _IRn,
  _IS,
  _ISn,
  _IT,
  _IU,
  _K,
  _LAAT,
  _LBAP,
  _LUT,
  _M,
  _Me,
  _MO,
  _MR,
  _N,
  _NB,
  _No,
  _Not,
  _NTe,
  _NWS,
  _NWSL,
  _NWSo,
  _O,
  _PBL,
  _RT,
  _S,
  _SFE,
  _Sp,
  _SR,
  _St,
  _Su,
  _T,
  _Ta,
  _TP,
  _TU,
  _TV,
  _UA,
  _UB,
  _UBp,
  _UBR,
  _UBRp,
  _Un,
  _V,
  n0,
} from "./schemas_0";
import { Action, Subscribers } from "./schemas_1_Budget";
import { Notification } from "./schemas_3_Notification";
import { ResourceTagList } from "./schemas_4_Resource";

/* eslint no-var: 0 */

export var ActionHistory = struct(n0, _AH, 0, [_T, _S, _ET, _AHD], [4, 0, 0, [() => ActionHistoryDetails, 0]]);
export var ActionHistoryDetails = struct(n0, _AHD, 0, [_M, _A], [0, [() => Action, 0]]);
export var AutoAdjustData = struct(n0, _AAD, 0, [_AAT, _HO, _LAAT], [0, () => HistoricalOptions, 4]);
export var BillingViewHealthStatusException = error(
  n0,
  _BVHSE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __BillingViewHealthStatusException
);
export var Budget = struct(
  n0,
  _B,
  0,
  [_BN, _BL, _PBL, _CF, _CT, _TU, _TP, _CS, _BT, _LUT, _AAD, _FE, _Me, _BVA, _HS],
  [
    0,
    () => Spend,
    () => PlannedBudgetLimits,
    map(n0, _CF, 0, 0, 64 | 0),
    () => CostTypes,
    0,
    () => TimePeriod,
    () => CalculatedSpend,
    0,
    4,
    () => AutoAdjustData,
    () => Expression,
    64 | 0,
    0,
    () => HealthStatus,
  ]
);
export var BudgetedAndActualAmounts = struct(
  n0,
  _BAAA,
  0,
  [_BA, _AA, _TP],
  [() => Spend, () => Spend, () => TimePeriod]
);
export var BudgetNotificationsForAccount = struct(n0, _BNFA, 0, [_N, _BN], [() => Notifications, 0]);
export var BudgetPerformanceHistory = struct(
  n0,
  _BPH,
  0,
  [_BN, _BT, _CF, _CT, _TU, _BVA, _BAAAL],
  [0, 0, map(n0, _CF, 0, 0, 64 | 0), () => CostTypes, 0, 0, () => BudgetedAndActualAmountsList]
);
export var CalculatedSpend = struct(n0, _CS, 0, [_AS, _FS], [() => Spend, () => Spend]);
export var CostCategoryValues = struct(n0, _CCV, 0, [_K, _V, _MO], [0, 64 | 0, 64 | 0]);
export var CostTypes = struct(
  n0,
  _CT,
  0,
  [_IT, _IS, _UB, _IR, _IC, _IU, _IRn, _IOS, _ISn, _ID, _UA],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
);
export var CreateBudgetRequest = struct(
  n0,
  _CBR,
  0,
  [_AIc, _B, _NWS, _RT],
  [0, () => Budget, [() => NotificationWithSubscribersList, 0], () => ResourceTagList]
);
export var CreateBudgetResponse = struct(n0, _CBRr, 0, [], []);
export var DescribeBudgetActionHistoriesRequest = struct(
  n0,
  _DBAHR,
  0,
  [_AIc, _BN, _AI, _TP, _MR, _NTe],
  [0, 0, 0, () => TimePeriod, 1, 0]
);
export var DescribeBudgetActionHistoriesResponse = struct(
  n0,
  _DBAHRe,
  0,
  [_AHc, _NTe],
  [[() => ActionHistories, 0], 0]
);
export var DescribeBudgetActionsForAccountRequest = struct(n0, _DBAFAR, 0, [_AIc, _MR, _NTe], [0, 1, 0]);
export var DescribeBudgetActionsForAccountResponse = struct(n0, _DBAFARe, 0, [_Ac, _NTe], [[() => Actions, 0], 0]);
export var DescribeBudgetActionsForBudgetRequest = struct(n0, _DBAFBR, 0, [_AIc, _BN, _MR, _NTe], [0, 0, 1, 0]);
export var DescribeBudgetActionsForBudgetResponse = struct(n0, _DBAFBRe, 0, [_Ac, _NTe], [[() => Actions, 0], 0]);
export var DescribeBudgetNotificationsForAccountRequest = struct(n0, _DBNFAR, 0, [_AIc, _MR, _NTe], [0, 1, 0]);
export var DescribeBudgetNotificationsForAccountResponse = struct(
  n0,
  _DBNFARe,
  0,
  [_BNFA, _NTe],
  [() => BudgetNotificationsForAccountList, 0]
);
export var DescribeBudgetPerformanceHistoryRequest = struct(
  n0,
  _DBPHR,
  0,
  [_AIc, _BN, _TP, _MR, _NTe],
  [0, 0, () => TimePeriod, 1, 0]
);
export var DescribeBudgetPerformanceHistoryResponse = struct(
  n0,
  _DBPHRe,
  0,
  [_BPH, _NTe],
  [() => BudgetPerformanceHistory, 0]
);
export var DescribeBudgetRequest = struct(n0, _DBRes, 0, [_AIc, _BN, _SFE], [0, 0, 2]);
export var DescribeBudgetResponse = struct(n0, _DBResc, 0, [_B], [() => Budget]);
export var DescribeBudgetsRequest = struct(n0, _DBRescr, 0, [_AIc, _MR, _NTe, _SFE], [0, 1, 0, 2]);
export var DescribeBudgetsResponse = struct(n0, _DBRescri, 0, [_Bu, _NTe], [() => Budgets, 0]);
export var DescribeNotificationsForBudgetRequest = struct(n0, _DNFBR, 0, [_AIc, _BN, _MR, _NTe], [0, 0, 1, 0]);
export var DescribeNotificationsForBudgetResponse = struct(n0, _DNFBRe, 0, [_N, _NTe], [() => Notifications, 0]);
export var DescribeSubscribersForNotificationRequest = struct(
  n0,
  _DSFNR,
  0,
  [_AIc, _BN, _No, _MR, _NTe],
  [0, 0, () => Notification, 1, 0]
);
export var DescribeSubscribersForNotificationResponse = struct(
  n0,
  _DSFNRe,
  0,
  [_Su, _NTe],
  [[() => Subscribers, 0], 0]
);
export var ExpiredNextTokenException = error(
  n0,
  _ENTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ExpiredNextTokenException
);
export var Expression = struct(
  n0,
  _E,
  0,
  [_O, _An, _Not, _Di, _Ta, _CC],
  [
    () => Expressions,
    () => Expressions,
    () => Expression,
    () => ExpressionDimensionValues,
    () => TagValues,
    () => CostCategoryValues,
  ]
);
export var ExpressionDimensionValues = struct(n0, _EDV, 0, [_K, _V, _MO], [0, 64 | 0, 64 | 0]);
export var HealthStatus = struct(n0, _HS, 0, [_S, _SR, _LUT], [0, 0, 4]);
export var HistoricalOptions = struct(n0, _HO, 0, [_BAP, _LBAP], [1, 1]);
export var InvalidNextTokenException = error(
  n0,
  _INTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidNextTokenException
);
export var NotificationWithSubscribers = struct(n0, _NWSo, 0, [_No, _Su], [() => Notification, [() => Subscribers, 0]]);
export var Spend = struct(n0, _Sp, 0, [_Am, _Un], [0, 0]);
export var TagValues = struct(n0, _TV, 0, [_K, _V, _MO], [0, 64 | 0, 64 | 0]);
export var TimePeriod = struct(n0, _TP, 0, [_St, _En], [4, 4]);
export var UpdateBudgetRequest = struct(n0, _UBR, 0, [_AIc, _NB], [0, () => Budget]);
export var UpdateBudgetResponse = struct(n0, _UBRp, 0, [], []);
export var ActionHistories = list(n0, _AHc, 0, [() => ActionHistory, 0]);
export var Actions = list(n0, _Ac, 0, [() => Action, 0]);
export var BudgetedAndActualAmountsList = list(n0, _BAAAL, 0, () => BudgetedAndActualAmounts);
export var BudgetNotificationsForAccountList = list(n0, _BNFAL, 0, () => BudgetNotificationsForAccount);
export var Budgets = list(n0, _Bu, 0, () => Budget);
export var DimensionValues = 64 | 0;

export var Expressions = list(n0, _Ex, 0, () => Expression);
export var MatchOptions = 64 | 0;

export var Metrics = 64 | 0;

export var Notifications = list(n0, _N, 0, () => Notification);
export var NotificationWithSubscribersList = list(n0, _NWSL, 0, [() => NotificationWithSubscribers, 0]);
export var Values = 64 | 0;

export var CostFilters = map(n0, _CF, 0, 0, 64 | 0);
export var PlannedBudgetLimits = map(n0, _PBL, 0, 0, () => Spend);
export var CreateBudget = op(
  n0,
  _CB,
  0,
  () => CreateBudgetRequest,
  () => CreateBudgetResponse
);
export var DescribeBudget = op(
  n0,
  _DBe,
  0,
  () => DescribeBudgetRequest,
  () => DescribeBudgetResponse
);
export var DescribeBudgetActionHistories = op(
  n0,
  _DBAH,
  0,
  () => DescribeBudgetActionHistoriesRequest,
  () => DescribeBudgetActionHistoriesResponse
);
export var DescribeBudgetActionsForAccount = op(
  n0,
  _DBAFA,
  0,
  () => DescribeBudgetActionsForAccountRequest,
  () => DescribeBudgetActionsForAccountResponse
);
export var DescribeBudgetActionsForBudget = op(
  n0,
  _DBAFB,
  0,
  () => DescribeBudgetActionsForBudgetRequest,
  () => DescribeBudgetActionsForBudgetResponse
);
export var DescribeBudgetNotificationsForAccount = op(
  n0,
  _DBNFA,
  0,
  () => DescribeBudgetNotificationsForAccountRequest,
  () => DescribeBudgetNotificationsForAccountResponse
);
export var DescribeBudgetPerformanceHistory = op(
  n0,
  _DBPH,
  0,
  () => DescribeBudgetPerformanceHistoryRequest,
  () => DescribeBudgetPerformanceHistoryResponse
);
export var DescribeBudgets = op(
  n0,
  _DBes,
  0,
  () => DescribeBudgetsRequest,
  () => DescribeBudgetsResponse
);
export var DescribeNotificationsForBudget = op(
  n0,
  _DNFB,
  0,
  () => DescribeNotificationsForBudgetRequest,
  () => DescribeNotificationsForBudgetResponse
);
export var DescribeSubscribersForNotification = op(
  n0,
  _DSFN,
  0,
  () => DescribeSubscribersForNotificationRequest,
  () => DescribeSubscribersForNotificationResponse
);
export var UpdateBudget = op(
  n0,
  _UBp,
  0,
  () => UpdateBudgetRequest,
  () => UpdateBudgetResponse
);
