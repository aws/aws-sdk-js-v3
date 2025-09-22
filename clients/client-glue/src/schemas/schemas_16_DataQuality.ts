// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CDQR,
  _CDQRR,
  _CDQRRr,
  _CO,
  _CTl,
  _D,
  _DQSC,
  _GDQRe,
  _GDQRRet,
  _GDQRReta,
  _LMO,
  _N,
  _RRI,
  _Ru,
  _Tag,
  _TT,
  n0,
} from "./schemas_0";
import { DataQualityTargetTable } from "./schemas_119_DataQuality";

/* eslint no-var: 0 */

export var CreateDataQualityRulesetRequest = struct(
  n0,
  _CDQRR,
  0,
  [_N, _D, _Ru, _Tag, _TT, _DQSC, _CTl],
  [0, 0, 0, 128 | 0, () => DataQualityTargetTable, 0, 0]
);
export var CreateDataQualityRulesetResponse = struct(n0, _CDQRRr, 0, [_N], [0]);
export var GetDataQualityRulesetRequest = struct(n0, _GDQRRet, 0, [_N], [0]);
export var GetDataQualityRulesetResponse = struct(
  n0,
  _GDQRReta,
  0,
  [_N, _D, _Ru, _TT, _CO, _LMO, _RRI, _DQSC],
  [0, 0, 0, () => DataQualityTargetTable, 4, 4, 0, 0]
);
export var CreateDataQualityRuleset = op(
  n0,
  _CDQR,
  2,
  () => CreateDataQualityRulesetRequest,
  () => CreateDataQualityRulesetResponse
);
export var GetDataQualityRuleset = op(
  n0,
  _GDQRe,
  0,
  () => GetDataQualityRulesetRequest,
  () => GetDataQualityRulesetResponse
);
