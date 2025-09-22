// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _CFR,
  _CFr,
  _CFRr,
  _CT,
  _DFes,
  _DFRes,
  _DFResc,
  _FI,
  _Fi,
  _Fol,
  _FP,
  _FSF,
  _FSFL,
  _FSL,
  _FSo,
  _FT,
  _h,
  _hQ,
  _LF,
  _LFR,
  _LFRi,
  _LUT,
  _MR,
  _mr,
  _N,
  _NT,
  _nt,
  _Op,
  _Per,
  _PFA,
  _RI,
  _SFea,
  _SFR,
  _SFRe,
  _SMh,
  _St,
  _Ta,
  _UFp,
  _UFR,
  _UFRp,
  _V,
  n0,
  ResourcePermissionList,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateFolderRequest = struct(
  n0,
  _CFR,
  0,
  [_AAI, _FI, _N, _FT, _PFA, _Per, _Ta, _SMh],
  [[0, 1], [0, 1], 0, 0, 0, () => ResourcePermissionList, () => TagList, 0]
);
export var CreateFolderResponse = struct(n0, _CFRr, 0, [_St, _Ar, _FI, _RI], [[1, 32], 0, 0, 0]);
export var DescribeFolderRequest = struct(
  n0,
  _DFRes,
  0,
  [_AAI, _FI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeFolderResponse = struct(n0, _DFResc, 0, [_St, _Fol, _RI], [[1, 32], () => Folder, 0]);
export var Folder = struct(n0, _Fol, 0, [_FI, _Ar, _N, _FT, _FP, _CT, _LUT, _SMh], [0, 0, 0, 0, 64 | 0, 4, 4, 0]);
export var FolderSearchFilter = struct(n0, _FSF, 0, [_Op, _N, _V], [0, 0, 0]);
export var FolderSummary = struct(n0, _FSo, 0, [_Ar, _FI, _N, _FT, _CT, _LUT, _SMh], [0, 0, 0, 0, 4, 4, 0]);
export var ListFoldersRequest = struct(
  n0,
  _LFR,
  0,
  [_AAI, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
  ]
);
export var ListFoldersResponse = struct(n0, _LFRi, 0, [_St, _FSL, _NT, _RI], [[1, 32], () => FolderSummaryList, 0, 0]);
export var SearchFoldersRequest = struct(
  n0,
  _SFR,
  0,
  [_AAI, _Fi, _NT, _MR],
  [[0, 1], () => FolderSearchFilterList, 0, 1]
);
export var SearchFoldersResponse = struct(
  n0,
  _SFRe,
  0,
  [_St, _FSL, _NT, _RI],
  [[1, 32], () => FolderSummaryList, 0, 0]
);
export var UpdateFolderRequest = struct(n0, _UFR, 0, [_AAI, _FI, _N], [[0, 1], [0, 1], 0]);
export var UpdateFolderResponse = struct(n0, _UFRp, 0, [_St, _Ar, _FI, _RI], [[1, 32], 0, 0, 0]);
export var FolderSearchFilterList = list(n0, _FSFL, 0, () => FolderSearchFilter);
export var FolderSummaryList = list(n0, _FSL, 0, () => FolderSummary);
export var Path = 64 | 0;

export var CreateFolder = op(
  n0,
  _CFr,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/folders/{FolderId}", 200],
  },
  () => CreateFolderRequest,
  () => CreateFolderResponse
);
export var DescribeFolder = op(
  n0,
  _DFes,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/folders/{FolderId}", 200],
  },
  () => DescribeFolderRequest,
  () => DescribeFolderResponse
);
export var ListFolders = op(
  n0,
  _LF,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/folders", 200],
  },
  () => ListFoldersRequest,
  () => ListFoldersResponse
);
export var SearchFolders = op(
  n0,
  _SFea,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/search/folders", 200],
  },
  () => SearchFoldersRequest,
  () => SearchFoldersResponse
);
export var UpdateFolder = op(
  n0,
  _UFp,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/folders/{FolderId}", 200],
  },
  () => UpdateFolderRequest,
  () => UpdateFolderResponse
);
