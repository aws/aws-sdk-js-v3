// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ed,
  _edn,
  _EDNSCSIP,
  _EDNSCSM,
  _h,
  _hQ,
  _ht,
  _HZI,
  _Nam,
  _Pr,
  _r,
  _RC,
  _RD,
  _RDE,
  _re,
  _res,
  _RIP,
  _RN,
  _RTe,
  _TDNSA,
  _TDNSAR,
  _TDNSARe,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var TestDNSAnswerRequest = struct(
  n0,
  _TDNSAR,
  0,
  [_HZI, _RN, _RTe, _RIP, _EDNSCSIP, _EDNSCSM],
  [
    [
      0,
      {
        [_hQ]: _h,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    [
      0,
      {
        [_hQ]: _re,
      },
    ],
    [
      0,
      {
        [_hQ]: _res,
      },
    ],
    [
      0,
      {
        [_hQ]: _ed,
      },
    ],
    [
      0,
      {
        [_hQ]: _edn,
      },
    ],
  ]
);
export var TestDNSAnswerResponse = struct(
  n0,
  _TDNSARe,
  0,
  [_Nam, _RN, _RTe, _RD, _RC, _Pr],
  [0, 0, 0, [() => RecordData, 0], 0, 0]
);
export var RecordData = list(n0, _RD, 0, [
  0,
  {
    [_xN]: _RDE,
  },
]);
export var TestDNSAnswer = op(
  n0,
  _TDNSA,
  {
    [_ht]: ["GET", "/2013-04-01/testdnsanswer", 200],
  },
  () => TestDNSAnswerRequest,
  () => TestDNSAnswerResponse
);
