// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GKMSEK, _GKMSEKR, _kEKA, _kK, _KMSK, _PKMSEK, _PKMSEKR, _PKMSEKRu, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var GetKMSEncryptionKeyResult = struct(n0, _GKMSEKR, 0, [_kK], [() => KMSKey]);
export var KMSKey = struct(n0, _KMSK, 0, [_kEKA], [0]);
export var PutKMSEncryptionKeyRequest = struct(n0, _PKMSEKR, 0, [_kEKA], [0]);
export var PutKMSEncryptionKeyResult = struct(n0, _PKMSEKRu, 0, [], []);
export var GetKMSEncryptionKey = op(
  n0,
  _GKMSEK,
  0,
  () => Unit,
  () => GetKMSEncryptionKeyResult
);
export var PutKMSEncryptionKey = op(
  n0,
  _PKMSEK,
  0,
  () => PutKMSEncryptionKeyRequest,
  () => PutKMSEncryptionKeyResult
);
