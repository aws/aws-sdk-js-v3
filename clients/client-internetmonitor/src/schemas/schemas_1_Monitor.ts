// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASN,
  _ASNu,
  _C,
  _Ci,
  _CL,
  _EA,
  _EAn,
  _EI,
  _ESv,
  _ET,
  _ETn,
  _GIE,
  _GIEI,
  _GIEO,
  _h,
  _hQ,
  _IE,
  _IEL,
  _IEMR,
  _IES,
  _L,
  _LIE,
  _LIEI,
  _LIEO,
  _Lo,
  _M,
  _MR,
  _NT,
  _S,
  _SA,
  _ST,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClientLocation = struct(n0, _CL, 0, [_ASN, _ASNu, _C, _S, _M, _Ci, _L, _Lo], [0, 1, 0, 0, 0, 0, 1, 1]);
export var GetInternetEventInput = struct(n0, _GIEI, 0, [_EI], [[0, 1]]);
export var GetInternetEventOutput = struct(
  n0,
  _GIEO,
  0,
  [_EI, _EA, _SA, _EAn, _CL, _ET, _ESv],
  [0, 0, 5, 5, () => ClientLocation, 0, 0]
);
export var InternetEventSummary = struct(
  n0,
  _IES,
  0,
  [_EI, _EA, _SA, _EAn, _CL, _ET, _ESv],
  [0, 0, 5, 5, () => ClientLocation, 0, 0]
);
export var ListInternetEventsInput = struct(
  n0,
  _LIEI,
  0,
  [_NT, _MR, _ST, _ETn, _ESv, _ET],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _IEMR,
      },
    ],
    [
      5,
      {
        [_hQ]: _ST,
      },
    ],
    [
      5,
      {
        [_hQ]: _ETn,
      },
    ],
    [
      0,
      {
        [_hQ]: _ESv,
      },
    ],
    [
      0,
      {
        [_hQ]: _ET,
      },
    ],
  ]
);
export var ListInternetEventsOutput = struct(n0, _LIEO, 0, [_IE, _NT], [() => InternetEventsList, 0]);
export var InternetEventsList = list(n0, _IEL, 0, () => InternetEventSummary);
export var GetInternetEvent = op(
  n0,
  _GIE,
  {
    [_h]: ["GET", "/v20210603/InternetEvents/{EventId}", 200],
  },
  () => GetInternetEventInput,
  () => GetInternetEventOutput
);
export var ListInternetEvents = op(
  n0,
  _LIE,
  {
    [_h]: ["GET", "/v20210603/InternetEvents", 200],
  },
  () => ListInternetEventsInput,
  () => ListInternetEventsOutput
);
