// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aM,
  _aRT,
  _cA,
  _cAI,
  _cI,
  _cIo,
  _cT,
  _h,
  _hQ,
  _LS,
  _LSI,
  _LSO,
  _mR,
  _n,
  _nT,
  _sAM,
  _SS,
  _sS,
  _SSL,
  _sTc,
  _t,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListSchemasInput = struct(
  n0,
  _LSI,
  0,
  [_cIo, _sTc, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _sTc,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListSchemasOutput = struct(n0, _LSO, 0, [_sS, _nT], [() => SchemaSummaryList, 0]);
export var SchemaSummary = struct(
  n0,
  _SS,
  0,
  [_n, _t, _cAI, _cT, _uT, _cI, _cA, _aRT, _aM, _sAM],
  [0, 0, 0, 4, 4, 0, 0, 64 | 0, 0, 64 | 0]
);
export var AnalysisRuleTypeList = 64 | 0;

export var SchemaSummaryList = list(n0, _SSL, 0, () => SchemaSummary);
export var SelectedAnalysisMethods = 64 | 0;

export var ListSchemas = op(
  n0,
  _LS,
  {
    [_h]: ["GET", "/collaborations/{collaborationIdentifier}/schemas", 200],
  },
  () => ListSchemasInput,
  () => ListSchemasOutput
);
