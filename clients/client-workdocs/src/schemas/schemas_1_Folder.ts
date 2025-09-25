// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  DraftUploadOutOfSyncException as __DraftUploadOutOfSyncException,
  ResourceAlreadyCheckedOutException as __ResourceAlreadyCheckedOutException,
  StorageLimitExceededException as __StorageLimitExceededException,
  StorageLimitWillExceedException as __StorageLimitWillExceedException,
  TooManyLabelsException as __TooManyLabelsException,
} from "../models/index";
import {
  _A,
  _AI,
  _ARF,
  _AT,
  _c,
  _CC,
  _CCT,
  _CF,
  _CFR,
  _CFRr,
  _CIr,
  _CLR,
  _CLr,
  _CLRr,
  _CM,
  _CMT,
  _CMu,
  _CR,
  _CT,
  _CTo,
  _DA,
  _dA,
  _DI,
  _DL,
  _DLR,
  _DLRe,
  _DM,
  _DRT,
  _DSIB,
  _DUOOSE,
  _DVM,
  _e,
  _EV,
  _FI,
  _Fi,
  _Fie,
  _FM,
  _GD,
  _GDR,
  _GDRe,
  _GF,
  _GFR,
  _GFRe,
  _h,
  _hE,
  _hH,
  _hQ,
  _ICM,
  _iCM,
  _Id,
  _IDVU,
  _IDVUR,
  _IDVURn,
  _It,
  _L,
  _l,
  _Li,
  _LRT,
  _LVM,
  _LVS,
  _M,
  _Ma,
  _Me,
  _MR,
  _MTo,
  _N,
  _O,
  _OB,
  _OI,
  _PFI,
  _Pr,
  _QS,
  _QT,
  _RACOE,
  _RI,
  _RIes,
  _RIL,
  _RIWU,
  _Ro,
  _RS,
  _RT,
  _RTe,
  _SCT,
  _SH,
  _Si,
  _Sig,
  _SLEE,
  _SLWEE,
  _SPT,
  _SPTL,
  _SRe,
  _SRi,
  _SRR,
  _SRRe,
  _SRSL,
  _SSR,
  _SV,
  _TL,
  _TMLE,
  _UM,
  _UU,
  _WU,
  AuthenticationHeaderType,
  n0,
  ResourceNameType,
} from "./schemas_0";
import { CommentMetadata } from "./schemas_2_User";
import { SearchQueryType } from "./schemas_4_Describe";
import { DocumentVersionMetadata, UrlType } from "./schemas_5_Get";

/* eslint no-var: 0 */

export var ResponseItemWebUrl = sim(n0, _RIWU, 0, 8);
export var CreateFolderRequest = struct(
  n0,
  _CFR,
  0,
  [_AT, _N, _PFI],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [() => ResourceNameType, 0],
    0,
  ]
);
export var CreateFolderResponse = struct(n0, _CFRr, 0, [_Me], [[() => FolderMetadata, 0]]);
export var CreateLabelsRequest = struct(
  n0,
  _CLR,
  0,
  [_RI, _L, _AT],
  [
    [0, 1],
    64 | 0,
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
  ]
);
export var CreateLabelsResponse = struct(n0, _CLRr, 0, [], []);
export var DateRangeType = struct(n0, _DRT, 0, [_SV, _EV], [4, 4]);
export var DeleteLabelsRequest = struct(
  n0,
  _DLR,
  0,
  [_RI, _AT, _L, _DA],
  [
    [0, 1],
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _l,
      },
    ],
    [
      2,
      {
        [_hQ]: _dA,
      },
    ],
  ]
);
export var DeleteLabelsResponse = struct(n0, _DLRe, 0, [], []);
export var DocumentMetadata = struct(
  n0,
  _DM,
  0,
  [_Id, _CIr, _PFI, _CT, _MTo, _LVM, _RS, _L],
  [0, 0, 0, 4, 4, [() => DocumentVersionMetadata, 0], 0, 64 | 0]
);
export var DraftUploadOutOfSyncException = error(
  n0,
  _DUOOSE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __DraftUploadOutOfSyncException
);
export var Filters = struct(
  n0,
  _Fi,
  0,
  [_TL, _CC, _RT, _L, _Pr, _AI, _SCT, _SRi, _CR, _MR],
  [
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    () => SearchPrincipalTypeList,
    64 | 0,
    64 | 0,
    () => LongRangeType,
    () => DateRangeType,
    () => DateRangeType,
  ]
);
export var FolderMetadata = struct(
  n0,
  _FM,
  0,
  [_Id, _N, _CIr, _PFI, _CT, _MTo, _RS, _Sig, _L, _Si, _LVS],
  [0, [() => ResourceNameType, 0], 0, 0, 4, 4, 0, 0, 64 | 0, 1, 1]
);
export var GetDocumentRequest = struct(
  n0,
  _GDR,
  0,
  [_AT, _DI, _ICM],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [
      2,
      {
        [_hQ]: _iCM,
      },
    ],
  ]
);
export var GetDocumentResponse = struct(n0, _GDRe, 0, [_Me, _CMu], [[() => DocumentMetadata, 0], 128 | 0]);
export var GetFolderRequest = struct(
  n0,
  _GFR,
  0,
  [_AT, _FI, _ICM],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [
      2,
      {
        [_hQ]: _iCM,
      },
    ],
  ]
);
export var GetFolderResponse = struct(n0, _GFRe, 0, [_Me, _CMu], [[() => FolderMetadata, 0], 128 | 0]);
export var InitiateDocumentVersionUploadRequest = struct(
  n0,
  _IDVUR,
  0,
  [_AT, _Id, _N, _CCT, _CMT, _CTo, _DSIB, _PFI],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    0,
    [() => ResourceNameType, 0],
    4,
    4,
    0,
    1,
    0,
  ]
);
export var InitiateDocumentVersionUploadResponse = struct(
  n0,
  _IDVURn,
  0,
  [_Me, _UM],
  [
    [() => DocumentMetadata, 0],
    [() => UploadMetadata, 0],
  ]
);
export var LongRangeType = struct(n0, _LRT, 0, [_SV, _EV], [1, 1]);
export var ResourceAlreadyCheckedOutException = error(
  n0,
  _RACOE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ResourceAlreadyCheckedOutException
);
export var ResponseItem = struct(
  n0,
  _RIes,
  0,
  [_RTe, _WU, _DM, _FM, _CM, _DVM],
  [
    0,
    [() => ResponseItemWebUrl, 0],
    [() => DocumentMetadata, 0],
    [() => FolderMetadata, 0],
    [() => CommentMetadata, 0],
    [() => DocumentVersionMetadata, 0],
  ]
);
export var SearchPrincipalType = struct(n0, _SPT, 0, [_Id, _Ro], [0, 64 | 0]);
export var SearchResourcesRequest = struct(
  n0,
  _SRR,
  0,
  [_AT, _QT, _QS, _OI, _ARF, _Fi, _OB, _Li, _Ma],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [() => SearchQueryType, 0],
    64 | 0,
    0,
    64 | 0,
    () => Filters,
    () => SearchResultSortList,
    1,
    0,
  ]
);
export var SearchResourcesResponse = struct(n0, _SRRe, 0, [_It, _Ma], [[() => ResponseItemsList, 0], 0]);
export var SearchSortResult = struct(n0, _SSR, 0, [_Fie, _O], [0, 0]);
export var StorageLimitExceededException = error(
  n0,
  _SLEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __StorageLimitExceededException
);
export var StorageLimitWillExceedException = error(
  n0,
  _SLWEE,
  {
    [_e]: _c,
    [_hE]: 413,
  },
  [_M],
  [0],

  __StorageLimitWillExceedException
);
export var TooManyLabelsException = error(
  n0,
  _TMLE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __TooManyLabelsException
);
export var UploadMetadata = struct(n0, _UM, 0, [_UU, _SH], [[() => UrlType, 0], 128 | 0]);
export var AdditionalResponseFieldsList = 64 | 0;

export var ResponseItemsList = list(n0, _RIL, 0, [() => ResponseItem, 0]);
export var SearchAncestorIdList = 64 | 0;

export var SearchCollectionTypeList = 64 | 0;

export var SearchContentCategoryTypeList = 64 | 0;

export var SearchLabelList = 64 | 0;

export var SearchPrincipalRoleList = 64 | 0;

export var SearchPrincipalTypeList = list(n0, _SPTL, 0, () => SearchPrincipalType);
export var SearchQueryScopeTypeList = 64 | 0;

export var SearchResourceTypeList = 64 | 0;

export var SearchResultSortList = list(n0, _SRSL, 0, () => SearchSortResult);
export var SharedLabels = 64 | 0;

export var TextLocaleTypeList = 64 | 0;

export var SignedHeaderMap = 128 | 0;

export var CreateFolder = op(
  n0,
  _CF,
  {
    [_h]: ["POST", "/api/v1/folders", 201],
  },
  () => CreateFolderRequest,
  () => CreateFolderResponse
);
export var CreateLabels = op(
  n0,
  _CLr,
  {
    [_h]: ["PUT", "/api/v1/resources/{ResourceId}/labels", 200],
  },
  () => CreateLabelsRequest,
  () => CreateLabelsResponse
);
export var DeleteLabels = op(
  n0,
  _DL,
  {
    [_h]: ["DELETE", "/api/v1/resources/{ResourceId}/labels", 200],
  },
  () => DeleteLabelsRequest,
  () => DeleteLabelsResponse
);
export var GetDocument = op(
  n0,
  _GD,
  {
    [_h]: ["GET", "/api/v1/documents/{DocumentId}", 200],
  },
  () => GetDocumentRequest,
  () => GetDocumentResponse
);
export var GetFolder = op(
  n0,
  _GF,
  {
    [_h]: ["GET", "/api/v1/folders/{FolderId}", 200],
  },
  () => GetFolderRequest,
  () => GetFolderResponse
);
export var InitiateDocumentVersionUpload = op(
  n0,
  _IDVU,
  {
    [_h]: ["POST", "/api/v1/documents", 201],
  },
  () => InitiateDocumentVersionUploadRequest,
  () => InitiateDocumentVersionUploadResponse
);
export var SearchResources = op(
  n0,
  _SRe,
  {
    [_h]: ["POST", "/api/v1/search", 200],
  },
  () => SearchResourcesRequest,
  () => SearchResourcesResponse
);
