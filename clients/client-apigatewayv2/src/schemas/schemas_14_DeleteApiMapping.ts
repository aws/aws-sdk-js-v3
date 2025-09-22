// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AMI, _DAM, _DAMR, _DN, _ht, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApiMappingRequest = struct(
  n0,
  _DAMR,
  0,
  [_AMI, _DN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteApiMapping = op(
  n0,
  _DAM,
  {
    [_ht]: ["DELETE", "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}", 204],
  },
  () => DeleteApiMappingRequest,
  () => Unit
);
