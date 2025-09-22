// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _CAT,
  _CATI,
  _CATO,
  _cB,
  _de,
  _dI,
  _dIo,
  _FEI,
  _FEO,
  _FIM,
  _fIo,
  _fO,
  _FOM,
  _ht,
  _n,
  _oDI,
  _oPI,
  _oPIr,
  _oPIw,
  _r,
  _req,
  _tI,
  _tNy,
  _tR,
  _uA,
  _uB,
  Description,
  FormTypeName,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateAssetTypeInput = struct(
  n0,
  _CATI,
  0,
  [_dI, _n, _de, _fIo, _oPIw],
  [[0, 1], 0, [() => Description, 0], () => FormsInputMap, 0]
);
export var CreateAssetTypeOutput = struct(
  n0,
  _CATO,
  0,
  [_dIo, _n, _r, _de, _fO, _oPI, _oDI, _oPIr, _cA, _cB, _uA, _uB],
  [0, 0, 0, [() => Description, 0], [() => FormsOutputMap, 0], 0, 0, 0, 4, 0, 4, 0]
);
export var FormEntryInput = struct(n0, _FEI, 0, [_tI, _tR, _req], [0, 0, 2]);
export var FormEntryOutput = struct(n0, _FEO, 0, [_tNy, _tR, _req], [[() => FormTypeName, 0], 0, 2]);
export var FormsInputMap = map(n0, _FIM, 0, 0, () => FormEntryInput);
export var FormsOutputMap = map(n0, _FOM, 0, [0, 0], [() => FormEntryOutput, 0]);
export var CreateAssetType = op(
  n0,
  _CAT,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/asset-types", 201],
  },
  () => CreateAssetTypeInput,
  () => CreateAssetTypeOutput
);
