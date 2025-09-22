// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AN,
  _CAo,
  _CB,
  _CCre,
  _CCRre,
  _CCRrea,
  _CER,
  _CEre,
  _CERr,
  _CNon,
  _CT,
  _CTonte,
  _D,
  _DCesc,
  _DCRescr,
  _DCRescri,
  _DEesc,
  _DERes,
  _DEResc,
  _DLG,
  _DLGR,
  _DLGRe,
  _DNi,
  _EAx,
  _ENx,
  _LGA,
  _LGN,
  _LMB,
  _LMT,
  _Pr,
  _PTRr,
  _S,
  _St,
  _T,
  _UA,
  _UAR,
  _UARp,
  _UCpd,
  _UCRpd,
  _UCRpda,
  _UEp,
  _UER,
  _UERp,
  n0,
  TagList,
  UserContext,
} from "./schemas_0";
import { ContextSource } from "./schemas_50_Artifact";
import { ExperimentSource } from "./schemas_72_Trial";

/* eslint no-var: 0 */

export var CreateContextRequest = struct(
  n0,
  _CCRre,
  0,
  [_CNon, _S, _CTonte, _D, _Pr, _T],
  [0, () => ContextSource, 0, 0, 128 | 0, () => TagList]
);
export var CreateContextResponse = struct(n0, _CCRrea, 0, [_CAo], [0]);
export var CreateExperimentRequest = struct(n0, _CER, 0, [_ENx, _DNi, _D, _T], [0, 0, 0, () => TagList]);
export var CreateExperimentResponse = struct(n0, _CERr, 0, [_EAx], [0]);
export var DescribeContextRequest = struct(n0, _DCRescr, 0, [_CNon], [0]);
export var DescribeContextResponse = struct(
  n0,
  _DCRescri,
  0,
  [_CNon, _CAo, _S, _CTonte, _D, _Pr, _CT, _CB, _LMT, _LMB, _LGA],
  [0, 0, () => ContextSource, 0, 0, 128 | 0, 4, () => UserContext, 4, () => UserContext, 0]
);
export var DescribeExperimentRequest = struct(n0, _DERes, 0, [_ENx], [0]);
export var DescribeExperimentResponse = struct(
  n0,
  _DEResc,
  0,
  [_ENx, _EAx, _DNi, _S, _D, _CT, _CB, _LMT, _LMB],
  [0, 0, 0, () => ExperimentSource, 0, 4, () => UserContext, 4, () => UserContext]
);
export var DescribeLineageGroupRequest = struct(n0, _DLGR, 0, [_LGN], [0]);
export var DescribeLineageGroupResponse = struct(
  n0,
  _DLGRe,
  0,
  [_LGN, _LGA, _DNi, _D, _CT, _CB, _LMT, _LMB],
  [0, 0, 0, 0, 4, () => UserContext, 4, () => UserContext]
);
export var UpdateActionRequest = struct(n0, _UAR, 0, [_AN, _D, _St, _Pr, _PTRr], [0, 0, 0, 128 | 0, 64 | 0]);
export var UpdateActionResponse = struct(n0, _UARp, 0, [_AA], [0]);
export var UpdateContextRequest = struct(n0, _UCRpd, 0, [_CNon, _D, _Pr, _PTRr], [0, 0, 128 | 0, 64 | 0]);
export var UpdateContextResponse = struct(n0, _UCRpda, 0, [_CAo], [0]);
export var UpdateExperimentRequest = struct(n0, _UER, 0, [_ENx, _DNi, _D], [0, 0, 0]);
export var UpdateExperimentResponse = struct(n0, _UERp, 0, [_EAx], [0]);
export var CreateContext = op(
  n0,
  _CCre,
  0,
  () => CreateContextRequest,
  () => CreateContextResponse
);
export var CreateExperiment = op(
  n0,
  _CEre,
  0,
  () => CreateExperimentRequest,
  () => CreateExperimentResponse
);
export var DescribeContext = op(
  n0,
  _DCesc,
  0,
  () => DescribeContextRequest,
  () => DescribeContextResponse
);
export var DescribeExperiment = op(
  n0,
  _DEesc,
  0,
  () => DescribeExperimentRequest,
  () => DescribeExperimentResponse
);
export var DescribeLineageGroup = op(
  n0,
  _DLG,
  0,
  () => DescribeLineageGroupRequest,
  () => DescribeLineageGroupResponse
);
export var UpdateAction = op(
  n0,
  _UA,
  0,
  () => UpdateActionRequest,
  () => UpdateActionResponse
);
export var UpdateContext = op(
  n0,
  _UCpd,
  0,
  () => UpdateContextRequest,
  () => UpdateContextResponse
);
export var UpdateExperiment = op(
  n0,
  _UEp,
  0,
  () => UpdateExperimentRequest,
  () => UpdateExperimentResponse
);
