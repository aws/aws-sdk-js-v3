// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AES,
  _AESd,
  _AFS,
  _AFSd,
  _BM,
  _CT,
  _E,
  _EDS,
  _EDSA,
  _EW,
  _F,
  _FRA,
  _FS,
  _FSe,
  _GEDS,
  _GEDSR,
  _GEDSRe,
  _KKI,
  _MRE,
  _N,
  _NE,
  _NEW,
  _NSW,
  _OE,
  _PK,
  _PKa,
  _PKLa,
  _RP,
  _St,
  _SW,
  _T,
  _TPE,
  _UT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AdvancedEventSelector = struct(n0, _AES, 0, [_N, _FS], [0, () => AdvancedFieldSelectors]);
export var AdvancedFieldSelector = struct(
  n0,
  _AFS,
  0,
  [_F, _E, _SW, _EW, _NE, _NSW, _NEW],
  [0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0]
);
export var GetEventDataStoreRequest = struct(n0, _GEDSR, 0, [_EDS], [0]);
export var GetEventDataStoreResponse = struct(
  n0,
  _GEDSRe,
  0,
  [_EDSA, _N, _St, _AESd, _MRE, _OE, _RP, _TPE, _CT, _UT, _KKI, _BM, _FSe, _FRA, _PK],
  [0, 0, 0, () => AdvancedEventSelectors, 2, 2, 1, 2, 4, 4, 0, 0, 0, 0, () => PartitionKeyList]
);
export var PartitionKey = struct(n0, _PKa, 0, [_N, _T], [0, 0]);
export var AdvancedEventSelectors = list(n0, _AESd, 0, () => AdvancedEventSelector);
export var AdvancedFieldSelectors = list(n0, _AFSd, 0, () => AdvancedFieldSelector);
export var Operator = 64 | 0;

export var PartitionKeyList = list(n0, _PKLa, 0, () => PartitionKey);
export var GetEventDataStore = op(
  n0,
  _GEDS,
  2,
  () => GetEventDataStoreRequest,
  () => GetEventDataStoreResponse
);
