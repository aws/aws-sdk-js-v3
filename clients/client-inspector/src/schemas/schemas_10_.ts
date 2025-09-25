// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aRA, _cou, _dS, _GTM, _GTMR, _GTMRe, _mT, _TM, _tM, _TML, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetTelemetryMetadataRequest = struct(n0, _GTMR, 0, [_aRA], [0]);
export var GetTelemetryMetadataResponse = struct(n0, _GTMRe, 0, [_tM], [() => TelemetryMetadataList]);
export var TelemetryMetadata = struct(n0, _TM, 0, [_mT, _cou, _dS], [0, 1, 1]);
export var TelemetryMetadataList = list(n0, _TML, 0, () => TelemetryMetadata);
export var GetTelemetryMetadata = op(
  n0,
  _GTM,
  0,
  () => GetTelemetryMetadataRequest,
  () => GetTelemetryMetadataResponse
);
