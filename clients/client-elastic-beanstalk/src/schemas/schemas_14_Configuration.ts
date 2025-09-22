// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  S3SubscriptionRequiredException as __S3SubscriptionRequiredException,
  TooManyBucketsException as __TooManyBucketsException,
} from "../models/index";
import { _aQE, _c, _CSL, _CSLRM, _e, _hE, _m, _SBu, _SSRE, _TMBE, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateStorageLocationResultMessage = struct(n0, _CSLRM, 0, [_SBu], [0]);
export var S3SubscriptionRequiredException = error(
  n0,
  _SSRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`S3SubscriptionRequiredException`, 400],
  },
  [_m],
  [0],

  __S3SubscriptionRequiredException
);
export var TooManyBucketsException = error(
  n0,
  _TMBE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyBucketsException`, 400],
  },
  [_m],
  [0],

  __TooManyBucketsException
);
export var CreateStorageLocation = op(
  n0,
  _CSL,
  0,
  () => Unit,
  () => CreateStorageLocationResultMessage
);
