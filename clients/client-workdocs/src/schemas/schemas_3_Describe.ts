// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { RequestedEntityTooLargeException as __RequestedEntityTooLargeException } from "../models/index";
import {
  _A,
  _Ac,
  _AT,
  _aT,
  _ATc,
  _c,
  _CL,
  _CM,
  _Com,
  _Comp,
  _cT,
  _CTol,
  _D,
  _DAe,
  _DAR,
  _DARe,
  _DCe,
  _DCRe,
  _DCRes,
  _DDVe,
  _DDVRe,
  _DDVRes,
  _DFCe,
  _DFCRe,
  _DFCRes,
  _DI,
  _DML,
  _DNSe,
  _DNSRe,
  _DNSRes,
  _DRF,
  _DRFR,
  _DRFRe,
  _DRP,
  _DRPR,
  _DRPRe,
  _DUes,
  _DURes,
  _DUResc,
  _DV,
  _DVML,
  _e,
  _EA,
  _ET,
  _eT,
  _F,
  _f,
  _FI,
  _FML,
  _Fo,
  _G,
  _GDP,
  _GDPR,
  _GDPRe,
  _GFP,
  _GFPR,
  _GFPRe,
  _GN,
  _GR,
  _GRR,
  _GRRe,
  _h,
  _hE,
  _hH,
  _hQ,
  _I,
  _i,
  _Id,
  _IIA,
  _iIA,
  _IIAn,
  _In,
  _Li,
  _li,
  _M,
  _m,
  _Ma,
  _N,
  _O,
  _o,
  _OI,
  _oI,
  _ON,
  _OP,
  _OUL,
  _Ow,
  _P,
  _Pat,
  _PI,
  _pI,
  _PIe,
  _PIL,
  _PIr,
  _PL,
  _Pr,
  _Pri,
  _Q,
  _q,
  _R,
  _RETLE,
  _RI,
  _rI,
  _RM,
  _Ro,
  _RP,
  _RPC,
  _RPCL,
  _s,
  _SL,
  _So,
  _sT,
  _STt,
  _Sub,
  _Sur,
  _T,
  _t,
  _TNOU,
  _TS,
  _UA,
  _UI,
  _uI,
  _UIs,
  _uIs,
  _UML,
  _UMs,
  _Us,
  _Use,
  _VI,
  AuthenticationHeaderType,
  n0,
  ResourceNameType,
} from "./schemas_0";
import { DocumentMetadata, FolderMetadata } from "./schemas_1_Folder";
import {
  Comment,
  CommentMetadata,
  EmailAddressType,
  User,
  UserAttributeValueType,
  UsernameType,
} from "./schemas_2_User";
import { SearchQueryType } from "./schemas_4_Describe";
import { DocumentVersionMetadata } from "./schemas_5_Get";
import { GroupMetadataList } from "./schemas_9_Describe";
import { Subscription } from "./schemas_11_Notification";

/* eslint no-var: 0 */

export var Activity = struct(
  n0,
  _Ac,
  0,
  [_T, _TS, _IIA, _OI, _I, _P, _RM, _OP, _CM],
  [
    0,
    4,
    2,
    0,
    [() => UserMetadata, 0],
    [() => Participants, 0],
    [() => ResourceMetadata, 0],
    [() => ResourceMetadata, 0],
    [() => CommentMetadata, 0],
  ]
);
export var DescribeActivitiesRequest = struct(
  n0,
  _DAR,
  0,
  [_AT, _STt, _ET, _OI, _ATc, _RI, _UI, _IIAn, _Li, _Ma],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [
      4,
      {
        [_hQ]: _sT,
      },
    ],
    [
      4,
      {
        [_hQ]: _eT,
      },
    ],
    [
      0,
      {
        [_hQ]: _oI,
      },
    ],
    [
      0,
      {
        [_hQ]: _aT,
      },
    ],
    [
      0,
      {
        [_hQ]: _rI,
      },
    ],
    [
      0,
      {
        [_hQ]: _uI,
      },
    ],
    [
      2,
      {
        [_hQ]: _iIA,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
    [
      0,
      {
        [_hQ]: _m,
      },
    ],
  ]
);
export var DescribeActivitiesResponse = struct(n0, _DARe, 0, [_UA, _Ma], [[() => UserActivities, 0], 0]);
export var DescribeCommentsRequest = struct(
  n0,
  _DCRe,
  0,
  [_AT, _DI, _VI, _Li, _Ma],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
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
        [_hQ]: _m,
      },
    ],
  ]
);
export var DescribeCommentsResponse = struct(n0, _DCRes, 0, [_Com, _Ma], [[() => CommentList, 0], 0]);
export var DescribeDocumentVersionsRequest = struct(
  n0,
  _DDVRe,
  0,
  [_AT, _DI, _Ma, _Li, _In, _F],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _m,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
    [
      0,
      {
        [_hQ]: _f,
      },
    ],
  ]
);
export var DescribeDocumentVersionsResponse = struct(
  n0,
  _DDVRes,
  0,
  [_DV, _Ma],
  [[() => DocumentVersionMetadataList, 0], 0]
);
export var DescribeFolderContentsRequest = struct(
  n0,
  _DFCRe,
  0,
  [_AT, _FI, _So, _O, _Li, _Ma, _T, _In],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _o,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
    [
      0,
      {
        [_hQ]: _m,
      },
    ],
    [
      0,
      {
        [_hQ]: _t,
      },
    ],
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
  ]
);
export var DescribeFolderContentsResponse = struct(
  n0,
  _DFCRes,
  0,
  [_Fo, _D, _Ma],
  [[() => FolderMetadataList, 0], [() => DocumentMetadataList, 0], 0]
);
export var DescribeNotificationSubscriptionsRequest = struct(
  n0,
  _DNSRe,
  0,
  [_OI, _Ma, _Li],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _m,
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
export var DescribeNotificationSubscriptionsResponse = struct(n0, _DNSRes, 0, [_Sub, _Ma], [() => SubscriptionList, 0]);
export var DescribeResourcePermissionsRequest = struct(
  n0,
  _DRPR,
  0,
  [_AT, _RI, _PIr, _Li, _Ma],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
    [
      0,
      {
        [_hQ]: _m,
      },
    ],
  ]
);
export var DescribeResourcePermissionsResponse = struct(n0, _DRPRe, 0, [_Pr, _Ma], [() => PrincipalList, 0]);
export var DescribeRootFoldersRequest = struct(
  n0,
  _DRFR,
  0,
  [_AT, _Li, _Ma],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
    [
      0,
      {
        [_hQ]: _m,
      },
    ],
  ]
);
export var DescribeRootFoldersResponse = struct(n0, _DRFRe, 0, [_Fo, _Ma], [[() => FolderMetadataList, 0], 0]);
export var DescribeUsersRequest = struct(
  n0,
  _DURes,
  0,
  [_AT, _OI, _UIs, _Q, _In, _O, _So, _Ma, _Li, _F],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [
      0,
      {
        [_hQ]: _oI,
      },
    ],
    [
      0,
      {
        [_hQ]: _uIs,
      },
    ],
    [
      () => SearchQueryType,
      {
        [_hQ]: _q,
      },
    ],
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
    [
      0,
      {
        [_hQ]: _o,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _m,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
    [
      0,
      {
        [_hQ]: _f,
      },
    ],
  ]
);
export var DescribeUsersResponse = struct(n0, _DUResc, 0, [_Use, _TNOU, _Ma], [[() => OrganizationUserList, 0], 1, 0]);
export var GetDocumentPathRequest = struct(
  n0,
  _GDPR,
  0,
  [_AT, _DI, _Li, _F, _Ma],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
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
        [_hQ]: _f,
      },
    ],
    [
      0,
      {
        [_hQ]: _m,
      },
    ],
  ]
);
export var GetDocumentPathResponse = struct(n0, _GDPRe, 0, [_Pat], [[() => ResourcePath, 0]]);
export var GetFolderPathRequest = struct(
  n0,
  _GFPR,
  0,
  [_AT, _FI, _Li, _F, _Ma],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
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
        [_hQ]: _f,
      },
    ],
    [
      0,
      {
        [_hQ]: _m,
      },
    ],
  ]
);
export var GetFolderPathResponse = struct(n0, _GFPRe, 0, [_Pat], [[() => ResourcePath, 0]]);
export var GetResourcesRequest = struct(
  n0,
  _GRR,
  0,
  [_AT, _UI, _CTol, _Li, _Ma],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [
      0,
      {
        [_hQ]: _uI,
      },
    ],
    [
      0,
      {
        [_hQ]: _cT,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
    [
      0,
      {
        [_hQ]: _m,
      },
    ],
  ]
);
export var GetResourcesResponse = struct(
  n0,
  _GRRe,
  0,
  [_Fo, _D, _Ma],
  [[() => FolderMetadataList, 0], [() => DocumentMetadataList, 0], 0]
);
export var Participants = struct(n0, _P, 0, [_Use, _G], [[() => UserMetadataList, 0], () => GroupMetadataList]);
export var PermissionInfo = struct(n0, _PIe, 0, [_R, _T], [0, 0]);
export var Principal = struct(n0, _Pri, 0, [_Id, _T, _Ro], [0, 0, () => PermissionInfoList]);
export var RequestedEntityTooLargeException = error(
  n0,
  _RETLE,
  {
    [_e]: _c,
    [_hE]: 413,
  },
  [_M],
  [0],

  __RequestedEntityTooLargeException
);
export var ResourceMetadata = struct(
  n0,
  _RM,
  0,
  [_T, _N, _ON, _Id, _VI, _Ow, _PI],
  [0, [() => ResourceNameType, 0], [() => ResourceNameType, 0], 0, 0, [() => UserMetadata, 0], 0]
);
export var ResourcePath = struct(n0, _RP, 0, [_Comp], [[() => ResourcePathComponentList, 0]]);
export var ResourcePathComponent = struct(n0, _RPC, 0, [_Id, _N], [0, [() => ResourceNameType, 0]]);
export var UserMetadata = struct(
  n0,
  _UMs,
  0,
  [_Id, _Us, _GN, _Sur, _EA],
  [
    0,
    [() => UsernameType, 0],
    [() => UserAttributeValueType, 0],
    [() => UserAttributeValueType, 0],
    [() => EmailAddressType, 0],
  ]
);
export var CommentList = list(n0, _CL, 0, [() => Comment, 0]);
export var DocumentMetadataList = list(n0, _DML, 0, [() => DocumentMetadata, 0]);
export var DocumentVersionMetadataList = list(n0, _DVML, 0, [() => DocumentVersionMetadata, 0]);
export var FolderMetadataList = list(n0, _FML, 0, [() => FolderMetadata, 0]);
export var OrganizationUserList = list(n0, _OUL, 0, [() => User, 0]);
export var PermissionInfoList = list(n0, _PIL, 0, () => PermissionInfo);
export var PrincipalList = list(n0, _PL, 0, () => Principal);
export var ResourcePathComponentList = list(n0, _RPCL, 0, [() => ResourcePathComponent, 0]);
export var SubscriptionList = list(n0, _SL, 0, () => Subscription);
export var UserActivities = list(n0, _UA, 0, [() => Activity, 0]);
export var UserMetadataList = list(n0, _UML, 0, [() => UserMetadata, 0]);
export var DescribeActivities = op(
  n0,
  _DAe,
  {
    [_h]: ["GET", "/api/v1/activities", 200],
  },
  () => DescribeActivitiesRequest,
  () => DescribeActivitiesResponse
);
export var DescribeComments = op(
  n0,
  _DCe,
  {
    [_h]: ["GET", "/api/v1/documents/{DocumentId}/versions/{VersionId}/comments", 200],
  },
  () => DescribeCommentsRequest,
  () => DescribeCommentsResponse
);
export var DescribeDocumentVersions = op(
  n0,
  _DDVe,
  {
    [_h]: ["GET", "/api/v1/documents/{DocumentId}/versions", 200],
  },
  () => DescribeDocumentVersionsRequest,
  () => DescribeDocumentVersionsResponse
);
export var DescribeFolderContents = op(
  n0,
  _DFCe,
  {
    [_h]: ["GET", "/api/v1/folders/{FolderId}/contents", 200],
  },
  () => DescribeFolderContentsRequest,
  () => DescribeFolderContentsResponse
);
export var DescribeNotificationSubscriptions = op(
  n0,
  _DNSe,
  {
    [_h]: ["GET", "/api/v1/organizations/{OrganizationId}/subscriptions", 200],
  },
  () => DescribeNotificationSubscriptionsRequest,
  () => DescribeNotificationSubscriptionsResponse
);
export var DescribeResourcePermissions = op(
  n0,
  _DRP,
  {
    [_h]: ["GET", "/api/v1/resources/{ResourceId}/permissions", 200],
  },
  () => DescribeResourcePermissionsRequest,
  () => DescribeResourcePermissionsResponse
);
export var DescribeRootFolders = op(
  n0,
  _DRF,
  {
    [_h]: ["GET", "/api/v1/me/root", 200],
  },
  () => DescribeRootFoldersRequest,
  () => DescribeRootFoldersResponse
);
export var DescribeUsers = op(
  n0,
  _DUes,
  {
    [_h]: ["GET", "/api/v1/users", 200],
  },
  () => DescribeUsersRequest,
  () => DescribeUsersResponse
);
export var GetDocumentPath = op(
  n0,
  _GDP,
  {
    [_h]: ["GET", "/api/v1/documents/{DocumentId}/path", 200],
  },
  () => GetDocumentPathRequest,
  () => GetDocumentPathResponse
);
export var GetFolderPath = op(
  n0,
  _GFP,
  {
    [_h]: ["GET", "/api/v1/folders/{FolderId}/path", 200],
  },
  () => GetFolderPathRequest,
  () => GetFolderPathResponse
);
export var GetResources = op(
  n0,
  _GR,
  {
    [_h]: ["GET", "/api/v1/resources", 200],
  },
  () => GetResourcesRequest,
  () => GetResourcesResponse
);
