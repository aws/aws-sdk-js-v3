// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CB,
  _CT,
  _DMPG,
  _DMPGe,
  _DMPGI,
  _DMPGIe,
  _DMPGO,
  _MPGA,
  _MPGD,
  _MPGN,
  _MPGS,
  n0,
  Unit,
  UserContext,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteModelPackageGroupInput = struct(n0, _DMPGI, 0, [_MPGN], [0]);
export var DescribeModelPackageGroupInput = struct(n0, _DMPGIe, 0, [_MPGN], [0]);
export var DescribeModelPackageGroupOutput = struct(
  n0,
  _DMPGO,
  0,
  [_MPGN, _MPGA, _MPGD, _CT, _CB, _MPGS],
  [0, 0, 0, 4, () => UserContext, 0]
);
export var DeleteModelPackageGroup = op(
  n0,
  _DMPG,
  0,
  () => DeleteModelPackageGroupInput,
  () => Unit
);
export var DescribeModelPackageGroup = op(
  n0,
  _DMPGe,
  0,
  () => DescribeModelPackageGroupInput,
  () => DescribeModelPackageGroupOutput
);
