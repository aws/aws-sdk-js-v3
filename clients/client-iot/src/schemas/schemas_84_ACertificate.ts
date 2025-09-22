// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aO,
  _CAC,
  _CACe,
  _cAe,
  _cD,
  _ce,
  _cI,
  _h,
  _hQ,
  _iAO,
  _LCAC,
  _LCACR,
  _LCACRi,
  _ma,
  _nM,
  _pS,
  _st,
  _tNe,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CACertificate = struct(n0, _CAC, 0, [_cAe, _cI, _st, _cD], [0, 0, 0, 4]);
export var ListCACertificatesRequest = struct(
  n0,
  _LCACR,
  0,
  [_pS, _ma, _aO, _tNe],
  [
    [
      1,
      {
        [_hQ]: _pS,
      },
    ],
    [
      0,
      {
        [_hQ]: _ma,
      },
    ],
    [
      2,
      {
        [_hQ]: _iAO,
      },
    ],
    [
      0,
      {
        [_hQ]: _tNe,
      },
    ],
  ]
);
export var ListCACertificatesResponse = struct(n0, _LCACRi, 0, [_ce, _nM], [() => CACertificates, 0]);
export var CACertificates = list(n0, _CACe, 0, () => CACertificate);
export var ListCACertificates = op(
  n0,
  _LCAC,
  {
    [_h]: ["GET", "/cacertificates", 200],
  },
  () => ListCACertificatesRequest,
  () => ListCACertificatesResponse
);
