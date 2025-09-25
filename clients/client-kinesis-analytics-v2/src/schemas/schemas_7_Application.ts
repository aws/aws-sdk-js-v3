// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AARN, _AM, _AN, _AS, _ASp, _ASpp, _AVI, _L, _LA, _LAR, _LARi, _NT, _RE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationSummary = struct(n0, _ASp, 0, [_AN, _AARN, _AS, _AVI, _RE, _AM], [0, 0, 0, 1, 0, 0]);
export var ListApplicationsRequest = struct(n0, _LAR, 0, [_L, _NT], [1, 0]);
export var ListApplicationsResponse = struct(n0, _LARi, 0, [_ASpp, _NT], [() => ApplicationSummaries, 0]);
export var ApplicationSummaries = list(n0, _ASpp, 0, () => ApplicationSummary);
export var ListApplications = op(
  n0,
  _LA,
  0,
  () => ListApplicationsRequest,
  () => ListApplicationsResponse
);
