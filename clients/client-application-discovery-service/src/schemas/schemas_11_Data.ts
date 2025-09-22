// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _BDID, _BDIDE, _BDIDEL, _BDIDR, _BDIDRa, _dH, _eC, _eD, _er, _iTI, _iTIm, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BatchDeleteImportDataError = struct(n0, _BDIDE, 0, [_iTI, _eC, _eD], [0, 0, 0]);
export var BatchDeleteImportDataRequest = struct(n0, _BDIDR, 0, [_iTIm, _dH], [64 | 0, 2]);
export var BatchDeleteImportDataResponse = struct(n0, _BDIDRa, 0, [_er], [() => BatchDeleteImportDataErrorList]);
export var BatchDeleteImportDataErrorList = list(n0, _BDIDEL, 0, () => BatchDeleteImportDataError);
export var ToDeleteIdentifierList = 64 | 0;

export var BatchDeleteImportData = op(
  n0,
  _BDID,
  0,
  () => BatchDeleteImportDataRequest,
  () => BatchDeleteImportDataResponse
);
