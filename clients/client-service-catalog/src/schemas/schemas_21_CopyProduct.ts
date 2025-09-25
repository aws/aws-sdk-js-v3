// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AL, _CO, _CPI, _CPO, _CPop, _CPT, _IT, _SPA, _SPAI, _SPAP, _TPI, _TPN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CopyProductInput = struct(
  n0,
  _CPI,
  0,
  [_AL, _SPA, _TPI, _TPN, _SPAI, _CO, _IT],
  [0, 0, 0, 0, list(n0, _SPAP, 0, 128 | 0), 64 | 0, [0, 4]]
);
export var CopyProductOutput = struct(n0, _CPO, 0, [_CPT], [0]);
export var CopyOptions = 64 | 0;

export var SourceProvisioningArtifactProperties = list(n0, _SPAP, 0, 128 | 0);
export var SourceProvisioningArtifactPropertiesMap = 128 | 0;

export var CopyProduct = op(
  n0,
  _CPop,
  0,
  () => CopyProductInput,
  () => CopyProductOutput
);
