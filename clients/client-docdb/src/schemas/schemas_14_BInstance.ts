// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DBInstanceNotFoundFault as __DBInstanceNotFoundFault } from "../models/index";
import {
  _aQE,
  _ATTR,
  _ATTRM,
  _c,
  _DBINFF,
  _e,
  _F,
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
} from "./schemas_0";
import { Unit } from "./schemas_10_Cluster";
import { TagList } from "./schemas_12_BCluster";

/* eslint no-var: 0 */

export var AddTagsToResourceMessage = struct(n0, _ATTRM, 0, [_RN, _T], [0, [() => TagList, 0]]);
export var DBInstanceNotFoundFault = error(
  n0,
  _DBINFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DBInstanceNotFound`, 404],
  },
  [_m],
  [0],

  __DBInstanceNotFoundFault
);
export var ListTagsForResourceMessage = struct(n0, _LTFRM, 0, [_RN, _F], [0, [() => FilterList, 0]]);
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
