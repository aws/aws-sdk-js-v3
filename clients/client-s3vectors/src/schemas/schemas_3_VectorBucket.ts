// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CVB, _CVBI, _CVBO, _EC, _eC, _h, _kKA, _sT, _vBN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateVectorBucketInput = struct(n0, _CVBI, 0, [_vBN, _eC], [0, () => EncryptionConfiguration]);
export var CreateVectorBucketOutput = struct(n0, _CVBO, 0, [], []);
export var EncryptionConfiguration = struct(n0, _EC, 0, [_sT, _kKA], [0, 0]);
export var Unit = "unit" as const;

export var CreateVectorBucket = op(
  n0,
  _CVB,
  {
    [_h]: ["POST", "/CreateVectorBucket", 200],
  },
  () => CreateVectorBucketInput,
  () => CreateVectorBucketOutput
);
