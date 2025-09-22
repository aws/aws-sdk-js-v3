// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CIR, _GCIR, _GCIRR, _GCIRRe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetCheckerIpRangesRequest = struct(n0, _GCIRR, 0, [], []);
export var GetCheckerIpRangesResponse = struct(n0, _GCIRRe, 0, [_CIR], [64 | 0]);
export var CheckerIpRanges = 64 | 0;

export var GetCheckerIpRanges = op(
  n0,
  _GCIR,
  {
    [_ht]: ["GET", "/2013-04-01/checkeripranges", 200],
  },
  () => GetCheckerIpRangesRequest,
  () => GetCheckerIpRangesResponse
);
