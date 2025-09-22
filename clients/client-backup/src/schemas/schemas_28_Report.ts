// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _BCAyr,
  _BCByr,
  _BRPN,
  _BSyt,
  _CAre,
  _CBre,
  _CTr,
  _DRPesc,
  _DRPIesc,
  _DRPOe,
  _DS,
  _FAr,
  _Fo,
  _h,
  _hQ,
  _IT,
  _LAET,
  _LRJ,
  _LRJI,
  _LRJO,
  _LRP,
  _LRPI,
  _LRPO,
  _LSET,
  _MR,
  _NOF,
  _NT,
  _OU,
  _RDC,
  _Reg,
  _RJe,
  _RJI,
  _RJL,
  _RP,
  _RPAe,
  _RPD,
  _RPep,
  _RPLe,
  _RPN,
  _RS,
  _RTep,
  _SBN,
  _SKP,
  _SRJ,
  _SRJI,
  _SRJO,
  _St,
  n0,
} from "./schemas_0";
import { ReportJob } from "./schemas_6_Report";

/* eslint no-var: 0 */

export var DescribeReportPlanInput = struct(n0, _DRPIesc, 0, [_RPN], [[0, 1]]);
export var DescribeReportPlanOutput = struct(n0, _DRPOe, 0, [_RP], [() => ReportPlan]);
export var ListReportJobsInput = struct(
  n0,
  _LRJI,
  0,
  [_BRPN, _BCByr, _BCAyr, _BSyt, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _RPN,
      },
    ],
    [
      4,
      {
        [_hQ]: _CBre,
      },
    ],
    [
      4,
      {
        [_hQ]: _CAre,
      },
    ],
    [
      0,
      {
        [_hQ]: _St,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListReportJobsOutput = struct(n0, _LRJO, 0, [_RJe, _NT], [() => ReportJobList, 0]);
export var ListReportPlansInput = struct(
  n0,
  _LRPI,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListReportPlansOutput = struct(n0, _LRPO, 0, [_RPep, _NT], [() => ReportPlanList, 0]);
export var ReportDeliveryChannel = struct(n0, _RDC, 0, [_SBN, _SKP, _Fo], [0, 0, 64 | 0]);
export var ReportPlan = struct(
  n0,
  _RP,
  0,
  [_RPAe, _RPN, _RPD, _RS, _RDC, _DS, _CTr, _LAET, _LSET],
  [0, 0, 0, () => ReportSetting, () => ReportDeliveryChannel, 0, 4, 4, 4]
);
export var ReportSetting = struct(
  n0,
  _RS,
  0,
  [_RTep, _FAr, _NOF, _Ac, _OU, _Reg],
  [0, 64 | 0, 1, 64 | 0, 64 | 0, 64 | 0]
);
export var StartReportJobInput = struct(
  n0,
  _SRJI,
  0,
  [_RPN, _IT],
  [
    [0, 1],
    [0, 4],
  ]
);
export var StartReportJobOutput = struct(n0, _SRJO, 0, [_RJI], [0]);
export var FormatList = 64 | 0;

export var ReportJobList = list(n0, _RJL, 0, () => ReportJob);
export var ReportPlanList = list(n0, _RPLe, 0, () => ReportPlan);
export var DescribeReportPlan = op(
  n0,
  _DRPesc,
  {
    [_h]: ["GET", "/audit/report-plans/{ReportPlanName}", 200],
  },
  () => DescribeReportPlanInput,
  () => DescribeReportPlanOutput
);
export var ListReportJobs = op(
  n0,
  _LRJ,
  {
    [_h]: ["GET", "/audit/report-jobs", 200],
  },
  () => ListReportJobsInput,
  () => ListReportJobsOutput
);
export var ListReportPlans = op(
  n0,
  _LRP,
  {
    [_h]: ["GET", "/audit/report-plans", 200],
  },
  () => ListReportPlansInput,
  () => ListReportPlansOutput
);
export var StartReportJob = op(
  n0,
  _SRJ,
  {
    [_h]: ["POST", "/audit/report-jobs/{ReportPlanName}", 200],
  },
  () => StartReportJobInput,
  () => StartReportJobOutput
);
