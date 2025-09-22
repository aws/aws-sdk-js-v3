// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _A,
  _c,
  _CE,
  _DEOJ,
  _DEOJI,
  _DEOJO,
  _DVEJ,
  _DVEJI,
  _DVEJO,
  _e,
  _h,
  _hE,
  _M,
  _RI,
  _SEOJIt,
  _SEOJOt,
  _SEOJt,
  _SVEJIt,
  _SVEJOt,
  _SVEJt,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _RI],
  [0, 0],

  __ConflictException
);
export var DeleteEarthObservationJobInput = struct(n0, _DEOJI, 0, [_A], [[0, 1]]);
export var DeleteEarthObservationJobOutput = struct(n0, _DEOJO, 0, [], []);
export var DeleteVectorEnrichmentJobInput = struct(n0, _DVEJI, 0, [_A], [[0, 1]]);
export var DeleteVectorEnrichmentJobOutput = struct(n0, _DVEJO, 0, [], []);
export var StopEarthObservationJobInput = struct(n0, _SEOJIt, 0, [_A], [0]);
export var StopEarthObservationJobOutput = struct(n0, _SEOJOt, 0, [], []);
export var StopVectorEnrichmentJobInput = struct(n0, _SVEJIt, 0, [_A], [0]);
export var StopVectorEnrichmentJobOutput = struct(n0, _SVEJOt, 0, [], []);
export var DeleteEarthObservationJob = op(
  n0,
  _DEOJ,
  {
    [_h]: ["DELETE", "/earth-observation-jobs/{Arn}", 200],
  },
  () => DeleteEarthObservationJobInput,
  () => DeleteEarthObservationJobOutput
);
export var DeleteVectorEnrichmentJob = op(
  n0,
  _DVEJ,
  {
    [_h]: ["DELETE", "/vector-enrichment-jobs/{Arn}", 200],
  },
  () => DeleteVectorEnrichmentJobInput,
  () => DeleteVectorEnrichmentJobOutput
);
export var StopEarthObservationJob = op(
  n0,
  _SEOJt,
  {
    [_h]: ["POST", "/earth-observation-jobs/stop", 200],
  },
  () => StopEarthObservationJobInput,
  () => StopEarthObservationJobOutput
);
export var StopVectorEnrichmentJob = op(
  n0,
  _SVEJt,
  {
    [_h]: ["POST", "/vector-enrichment-jobs/stop", 200],
  },
  () => StopVectorEnrichmentJobInput,
  () => StopVectorEnrichmentJobOutput
);
