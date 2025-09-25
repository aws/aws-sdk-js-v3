// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _ADE,
  _C,
  _c,
  _CE,
  _D,
  _DK,
  _DKR,
  _DKRe,
  _DKRL,
  _DKRLI,
  _DKVS,
  _DKVSR,
  _DKVSRe,
  _e,
  _ET,
  _FR,
  _GK,
  _GKR,
  _GKRe,
  _h,
  _hE,
  _hH,
  _hQ,
  _I,
  _IC,
  _IM,
  _IM_,
  _ISE,
  _K,
  _KARN,
  _LK,
  _LKR,
  _LKRi,
  _LKRL,
  _LKRLI,
  _LM,
  _M,
  _MR,
  _NT,
  _P,
  _PK,
  _PKR,
  _PKRL,
  _PKRLI,
  _PKRu,
  _RNFE,
  _S,
  _s,
  _SQEE,
  _TSIB,
  _UK,
  _UKR,
  _UKRp,
  _V,
  _VE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Value = sim(n0, _V, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var DeleteKeyRequest = struct(
  n0,
  _DKR,
  0,
  [_KARN, _K, _IM],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var DeleteKeyRequestListItem = struct(n0, _DKRLI, 0, [_K], [0]);
export var DeleteKeyResponse = struct(
  n0,
  _DKRe,
  0,
  [_IC, _TSIB, _ET],
  [
    1,
    1,
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var DescribeKeyValueStoreRequest = struct(n0, _DKVSR, 0, [_KARN], [[0, 1]]);
export var DescribeKeyValueStoreResponse = struct(
  n0,
  _DKVSRe,
  0,
  [_IC, _TSIB, _KARN, _C, _ET, _LM, _S, _FR],
  [
    1,
    1,
    0,
    4,
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
    4,
    0,
    0,
  ]
);
export var GetKeyRequest = struct(
  n0,
  _GKR,
  0,
  [_KARN, _K],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetKeyResponse = struct(n0, _GKRe, 0, [_K, _V, _IC, _TSIB], [0, [() => Value, 0], 1, 1]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServerException
);
export var ListKeysRequest = struct(
  n0,
  _LKR,
  0,
  [_KARN, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListKeysResponse = struct(n0, _LKRi, 0, [_NT, _I], [0, [() => ListKeysResponseList, 0]]);
export var ListKeysResponseListItem = struct(n0, _LKRLI, 0, [_K, _V], [0, [() => Value, 0]]);
export var PutKeyRequest = struct(
  n0,
  _PKR,
  0,
  [_K, _V, _KARN, _IM],
  [
    [0, 1],
    [() => Value, 0],
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var PutKeyRequestListItem = struct(n0, _PKRLI, 0, [_K, _V], [0, [() => Value, 0]]);
export var PutKeyResponse = struct(
  n0,
  _PKRu,
  0,
  [_IC, _TSIB, _ET],
  [
    1,
    1,
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],

  __ServiceQuotaExceededException
);
export var UpdateKeysRequest = struct(
  n0,
  _UKR,
  0,
  [_KARN, _IM, _P, _D],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
    [() => PutKeyRequestsList, 0],
    () => DeleteKeyRequestsList,
  ]
);
export var UpdateKeysResponse = struct(
  n0,
  _UKRp,
  0,
  [_IC, _TSIB, _ET],
  [
    1,
    1,
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ValidationException
);
export var DeleteKeyRequestsList = list(n0, _DKRL, 0, () => DeleteKeyRequestListItem);
export var ListKeysResponseList = list(n0, _LKRL, 0, [() => ListKeysResponseListItem, 0]);
export var PutKeyRequestsList = list(n0, _PKRL, 0, [() => PutKeyRequestListItem, 0]);
export var DeleteKey = op(
  n0,
  _DK,
  {
    [_h]: ["DELETE", "/key-value-stores/{KvsARN}/keys/{Key}", 200],
  },
  () => DeleteKeyRequest,
  () => DeleteKeyResponse
);
export var DescribeKeyValueStore = op(
  n0,
  _DKVS,
  {
    [_h]: ["GET", "/key-value-stores/{KvsARN}", 200],
  },
  () => DescribeKeyValueStoreRequest,
  () => DescribeKeyValueStoreResponse
);
export var GetKey = op(
  n0,
  _GK,
  {
    [_h]: ["GET", "/key-value-stores/{KvsARN}/keys/{Key}", 200],
  },
  () => GetKeyRequest,
  () => GetKeyResponse
);
export var ListKeys = op(
  n0,
  _LK,
  {
    [_h]: ["GET", "/key-value-stores/{KvsARN}/keys", 200],
  },
  () => ListKeysRequest,
  () => ListKeysResponse
);
export var PutKey = op(
  n0,
  _PK,
  {
    [_h]: ["PUT", "/key-value-stores/{KvsARN}/keys/{Key}", 200],
  },
  () => PutKeyRequest,
  () => PutKeyResponse
);
export var UpdateKeys = op(
  n0,
  _UK,
  {
    [_h]: ["POST", "/key-value-stores/{KvsARN}/keys", 200],
  },
  () => UpdateKeysRequest,
  () => UpdateKeysResponse
);
