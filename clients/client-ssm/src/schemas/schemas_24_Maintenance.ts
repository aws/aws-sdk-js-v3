// smithy-typescript generated code
import { error, list, map, op, sim, struct } from "@smithy/core/schema";

import { FeatureNotAvailableException as __FeatureNotAvailableException } from "../models/index";
import {
  _AC,
  _APM,
  _aQE,
  _AUT,
  _Aut,
  _c,
  _CB,
  _CCl,
  _CD,
  _CMW,
  _CMWR,
  _CMWRr,
  _Co,
  _CTl,
  _Cu,
  _CWOC,
  _D,
  _DH,
  _DHT,
  _DMWe,
  _DMWRes,
  _DMWResc,
  _DMWT,
  _DMWTe,
  _DMWTR,
  _DMWTRe,
  _DMWTRes,
  _DMWTResc,
  _Du,
  _DV,
  _e,
  _EDn,
  _Ena,
  _Fi,
  _FNAE,
  _GMW,
  _GMWR,
  _GMWRe,
  _GMWT,
  _GMWTR,
  _GMWTRe,
  _Inp,
  _La,
  _LI,
  _M,
  _MC,
  _MD,
  _ME,
  _MR,
  _MWAP,
  _MWD,
  _MWI,
  _MWIL,
  _MWLP,
  _MWLPa,
  _MWRCP,
  _MWSFI,
  _MWSFP,
  _MWT,
  _MWTa,
  _MWTIP,
  _MWTL,
  _MWTLa,
  _N,
  _NC,
  _NET,
  _NT,
  _OI,
  _OSBN,
  _OSKP,
  _P,
  _Pay,
  _Pr,
  _Q,
  _RCu,
  _Repl,
  _RT,
  _RTWMW,
  _RTWMWe,
  _RTWMWR,
  _RTWMWRe,
  _RTWMWReg,
  _RTWMWRegi,
  _SBN,
  _Sc,
  _SDt,
  _SF,
  _SKP,
  _SO,
  _SRA,
  _SRe,
  _STc,
  _T,
  _Ta,
  _TAa,
  _Tas,
  _TIP,
  _TPa,
  _TS,
  _TTa,
  _Ty,
  _UMW,
  _UMWR,
  _UMWRp,
  _UMWT,
  _UMWTp,
  _UMWTR,
  _UMWTRp,
  _UMWTRpd,
  _UMWTRpda,
  _WI,
  _WIi,
  _WTI,
  _WTIi,
  AlarmConfiguration,
  n0,
  TagList,
  Targets,
} from "./schemas_0";
import { _Parameters } from "./schemas_6_Association";
import { MaintenanceWindowTaskParameters, NotificationConfig } from "./schemas_18_Window";
import { CloudWatchOutputConfig } from "./schemas_38_Command";
import { OwnerInformation } from "./schemas_44_Window";
import { MaintenanceWindowFilterList } from "./schemas_58_Describe";

/* eslint no-var: 0 */

export var MaintenanceWindowDescription = sim(n0, _MWD, 0, 8);
export var MaintenanceWindowLambdaPayload = sim(n0, _MWLP, 21, 8);
export var MaintenanceWindowStepFunctionsInput = sim(n0, _MWSFI, 0, 8);
export var CreateMaintenanceWindowRequest = struct(
  n0,
  _CMWR,
  0,
  [_N, _D, _SDt, _EDn, _Sc, _STc, _SO, _Du, _Cu, _AUT, _CTl, _T],
  [0, [() => MaintenanceWindowDescription, 0], 0, 0, 0, 0, 1, 1, 1, 2, [0, 4], () => TagList]
);
export var CreateMaintenanceWindowResult = struct(n0, _CMWRr, 0, [_WI], [0]);
export var DescribeMaintenanceWindowsRequest = struct(
  n0,
  _DMWRes,
  0,
  [_Fi, _MR, _NT],
  [() => MaintenanceWindowFilterList, 1, 0]
);
export var DescribeMaintenanceWindowsResult = struct(
  n0,
  _DMWResc,
  0,
  [_WIi, _NT],
  [[() => MaintenanceWindowIdentityList, 0], 0]
);
export var DescribeMaintenanceWindowTargetsRequest = struct(
  n0,
  _DMWTR,
  0,
  [_WI, _Fi, _MR, _NT],
  [0, () => MaintenanceWindowFilterList, 1, 0]
);
export var DescribeMaintenanceWindowTargetsResult = struct(
  n0,
  _DMWTRe,
  0,
  [_Ta, _NT],
  [[() => MaintenanceWindowTargetList, 0], 0]
);
export var DescribeMaintenanceWindowTasksRequest = struct(
  n0,
  _DMWTRes,
  0,
  [_WI, _Fi, _MR, _NT],
  [0, () => MaintenanceWindowFilterList, 1, 0]
);
export var DescribeMaintenanceWindowTasksResult = struct(
  n0,
  _DMWTResc,
  0,
  [_Tas, _NT],
  [[() => MaintenanceWindowTaskList, 0], 0]
);
export var FeatureNotAvailableException = error(
  n0,
  _FNAE,
  {
    [_e]: _c,
    [_aQE]: [`FeatureNotAvailableException`, 400],
  },
  [_M],
  [0],

  __FeatureNotAvailableException
);
export var GetMaintenanceWindowRequest = struct(n0, _GMWR, 0, [_WI], [0]);
export var GetMaintenanceWindowResult = struct(
  n0,
  _GMWRe,
  0,
  [_WI, _N, _D, _SDt, _EDn, _Sc, _STc, _SO, _NET, _Du, _Cu, _AUT, _Ena, _CD, _MD],
  [0, 0, [() => MaintenanceWindowDescription, 0], 0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 4, 4]
);
export var GetMaintenanceWindowTaskRequest = struct(n0, _GMWTR, 0, [_WI, _WTIi], [0, 0]);
export var GetMaintenanceWindowTaskResult = struct(
  n0,
  _GMWTRe,
  0,
  [_WI, _WTIi, _Ta, _TAa, _SRA, _TTa, _TPa, _TIP, _Pr, _MC, _ME, _LI, _N, _D, _CB, _AC],
  [
    0,
    0,
    () => Targets,
    0,
    0,
    0,
    [() => MaintenanceWindowTaskParameters, 0],
    [() => MaintenanceWindowTaskInvocationParameters, 0],
    1,
    0,
    0,
    () => LoggingInfo,
    0,
    [() => MaintenanceWindowDescription, 0],
    0,
    () => AlarmConfiguration,
  ]
);
export var LoggingInfo = struct(n0, _LI, 0, [_SBN, _SKP, _SRe], [0, 0, 0]);
export var MaintenanceWindowAutomationParameters = struct(n0, _MWAP, 0, [_DV, _P], [0, map(n0, _APM, 0, 0, 64 | 0)]);
export var MaintenanceWindowIdentity = struct(
  n0,
  _MWI,
  0,
  [_WI, _N, _D, _Ena, _Du, _Cu, _Sc, _STc, _SO, _EDn, _SDt, _NET],
  [0, 0, [() => MaintenanceWindowDescription, 0], 2, 1, 1, 0, 0, 1, 0, 0, 0]
);
export var MaintenanceWindowLambdaParameters = struct(
  n0,
  _MWLPa,
  0,
  [_CCl, _Q, _Pay],
  [0, 0, [() => MaintenanceWindowLambdaPayload, 0]]
);
export var MaintenanceWindowRunCommandParameters = struct(
  n0,
  _MWRCP,
  0,
  [_Co, _CWOC, _DH, _DHT, _DV, _NC, _OSBN, _OSKP, _P, _SRA, _TS],
  [0, () => CloudWatchOutputConfig, 0, 0, 0, () => NotificationConfig, 0, 0, [() => _Parameters, 0], 0, 1]
);
export var MaintenanceWindowStepFunctionsParameters = struct(
  n0,
  _MWSFP,
  0,
  [_Inp, _N],
  [[() => MaintenanceWindowStepFunctionsInput, 0], 0]
);
export var MaintenanceWindowTarget = struct(
  n0,
  _MWT,
  0,
  [_WI, _WTI, _RT, _Ta, _OI, _N, _D],
  [0, 0, 0, () => Targets, [() => OwnerInformation, 0], 0, [() => MaintenanceWindowDescription, 0]]
);
export var MaintenanceWindowTask = struct(
  n0,
  _MWTa,
  0,
  [_WI, _WTIi, _TAa, _Ty, _Ta, _TPa, _Pr, _LI, _SRA, _MC, _ME, _N, _D, _CB, _AC],
  [
    0,
    0,
    0,
    0,
    () => Targets,
    [() => MaintenanceWindowTaskParameters, 0],
    1,
    () => LoggingInfo,
    0,
    0,
    0,
    0,
    [() => MaintenanceWindowDescription, 0],
    0,
    () => AlarmConfiguration,
  ]
);
export var MaintenanceWindowTaskInvocationParameters = struct(
  n0,
  _MWTIP,
  0,
  [_RCu, _Aut, _SF, _La],
  [
    [() => MaintenanceWindowRunCommandParameters, 0],
    () => MaintenanceWindowAutomationParameters,
    [() => MaintenanceWindowStepFunctionsParameters, 0],
    [() => MaintenanceWindowLambdaParameters, 0],
  ]
);
export var RegisterTargetWithMaintenanceWindowRequest = struct(
  n0,
  _RTWMWR,
  0,
  [_WI, _RT, _Ta, _OI, _N, _D, _CTl],
  [0, 0, () => Targets, [() => OwnerInformation, 0], 0, [() => MaintenanceWindowDescription, 0], [0, 4]]
);
export var RegisterTargetWithMaintenanceWindowResult = struct(n0, _RTWMWRe, 0, [_WTI], [0]);
export var RegisterTaskWithMaintenanceWindowRequest = struct(
  n0,
  _RTWMWReg,
  0,
  [_WI, _Ta, _TAa, _SRA, _TTa, _TPa, _TIP, _Pr, _MC, _ME, _LI, _N, _D, _CTl, _CB, _AC],
  [
    0,
    () => Targets,
    0,
    0,
    0,
    [() => MaintenanceWindowTaskParameters, 0],
    [() => MaintenanceWindowTaskInvocationParameters, 0],
    1,
    0,
    0,
    () => LoggingInfo,
    0,
    [() => MaintenanceWindowDescription, 0],
    [0, 4],
    0,
    () => AlarmConfiguration,
  ]
);
export var RegisterTaskWithMaintenanceWindowResult = struct(n0, _RTWMWRegi, 0, [_WTIi], [0]);
export var UpdateMaintenanceWindowRequest = struct(
  n0,
  _UMWR,
  0,
  [_WI, _N, _D, _SDt, _EDn, _Sc, _STc, _SO, _Du, _Cu, _AUT, _Ena, _Repl],
  [0, 0, [() => MaintenanceWindowDescription, 0], 0, 0, 0, 0, 1, 1, 1, 2, 2, 2]
);
export var UpdateMaintenanceWindowResult = struct(
  n0,
  _UMWRp,
  0,
  [_WI, _N, _D, _SDt, _EDn, _Sc, _STc, _SO, _Du, _Cu, _AUT, _Ena],
  [0, 0, [() => MaintenanceWindowDescription, 0], 0, 0, 0, 0, 1, 1, 1, 2, 2]
);
export var UpdateMaintenanceWindowTargetRequest = struct(
  n0,
  _UMWTR,
  0,
  [_WI, _WTI, _Ta, _OI, _N, _D, _Repl],
  [0, 0, () => Targets, [() => OwnerInformation, 0], 0, [() => MaintenanceWindowDescription, 0], 2]
);
export var UpdateMaintenanceWindowTargetResult = struct(
  n0,
  _UMWTRp,
  0,
  [_WI, _WTI, _Ta, _OI, _N, _D],
  [0, 0, () => Targets, [() => OwnerInformation, 0], 0, [() => MaintenanceWindowDescription, 0]]
);
export var UpdateMaintenanceWindowTaskRequest = struct(
  n0,
  _UMWTRpd,
  0,
  [_WI, _WTIi, _Ta, _TAa, _SRA, _TPa, _TIP, _Pr, _MC, _ME, _LI, _N, _D, _Repl, _CB, _AC],
  [
    0,
    0,
    () => Targets,
    0,
    0,
    [() => MaintenanceWindowTaskParameters, 0],
    [() => MaintenanceWindowTaskInvocationParameters, 0],
    1,
    0,
    0,
    () => LoggingInfo,
    0,
    [() => MaintenanceWindowDescription, 0],
    2,
    0,
    () => AlarmConfiguration,
  ]
);
export var UpdateMaintenanceWindowTaskResult = struct(
  n0,
  _UMWTRpda,
  0,
  [_WI, _WTIi, _Ta, _TAa, _SRA, _TPa, _TIP, _Pr, _MC, _ME, _LI, _N, _D, _CB, _AC],
  [
    0,
    0,
    () => Targets,
    0,
    0,
    [() => MaintenanceWindowTaskParameters, 0],
    [() => MaintenanceWindowTaskInvocationParameters, 0],
    1,
    0,
    0,
    () => LoggingInfo,
    0,
    [() => MaintenanceWindowDescription, 0],
    0,
    () => AlarmConfiguration,
  ]
);
export var MaintenanceWindowIdentityList = list(n0, _MWIL, 0, [() => MaintenanceWindowIdentity, 0]);
export var MaintenanceWindowTargetList = list(n0, _MWTL, 0, [() => MaintenanceWindowTarget, 0]);
export var MaintenanceWindowTaskList = list(n0, _MWTLa, 0, [() => MaintenanceWindowTask, 0]);
export var CreateMaintenanceWindow = op(
  n0,
  _CMW,
  0,
  () => CreateMaintenanceWindowRequest,
  () => CreateMaintenanceWindowResult
);
export var DescribeMaintenanceWindows = op(
  n0,
  _DMWe,
  0,
  () => DescribeMaintenanceWindowsRequest,
  () => DescribeMaintenanceWindowsResult
);
export var DescribeMaintenanceWindowTargets = op(
  n0,
  _DMWT,
  0,
  () => DescribeMaintenanceWindowTargetsRequest,
  () => DescribeMaintenanceWindowTargetsResult
);
export var DescribeMaintenanceWindowTasks = op(
  n0,
  _DMWTe,
  0,
  () => DescribeMaintenanceWindowTasksRequest,
  () => DescribeMaintenanceWindowTasksResult
);
export var GetMaintenanceWindow = op(
  n0,
  _GMW,
  0,
  () => GetMaintenanceWindowRequest,
  () => GetMaintenanceWindowResult
);
export var GetMaintenanceWindowTask = op(
  n0,
  _GMWT,
  0,
  () => GetMaintenanceWindowTaskRequest,
  () => GetMaintenanceWindowTaskResult
);
export var RegisterTargetWithMaintenanceWindow = op(
  n0,
  _RTWMW,
  0,
  () => RegisterTargetWithMaintenanceWindowRequest,
  () => RegisterTargetWithMaintenanceWindowResult
);
export var RegisterTaskWithMaintenanceWindow = op(
  n0,
  _RTWMWe,
  0,
  () => RegisterTaskWithMaintenanceWindowRequest,
  () => RegisterTaskWithMaintenanceWindowResult
);
export var UpdateMaintenanceWindow = op(
  n0,
  _UMW,
  0,
  () => UpdateMaintenanceWindowRequest,
  () => UpdateMaintenanceWindowResult
);
export var UpdateMaintenanceWindowTarget = op(
  n0,
  _UMWT,
  0,
  () => UpdateMaintenanceWindowTargetRequest,
  () => UpdateMaintenanceWindowTargetResult
);
export var UpdateMaintenanceWindowTask = op(
  n0,
  _UMWTp,
  0,
  () => UpdateMaintenanceWindowTaskRequest,
  () => UpdateMaintenanceWindowTaskResult
);
