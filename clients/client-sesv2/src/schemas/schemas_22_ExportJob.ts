// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InternalServiceErrorException as __InternalServiceErrorException } from "../models/index";
import {
  _BGMD,
  _BGMDQ,
  _BGMDQa,
  _BGMDR,
  _BGMDRa,
  _Cod,
  _D,
  _E,
  _e,
  _ED,
  _h,
  _hE,
  _I,
  _ISEE,
  _M,
  _m,
  _MDE,
  _MDEL,
  _MDR,
  _MDRL,
  _Me,
  _N,
  _Q,
  _R,
  _s,
  _SD,
  _Tim,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetMetricDataQuery = struct(n0, _BGMDQ, 0, [_I, _N, _M, _D, _SD, _ED], [0, 0, 0, 128 | 0, 4, 4]);
export var BatchGetMetricDataRequest = struct(n0, _BGMDR, 0, [_Q], [() => BatchGetMetricDataQueries]);
export var BatchGetMetricDataResponse = struct(
  n0,
  _BGMDRa,
  0,
  [_R, _E],
  [() => MetricDataResultList, () => MetricDataErrorList]
);
export var InternalServiceErrorException = error(
  n0,
  _ISEE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServiceErrorException
);
export var MetricDataError = struct(n0, _MDE, 0, [_I, _Cod, _Me], [0, 0, 0]);
export var MetricDataResult = struct(n0, _MDR, 0, [_I, _Tim, _Va], [0, 64 | 4, 64 | 1]);
export var BatchGetMetricDataQueries = list(n0, _BGMDQa, 0, () => BatchGetMetricDataQuery);
export var MetricDataErrorList = list(n0, _MDEL, 0, () => MetricDataError);
export var MetricDataResultList = list(n0, _MDRL, 0, () => MetricDataResult);
export var MetricValueList = 64 | 1;

export var TimestampList = 64 | 4;

export var Dimensions = 128 | 0;

export var BatchGetMetricData = op(
  n0,
  _BGMD,
  {
    [_h]: ["POST", "/v2/email/metrics/batch", 200],
  },
  () => BatchGetMetricDataRequest,
  () => BatchGetMetricDataResponse
);
