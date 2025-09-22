// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _AL,
  _al,
  _aN,
  _av,
  _cA,
  _CE,
  _CEo,
  _cEo,
  _cO,
  _cP,
  _cu,
  _dN,
  _dTA,
  _EBT,
  _EBTs,
  _end,
  _eP,
  _eT,
  _GA,
  _GAR,
  _GARe,
  _GCE,
  _GCER,
  _GCERe,
  _GDMD,
  _GDMDR,
  _GDMDRe,
  _GIMD,
  _GIMDR,
  _GIMDRe,
  _GLBMD,
  _GLBMDR,
  _GLBMDRe,
  _GRDMD,
  _GRDMDR,
  _GRDMDRe,
  _ht,
  _iN,
  _l,
  _lBN,
  _ma,
  _MD,
  _mD,
  _MDL,
  _mi,
  _mN,
  _MRI,
  _mRI,
  _mRN,
  _n,
  _nE,
  _nPT,
  _nT,
  _o,
  _p,
  _PA,
  _PAR,
  _PARu,
  _pT,
  _pUr,
  _RBE,
  _rBE,
  _RBEe,
  _rBT,
  _rDN,
  _rN,
  _rT,
  _sC,
  _sCa,
  _sT,
  _st,
  _sta,
  _star,
  _stat,
  _sum,
  _th,
  _ti,
  _tMD,
  _TP,
  _tP,
  _u,
  _uC,
  _uTs,
  n0,
  OperationList,
  ResourceLocation,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Alarm = struct(
  n0,
  _A,
  0,
  [_n, _a, _cA, _l, _rT, _sC, _mRI, _cO, _eP, _p, _th, _dTA, _tMD, _st, _mN, _sta, _u, _cP, _nT, _nE],
  [0, 0, 4, () => ResourceLocation, 0, 0, () => MonitoredResourceInfo, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 64 | 0, 64 | 0, 2]
);
export var CostEstimate = struct(n0, _CE, 0, [_uTs, _rBT], [0, () => EstimatesByTime]);
export var EstimateByTime = struct(n0, _EBT, 0, [_uC, _pUr, _u, _cu, _tP], [1, 0, 1, 0, () => TimePeriod]);
export var GetAlarmsRequest = struct(n0, _GAR, 0, [_aN, _pT, _mRN], [0, 0, 0]);
export var GetAlarmsResult = struct(n0, _GARe, 0, [_al, _nPT], [() => AlarmsList, 0]);
export var GetCostEstimateRequest = struct(n0, _GCER, 0, [_rN, _sT, _eT], [0, 4, 4]);
export var GetCostEstimateResult = struct(n0, _GCERe, 0, [_rBE], [() => ResourcesBudgetEstimate]);
export var GetDistributionMetricDataRequest = struct(
  n0,
  _GDMDR,
  0,
  [_dN, _mN, _sT, _eT, _p, _u, _stat],
  [0, 0, 4, 4, 1, 0, 64 | 0]
);
export var GetDistributionMetricDataResult = struct(n0, _GDMDRe, 0, [_mN, _mD], [0, () => MetricDatapointList]);
export var GetInstanceMetricDataRequest = struct(
  n0,
  _GIMDR,
  0,
  [_iN, _mN, _p, _sT, _eT, _u, _stat],
  [0, 0, 1, 4, 4, 0, 64 | 0]
);
export var GetInstanceMetricDataResult = struct(n0, _GIMDRe, 0, [_mN, _mD], [0, () => MetricDatapointList]);
export var GetLoadBalancerMetricDataRequest = struct(
  n0,
  _GLBMDR,
  0,
  [_lBN, _mN, _p, _sT, _eT, _u, _stat],
  [0, 0, 1, 4, 4, 0, 64 | 0]
);
export var GetLoadBalancerMetricDataResult = struct(n0, _GLBMDRe, 0, [_mN, _mD], [0, () => MetricDatapointList]);
export var GetRelationalDatabaseMetricDataRequest = struct(
  n0,
  _GRDMDR,
  0,
  [_rDN, _mN, _p, _sT, _eT, _u, _stat],
  [0, 0, 1, 4, 4, 0, 64 | 0]
);
export var GetRelationalDatabaseMetricDataResult = struct(n0, _GRDMDRe, 0, [_mN, _mD], [0, () => MetricDatapointList]);
export var MetricDatapoint = struct(n0, _MD, 0, [_av, _ma, _mi, _sCa, _sum, _ti, _u], [1, 1, 1, 1, 1, 4, 0]);
export var MonitoredResourceInfo = struct(n0, _MRI, 0, [_a, _n, _rT], [0, 0, 0]);
export var PutAlarmRequest = struct(
  n0,
  _PAR,
  0,
  [_aN, _mN, _mRN, _cO, _th, _eP, _dTA, _tMD, _cP, _nT, _nE],
  [0, 0, 0, 0, 1, 1, 1, 0, 64 | 0, 64 | 0, 2]
);
export var PutAlarmResult = struct(n0, _PARu, 0, [_o], [() => OperationList]);
export var ResourceBudgetEstimate = struct(n0, _RBE, 0, [_rN, _rT, _cEo, _sT, _eT], [0, 0, () => CostEstimates, 4, 4]);
export var TimePeriod = struct(n0, _TP, 0, [_star, _end], [4, 4]);
export var AlarmsList = list(n0, _AL, 0, () => Alarm);
export var CostEstimates = list(n0, _CEo, 0, () => CostEstimate);
export var EstimatesByTime = list(n0, _EBTs, 0, () => EstimateByTime);
export var MetricDatapointList = list(n0, _MDL, 0, () => MetricDatapoint);
export var MetricStatisticList = 64 | 0;

export var NotificationTriggerList = 64 | 0;

export var ResourcesBudgetEstimate = list(n0, _RBEe, 0, () => ResourceBudgetEstimate);
export var GetAlarms = op(
  n0,
  _GA,
  {
    [_ht]: ["GET", "/ls/api/2016-11-28/GetAlarms", 200],
  },
  () => GetAlarmsRequest,
  () => GetAlarmsResult
);
export var GetCostEstimate = op(
  n0,
  _GCE,
  {
    [_ht]: ["POST", "/budgettracker/getCostEstimate", 200],
  },
  () => GetCostEstimateRequest,
  () => GetCostEstimateResult
);
export var GetDistributionMetricData = op(
  n0,
  _GDMD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetDistributionMetricData", 200],
  },
  () => GetDistributionMetricDataRequest,
  () => GetDistributionMetricDataResult
);
export var GetInstanceMetricData = op(
  n0,
  _GIMD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetInstanceMetricData", 200],
  },
  () => GetInstanceMetricDataRequest,
  () => GetInstanceMetricDataResult
);
export var GetLoadBalancerMetricData = op(
  n0,
  _GLBMD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetLoadBalancerMetricData", 200],
  },
  () => GetLoadBalancerMetricDataRequest,
  () => GetLoadBalancerMetricDataResult
);
export var GetRelationalDatabaseMetricData = op(
  n0,
  _GRDMD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetRelationalDatabaseMetricData", 200],
  },
  () => GetRelationalDatabaseMetricDataRequest,
  () => GetRelationalDatabaseMetricDataResult
);
export var PutAlarm = op(
  n0,
  _PA,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/PutAlarm", 200],
  },
  () => PutAlarmRequest,
  () => PutAlarmResult
);
