// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _cA,
  _cB,
  _CFT,
  _CFTI,
  _CFTO,
  _de,
  _dI,
  _dIo,
  _fTI,
  _GFT,
  _GFTI,
  _GFTO,
  _hQ,
  _ht,
  _IL,
  _Im,
  _im,
  _Mo,
  _mo,
  _n,
  _oDI,
  _oPI,
  _oPIr,
  _oPIw,
  _r,
  _s,
  _sm,
  Description,
  FormTypeName,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateFormTypeInput = struct(
  n0,
  _CFTI,
  0,
  [_dI, _n, _mo, _oPIw, _s, _de],
  [[0, 1], [() => FormTypeName, 0], [() => Model, 0], 0, 0, [() => Description, 0]]
);
export var CreateFormTypeOutput = struct(
  n0,
  _CFTO,
  0,
  [_dIo, _n, _r, _de, _oPI, _oDI, _oPIr],
  [0, [() => FormTypeName, 0], 0, [() => Description, 0], 0, 0, 0]
);
export var GetFormTypeInput = struct(
  n0,
  _GFTI,
  0,
  [_dI, _fTI, _r],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
  ]
);
export var GetFormTypeOutput = struct(
  n0,
  _GFTO,
  0,
  [_dIo, _n, _r, _mo, _oPI, _oDI, _oPIr, _s, _cA, _cB, _de, _im],
  [0, [() => FormTypeName, 0], 0, [() => Model, 0], 0, 0, 0, 0, 4, 0, [() => Description, 0], [() => ImportList, 0]]
);
export var Import = struct(n0, _Im, 0, [_n, _r], [[() => FormTypeName, 0], 0]);
export var ImportList = list(n0, _IL, 0, [() => Import, 0]);
export var Model = uni(n0, _Mo, 8, [_sm], [0]);
export var CreateFormType = op(
  n0,
  _CFT,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/form-types", 201],
  },
  () => CreateFormTypeInput,
  () => CreateFormTypeOutput
);
export var GetFormType = op(
  n0,
  _GFT,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/form-types/{formTypeIdentifier}", 200],
  },
  () => GetFormTypeInput,
  () => GetFormTypeOutput
);
