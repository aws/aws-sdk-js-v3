// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ba,
  _BL,
  _dI,
  _DL,
  _DLR,
  _DLRe,
  _f,
  _FG,
  _fG,
  _FIi,
  _FL,
  _h,
  _i,
  _LCa,
  _lI,
  _LS,
  _mI,
  _n,
  _Se,
  _sec,
  _SL,
  _tP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BasicLayout = struct(n0, _BL, 0, [_tP, _mI], [() => LayoutSections, () => LayoutSections]);
export var DeleteLayoutRequest = struct(
  n0,
  _DLR,
  0,
  [_dI, _lI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteLayoutResponse = struct(n0, _DLRe, 0, [], []);
export var FieldGroup = struct(n0, _FG, 0, [_n, _f], [0, () => FieldList]);
export var FieldItem = struct(n0, _FIi, 0, [_i], [0]);
export var LayoutSections = struct(n0, _LS, 0, [_sec], [() => SectionsList]);
export var FieldList = list(n0, _FL, 0, () => FieldItem);
export var SectionsList = list(n0, _SL, 0, () => Section);
export var LayoutContent = uni(n0, _LCa, 0, [_ba], [() => BasicLayout]);
export var Section = uni(n0, _Se, 0, [_fG], [() => FieldGroup]);
export var DeleteLayout = op(
  n0,
  _DL,
  {
    [_h]: ["DELETE", "/domains/{domainId}/layouts/{layoutId}", 200],
  },
  () => DeleteLayoutRequest,
  () => DeleteLayoutResponse
);
