// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { InvalidExecutionInput as __InvalidExecutionInput } from "../models/index";
import {
  _aAf,
  _aIP,
  _aP,
  _aRP,
  _aRS,
  _b,
  _c,
  _ca,
  _de,
  _e,
  _end,
  _h,
  _i,
  _ID,
  _iDns,
  _IDR,
  _IDRn,
  _IEI,
  _iL,
  _m,
  _me,
  _nS,
  _o,
  _pr,
  _rA,
  _re,
  _req,
  _res,
  _rSe,
  _s,
  _sC,
  _SD,
  _sM,
  _TS,
  _TSI,
  _TSO,
  _u,
  _v,
  n0,
} from "./schemas_0";
import { Definition } from "./schemas_4_State";
import { SensitiveCause, SensitiveError } from "./schemas_22_Execution";

/* eslint no-var: 0 */

export var SensitiveData = sim(n0, _SD, 0, 8);
export var InspectionData = struct(
  n0,
  _ID,
  8,
  [_i, _aAf, _aIP, _aP, _re, _aRS, _aRP, _req, _res, _v],
  [
    [() => SensitiveData, 0],
    [() => SensitiveData, 0],
    [() => SensitiveData, 0],
    [() => SensitiveData, 0],
    [() => SensitiveData, 0],
    [() => SensitiveData, 0],
    [() => SensitiveData, 0],
    () => InspectionDataRequest,
    () => InspectionDataResponse,
    [() => SensitiveData, 0],
  ]
);
export var InspectionDataRequest = struct(n0, _IDR, 0, [_pr, _me, _u, _h, _b], [0, 0, 0, 0, 0]);
export var InspectionDataResponse = struct(n0, _IDRn, 0, [_pr, _sC, _sM, _h, _b], [0, 0, 0, 0, 0]);
export var InvalidExecutionInput = error(
  n0,
  _IEI,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidExecutionInput
);
export var TestStateInput = struct(
  n0,
  _TSI,
  0,
  [_de, _rA, _i, _iL, _rSe, _v],
  [[() => Definition, 0], 0, [() => SensitiveData, 0], 0, 2, [() => SensitiveData, 0]]
);
export var TestStateOutput = struct(
  n0,
  _TSO,
  0,
  [_o, _e, _ca, _iDns, _nS, _s],
  [[() => SensitiveData, 0], [() => SensitiveError, 0], [() => SensitiveCause, 0], [() => InspectionData, 0], 0, 0]
);
export var TestState = op(
  n0,
  _TS,
  {
    [_end]: ["sync-"],
  },
  () => TestStateInput,
  () => TestStateOutput
);
