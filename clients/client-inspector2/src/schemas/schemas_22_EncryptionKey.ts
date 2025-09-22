// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _GEK,
  _GEKR,
  _GEKRe,
  _hQ,
  _ht,
  _kKI,
  _REK,
  _REKR,
  _REKRe,
  _rT,
  _sT,
  _UEK,
  _UEKR,
  _UEKRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetEncryptionKeyRequest = struct(
  n0,
  _GEKR,
  0,
  [_sT, _rT],
  [
    [
      0,
      {
        [_hQ]: _sT,
      },
    ],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
  ]
);
export var GetEncryptionKeyResponse = struct(n0, _GEKRe, 0, [_kKI], [0]);
export var ResetEncryptionKeyRequest = struct(n0, _REKR, 0, [_sT, _rT], [0, 0]);
export var ResetEncryptionKeyResponse = struct(n0, _REKRe, 0, [], []);
export var UpdateEncryptionKeyRequest = struct(n0, _UEKR, 0, [_kKI, _sT, _rT], [0, 0, 0]);
export var UpdateEncryptionKeyResponse = struct(n0, _UEKRp, 0, [], []);
export var GetEncryptionKey = op(
  n0,
  _GEK,
  {
    [_ht]: ["GET", "/encryptionkey/get", 200],
  },
  () => GetEncryptionKeyRequest,
  () => GetEncryptionKeyResponse
);
export var ResetEncryptionKey = op(
  n0,
  _REK,
  {
    [_ht]: ["PUT", "/encryptionkey/reset", 200],
  },
  () => ResetEncryptionKeyRequest,
  () => ResetEncryptionKeyResponse
);
export var UpdateEncryptionKey = op(
  n0,
  _UEK,
  {
    [_ht]: ["PUT", "/encryptionkey/update", 200],
  },
  () => UpdateEncryptionKeyRequest,
  () => UpdateEncryptionKeyResponse
);
