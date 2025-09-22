// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  BucketNotFoundFault as __BucketNotFoundFault,
  InsufficientS3BucketPolicyFault as __InsufficientS3BucketPolicyFault,
  InvalidS3BucketNameFault as __InvalidS3BucketNameFault,
  InvalidS3KeyPrefixFault as __InvalidS3KeyPrefixFault,
} from "../models/index";
import {
  _aQE,
  _BN,
  _BNFF,
  _c,
  _CIl,
  _DL,
  _DLM,
  _DLS,
  _DLSM,
  _e,
  _ELM,
  _ELn,
  _hE,
  _ISBNF,
  _ISBPF,
  _ISKPF,
  _LDT,
  _LE,
  _LEo,
  _LFM,
  _LFT,
  _LS,
  _LSDT,
  _m,
  _SKP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BucketNotFoundFault = error(
  n0,
  _BNFF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`BucketNotFoundFault`, 400],
  },
  [_m],
  [0],

  __BucketNotFoundFault
);
export var DescribeLoggingStatusMessage = struct(n0, _DLSM, 0, [_CIl], [0]);
export var DisableLoggingMessage = struct(n0, _DLM, 0, [_CIl], [0]);
export var EnableLoggingMessage = struct(n0, _ELM, 0, [_CIl, _BN, _SKP, _LDT, _LE], [0, 0, 0, 0, 64 | 0]);
export var InsufficientS3BucketPolicyFault = error(
  n0,
  _ISBPF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InsufficientS3BucketPolicyFault`, 400],
  },
  [_m],
  [0],

  __InsufficientS3BucketPolicyFault
);
export var InvalidS3BucketNameFault = error(
  n0,
  _ISBNF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidS3BucketNameFault`, 400],
  },
  [_m],
  [0],

  __InvalidS3BucketNameFault
);
export var InvalidS3KeyPrefixFault = error(
  n0,
  _ISKPF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidS3KeyPrefixFault`, 400],
  },
  [_m],
  [0],

  __InvalidS3KeyPrefixFault
);
export var LoggingStatus = struct(
  n0,
  _LS,
  0,
  [_LEo, _BN, _SKP, _LSDT, _LFT, _LFM, _LDT, _LE],
  [2, 0, 0, 4, 4, 0, 0, 64 | 0]
);
export var LogTypeList = 64 | 0;

export var DescribeLoggingStatus = op(
  n0,
  _DLS,
  0,
  () => DescribeLoggingStatusMessage,
  () => LoggingStatus
);
export var DisableLogging = op(
  n0,
  _DL,
  0,
  () => DisableLoggingMessage,
  () => LoggingStatus
);
export var EnableLogging = op(
  n0,
  _ELn,
  0,
  () => EnableLoggingMessage,
  () => LoggingStatus
);
