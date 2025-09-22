// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CSI,
  _CSN,
  _CSS,
  _CSSh,
  _CT,
  _D,
  _ES,
  _IER,
  _INS,
  _LCS,
  _LCSI,
  _LCSO,
  _NT,
  _PCSI,
  _RCSI,
  _S,
  _SI,
  _SN,
  _SR,
  _Su,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChangeSetSummary = struct(
  n0,
  _CSS,
  0,
  [_SI, _SN, _CSI, _CSN, _ES, _S, _SR, _CT, _D, _INS, _PCSI, _RCSI, _IER],
  [0, 0, 0, 0, 0, 0, 0, 4, 0, 2, 0, 0, 2]
);
export var ListChangeSetsInput = struct(n0, _LCSI, 0, [_SN, _NT], [0, 0]);
export var ListChangeSetsOutput = struct(n0, _LCSO, 0, [_Su, _NT], [() => ChangeSetSummaries, 0]);
export var ChangeSetSummaries = list(n0, _CSSh, 0, () => ChangeSetSummary);
export var ListChangeSets = op(
  n0,
  _LCS,
  0,
  () => ListChangeSetsInput,
  () => ListChangeSetsOutput
);
