// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAFO,
  _CMPG,
  _CMPGI,
  _CMPGO,
  _CT,
  _CTA,
  _CTB,
  _LMPG,
  _LMPGI,
  _LMPGO,
  _MPGA,
  _MPGD,
  _MPGN,
  _MPGS,
  _MPGSL,
  _MPGSo,
  _MR,
  _NCa,
  _NT,
  _PMPGP,
  _PMPGPI,
  _PMPGPO,
  _RPes,
  _SBo,
  _SO,
  _T,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateModelPackageGroupInput = struct(n0, _CMPGI, 0, [_MPGN, _MPGD, _T], [0, 0, () => TagList]);
export var CreateModelPackageGroupOutput = struct(n0, _CMPGO, 0, [_MPGA], [0]);
export var ListModelPackageGroupsInput = struct(
  n0,
  _LMPGI,
  0,
  [_CTA, _CTB, _MR, _NCa, _NT, _SBo, _SO, _CAFO],
  [4, 4, 1, 0, 0, 0, 0, 0]
);
export var ListModelPackageGroupsOutput = struct(n0, _LMPGO, 0, [_MPGSL, _NT], [() => ModelPackageGroupSummaryList, 0]);
export var ModelPackageGroupSummary = struct(n0, _MPGSo, 0, [_MPGN, _MPGA, _MPGD, _CT, _MPGS], [0, 0, 0, 4, 0]);
export var PutModelPackageGroupPolicyInput = struct(n0, _PMPGPI, 0, [_MPGN, _RPes], [0, 0]);
export var PutModelPackageGroupPolicyOutput = struct(n0, _PMPGPO, 0, [_MPGA], [0]);
export var ModelPackageGroupSummaryList = list(n0, _MPGSL, 0, () => ModelPackageGroupSummary);
export var CreateModelPackageGroup = op(
  n0,
  _CMPG,
  0,
  () => CreateModelPackageGroupInput,
  () => CreateModelPackageGroupOutput
);
export var ListModelPackageGroups = op(
  n0,
  _LMPG,
  0,
  () => ListModelPackageGroupsInput,
  () => ListModelPackageGroupsOutput
);
export var PutModelPackageGroupPolicy = op(
  n0,
  _PMPGP,
  0,
  () => PutModelPackageGroupPolicyInput,
  () => PutModelPackageGroupPolicyOutput
);
