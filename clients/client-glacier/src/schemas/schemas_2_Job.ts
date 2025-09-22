// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InsufficientCapacityException as __InsufficientCapacityException,
  PolicyEnforcedException as __PolicyEnforcedException,
} from "../models/index";
import {
  _A,
  _ACL,
  _ACPL,
  _AI,
  _aI,
  _ASHATH,
  _ASIB,
  _BN,
  _C,
  _CACL,
  _CD,
  _CDo,
  _cl,
  _Co,
  _co,
  _cs,
  _CSVI,
  _CSVO,
  _D,
  _DJ,
  _DJI,
  _DN,
  _E,
  _e,
  _EA,
  _EDn,
  _ET,
  _ETx,
  _Ex,
  _F,
  _FD,
  _FHI,
  _G,
  _GJD,
  _Gr,
  _h,
  _hE,
  _hH,
  _ICE,
  _ID,
  _IJ,
  _IJI,
  _IJO,
  _IRJD,
  _IRJI,
  _IRP,
  _IS,
  _ISIB,
  _JD,
  _JI,
  _jI,
  _JOP,
  _jOP,
  _JP,
  _jP,
  _KMSC,
  _KMSKI,
  _L,
  _l,
  _Li,
  _M,
  _m,
  _OL,
  _OS,
  _Pe,
  _PEE,
  _Pr,
  _QC,
  _QEC,
  _QF,
  _RBR,
  _RD,
  _S_,
  _SC,
  _SCt,
  _SD,
  _SHATH,
  _SL,
  _SM,
  _SNST,
  _SP,
  _t,
  _Ta,
  _Ti,
  _Ty,
  _UM,
  _URI,
  _VARN,
  _vN,
  _xaji,
  _xajop,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CSVInput = struct(n0, _CSVI, 0, [_FHI, _C, _QEC, _RD, _FD, _QC], [0, 0, 0, 0, 0, 0]);
export var CSVOutput = struct(n0, _CSVO, 0, [_QF, _QEC, _RD, _FD, _QC], [0, 0, 0, 0, 0]);
export var DescribeJobInput = struct(
  n0,
  _DJI,
  0,
  [_aI, _vN, _jI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var Encryption = struct(n0, _E, 0, [_ET, _KMSKI, _KMSC], [0, 0, 0]);
export var GlacierJobDescription = struct(
  n0,
  _GJD,
  0,
  [
    _JI,
    _JD,
    _A,
    _AI,
    _VARN,
    _CD,
    _Co,
    _SC,
    _SM,
    _ASIB,
    _ISIB,
    _SNST,
    _CDo,
    _SHATH,
    _ASHATH,
    _RBR,
    _Ti,
    _IRP,
    _JOP,
    _SP,
    _OL,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    () => InventoryRetrievalJobDescription,
    0,
    () => SelectParameters,
    () => OutputLocation,
  ]
);
export var Grant = struct(n0, _G, 0, [_Gr, _Pe], [() => Grantee, 0]);
export var Grantee = struct(n0, _Gr, 0, [_Ty, _DN, _URI, _ID, _EA], [0, 0, 0, 0, 0]);
export var InitiateJobInput = struct(
  n0,
  _IJI,
  0,
  [_aI, _vN, _jP],
  [
    [0, 1],
    [0, 1],
    [() => JobParameters, 16],
  ]
);
export var InitiateJobOutput = struct(
  n0,
  _IJO,
  0,
  [_l, _jI, _jOP],
  [
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _xaji,
      },
    ],
    [
      0,
      {
        [_hH]: _xajop,
      },
    ],
  ]
);
export var InputSerialization = struct(n0, _IS, 0, [_cs], [() => CSVInput]);
export var InsufficientCapacityException = error(
  n0,
  _ICE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_t, _co, _m],
  [0, 0, 0],

  __InsufficientCapacityException
);
export var InventoryRetrievalJobDescription = struct(n0, _IRJD, 0, [_F, _SD, _EDn, _Li, _M], [0, 0, 0, 0, 0]);
export var InventoryRetrievalJobInput = struct(n0, _IRJI, 0, [_SD, _EDn, _Li, _M], [0, 0, 0, 0]);
export var JobParameters = struct(
  n0,
  _JP,
  0,
  [_F, _Ty, _AI, _D, _SNST, _RBR, _Ti, _IRP, _SP, _OL],
  [0, 0, 0, 0, 0, 0, 0, () => InventoryRetrievalJobInput, () => SelectParameters, () => OutputLocation]
);
export var OutputLocation = struct(n0, _OL, 0, [_S_], [() => S3Location]);
export var OutputSerialization = struct(n0, _OS, 0, [_cs], [() => CSVOutput]);
export var PolicyEnforcedException = error(
  n0,
  _PEE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_t, _co, _m],
  [0, 0, 0],

  __PolicyEnforcedException
);
export var S3Location = struct(
  n0,
  _SL,
  0,
  [_BN, _Pr, _E, _CACL, _ACL, _Ta, _UM, _SCt],
  [0, 0, () => Encryption, 0, () => AccessControlPolicyList, 128 | 0, 128 | 0, 0]
);
export var SelectParameters = struct(
  n0,
  _SP,
  0,
  [_IS, _ETx, _Ex, _OS],
  [() => InputSerialization, 0, 0, () => OutputSerialization]
);
export var Unit = "unit" as const;

export var AccessControlPolicyList = list(n0, _ACPL, 0, () => Grant);
export var hashmap = 128 | 0;

export var DescribeJob = op(
  n0,
  _DJ,
  {
    [_h]: ["GET", "/{accountId}/vaults/{vaultName}/jobs/{jobId}", 200],
  },
  () => DescribeJobInput,
  () => GlacierJobDescription
);
export var InitiateJob = op(
  n0,
  _IJ,
  {
    [_h]: ["POST", "/{accountId}/vaults/{vaultName}/jobs", 202],
  },
  () => InitiateJobInput,
  () => InitiateJobOutput
);
