// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import { _ARGA, _FL, _Id, _LT, _N, _NLT, _PMRSV, _PMRSVR, _PMRSVRu, _RVe, _Sc, _VTP, _VTPe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutManagedRuleSetVersionsRequest = struct(
  n0,
  _PMRSVR,
  0,
  [_N, _Sc, _Id, _LT, _RVe, _VTP],
  [0, 0, 0, 0, 0, () => VersionsToPublish]
);
export var PutManagedRuleSetVersionsResponse = struct(n0, _PMRSVRu, 0, [_NLT], [0]);
export var VersionToPublish = struct(n0, _VTPe, 0, [_ARGA, _FL], [0, 1]);
export var VersionsToPublish = map(n0, _VTP, 0, 0, () => VersionToPublish);
export var PutManagedRuleSetVersions = op(
  n0,
  _PMRSV,
  0,
  () => PutManagedRuleSetVersionsRequest,
  () => PutManagedRuleSetVersionsResponse
);
