// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ObjectAlreadyInActiveTierError as __ObjectAlreadyInActiveTierError } from "../models/index";
import {
  _ACL,
  _B,
  _BN,
  _c,
  _CA,
  _CACL,
  _D,
  _Desc,
  _e,
  _EBO,
  _En,
  _ETn,
  _ETx,
  _Exp,
  _GJP,
  _h,
  _hE,
  _hH,
  _hP,
  _hQ,
  _IS,
  _K,
  _KMSC,
  _KMSKI,
  _ME,
  _N,
  _OAIATE,
  _OL,
  _OSu,
  _P,
  _RC,
  _ROe,
  _ROOe,
  _ROP,
  _RORe,
  _RP,
  _RRes,
  _S_,
  _SC,
  _SL,
  _SP,
  _Tag,
  _Ti,
  _Ty,
  _UM,
  _V,
  _VI,
  _vI,
  _xaebo,
  _xarc,
  _xarop,
  _xarp,
  _xasca,
  _xN,
  n0,
  SSEKMSKeyId,
} from "./schemas_0";
import { Tagging } from "./schemas_6_Tagging";
import { InputSerialization, OutputSerialization } from "./schemas_28_Object";
import { Grants } from "./schemas_30_Bucket";

/* eslint no-var: 0 */

export var Encryption = struct(n0, _En, 0, [_ETn, _KMSKI, _KMSC], [0, [() => SSEKMSKeyId, 0], 0]);
export var GlacierJobParameters = struct(n0, _GJP, 0, [_Ti], [0]);
export var MetadataEntry = struct(n0, _ME, 0, [_N, _V], [0, 0]);
export var ObjectAlreadyInActiveTierError = error(
  n0,
  _OAIATE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [],
  [],

  __ObjectAlreadyInActiveTierError
);
export var OutputLocation = struct(n0, _OL, 0, [_S_], [[() => S3Location, 0]]);
export var RestoreObjectOutput = struct(
  n0,
  _ROOe,
  0,
  [_RC, _ROP],
  [
    [
      0,
      {
        [_hH]: _xarc,
      },
    ],
    [
      0,
      {
        [_hH]: _xarop,
      },
    ],
  ]
);
export var RestoreObjectRequest = struct(
  n0,
  _RORe,
  0,
  [_B, _K, _VI, _RRes, _RP, _CA, _EBO],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
    [
      () => RestoreRequest,
      {
        [_hP]: 1,
        [_xN]: _RRes,
      },
    ],
    [
      0,
      {
        [_hH]: _xarp,
      },
    ],
    [
      0,
      {
        [_hH]: _xasca,
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
export var RestoreRequest = struct(
  n0,
  _RRes,
  0,
  [_D, _GJP, _Ty, _Ti, _Desc, _SP, _OL],
  [1, () => GlacierJobParameters, 0, 0, 0, () => SelectParameters, [() => OutputLocation, 0]]
);
export var S3Location = struct(
  n0,
  _SL,
  0,
  [_BN, _P, _En, _CACL, _ACL, _Tag, _UM, _SC],
  [0, 0, [() => Encryption, 0], 0, [() => Grants, 0], [() => Tagging, 0], [() => UserMetadata, 0], 0]
);
export var SelectParameters = struct(
  n0,
  _SP,
  0,
  [_IS, _ETx, _Exp, _OSu],
  [() => InputSerialization, 0, 0, () => OutputSerialization]
);
export var UserMetadata = list(n0, _UM, 0, [
  () => MetadataEntry,
  {
    [_xN]: _ME,
  },
]);
export var RestoreObject = op(
  n0,
  _ROe,
  {
    [_h]: ["POST", "/{Key+}?restore", 200],
  },
  () => RestoreObjectRequest,
  () => RestoreObjectOutput
);
