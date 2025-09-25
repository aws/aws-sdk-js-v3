// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Comp,
  _D,
  _Di,
  _FSVN,
  _GSVD,
  _GSVDI,
  _GSVDR,
  _LV,
  _MK,
  _MKV,
  _MKVP,
  _MVe,
  _PSVM,
  _PSVMI,
  _PSVMR,
  _RN,
  _RSVM,
  _RSVMI,
  _RSVMR,
  _SAc,
  _SDTc,
  _SIc,
  _SN,
  _SSVN,
  _SVI,
  _SVN,
  _USI,
  _USp,
  _USR,
  _VN,
  n0,
  SchemaId,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetSchemaVersionsDiffInput = struct(
  n0,
  _GSVDI,
  0,
  [_SIc, _FSVN, _SSVN, _SDTc],
  [() => SchemaId, () => SchemaVersionNumber, () => SchemaVersionNumber, 0]
);
export var GetSchemaVersionsDiffResponse = struct(n0, _GSVDR, 0, [_Di], [0]);
export var MetadataKeyValuePair = struct(n0, _MKVP, 0, [_MK, _MVe], [0, 0]);
export var PutSchemaVersionMetadataInput = struct(
  n0,
  _PSVMI,
  0,
  [_SIc, _SVN, _SVI, _MKV],
  [() => SchemaId, () => SchemaVersionNumber, 0, () => MetadataKeyValuePair]
);
export var PutSchemaVersionMetadataResponse = struct(
  n0,
  _PSVMR,
  0,
  [_SAc, _SN, _RN, _LV, _VN, _SVI, _MK, _MVe],
  [0, 0, 0, 2, 1, 0, 0, 0]
);
export var RemoveSchemaVersionMetadataInput = struct(
  n0,
  _RSVMI,
  0,
  [_SIc, _SVN, _SVI, _MKV],
  [() => SchemaId, () => SchemaVersionNumber, 0, () => MetadataKeyValuePair]
);
export var RemoveSchemaVersionMetadataResponse = struct(
  n0,
  _RSVMR,
  0,
  [_SAc, _SN, _RN, _LV, _VN, _SVI, _MK, _MVe],
  [0, 0, 0, 2, 1, 0, 0, 0]
);
export var SchemaVersionNumber = struct(n0, _SVN, 0, [_LV, _VN], [2, 1]);
export var UpdateSchemaInput = struct(
  n0,
  _USI,
  0,
  [_SIc, _SVN, _Comp, _D],
  [() => SchemaId, () => SchemaVersionNumber, 0, 0]
);
export var UpdateSchemaResponse = struct(n0, _USR, 0, [_SAc, _SN, _RN], [0, 0, 0]);
export var GetSchemaVersionsDiff = op(
  n0,
  _GSVD,
  0,
  () => GetSchemaVersionsDiffInput,
  () => GetSchemaVersionsDiffResponse
);
export var PutSchemaVersionMetadata = op(
  n0,
  _PSVM,
  0,
  () => PutSchemaVersionMetadataInput,
  () => PutSchemaVersionMetadataResponse
);
export var RemoveSchemaVersionMetadata = op(
  n0,
  _RSVM,
  0,
  () => RemoveSchemaVersionMetadataInput,
  () => RemoveSchemaVersionMetadataResponse
);
export var UpdateSchema = op(
  n0,
  _USp,
  0,
  () => UpdateSchemaInput,
  () => UpdateSchemaResponse
);
