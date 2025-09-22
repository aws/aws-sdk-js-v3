// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AS,
  _ATut,
  _BNr,
  _CIom,
  _Fol,
  _JN,
  _Prov,
  _RNe,
  _ROep,
  _UJFSC,
  _UJFSCR,
  _UJFSCRp,
  _USCFJ,
  _USCFJR,
  _USCFJRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateJobFromSourceControlRequest = struct(
  n0,
  _UJFSCR,
  0,
  [_JN, _Prov, _RNe, _ROep, _BNr, _Fol, _CIom, _AS, _ATut],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var UpdateJobFromSourceControlResponse = struct(n0, _UJFSCRp, 0, [_JN], [0]);
export var UpdateSourceControlFromJobRequest = struct(
  n0,
  _USCFJR,
  0,
  [_JN, _Prov, _RNe, _ROep, _BNr, _Fol, _CIom, _AS, _ATut],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var UpdateSourceControlFromJobResponse = struct(n0, _USCFJRp, 0, [_JN], [0]);
export var UpdateJobFromSourceControl = op(
  n0,
  _UJFSC,
  0,
  () => UpdateJobFromSourceControlRequest,
  () => UpdateJobFromSourceControlResponse
);
export var UpdateSourceControlFromJob = op(
  n0,
  _USCFJ,
  0,
  () => UpdateSourceControlFromJobRequest,
  () => UpdateSourceControlFromJobResponse
);
