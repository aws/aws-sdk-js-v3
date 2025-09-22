// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { LimitsExceededException as __LimitsExceededException } from "../models/index";
import {
  _A,
  _ADRTLB,
  _ADRTLBR,
  _ADRTLBRs,
  _c,
  _e,
  _EALAR,
  _EALARR,
  _EALARRn,
  _L,
  _LB,
  _LEE,
  _m,
  _RAe,
  _Ty,
  n0,
} from "./schemas_0";
import { ResponseAction } from "./schemas_12_Response";

/* eslint no-var: 0 */

export var AssociateDRTLogBucketRequest = struct(n0, _ADRTLBR, 0, [_LB], [0]);
export var AssociateDRTLogBucketResponse = struct(n0, _ADRTLBRs, 0, [], []);
export var EnableApplicationLayerAutomaticResponseRequest = struct(
  n0,
  _EALARR,
  0,
  [_RAe, _A],
  [0, () => ResponseAction]
);
export var EnableApplicationLayerAutomaticResponseResponse = struct(n0, _EALARRn, 0, [], []);
export var LimitsExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_m, _Ty, _L],
  [0, 0, 1],

  __LimitsExceededException
);
export var AssociateDRTLogBucket = op(
  n0,
  _ADRTLB,
  0,
  () => AssociateDRTLogBucketRequest,
  () => AssociateDRTLogBucketResponse
);
export var EnableApplicationLayerAutomaticResponse = op(
  n0,
  _EALAR,
  0,
  () => EnableApplicationLayerAutomaticResponseRequest,
  () => EnableApplicationLayerAutomaticResponseResponse
);
