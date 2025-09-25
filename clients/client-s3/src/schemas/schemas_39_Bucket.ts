// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _B,
  _DBIC,
  _DBICR,
  _Des,
  _EBO,
  _En,
  _F,
  _Fi,
  _Fo,
  _Fr,
  _GBIC,
  _GBICO,
  _GBICR,
  _h,
  _hH,
  _hP,
  _hQ,
  _I,
  _i,
  _IC,
  _IDnv,
  _IE,
  _IEn,
  _IF,
  _IOF,
  _IOV,
  _ISBD,
  _ISn,
  _KI,
  _OF,
  _P,
  _PBIC,
  _PBICR,
  _SBD,
  _Sc,
  _SK,
  _SS,
  _SSEKMS,
  _SSES,
  _xaebo,
  _xN,
  n0,
  SSEKMSKeyId,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBucketInventoryConfigurationRequest = struct(
  n0,
  _DBICR,
  0,
  [_B, _I, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var GetBucketInventoryConfigurationOutput = struct(n0, _GBICO, 0, [_IC], [[() => InventoryConfiguration, 16]]);
export var GetBucketInventoryConfigurationRequest = struct(
  n0,
  _GBICR,
  0,
  [_B, _I, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var InventoryConfiguration = struct(
  n0,
  _IC,
  0,
  [_Des, _IE, _F, _I, _IOV, _OF, _Sc],
  [
    [() => InventoryDestination, 0],
    2,
    () => InventoryFilter,
    0,
    0,
    [() => InventoryOptionalFields, 0],
    () => InventorySchedule,
  ]
);
export var InventoryDestination = struct(n0, _IDnv, 0, [_SBD], [[() => InventoryS3BucketDestination, 0]]);
export var InventoryEncryption = struct(
  n0,
  _IEn,
  0,
  [_SSES, _SSEKMS],
  [
    [
      () => SSES3,
      {
        [_xN]: _SS,
      },
    ],
    [
      () => SSEKMS,
      {
        [_xN]: _SK,
      },
    ],
  ]
);
export var InventoryFilter = struct(n0, _IF, 0, [_P], [0]);
export var InventoryS3BucketDestination = struct(
  n0,
  _ISBD,
  0,
  [_AI, _B, _Fo, _P, _En],
  [0, 0, 0, 0, [() => InventoryEncryption, 0]]
);
export var InventorySchedule = struct(n0, _ISn, 0, [_Fr], [0]);
export var PutBucketInventoryConfigurationRequest = struct(
  n0,
  _PBICR,
  0,
  [_B, _I, _IC, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
    [
      () => InventoryConfiguration,
      {
        [_xN]: _IC,
        [_hP]: 1,
      },
    ],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var SSEKMS = struct(
  n0,
  _SSEKMS,
  {
    [_xN]: _SK,
  },
  [_KI],
  [[() => SSEKMSKeyId, 0]]
);
export var SSES3 = struct(
  n0,
  _SSES,
  {
    [_xN]: _SS,
  },
  [],
  []
);
export var InventoryOptionalFields = list(n0, _IOF, 0, [
  0,
  {
    [_xN]: _Fi,
  },
]);
export var DeleteBucketInventoryConfiguration = op(
  n0,
  _DBIC,
  {
    [_h]: ["DELETE", "/?inventory", 204],
  },
  () => DeleteBucketInventoryConfigurationRequest,
  () => Unit
);
export var GetBucketInventoryConfiguration = op(
  n0,
  _GBIC,
  {
    [_h]: ["GET", "/?inventory&x-id=GetBucketInventoryConfiguration", 200],
  },
  () => GetBucketInventoryConfigurationRequest,
  () => GetBucketInventoryConfigurationOutput
);
export var PutBucketInventoryConfiguration = op(
  n0,
  _PBIC,
  {
    [_h]: ["PUT", "/?inventory", 200],
  },
  () => PutBucketInventoryConfigurationRequest,
  () => Unit
);
