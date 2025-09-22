// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AARN, _AN, _AVI, _CAVI, _DARDS, _DARDSR, _DARDSRe, _RI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApplicationReferenceDataSourceRequest = struct(n0, _DARDSR, 0, [_AN, _CAVI, _RI], [0, 1, 0]);
export var DeleteApplicationReferenceDataSourceResponse = struct(n0, _DARDSRe, 0, [_AARN, _AVI], [0, 1]);
export var DeleteApplicationReferenceDataSource = op(
  n0,
  _DARDS,
  0,
  () => DeleteApplicationReferenceDataSourceRequest,
  () => DeleteApplicationReferenceDataSourceResponse
);
