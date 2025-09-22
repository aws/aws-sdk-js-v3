// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AV,
  _CNT,
  _CNTSP,
  _CNTSPa,
  _CNTSPL,
  _CNTSV,
  _CNTSVa,
  _CNTSVL,
  _CPGD,
  _CPGF,
  _CPGN,
  _CT,
  _D,
  _DCP,
  _DCPM,
  _DEDP,
  _DEDPM,
  _DEDPR,
  _DT,
  _ED,
  _IM,
  _M,
  _MEV,
  _MR,
  _Pa,
  _Par,
  _PL,
  _PN,
  _PV,
  _S,
  _V,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CacheNodeTypeSpecificParameter = struct(
  n0,
  _CNTSP,
  0,
  [_PN, _D, _S, _DT, _AV, _IM, _MEV, _CNTSV, _CT],
  [0, 0, 0, 0, 0, 2, 0, [() => CacheNodeTypeSpecificValueList, 0], 0]
);
export var CacheNodeTypeSpecificValue = struct(n0, _CNTSVa, 0, [_CNT, _V], [0, 0]);
export var CacheParameterGroupDetails = struct(
  n0,
  _CPGD,
  0,
  [_M, _Pa, _CNTSPa],
  [0, [() => ParametersList, 0], [() => CacheNodeTypeSpecificParametersList, 0]]
);
export var DescribeCacheParametersMessage = struct(n0, _DCPM, 0, [_CPGN, _S, _MR, _M], [0, 0, 1, 0]);
export var DescribeEngineDefaultParametersMessage = struct(n0, _DEDPM, 0, [_CPGF, _MR, _M], [0, 1, 0]);
export var DescribeEngineDefaultParametersResult = struct(n0, _DEDPR, 0, [_ED], [[() => EngineDefaults, 0]]);
export var EngineDefaults = struct(
  n0,
  _ED,
  0,
  [_CPGF, _M, _Pa, _CNTSPa],
  [0, 0, [() => ParametersList, 0], [() => CacheNodeTypeSpecificParametersList, 0]]
);
export var Parameter = struct(n0, _Par, 0, [_PN, _PV, _D, _S, _DT, _AV, _IM, _MEV, _CT], [0, 0, 0, 0, 0, 0, 2, 0, 0]);
export var CacheNodeTypeSpecificParametersList = list(n0, _CNTSPL, 0, [
  () => CacheNodeTypeSpecificParameter,
  {
    [_xN]: _CNTSP,
  },
]);
export var CacheNodeTypeSpecificValueList = list(n0, _CNTSVL, 0, [
  () => CacheNodeTypeSpecificValue,
  {
    [_xN]: _CNTSVa,
  },
]);
export var ParametersList = list(n0, _PL, 0, [
  () => Parameter,
  {
    [_xN]: _Par,
  },
]);
export var DescribeCacheParameters = op(
  n0,
  _DCP,
  0,
  () => DescribeCacheParametersMessage,
  () => CacheParameterGroupDetails
);
export var DescribeEngineDefaultParameters = op(
  n0,
  _DEDP,
  0,
  () => DescribeEngineDefaultParametersMessage,
  () => DescribeEngineDefaultParametersResult
);
