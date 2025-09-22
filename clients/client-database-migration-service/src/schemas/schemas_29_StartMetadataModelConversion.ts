// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _MPI, _RIeq, _SMMC, _SMMCM, _SMMCR, _SR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartMetadataModelConversionMessage = struct(n0, _SMMCM, 0, [_MPI, _SR], [0, 0]);
export var StartMetadataModelConversionResponse = struct(n0, _SMMCR, 0, [_RIeq], [0]);
export var StartMetadataModelConversion = op(
  n0,
  _SMMC,
  0,
  () => StartMetadataModelConversionMessage,
  () => StartMetadataModelConversionResponse
);
