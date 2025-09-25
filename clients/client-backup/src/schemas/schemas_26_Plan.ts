// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _aQE,
  _C,
  _c,
  _CE,
  _Co,
  _CTr,
  _DF,
  _DFI,
  _DRPe,
  _DRPIe,
  _e,
  _FN,
  _h,
  _hE,
  _IT,
  _M,
  _RDC,
  _RPAe,
  _RPD,
  _RPN,
  _RS,
  _T,
  _URP,
  _URPI,
  _URPO,
  n0,
  Unit,
} from "./schemas_0";
import { ReportDeliveryChannel, ReportSetting } from "./schemas_28_Report";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`ConflictException`, 409],
  },
  [_C, _M, _T, _Co],
  [0, 0, 0, 0],

  __ConflictException
);
export var DeleteFrameworkInput = struct(n0, _DFI, 0, [_FN], [[0, 1]]);
export var DeleteReportPlanInput = struct(n0, _DRPIe, 0, [_RPN], [[0, 1]]);
export var UpdateReportPlanInput = struct(
  n0,
  _URPI,
  0,
  [_RPN, _RPD, _RDC, _RS, _IT],
  [[0, 1], 0, () => ReportDeliveryChannel, () => ReportSetting, [0, 4]]
);
export var UpdateReportPlanOutput = struct(n0, _URPO, 0, [_RPN, _RPAe, _CTr], [0, 0, 4]);
export var DeleteFramework = op(
  n0,
  _DF,
  {
    [_h]: ["DELETE", "/audit/frameworks/{FrameworkName}", 200],
  },
  () => DeleteFrameworkInput,
  () => Unit
);
export var DeleteReportPlan = op(
  n0,
  _DRPe,
  {
    [_h]: ["DELETE", "/audit/report-plans/{ReportPlanName}", 200],
  },
  () => DeleteReportPlanInput,
  () => Unit
);
export var UpdateReportPlan = op(
  n0,
  _URP,
  {
    [_h]: ["PUT", "/audit/report-plans/{ReportPlanName}", 200],
  },
  () => UpdateReportPlanInput,
  () => UpdateReportPlanOutput
);
