// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ATE,
  _CSLC,
  _CSLCR,
  _CSLCRr,
  _CT,
  _CTA,
  _CTB,
  _DSLC,
  _DSLCe,
  _DSLCR,
  _DSLCRe,
  _DSLCRes,
  _LMT,
  _LSLC,
  _LSLCR,
  _LSLCRi,
  _MR,
  _MTA,
  _MTB,
  _NCa,
  _NT,
  _SBo,
  _SLC,
  _SLCA,
  _SLCAT,
  _SLCC,
  _SLCD,
  _SLCL,
  _SLCN,
  _SO,
  _T,
  n0,
  TagList,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateStudioLifecycleConfigRequest = struct(
  n0,
  _CSLCR,
  0,
  [_SLCN, _SLCC, _SLCAT, _T],
  [0, 0, 0, () => TagList]
);
export var CreateStudioLifecycleConfigResponse = struct(n0, _CSLCRr, 0, [_SLCA], [0]);
export var DeleteStudioLifecycleConfigRequest = struct(n0, _DSLCR, 0, [_SLCN], [0]);
export var DescribeStudioLifecycleConfigRequest = struct(n0, _DSLCRe, 0, [_SLCN], [0]);
export var DescribeStudioLifecycleConfigResponse = struct(
  n0,
  _DSLCRes,
  0,
  [_SLCA, _SLCN, _CT, _LMT, _SLCC, _SLCAT],
  [0, 0, 4, 4, 0, 0]
);
export var ListStudioLifecycleConfigsRequest = struct(
  n0,
  _LSLCR,
  0,
  [_MR, _NT, _NCa, _ATE, _CTB, _CTA, _MTB, _MTA, _SBo, _SO],
  [1, 0, 0, 0, 4, 4, 4, 4, 0, 0]
);
export var ListStudioLifecycleConfigsResponse = struct(
  n0,
  _LSLCRi,
  0,
  [_NT, _SLC],
  [0, () => StudioLifecycleConfigsList]
);
export var StudioLifecycleConfigDetails = struct(n0, _SLCD, 0, [_SLCA, _SLCN, _CT, _LMT, _SLCAT], [0, 0, 4, 4, 0]);
export var StudioLifecycleConfigsList = list(n0, _SLCL, 0, () => StudioLifecycleConfigDetails);
export var CreateStudioLifecycleConfig = op(
  n0,
  _CSLC,
  0,
  () => CreateStudioLifecycleConfigRequest,
  () => CreateStudioLifecycleConfigResponse
);
export var DeleteStudioLifecycleConfig = op(
  n0,
  _DSLC,
  0,
  () => DeleteStudioLifecycleConfigRequest,
  () => Unit
);
export var DescribeStudioLifecycleConfig = op(
  n0,
  _DSLCe,
  0,
  () => DescribeStudioLifecycleConfigRequest,
  () => DescribeStudioLifecycleConfigResponse
);
export var ListStudioLifecycleConfigs = op(
  n0,
  _LSLC,
  0,
  () => ListStudioLifecycleConfigsRequest,
  () => ListStudioLifecycleConfigsResponse
);
