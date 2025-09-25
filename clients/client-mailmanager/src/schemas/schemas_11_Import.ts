// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _JI, _SALIJ, _SALIJR, _SALIJRt, _SALIJRto, _SALIJRtop, _SALIJt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartAddressListImportJobRequest = struct(n0, _SALIJR, 0, [_JI], [0]);
export var StartAddressListImportJobResponse = struct(n0, _SALIJRt, 0, [], []);
export var StopAddressListImportJobRequest = struct(n0, _SALIJRto, 0, [_JI], [0]);
export var StopAddressListImportJobResponse = struct(n0, _SALIJRtop, 0, [], []);
export var StartAddressListImportJob = op(
  n0,
  _SALIJ,
  2,
  () => StartAddressListImportJobRequest,
  () => StartAddressListImportJobResponse
);
export var StopAddressListImportJob = op(
  n0,
  _SALIJt,
  2,
  () => StopAddressListImportJobRequest,
  () => StopAddressListImportJobResponse
);
