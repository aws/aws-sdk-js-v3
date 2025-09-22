// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import {
  _Ca,
  _CI,
  _CN,
  _CR,
  _CW,
  _Da,
  _DCF,
  _DCFR,
  _DL,
  _DLR,
  _DN,
  _EN,
  _Ex,
  _I,
  _LFTa,
  _LFTEa,
  _LFTER,
  _LFTKR,
  _LFTPa,
  _LFTPR,
  _N,
  _R,
  _RAe,
  _RT,
  _T,
  _TCI,
  _TK,
  _TN,
  _TV,
  _TWC,
  _TWCR,
  ColumnWildcard,
  DatabaseResource,
  Expression,
  n0,
  TableResource,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CatalogResource = struct(n0, _CR, 0, [_I], [0]);
export var DataCellsFilterResource = struct(n0, _DCFR, 0, [_TCI, _DN, _TN, _N], [0, 0, 0, 0]);
export var DataLocationResource = struct(n0, _DLR, 0, [_CI, _RAe], [0, 0]);
export var LFTagExpressionResource = struct(n0, _LFTER, 0, [_CI, _N], [0, 0]);
export var LFTagKeyResource = struct(n0, _LFTKR, 0, [_CI, _TK, _TV], [0, 0, 64 | 0]);
export var LFTagPolicyResource = struct(n0, _LFTPR, 0, [_CI, _RT, _Ex, _EN], [0, 0, () => Expression, 0]);
export var Resource = struct(
  n0,
  _R,
  0,
  [_Ca, _Da, _T, _TWC, _DL, _DCF, _LFTa, _LFTPa, _LFTEa],
  [
    () => CatalogResource,
    () => DatabaseResource,
    () => TableResource,
    () => TableWithColumnsResource,
    () => DataLocationResource,
    () => DataCellsFilterResource,
    () => LFTagKeyResource,
    () => LFTagPolicyResource,
    () => LFTagExpressionResource,
  ]
);
export var TableWithColumnsResource = struct(
  n0,
  _TWCR,
  0,
  [_CI, _DN, _N, _CN, _CW],
  [0, 0, 0, 64 | 0, () => ColumnWildcard]
);
