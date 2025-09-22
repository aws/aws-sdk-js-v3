// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AKKI,
  _CEM,
  _CESR,
  _CI,
  _CPE,
  _DCES,
  _EAR,
  _GDCES,
  _GDCESR,
  _GDCESRe,
  _PDCES,
  _PDCESR,
  _PDCESRu,
  _RCPE,
  _SAKKI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectionPasswordEncryption = struct(n0, _CPE, 0, [_RCPE, _AKKI], [2, 0]);
export var DataCatalogEncryptionSettings = struct(
  n0,
  _DCES,
  0,
  [_EAR, _CPE],
  [() => EncryptionAtRest, () => ConnectionPasswordEncryption]
);
export var EncryptionAtRest = struct(n0, _EAR, 0, [_CEM, _SAKKI, _CESR], [0, 0, 0]);
export var GetDataCatalogEncryptionSettingsRequest = struct(n0, _GDCESR, 0, [_CI], [0]);
export var GetDataCatalogEncryptionSettingsResponse = struct(
  n0,
  _GDCESRe,
  0,
  [_DCES],
  [() => DataCatalogEncryptionSettings]
);
export var PutDataCatalogEncryptionSettingsRequest = struct(
  n0,
  _PDCESR,
  0,
  [_CI, _DCES],
  [0, () => DataCatalogEncryptionSettings]
);
export var PutDataCatalogEncryptionSettingsResponse = struct(n0, _PDCESRu, 0, [], []);
export var GetDataCatalogEncryptionSettings = op(
  n0,
  _GDCES,
  0,
  () => GetDataCatalogEncryptionSettingsRequest,
  () => GetDataCatalogEncryptionSettingsResponse
);
export var PutDataCatalogEncryptionSettings = op(
  n0,
  _PDCES,
  0,
  () => PutDataCatalogEncryptionSettingsRequest,
  () => PutDataCatalogEncryptionSettingsResponse
);
