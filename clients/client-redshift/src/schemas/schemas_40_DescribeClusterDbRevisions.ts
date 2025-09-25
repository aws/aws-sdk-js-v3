// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CDR,
  _CDRL,
  _CDRl,
  _CDRM,
  _CDRu,
  _CIl,
  _D,
  _DCDR,
  _DCDRM,
  _DRa,
  _DRRD,
  _M,
  _MR,
  _RT,
  _RTev,
  _RTL,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterDbRevision = struct(
  n0,
  _CDR,
  0,
  [_CIl, _CDRu, _DRRD, _RT],
  [0, 0, 4, [() => RevisionTargetsList, 0]]
);
export var ClusterDbRevisionsMessage = struct(n0, _CDRM, 0, [_M, _CDRl], [0, [() => ClusterDbRevisionsList, 0]]);
export var DescribeClusterDbRevisionsMessage = struct(n0, _DCDRM, 0, [_CIl, _MR, _M], [0, 1, 0]);
export var RevisionTarget = struct(n0, _RTev, 0, [_DRa, _D, _DRRD], [0, 0, 4]);
export var ClusterDbRevisionsList = list(n0, _CDRL, 0, [
  () => ClusterDbRevision,
  {
    [_xN]: _CDR,
  },
]);
export var RevisionTargetsList = list(n0, _RTL, 0, [
  () => RevisionTarget,
  {
    [_xN]: _RTev,
  },
]);
export var DescribeClusterDbRevisions = op(
  n0,
  _DCDR,
  0,
  () => DescribeClusterDbRevisionsMessage,
  () => ClusterDbRevisionsMessage
);
