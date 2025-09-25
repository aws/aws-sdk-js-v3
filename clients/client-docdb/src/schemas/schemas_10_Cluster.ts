// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AM,
  _AT,
  _AVl,
  _D,
  _DBPGF,
  _DEDCP,
  _DEDCPM,
  _DEDCPR,
  _DT,
  _ED,
  _F,
  _IM,
  _M,
  _MEV,
  _MR,
  _Pa,
  _Par,
  _PL,
  _PN,
  _PV,
  _So,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEngineDefaultClusterParametersMessage = struct(
  n0,
  _DEDCPM,
  0,
  [_DBPGF, _F, _MR, _M],
  [0, [() => FilterList, 0], 1, 0]
);
export var DescribeEngineDefaultClusterParametersResult = struct(n0, _DEDCPR, 0, [_ED], [[() => EngineDefaults, 0]]);
export var EngineDefaults = struct(n0, _ED, 0, [_DBPGF, _M, _Pa], [0, 0, [() => ParametersList, 0]]);
export var Parameter = struct(
  n0,
  _Par,
  0,
  [_PN, _PV, _D, _So, _AT, _DT, _AVl, _IM, _MEV, _AM],
  [0, 0, 0, 0, 0, 0, 0, 2, 0, 0]
);
export var Unit = "unit" as const;

export var ParametersList = list(n0, _PL, 0, [
  () => Parameter,
  {
    [_xN]: _Par,
  },
]);
export var DescribeEngineDefaultClusterParameters = op(
  n0,
  _DEDCP,
  0,
  () => DescribeEngineDefaultClusterParametersMessage,
  () => DescribeEngineDefaultClusterParametersResult
);
