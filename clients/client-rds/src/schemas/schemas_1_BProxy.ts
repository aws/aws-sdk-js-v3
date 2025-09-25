// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DBProxyTargetGroupNotFoundFault as __DBProxyTargetGroupNotFoundFault,
  DBSnapshotTenantDatabaseNotFoundFault as __DBSnapshotTenantDatabaseNotFoundFault,
} from "../models/index";
import {
  _aQE,
  _ATTR,
  _ATTRM,
  _c,
  _DBPTGNFF,
  _DBSTDNFF,
  _e,
  _Fi,
  _hE,
  _LTFR,
  _LTFRM,
  _m,
  _RN,
  _RTFR,
  _RTFRM,
  _T,
  _TK,
  _TL,
  _TLM,
  FilterList,
  n0,
  TagList,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddTagsToResourceMessage = struct(n0, _ATTRM, 0, [_RN, _T], [0, [() => TagList, 0]]);
export var DBProxyTargetGroupNotFoundFault = error(
  n0,
  _DBPTGNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DBProxyTargetGroupNotFoundFault`, 404],
  },
  [_m],
  [0],

  __DBProxyTargetGroupNotFoundFault
);
export var DBSnapshotTenantDatabaseNotFoundFault = error(
  n0,
  _DBSTDNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DBSnapshotTenantDatabaseNotFoundFault`, 404],
  },
  [_m],
  [0],

  __DBSnapshotTenantDatabaseNotFoundFault
);
export var ListTagsForResourceMessage = struct(n0, _LTFRM, 0, [_RN, _Fi], [0, [() => FilterList, 0]]);
export var RemoveTagsFromResourceMessage = struct(n0, _RTFRM, 0, [_RN, _TK], [0, 64 | 0]);
export var TagListMessage = struct(n0, _TLM, 0, [_TL], [[() => TagList, 0]]);
export var KeyList = 64 | 0;

export var AddTagsToResource = op(
  n0,
  _ATTR,
  0,
  () => AddTagsToResourceMessage,
  () => Unit
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceMessage,
  () => TagListMessage
);
export var RemoveTagsFromResource = op(
  n0,
  _RTFR,
  0,
  () => RemoveTagsFromResourceMessage,
  () => Unit
);
