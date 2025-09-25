// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AR,
  _BKE,
  _Bo,
  _CC,
  _CCRC,
  _CCRCC,
  _CCRCNVME,
  _CDo,
  _CEo,
  _CL,
  _CL__,
  _CLo,
  _CR,
  _CSHA,
  _CSHAh,
  _CTo,
  _DM,
  _E,
  _ECr,
  _EM,
  _en,
  _ET,
  _Ex,
  _h,
  _hH,
  _hL,
  _hPH,
  _LM,
  _M,
  _MM,
  _OLLHS,
  _OLM,
  _OLRUD,
  _PC,
  _RC,
  _Re,
  _RReq,
  _RS,
  _RTe,
  _SC,
  _SCt,
  _SSE,
  _SSECA,
  _SSECKMD,
  _SSEKMSKI,
  _TC,
  _VI,
  _WGOR,
  _WGORR,
  _xafec,
  _xafem,
  _xafhar,
  _xafhCC,
  _xafhCD,
  _xafhCE,
  _xafhCL,
  _xafhCR,
  _xafhCT,
  _xafhE,
  _xafhE_,
  _xafhLM,
  _xafhxacc,
  _xafhxacc_,
  _xafhxacc__,
  _xafhxacs,
  _xafhxacs_,
  _xafhxadm,
  _xafhxae,
  _xafhxamm,
  _xafhxampc,
  _xafhxaollh,
  _xafhxaolm,
  _xafhxaolrud,
  _xafhxar,
  _xafhxarc,
  _xafhxars,
  _xafhxasc,
  _xafhxasse,
  _xafhxasseakki,
  _xafhxassebke,
  _xafhxasseca,
  _xafhxasseckM,
  _xafhxatc,
  _xafhxavi,
  _xafs,
  _xam,
  _xarr,
  _xart,
  n0,
  SSEKMSKeyId,
  Unit,
} from "./schemas_0";
import { StreamingBlob } from "./schemas_49_Object";

/* eslint no-var: 0 */

export var WriteGetObjectResponseRequest = struct(
  n0,
  _WGORR,
  0,
  [
    _RReq,
    _RTe,
    _Bo,
    _SCt,
    _ECr,
    _EM,
    _AR,
    _CC,
    _CDo,
    _CEo,
    _CL,
    _CLo,
    _CR,
    _CTo,
    _CCRC,
    _CCRCC,
    _CCRCNVME,
    _CSHA,
    _CSHAh,
    _DM,
    _ET,
    _Ex,
    _E,
    _LM,
    _MM,
    _M,
    _OLM,
    _OLLHS,
    _OLRUD,
    _PC,
    _RS,
    _RC,
    _Re,
    _SSE,
    _SSECA,
    _SSEKMSKI,
    _SSECKMD,
    _SC,
    _TC,
    _VI,
    _BKE,
  ],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xarr,
      },
    ],
    [
      0,
      {
        [_hH]: _xart,
      },
    ],
    [() => StreamingBlob, 16],
    [
      1,
      {
        [_hH]: _xafs,
      },
    ],
    [
      0,
      {
        [_hH]: _xafec,
      },
    ],
    [
      0,
      {
        [_hH]: _xafem,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhar,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhCC,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhCD,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhCE,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhCL,
      },
    ],
    [
      1,
      {
        [_hH]: _CL__,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhCR,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhCT,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhxacc,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhxacc_,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhxacc__,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhxacs,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhxacs_,
      },
    ],
    [
      2,
      {
        [_hH]: _xafhxadm,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhE,
      },
    ],
    [
      4,
      {
        [_hH]: _xafhE_,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhxae,
      },
    ],
    [
      4,
      {
        [_hH]: _xafhLM,
      },
    ],
    [
      1,
      {
        [_hH]: _xafhxamm,
      },
    ],
    [
      128 | 0,
      {
        [_hPH]: _xam,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhxaolm,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhxaollh,
      },
    ],
    [
      5,
      {
        [_hH]: _xafhxaolrud,
      },
    ],
    [
      1,
      {
        [_hH]: _xafhxampc,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhxars,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhxarc,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhxar,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhxasse,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhxasseca,
      },
    ],
    [
      () => SSEKMSKeyId,
      {
        [_hH]: _xafhxasseakki,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhxasseckM,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhxasc,
      },
    ],
    [
      1,
      {
        [_hH]: _xafhxatc,
      },
    ],
    [
      0,
      {
        [_hH]: _xafhxavi,
      },
    ],
    [
      2,
      {
        [_hH]: _xafhxassebke,
      },
    ],
  ]
);
export var WriteGetObjectResponse = op(
  n0,
  _WGOR,
  {
    [_en]: ["{RequestRoute}."],
    [_h]: ["POST", "/WriteGetObjectResponse", 200],
  },
  () => WriteGetObjectResponseRequest,
  () => Unit
);
