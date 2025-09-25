// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSS, _CSSR, _CSSRr, _DF, _DN, _DU, _EK, _h, _RA, _SDN, _SI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSegmentSnapshotRequest = struct(
  n0,
  _CSSR,
  0,
  [_DN, _SDN, _DF, _EK, _RA, _DU],
  [[0, 1], [0, 1], 0, 0, 0, 0]
);
export var CreateSegmentSnapshotResponse = struct(n0, _CSSRr, 0, [_SI], [0]);
export var CreateSegmentSnapshot = op(
  n0,
  _CSS,
  {
    [_h]: ["POST", "/domains/{DomainName}/segments/{SegmentDefinitionName}/snapshots", 200],
  },
  () => CreateSegmentSnapshotRequest,
  () => CreateSegmentSnapshotResponse
);
