// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aT,
  _ATC,
  _ATD,
  _ATI,
  _ATIc,
  _ATIL,
  _CCWE,
  _CCWEI,
  _cD,
  _co,
  _cou,
  _COWE,
  _COWEI,
  _cR,
  _cS,
  _CSF,
  _cSF,
  _cT,
  _cTF,
  _DATes,
  _DATIes,
  _dCP,
  _dD,
  _de,
  _dESTCT,
  _dLR,
  _do,
  _dTHT,
  _dTL,
  _dTP,
  _dTSTCT,
  _dTSTCTe,
  _dTSTST,
  _DWTes,
  _DWTIes,
  _eF,
  _eIxe,
  _eS,
  _ETF,
  _ex,
  _LAT,
  _LATI,
  _LCWE,
  _LCWEI,
  _lD,
  _LOWE,
  _LOWEI,
  _LWT,
  _LWTI,
  _mPS,
  _n,
  _nPT,
  _oD,
  _p,
  _rO,
  _rS,
  _s,
  _sT,
  _sTF,
  _ta,
  _TF,
  _tF,
  _tFa,
  _tI,
  _tIy,
  _tLa,
  _tr,
  _v,
  _WECo,
  _WEF,
  _WEI,
  _WEIL,
  _WEIo,
  _wI,
  _wT,
  _WTC,
  _WTD,
  _WTF,
  _WTI,
  _WTIL,
  _WTIo,
  n0,
} from "./schemas_0";
import { ActivityType } from "./schemas_5_Activity";
import { WorkflowType } from "./schemas_7_Workflow";
import { WorkflowExecution } from "./schemas_19_Workflow";
import { TaskList } from "./schemas_20_Workflow";

/* eslint no-var: 0 */

export var ActivityTypeConfiguration = struct(
  n0,
  _ATC,
  0,
  [_dTSTCT, _dTHT, _dTL, _dTP, _dTSTST, _dTSTCTe],
  [0, 0, () => TaskList, 0, 0, 0]
);
export var ActivityTypeDetail = struct(
  n0,
  _ATD,
  0,
  [_tI, _co],
  [() => ActivityTypeInfo, () => ActivityTypeConfiguration]
);
export var ActivityTypeInfo = struct(n0, _ATI, 0, [_aT, _s, _de, _cD, _dD], [() => ActivityType, 0, 0, 4, 4]);
export var ActivityTypeInfos = struct(n0, _ATIc, 0, [_tIy, _nPT], [() => ActivityTypeInfoList, 0]);
export var CloseStatusFilter = struct(n0, _CSF, 0, [_s], [0]);
export var CountClosedWorkflowExecutionsInput = struct(
  n0,
  _CCWEI,
  0,
  [_do, _sTF, _cTF, _eF, _tF, _tFa, _cSF],
  [
    0,
    () => ExecutionTimeFilter,
    () => ExecutionTimeFilter,
    () => WorkflowExecutionFilter,
    () => WorkflowTypeFilter,
    () => TagFilter,
    () => CloseStatusFilter,
  ]
);
export var CountOpenWorkflowExecutionsInput = struct(
  n0,
  _COWEI,
  0,
  [_do, _sTF, _tF, _tFa, _eF],
  [0, () => ExecutionTimeFilter, () => WorkflowTypeFilter, () => TagFilter, () => WorkflowExecutionFilter]
);
export var DescribeActivityTypeInput = struct(n0, _DATIes, 0, [_do, _aT], [0, () => ActivityType]);
export var DescribeWorkflowTypeInput = struct(n0, _DWTIes, 0, [_do, _wT], [0, () => WorkflowType]);
export var ExecutionTimeFilter = struct(n0, _ETF, 0, [_oD, _lD], [4, 4]);
export var ListActivityTypesInput = struct(n0, _LATI, 0, [_do, _n, _rS, _nPT, _mPS, _rO], [0, 0, 0, 0, 1, 2]);
export var ListClosedWorkflowExecutionsInput = struct(
  n0,
  _LCWEI,
  0,
  [_do, _sTF, _cTF, _eF, _cSF, _tF, _tFa, _nPT, _mPS, _rO],
  [
    0,
    () => ExecutionTimeFilter,
    () => ExecutionTimeFilter,
    () => WorkflowExecutionFilter,
    () => CloseStatusFilter,
    () => WorkflowTypeFilter,
    () => TagFilter,
    0,
    1,
    2,
  ]
);
export var ListOpenWorkflowExecutionsInput = struct(
  n0,
  _LOWEI,
  0,
  [_do, _sTF, _tF, _tFa, _nPT, _mPS, _rO, _eF],
  [0, () => ExecutionTimeFilter, () => WorkflowTypeFilter, () => TagFilter, 0, 1, 2, () => WorkflowExecutionFilter]
);
export var ListWorkflowTypesInput = struct(n0, _LWTI, 0, [_do, _n, _rS, _nPT, _mPS, _rO], [0, 0, 0, 0, 1, 2]);
export var TagFilter = struct(n0, _TF, 0, [_ta], [0]);
export var WorkflowExecutionCount = struct(n0, _WECo, 0, [_cou, _tr], [1, 2]);
export var WorkflowExecutionFilter = struct(n0, _WEF, 0, [_wI], [0]);
export var WorkflowExecutionInfo = struct(
  n0,
  _WEI,
  0,
  [_ex, _wT, _sT, _cT, _eS, _cS, _p, _tLa, _cR],
  [() => WorkflowExecution, () => WorkflowType, 4, 4, 0, 0, () => WorkflowExecution, 64 | 0, 2]
);
export var WorkflowExecutionInfos = struct(n0, _WEIo, 0, [_eIxe, _nPT], [() => WorkflowExecutionInfoList, 0]);
export var WorkflowTypeConfiguration = struct(
  n0,
  _WTC,
  0,
  [_dTSTCT, _dESTCT, _dTL, _dTP, _dCP, _dLR],
  [0, 0, () => TaskList, 0, 0, 0]
);
export var WorkflowTypeDetail = struct(
  n0,
  _WTD,
  0,
  [_tI, _co],
  [() => WorkflowTypeInfo, () => WorkflowTypeConfiguration]
);
export var WorkflowTypeFilter = struct(n0, _WTF, 0, [_n, _v], [0, 0]);
export var WorkflowTypeInfo = struct(n0, _WTI, 0, [_wT, _s, _de, _cD, _dD], [() => WorkflowType, 0, 0, 4, 4]);
export var WorkflowTypeInfos = struct(n0, _WTIo, 0, [_tIy, _nPT], [() => WorkflowTypeInfoList, 0]);
export var ActivityTypeInfoList = list(n0, _ATIL, 0, () => ActivityTypeInfo);
export var WorkflowExecutionInfoList = list(n0, _WEIL, 0, () => WorkflowExecutionInfo);
export var WorkflowTypeInfoList = list(n0, _WTIL, 0, () => WorkflowTypeInfo);
export var CountClosedWorkflowExecutions = op(
  n0,
  _CCWE,
  0,
  () => CountClosedWorkflowExecutionsInput,
  () => WorkflowExecutionCount
);
export var CountOpenWorkflowExecutions = op(
  n0,
  _COWE,
  0,
  () => CountOpenWorkflowExecutionsInput,
  () => WorkflowExecutionCount
);
export var DescribeActivityType = op(
  n0,
  _DATes,
  0,
  () => DescribeActivityTypeInput,
  () => ActivityTypeDetail
);
export var DescribeWorkflowType = op(
  n0,
  _DWTes,
  0,
  () => DescribeWorkflowTypeInput,
  () => WorkflowTypeDetail
);
export var ListActivityTypes = op(
  n0,
  _LAT,
  0,
  () => ListActivityTypesInput,
  () => ActivityTypeInfos
);
export var ListClosedWorkflowExecutions = op(
  n0,
  _LCWE,
  0,
  () => ListClosedWorkflowExecutionsInput,
  () => WorkflowExecutionInfos
);
export var ListOpenWorkflowExecutions = op(
  n0,
  _LOWE,
  0,
  () => ListOpenWorkflowExecutionsInput,
  () => WorkflowExecutionInfos
);
export var ListWorkflowTypes = op(
  n0,
  _LWT,
  0,
  () => ListWorkflowTypesInput,
  () => WorkflowTypeInfos
);
