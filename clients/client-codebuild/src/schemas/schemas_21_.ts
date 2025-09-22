// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _bCP,
  _bCr,
  _bM,
  _CC,
  _cCo,
  _CCod,
  _DCC,
  _DCCI,
  _DCCO,
  _ex,
  _fP,
  _id,
  _lCi,
  _lCP,
  _lM,
  _mLCP,
  _mLCPa,
  _mR,
  _nT,
  _rAep,
  _rARN,
  _sB,
  _sO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CodeCoverage = struct(
  n0,
  _CC,
  0,
  [_id, _rARN, _fP, _lCP, _lCi, _lM, _bCP, _bCr, _bM, _ex],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 4]
);
export var DescribeCodeCoveragesInput = struct(
  n0,
  _DCCI,
  0,
  [_rAep, _nT, _mR, _sO, _sB, _mLCP, _mLCPa],
  [0, 0, 1, 0, 0, 1, 1]
);
export var DescribeCodeCoveragesOutput = struct(n0, _DCCO, 0, [_nT, _cCo], [0, () => CodeCoverages]);
export var CodeCoverages = list(n0, _CCod, 0, () => CodeCoverage);
export var DescribeCodeCoverages = op(
  n0,
  _DCC,
  0,
  () => DescribeCodeCoveragesInput,
  () => DescribeCodeCoveragesOutput
);
