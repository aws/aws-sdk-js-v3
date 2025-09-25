// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CDDJ,
  _CDDJR,
  _CDDJRr,
  _cDT,
  _DDDJ,
  _DDDJR,
  _DDDJRe,
  _DDJ,
  _dDJ,
  _dDJA,
  _dGA,
  _dL,
  _dS,
  _DSat,
  _fR,
  _jN,
  _lUDT,
  _nD,
  _rA,
  _s,
  _t,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDataDeletionJobRequest = struct(
  n0,
  _CDDJR,
  0,
  [_jN, _dGA, _dS, _rA, _t],
  [0, 0, () => DataSource, 0, [() => Tags, 0]]
);
export var CreateDataDeletionJobResponse = struct(n0, _CDDJRr, 0, [_dDJA], [0]);
export var DataDeletionJob = struct(
  n0,
  _DDJ,
  0,
  [_jN, _dDJA, _dGA, _dS, _rA, _s, _nD, _cDT, _lUDT, _fR],
  [0, 0, 0, () => DataSource, 0, 0, 1, 4, 4, 0]
);
export var DataSource = struct(n0, _DSat, 0, [_dL], [0]);
export var DescribeDataDeletionJobRequest = struct(n0, _DDDJR, 0, [_dDJA], [0]);
export var DescribeDataDeletionJobResponse = struct(n0, _DDDJRe, 0, [_dDJ], [() => DataDeletionJob]);
export var CreateDataDeletionJob = op(
  n0,
  _CDDJ,
  0,
  () => CreateDataDeletionJobRequest,
  () => CreateDataDeletionJobResponse
);
export var DescribeDataDeletionJob = op(
  n0,
  _DDDJ,
  2,
  () => DescribeDataDeletionJobRequest,
  () => DescribeDataDeletionJobResponse
);
