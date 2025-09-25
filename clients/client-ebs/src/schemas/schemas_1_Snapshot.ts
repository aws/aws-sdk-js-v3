// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConcurrentLimitExceededException as __ConcurrentLimitExceededException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  RequestThrottledException as __RequestThrottledException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _ADE,
  _B,
  _BD,
  _BI,
  _Bl,
  _BS,
  _BT,
  _bT,
  _C,
  _c,
  _CA,
  _CAM,
  _CB,
  _CBC,
  _CBh,
  _CE,
  _CLEE,
  _CS,
  _CSR,
  _CSRo,
  _CT,
  _D,
  _DL,
  _E,
  _e,
  _ET,
  _FBT,
  _FSI,
  _fSI,
  _GSB,
  _GSBR,
  _GSBRe,
  _h,
  _hE,
  _hH,
  _hQ,
  _ISE,
  _K,
  _KKA,
  _LCB,
  _LCBR,
  _LCBRi,
  _LSB,
  _LSBR,
  _LSBRi,
  _M,
  _MR,
  _mR,
  _NT,
  _OI,
  _P,
  _PSB,
  _PSBR,
  _PSBRu,
  _PSI,
  _pT,
  _R,
  _RNFE,
  _RTE,
  _S,
  _s,
  _SBI,
  _sBI,
  _SBT,
  _se,
  _ser,
  _SI,
  _SQEE,
  _SS,
  _SSI,
  _SSR,
  _SSRt,
  _ST,
  _STs,
  _T,
  _Ta,
  _Ti,
  _V,
  _VE,
  _VS,
  _xaC,
  _xaC_,
  _xaCA,
  _xaCAM,
  _xaDL,
  _xaP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BlockData = sim(n0, _BD, 42, {
  [_s]: 1,
  [_se]: 1,
});
export var KmsKeyArn = sim(n0, _KKA, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M, _R],
  [0, 0],

  __AccessDeniedException
);
export var Block = struct(n0, _B, 0, [_BI, _BT], [1, 0]);
export var ChangedBlock = struct(n0, _CB, 8, [_BI, _FBT, _SBT], [1, 0, 0]);
export var CompleteSnapshotRequest = struct(
  n0,
  _CSR,
  0,
  [_SI, _CBC, _C, _CA, _CAM],
  [
    [0, 1],
    [
      1,
      {
        [_hH]: _xaC,
      },
    ],
    [
      0,
      {
        [_hH]: _xaC_,
      },
    ],
    [
      0,
      {
        [_hH]: _xaCA,
      },
    ],
    [
      0,
      {
        [_hH]: _xaCAM,
      },
    ],
  ]
);
export var CompleteSnapshotResponse = struct(n0, _CSRo, 0, [_S], [0]);
export var ConcurrentLimitExceededException = error(
  n0,
  _CLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ConcurrentLimitExceededException
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
export var GetSnapshotBlockRequest = struct(
  n0,
  _GSBR,
  0,
  [_SI, _BI, _BT],
  [
    [0, 1],
    [1, 1],
    [
      0,
      {
        [_hQ]: _bT,
      },
    ],
  ]
);
export var GetSnapshotBlockResponse = struct(
  n0,
  _GSBRe,
  0,
  [_DL, _BD, _C, _CA],
  [
    [
      1,
      {
        [_hH]: _xaDL,
      },
    ],
    [() => BlockData, 16],
    [
      0,
      {
        [_hH]: _xaC_,
      },
    ],
    [
      0,
      {
        [_hH]: _xaCA,
      },
    ],
  ]
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _ser,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServerException
);
export var ListChangedBlocksRequest = struct(
  n0,
  _LCBR,
  0,
  [_FSI, _SSI, _NT, _MR, _SBI],
  [
    [
      0,
      {
        [_hQ]: _fSI,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _pT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      1,
      {
        [_hQ]: _sBI,
      },
    ],
  ]
);
export var ListChangedBlocksResponse = struct(
  n0,
  _LCBRi,
  0,
  [_CBh, _ET, _VS, _BS, _NT],
  [[() => ChangedBlocks, 0], 4, 1, 1, 0]
);
export var ListSnapshotBlocksRequest = struct(
  n0,
  _LSBR,
  0,
  [_SI, _NT, _MR, _SBI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _pT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      1,
      {
        [_hQ]: _sBI,
      },
    ],
  ]
);
export var ListSnapshotBlocksResponse = struct(
  n0,
  _LSBRi,
  0,
  [_Bl, _ET, _VS, _BS, _NT],
  [[() => Blocks, 0], 4, 1, 1, 0]
);
export var PutSnapshotBlockRequest = struct(
  n0,
  _PSBR,
  0,
  [_SI, _BI, _BD, _DL, _P, _C, _CA],
  [
    [0, 1],
    [1, 1],
    [() => BlockData, 16],
    [
      1,
      {
        [_hH]: _xaDL,
      },
    ],
    [
      1,
      {
        [_hH]: _xaP,
      },
    ],
    [
      0,
      {
        [_hH]: _xaC_,
      },
    ],
    [
      0,
      {
        [_hH]: _xaCA,
      },
    ],
  ]
);
export var PutSnapshotBlockResponse = struct(
  n0,
  _PSBRu,
  0,
  [_C, _CA],
  [
    [
      0,
      {
        [_hH]: _xaC_,
      },
    ],
    [
      0,
      {
        [_hH]: _xaCA,
      },
    ],
  ]
);
export var RequestThrottledException = error(
  n0,
  _RTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _R],
  [0, 0],

  __RequestThrottledException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _R],
  [0, 0],

  __ResourceNotFoundException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M, _R],
  [0, 0],

  __ServiceQuotaExceededException
);
export var StartSnapshotRequest = struct(
  n0,
  _SSR,
  0,
  [_VS, _PSI, _T, _D, _CT, _E, _KKA, _Ti],
  [1, 0, () => Tags, 0, [0, 4], 2, [() => KmsKeyArn, 0], 1]
);
export var StartSnapshotResponse = struct(
  n0,
  _SSRt,
  0,
  [_D, _SI, _OI, _S, _ST, _VS, _BS, _T, _PSI, _KKA, _STs],
  [0, 0, 0, 0, 4, 1, 1, () => Tags, 0, [() => KmsKeyArn, 0], 0]
);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _R],
  [0, 0],

  __ValidationException
);
export var Unit = "unit" as const;

export var Blocks = list(n0, _Bl, 8, () => Block);
export var ChangedBlocks = list(n0, _CBh, 0, [() => ChangedBlock, 0]);
export var Tags = list(n0, _T, 0, () => Tag);
export var CompleteSnapshot = op(
  n0,
  _CS,
  {
    [_h]: ["POST", "/snapshots/completion/{SnapshotId}", 202],
  },
  () => CompleteSnapshotRequest,
  () => CompleteSnapshotResponse
);
export var GetSnapshotBlock = op(
  n0,
  _GSB,
  {
    [_h]: ["GET", "/snapshots/{SnapshotId}/blocks/{BlockIndex}", 200],
  },
  () => GetSnapshotBlockRequest,
  () => GetSnapshotBlockResponse
);
export var ListChangedBlocks = op(
  n0,
  _LCB,
  {
    [_h]: ["GET", "/snapshots/{SecondSnapshotId}/changedblocks", 200],
  },
  () => ListChangedBlocksRequest,
  () => ListChangedBlocksResponse
);
export var ListSnapshotBlocks = op(
  n0,
  _LSB,
  {
    [_h]: ["GET", "/snapshots/{SnapshotId}/blocks", 200],
  },
  () => ListSnapshotBlocksRequest,
  () => ListSnapshotBlocksResponse
);
export var PutSnapshotBlock = op(
  n0,
  _PSB,
  {
    [_h]: ["PUT", "/snapshots/{SnapshotId}/blocks/{BlockIndex}", 201],
  },
  () => PutSnapshotBlockRequest,
  () => PutSnapshotBlockResponse
);
export var StartSnapshot = op(
  n0,
  _SS,
  {
    [_h]: ["POST", "/snapshots", 201],
  },
  () => StartSnapshotRequest,
  () => StartSnapshotResponse
);
