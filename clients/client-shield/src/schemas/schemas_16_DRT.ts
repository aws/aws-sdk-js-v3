// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { NoAssociatedRoleException as __NoAssociatedRoleException } from "../models/index";
import {
  _c,
  _DDRTA,
  _DDRTAR,
  _DDRTARe,
  _DDRTLB,
  _DDRTLBR,
  _DDRTLBRi,
  _e,
  _LB,
  _LBL,
  _m,
  _NARE,
  _RA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeDRTAccessRequest = struct(n0, _DDRTAR, 0, [], []);
export var DescribeDRTAccessResponse = struct(n0, _DDRTARe, 0, [_RA, _LBL], [0, 64 | 0]);
export var DisassociateDRTLogBucketRequest = struct(n0, _DDRTLBR, 0, [_LB], [0]);
export var DisassociateDRTLogBucketResponse = struct(n0, _DDRTLBRi, 0, [], []);
export var NoAssociatedRoleException = error(
  n0,
  _NARE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __NoAssociatedRoleException
);
export var LogBucketList = 64 | 0;

export var DescribeDRTAccess = op(
  n0,
  _DDRTA,
  0,
  () => DescribeDRTAccessRequest,
  () => DescribeDRTAccessResponse
);
export var DisassociateDRTLogBucket = op(
  n0,
  _DDRTLB,
  0,
  () => DisassociateDRTLogBucketRequest,
  () => DisassociateDRTLogBucketResponse
);
