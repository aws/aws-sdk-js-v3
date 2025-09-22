// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAre,
  _De,
  _DTe,
  _DTes,
  _DTR,
  _DTRe,
  _DTRes,
  _EM,
  _FSB,
  _I,
  _II,
  _LTi,
  _LTR,
  _LTRi,
  _MR,
  _N,
  _NTe,
  _RA,
  _SRC,
  _SSP,
  _St,
  _TCe,
  _TS,
  _TSI,
  _UA,
  _UT,
  _UTR,
  n0,
  S3Path,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteThesaurusRequest = struct(n0, _DTR, 0, [_I, _II], [0, 0]);
export var DescribeThesaurusRequest = struct(n0, _DTRe, 0, [_I, _II], [0, 0]);
export var DescribeThesaurusResponse = struct(
  n0,
  _DTRes,
  0,
  [_I, _II, _N, _De, _St, _EM, _CAre, _UA, _RA, _SSP, _FSB, _TCe, _SRC],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, () => S3Path, 1, 1, 1]
);
export var ListThesauriRequest = struct(n0, _LTR, 0, [_II, _NTe, _MR], [0, 0, 1]);
export var ListThesauriResponse = struct(n0, _LTRi, 0, [_NTe, _TSI], [0, () => ThesaurusSummaryItems]);
export var ThesaurusSummary = struct(n0, _TS, 0, [_I, _N, _St, _CAre, _UA], [0, 0, 0, 4, 4]);
export var UpdateThesaurusRequest = struct(n0, _UTR, 0, [_I, _N, _II, _De, _RA, _SSP], [0, 0, 0, 0, 0, () => S3Path]);
export var ThesaurusSummaryItems = list(n0, _TSI, 0, () => ThesaurusSummary);
export var DeleteThesaurus = op(
  n0,
  _DTe,
  0,
  () => DeleteThesaurusRequest,
  () => Unit
);
export var DescribeThesaurus = op(
  n0,
  _DTes,
  0,
  () => DescribeThesaurusRequest,
  () => DescribeThesaurusResponse
);
export var ListThesauri = op(
  n0,
  _LTi,
  0,
  () => ListThesauriRequest,
  () => ListThesauriResponse
);
export var UpdateThesaurus = op(
  n0,
  _UT,
  0,
  () => UpdateThesaurusRequest,
  () => Unit
);
