// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ISC, _iSC, _PISC, _PISCR, _PISCRu, _rI, _rN, _sOP, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ImageScanningConfiguration = struct(n0, _ISC, 0, [_sOP], [2]);
export var PutImageScanningConfigurationRequest = struct(
  n0,
  _PISCR,
  0,
  [_rI, _rN, _iSC],
  [0, 0, () => ImageScanningConfiguration]
);
export var PutImageScanningConfigurationResponse = struct(
  n0,
  _PISCRu,
  0,
  [_rI, _rN, _iSC],
  [0, 0, () => ImageScanningConfiguration]
);
export var PutImageScanningConfiguration = op(
  n0,
  _PISC,
  0,
  () => PutImageScanningConfigurationRequest,
  () => PutImageScanningConfigurationResponse
);
