// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _Categ,
  _CI,
  _CNo,
  _COon,
  _CPu,
  _D,
  _DEes,
  _DER,
  _DERe,
  _DSAV,
  _ELn,
  _ENn,
  _Ent,
  _Enti,
  _Fie,
  _Fiel,
  _FL,
  _FN,
  _FPi,
  _FTi,
  _GER,
  _GERR,
  _GERRe,
  _ICs,
  _IDOC,
  _IF,
  _INs,
  _IP,
  _IPE,
  _IPK,
  _IRs,
  _IU,
  _IUs,
  _Lab,
  _LE,
  _LER,
  _LERi,
  _Li,
  _NDT,
  _NTe,
  _OB,
  _PEN,
  _PF,
  _R,
  _Reco,
  _SFe,
  _SFO,
  _SV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var _Record = sim(n0, _R, 15, 8);
export var DescribeEntityRequest = struct(n0, _DER, 0, [_CNo, _CI, _ENn, _NTe, _DSAV], [0, 0, 0, 0, 0]);
export var DescribeEntityResponse = struct(n0, _DERe, 0, [_Fie, _NTe], [() => FieldsList, 0]);
export var Entity = struct(n0, _Ent, 0, [_ENn, _Lab, _IPE, _D, _Categ, _CPu], [0, 0, 2, 0, 0, 128 | 0]);
export var Field = struct(
  n0,
  _Fiel,
  0,
  [_FN, _Lab, _D, _FTi, _IPK, _INs, _IRs, _IF, _IP, _ICs, _IU, _IUs, _IDOC, _SV, _SFO, _PF, _NDT, _CPu],
  [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 64 | 0, 64 | 0, 0, 0, 128 | 0]
);
export var GetEntityRecordsRequest = struct(
  n0,
  _GERR,
  0,
  [_CNo, _CI, _ENn, _NTe, _DSAV, _COon, _FPi, _Li, _OB, _SFe],
  [0, 0, 0, 0, 0, 128 | 0, 0, 1, 0, 64 | 0]
);
export var GetEntityRecordsResponse = struct(n0, _GERRe, 0, [_Reco, _NTe], [[() => Records, 0], 0]);
export var ListEntitiesRequest = struct(n0, _LER, 0, [_CNo, _CI, _PEN, _NTe, _DSAV], [0, 0, 0, 0, 0]);
export var ListEntitiesResponse = struct(n0, _LERi, 0, [_Enti, _NTe], [() => EntityList, 0]);
export var EntityList = list(n0, _ELn, 0, () => Entity);
export var FieldFilterOperatorsList = 64 | 0;

export var FieldsList = list(n0, _FL, 0, () => Field);
export var ListOfString = 64 | 0;

export var Records = list(n0, _Reco, 8, [() => _Record, 0]);
export var SelectedFields = 64 | 0;

export var ConnectionOptions = 128 | 0;

export var CustomProperties = 128 | 0;

export var DescribeEntity = op(
  n0,
  _DEes,
  0,
  () => DescribeEntityRequest,
  () => DescribeEntityResponse
);
export var GetEntityRecords = op(
  n0,
  _GER,
  0,
  () => GetEntityRecordsRequest,
  () => GetEntityRecordsResponse
);
export var ListEntities = op(
  n0,
  _LE,
  0,
  () => ListEntitiesRequest,
  () => ListEntitiesResponse
);
