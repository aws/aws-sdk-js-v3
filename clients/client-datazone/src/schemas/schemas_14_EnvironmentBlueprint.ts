// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cA,
  _CD,
  _CDI,
  _CDO,
  _cT,
  _de,
  _dER,
  _dVo,
  _GDe,
  _GDI,
  _GDO,
  _hQ,
  _ht,
  _i,
  _id,
  _iIA,
  _iTd,
  _kKI,
  _lUA,
  _n,
  _pU,
  _rDUI,
  _s,
  _sRe,
  _SSO,
  _sSO,
  _ta,
  _ty,
  _uAs,
  _UDI,
  _UDO,
  _UDp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDomainInput = struct(
  n0,
  _CDI,
  0,
  [_n, _de, _sSO, _dER, _kKI, _ta, _dVo, _sRe, _cT],
  [0, 0, () => SingleSignOn, 0, 0, 128 | 0, 0, 0, [0, 4]]
);
export var CreateDomainOutput = struct(
  n0,
  _CDO,
  0,
  [_id, _rDUI, _n, _de, _sSO, _dER, _ar, _kKI, _s, _pU, _ta, _dVo, _sRe],
  [0, 0, 0, 0, () => SingleSignOn, 0, 0, 0, 0, 0, 128 | 0, 0, 0]
);
export var GetDomainInput = struct(n0, _GDI, 0, [_i], [[0, 1]]);
export var GetDomainOutput = struct(
  n0,
  _GDO,
  0,
  [_id, _rDUI, _n, _de, _sSO, _dER, _ar, _kKI, _s, _pU, _cA, _lUA, _ta, _dVo, _sRe],
  [0, 0, 0, 0, () => SingleSignOn, 0, 0, 0, 0, 0, 4, 4, 128 | 0, 0, 0]
);
export var SingleSignOn = struct(n0, _SSO, 0, [_ty, _uAs, _iIA], [0, 0, 0]);
export var UpdateDomainInput = struct(
  n0,
  _UDI,
  0,
  [_i, _de, _sSO, _dER, _sRe, _n, _cT],
  [
    [0, 1],
    0,
    () => SingleSignOn,
    0,
    0,
    0,
    [
      0,
      {
        [_iTd]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var UpdateDomainOutput = struct(
  n0,
  _UDO,
  0,
  [_id, _rDUI, _de, _sSO, _dER, _sRe, _n, _lUA],
  [0, 0, 0, () => SingleSignOn, 0, 0, 0, 4]
);
export var CreateDomain = op(
  n0,
  _CD,
  {
    [_ht]: ["POST", "/v2/domains", 201],
  },
  () => CreateDomainInput,
  () => CreateDomainOutput
);
export var GetDomain = op(
  n0,
  _GDe,
  {
    [_ht]: ["GET", "/v2/domains/{identifier}", 200],
  },
  () => GetDomainInput,
  () => GetDomainOutput
);
export var UpdateDomain = op(
  n0,
  _UDp,
  {
    [_ht]: ["PUT", "/v2/domains/{identifier}", 200],
  },
  () => UpdateDomainInput,
  () => UpdateDomainOutput
);
