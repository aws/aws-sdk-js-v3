// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _FI,
  _FML,
  _h,
  _hQ,
  _LFM,
  _LFMR,
  _LFMRi,
  _MA,
  _MI,
  _MIAP,
  _MR,
  _mr,
  _NT,
  _nt,
  _RI,
  _St,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListFolderMembersRequest = struct(
  n0,
  _LFMR,
  0,
  [_AAI, _FI, _NT, _MR],
  [
    [0, 1],
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
export var ListFolderMembersResponse = struct(
  n0,
  _LFMRi,
  0,
  [_St, _FML, _NT, _RI],
  [[1, 32], () => FolderMemberList, 0, 0]
);
export var MemberIdArnPair = struct(n0, _MIAP, 0, [_MI, _MA], [0, 0]);
export var FolderMemberList = list(n0, _FML, 0, () => MemberIdArnPair);
export var ListFolderMembers = op(
  n0,
  _LFM,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/folders/{FolderId}/members", 200],
  },
  () => ListFolderMembersRequest,
  () => ListFolderMembersResponse
);
