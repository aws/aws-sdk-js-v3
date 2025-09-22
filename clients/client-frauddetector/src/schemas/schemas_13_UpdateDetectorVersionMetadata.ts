// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _d, _dI, _dVI, _UDVM, _UDVMR, _UDVMRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateDetectorVersionMetadataRequest = struct(n0, _UDVMR, 0, [_dI, _dVI, _d], [0, 0, 0]);
export var UpdateDetectorVersionMetadataResult = struct(n0, _UDVMRp, 0, [], []);
export var UpdateDetectorVersionMetadata = op(
  n0,
  _UDVM,
  0,
  () => UpdateDetectorVersionMetadataRequest,
  () => UpdateDetectorVersionMetadataResult
);
