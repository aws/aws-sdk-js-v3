// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import {
  _AQRD,
  _Com,
  _CSV,
  _CSVIn,
  _CSVO,
  _CTom,
  _FD,
  _FHI,
  _IS,
  _JSON,
  _JSONI,
  _JSONO,
  _OSu,
  _Parq,
  _PI,
  _QC,
  _QEC,
  _QF,
  _RD,
  _Ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CSVInput = struct(n0, _CSVIn, 0, [_FHI, _Com, _QEC, _RD, _FD, _QC, _AQRD], [0, 0, 0, 0, 0, 0, 2]);
export var CSVOutput = struct(n0, _CSVO, 0, [_QF, _QEC, _RD, _FD, _QC], [0, 0, 0, 0, 0]);
export var InputSerialization = struct(
  n0,
  _IS,
  0,
  [_CSV, _CTom, _JSON, _Parq],
  [() => CSVInput, 0, () => JSONInput, () => ParquetInput]
);
export var JSONInput = struct(n0, _JSONI, 0, [_Ty], [0]);
export var JSONOutput = struct(n0, _JSONO, 0, [_RD], [0]);
export var OutputSerialization = struct(n0, _OSu, 0, [_CSV, _JSON], [() => CSVOutput, () => JSONOutput]);
export var ParquetInput = struct(n0, _PI, 0, [], []);
