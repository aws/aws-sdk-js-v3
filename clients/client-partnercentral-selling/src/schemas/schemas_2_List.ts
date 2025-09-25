// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _C,
  _CB,
  _EI,
  _EIn,
  _ERAS,
  _ERASL,
  _ERASn,
  _h,
  _LERA,
  _LERAR,
  _LERARi,
  _LRS,
  _LRSR,
  _LRSRi,
  _MR,
  _NT,
  _R,
  _RI,
  _RIe,
  _RSS,
  _RSSe,
  _RSSL,
  _RSTI,
  _RSTN,
  _RT,
  n0,
} from "./schemas_0";
import { AwsAccount } from "./schemas_18_Engagement";

/* eslint no-var: 0 */

export var EngagementResourceAssociationSummary = struct(
  n0,
  _ERAS,
  0,
  [_C, _EIn, _RT, _RIe, _CB],
  [0, 0, 0, 0, [() => AwsAccount, 0]]
);
export var ListEngagementResourceAssociationsRequest = struct(
  n0,
  _LERAR,
  0,
  [_C, _MR, _NT, _EI, _RT, _RI, _CB],
  [0, 1, 0, 0, 0, 0, [() => AwsAccount, 0]]
);
export var ListEngagementResourceAssociationsResponse = struct(
  n0,
  _LERARi,
  0,
  [_ERASn, _NT],
  [[() => EngagementResourceAssociationSummaryList, 0], 0]
);
export var ListResourceSnapshotsRequest = struct(
  n0,
  _LRSR,
  0,
  [_C, _MR, _NT, _EI, _RT, _RI, _RSTI, _CB],
  [0, 1, 0, 0, 0, 0, 0, [() => AwsAccount, 0]]
);
export var ListResourceSnapshotsResponse = struct(
  n0,
  _LRSRi,
  0,
  [_RSS, _NT],
  [[() => ResourceSnapshotSummaryList, 0], 0]
);
export var ResourceSnapshotSummary = struct(
  n0,
  _RSSe,
  0,
  [_Ar, _R, _RT, _RIe, _RSTN, _CB],
  [0, 1, 0, 0, 0, [() => AwsAccount, 0]]
);
export var EngagementResourceAssociationSummaryList = list(n0, _ERASL, 0, [
  () => EngagementResourceAssociationSummary,
  0,
]);
export var ResourceSnapshotSummaryList = list(n0, _RSSL, 0, [() => ResourceSnapshotSummary, 0]);
export var ListEngagementResourceAssociations = op(
  n0,
  _LERA,
  {
    [_h]: ["POST", "/ListEngagementResourceAssociations", 200],
  },
  () => ListEngagementResourceAssociationsRequest,
  () => ListEngagementResourceAssociationsResponse
);
export var ListResourceSnapshots = op(
  n0,
  _LRS,
  {
    [_h]: ["POST", "/ListResourceSnapshots", 200],
  },
  () => ListResourceSnapshotsRequest,
  () => ListResourceSnapshotsResponse
);
