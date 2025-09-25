// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AD,
  _aI,
  _CD,
  _DVe,
  _DVIe,
  _DVO,
  _h,
  _hQ,
  _li,
  _LID,
  _LMU,
  _LMUI,
  _LMUO,
  _LP,
  _LPI,
  _LPO,
  _LV,
  _LVI,
  _LVO,
  _M,
  _ma,
  _MUI,
  _NOA,
  _Pa,
  _PL,
  _PLE,
  _PSIB,
  _RIB,
  _SHATH,
  _SIB,
  _uI,
  _UL,
  _ULE,
  _VARN,
  _VL,
  _VN,
  _vN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeVaultInput = struct(
  n0,
  _DVIe,
  0,
  [_aI, _vN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeVaultOutput = struct(n0, _DVO, 0, [_VARN, _VN, _CD, _LID, _NOA, _SIB], [0, 0, 0, 0, 1, 1]);
export var ListMultipartUploadsInput = struct(
  n0,
  _LMUI,
  0,
  [_aI, _vN, _li, _ma],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
    [
      0,
      {
        [_hQ]: _ma,
      },
    ],
  ]
);
export var ListMultipartUploadsOutput = struct(n0, _LMUO, 0, [_UL, _M], [() => UploadsList, 0]);
export var ListPartsInput = struct(
  n0,
  _LPI,
  0,
  [_aI, _vN, _uI, _ma, _li],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
  ]
);
export var ListPartsOutput = struct(
  n0,
  _LPO,
  0,
  [_MUI, _VARN, _AD, _PSIB, _CD, _Pa, _M],
  [0, 0, 0, 1, 0, () => PartList, 0]
);
export var ListVaultsInput = struct(
  n0,
  _LVI,
  0,
  [_aI, _ma, _li],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
  ]
);
export var ListVaultsOutput = struct(n0, _LVO, 0, [_VL, _M], [() => VaultList, 0]);
export var PartListElement = struct(n0, _PLE, 0, [_RIB, _SHATH], [0, 0]);
export var UploadListElement = struct(n0, _ULE, 0, [_MUI, _VARN, _AD, _PSIB, _CD], [0, 0, 0, 1, 0]);
export var PartList = list(n0, _PL, 0, () => PartListElement);
export var UploadsList = list(n0, _UL, 0, () => UploadListElement);
export var VaultList = list(n0, _VL, 0, () => DescribeVaultOutput);
export var DescribeVault = op(
  n0,
  _DVe,
  {
    [_h]: ["GET", "/{accountId}/vaults/{vaultName}", 200],
  },
  () => DescribeVaultInput,
  () => DescribeVaultOutput
);
export var ListMultipartUploads = op(
  n0,
  _LMU,
  {
    [_h]: ["GET", "/{accountId}/vaults/{vaultName}/multipart-uploads", 200],
  },
  () => ListMultipartUploadsInput,
  () => ListMultipartUploadsOutput
);
export var ListParts = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}", 200],
  },
  () => ListPartsInput,
  () => ListPartsOutput
);
export var ListVaults = op(
  n0,
  _LV,
  {
    [_h]: ["GET", "/{accountId}/vaults", 200],
  },
  () => ListVaultsInput,
  () => ListVaultsOutput
);
