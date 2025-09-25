// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FN, _MPI, _O, _Ref, _RIeq, _SMMEAS, _SMMEASM, _SMMEASR, _SMMI, _SMMIM, _SMMIR, _SR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartMetadataModelExportAsScriptMessage = struct(n0, _SMMEASM, 0, [_MPI, _SR, _O, _FN], [0, 0, 0, 0]);
export var StartMetadataModelExportAsScriptResponse = struct(n0, _SMMEASR, 0, [_RIeq], [0]);
export var StartMetadataModelImportMessage = struct(n0, _SMMIM, 0, [_MPI, _SR, _O, _Ref], [0, 0, 0, 2]);
export var StartMetadataModelImportResponse = struct(n0, _SMMIR, 0, [_RIeq], [0]);
export var StartMetadataModelExportAsScript = op(
  n0,
  _SMMEAS,
  0,
  () => StartMetadataModelExportAsScriptMessage,
  () => StartMetadataModelExportAsScriptResponse
);
export var StartMetadataModelImport = op(
  n0,
  _SMMI,
  0,
  () => StartMetadataModelImportMessage,
  () => StartMetadataModelImportResponse
);
