// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _A,
  _c,
  _CT,
  _CTr,
  _e,
  _EEOJ,
  _EEOJI,
  _EEOJO,
  _ERA,
  _ES,
  _ESDI,
  _ESI,
  _EVEJ,
  _EVEJI,
  _EVEJO,
  _EVEJOC,
  _h,
  _hE,
  _KKI,
  _M,
  _OC,
  _OCI,
  _RI,
  _SD,
  _SQEE,
  _SU,
  _VEJSD,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ExportEarthObservationJobInput = struct(
  n0,
  _EEOJI,
  0,
  [_A, _CT, _ERA, _OC, _ESI],
  [0, [0, 4], 0, () => OutputConfigInput, 2]
);
export var ExportEarthObservationJobOutput = struct(
  n0,
  _EEOJO,
  0,
  [_A, _CTr, _ES, _ERA, _OC, _ESI],
  [0, 5, 0, 0, () => OutputConfigInput, 2]
);
export var ExportS3DataInput = struct(n0, _ESDI, 0, [_SU, _KKI], [0, 0]);
export var ExportVectorEnrichmentJobInput = struct(
  n0,
  _EVEJI,
  0,
  [_A, _CT, _ERA, _OC],
  [0, [0, 4], 0, () => ExportVectorEnrichmentJobOutputConfig]
);
export var ExportVectorEnrichmentJobOutput = struct(
  n0,
  _EVEJO,
  0,
  [_A, _CTr, _ERA, _ES, _OC],
  [0, 5, 0, 0, () => ExportVectorEnrichmentJobOutputConfig]
);
export var ExportVectorEnrichmentJobOutputConfig = struct(n0, _EVEJOC, 0, [_SD], [() => VectorEnrichmentJobS3Data]);
export var OutputConfigInput = struct(n0, _OCI, 0, [_SD], [() => ExportS3DataInput]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M, _RI],
  [0, 0],

  __ServiceQuotaExceededException
);
export var VectorEnrichmentJobS3Data = struct(n0, _VEJSD, 0, [_SU, _KKI], [0, 0]);
export var ExportEarthObservationJob = op(
  n0,
  _EEOJ,
  {
    [_h]: ["POST", "/export-earth-observation-job", 200],
  },
  () => ExportEarthObservationJobInput,
  () => ExportEarthObservationJobOutput
);
export var ExportVectorEnrichmentJob = op(
  n0,
  _EVEJ,
  {
    [_h]: ["POST", "/export-vector-enrichment-jobs", 200],
  },
  () => ExportVectorEnrichmentJobInput,
  () => ExportVectorEnrichmentJobOutput
);
