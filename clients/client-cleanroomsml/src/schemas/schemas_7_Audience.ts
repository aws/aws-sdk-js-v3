// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aGJA, _AS, _DAGJ, _DAGJR, _ht, _t, _v, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AudienceSize = struct(n0, _AS, 0, [_t, _v], [0, 1]);
export var DeleteAudienceGenerationJobRequest = struct(n0, _DAGJR, 0, [_aGJA], [[0, 1]]);
export var DeleteAudienceGenerationJob = op(
  n0,
  _DAGJ,
  {
    [_ht]: ["DELETE", "/audience-generation-job/{audienceGenerationJobArn}", 200],
  },
  () => DeleteAudienceGenerationJobRequest,
  () => Unit
);
