// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DTC,
  _DTCR,
  _DTCRe,
  _La,
  _LC,
  _LOTC,
  _LOTL,
  _LOTS,
  _N,
  _RL,
  _Sc,
  _T,
  _TCo,
  _TLo,
  _Tox,
  _TS,
  _TSe,
  CustomerInputString,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DetectToxicContentRequest = struct(n0, _DTCR, 0, [_TS, _LC], [[() => ListOfTextSegments, 0], 0]);
export var DetectToxicContentResponse = struct(n0, _DTCRe, 0, [_RL], [() => ListOfToxicLabels]);
export var TextSegment = struct(n0, _TSe, 0, [_T], [[() => CustomerInputString, 0]]);
export var ToxicContent = struct(n0, _TCo, 0, [_N, _Sc], [0, 1]);
export var ToxicLabels = struct(n0, _TLo, 0, [_La, _Tox], [() => ListOfToxicContent, 1]);
export var ListOfTextSegments = list(n0, _LOTS, 8, [() => TextSegment, 0]);
export var ListOfToxicContent = list(n0, _LOTC, 0, () => ToxicContent);
export var ListOfToxicLabels = list(n0, _LOTL, 0, () => ToxicLabels);
export var DetectToxicContent = op(
  n0,
  _DTC,
  0,
  () => DetectToxicContentRequest,
  () => DetectToxicContentResponse
);
