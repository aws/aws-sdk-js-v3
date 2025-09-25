// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidDocumentType as __InvalidDocumentType,
  UnsupportedCalendarException as __UnsupportedCalendarException,
} from "../models/index";
import { _aQE, _ATt, _c, _CN, _e, _GCS, _GCSR, _GCSRe, _IDT, _M, _NTT, _S, _UCE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetCalendarStateRequest = struct(n0, _GCSR, 0, [_CN, _ATt], [64 | 0, 0]);
export var GetCalendarStateResponse = struct(n0, _GCSRe, 0, [_S, _ATt, _NTT], [0, 0, 0]);
export var InvalidDocumentType = error(
  n0,
  _IDT,
  {
    [_e]: _c,
    [_aQE]: [`InvalidDocumentType`, 400],
  },
  [_M],
  [0],

  __InvalidDocumentType
);
export var UnsupportedCalendarException = error(
  n0,
  _UCE,
  {
    [_e]: _c,
    [_aQE]: [`UnsupportedCalendarException`, 400],
  },
  [_M],
  [0],

  __UnsupportedCalendarException
);
export var CalendarNameOrARNList = 64 | 0;

export var GetCalendarState = op(
  n0,
  _GCS,
  0,
  () => GetCalendarStateRequest,
  () => GetCalendarStateResponse
);
