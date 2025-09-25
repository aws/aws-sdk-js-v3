// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _AFMS,
  _AFMSR,
  _AFMSRd,
  _AMSR,
  _C,
  _CO,
  _cO,
  _co,
  _CR,
  _cR,
  _D,
  _d,
  _EF,
  _eF,
  _FA,
  _fA,
  _Fm,
  _fm,
  _Fmt,
  _fmt,
  _FR,
  _h,
  _jN,
  _L,
  _l,
  _lOAMSR,
  _lOMS,
  _MS,
  _mS,
  _MSA,
  _MSAR,
  _MSe,
  _mSe,
  _MSI,
  _mSI,
  _MSN,
  _mSN,
  _MST,
  _mST,
  _Pa,
  _pa,
  _Ra,
  _ra,
  _SM,
  _sM,
  _Tc,
  _tc,
  _UFMS,
  _UFMSR,
  _UFMSRp,
  _VF,
  _vF,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddFlowMediaStreamsRequest = struct(
  n0,
  _AFMSR,
  0,
  [_FA, _MS],
  [
    [0, 1],
    [
      () => __listOfAddMediaStreamRequest,
      {
        [_jN]: _mS,
      },
    ],
  ]
);
export var AddFlowMediaStreamsResponse = struct(
  n0,
  _AFMSRd,
  0,
  [_FA, _MS],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      () => __listOfMediaStream,
      {
        [_jN]: _mS,
      },
    ],
  ]
);
export var AddMediaStreamRequest = struct(
  n0,
  _AMSR,
  0,
  [_A, _CR, _D, _MSI, _MSN, _MST, _VF],
  [
    [
      () => MediaStreamAttributesRequest,
      {
        [_jN]: _a,
      },
    ],
    [
      1,
      {
        [_jN]: _cR,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      1,
      {
        [_jN]: _mSI,
      },
    ],
    [
      0,
      {
        [_jN]: _mSN,
      },
    ],
    [
      0,
      {
        [_jN]: _mST,
      },
    ],
    [
      0,
      {
        [_jN]: _vF,
      },
    ],
  ]
);
export var Fmtp = struct(
  n0,
  _Fm,
  0,
  [_CO, _C, _EF, _Pa, _Ra, _SM, _Tc],
  [
    [
      0,
      {
        [_jN]: _cO,
      },
    ],
    [
      0,
      {
        [_jN]: _co,
      },
    ],
    [
      0,
      {
        [_jN]: _eF,
      },
    ],
    [
      0,
      {
        [_jN]: _pa,
      },
    ],
    [
      0,
      {
        [_jN]: _ra,
      },
    ],
    [
      0,
      {
        [_jN]: _sM,
      },
    ],
    [
      0,
      {
        [_jN]: _tc,
      },
    ],
  ]
);
export var FmtpRequest = struct(
  n0,
  _FR,
  0,
  [_CO, _C, _EF, _Pa, _Ra, _SM, _Tc],
  [
    [
      0,
      {
        [_jN]: _cO,
      },
    ],
    [
      0,
      {
        [_jN]: _co,
      },
    ],
    [
      0,
      {
        [_jN]: _eF,
      },
    ],
    [
      0,
      {
        [_jN]: _pa,
      },
    ],
    [
      0,
      {
        [_jN]: _ra,
      },
    ],
    [
      0,
      {
        [_jN]: _sM,
      },
    ],
    [
      0,
      {
        [_jN]: _tc,
      },
    ],
  ]
);
export var MediaStream = struct(
  n0,
  _MSe,
  0,
  [_A, _CR, _D, _Fmt, _MSI, _MSN, _MST, _VF],
  [
    [
      () => MediaStreamAttributes,
      {
        [_jN]: _a,
      },
    ],
    [
      1,
      {
        [_jN]: _cR,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      1,
      {
        [_jN]: _fm,
      },
    ],
    [
      1,
      {
        [_jN]: _mSI,
      },
    ],
    [
      0,
      {
        [_jN]: _mSN,
      },
    ],
    [
      0,
      {
        [_jN]: _mST,
      },
    ],
    [
      0,
      {
        [_jN]: _vF,
      },
    ],
  ]
);
export var MediaStreamAttributes = struct(
  n0,
  _MSA,
  0,
  [_Fm, _L],
  [
    [
      () => Fmtp,
      {
        [_jN]: _fmt,
      },
    ],
    [
      0,
      {
        [_jN]: _l,
      },
    ],
  ]
);
export var MediaStreamAttributesRequest = struct(
  n0,
  _MSAR,
  0,
  [_Fm, _L],
  [
    [
      () => FmtpRequest,
      {
        [_jN]: _fmt,
      },
    ],
    [
      0,
      {
        [_jN]: _l,
      },
    ],
  ]
);
export var UpdateFlowMediaStreamRequest = struct(
  n0,
  _UFMSR,
  0,
  [_A, _CR, _D, _FA, _MSN, _MST, _VF],
  [
    [
      () => MediaStreamAttributesRequest,
      {
        [_jN]: _a,
      },
    ],
    [
      1,
      {
        [_jN]: _cR,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _mST,
      },
    ],
    [
      0,
      {
        [_jN]: _vF,
      },
    ],
  ]
);
export var UpdateFlowMediaStreamResponse = struct(
  n0,
  _UFMSRp,
  0,
  [_FA, _MSe],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      () => MediaStream,
      {
        [_jN]: _mSe,
      },
    ],
  ]
);
export var __listOfAddMediaStreamRequest = list(n0, _lOAMSR, 0, [() => AddMediaStreamRequest, 0]);
export var __listOfMediaStream = list(n0, _lOMS, 0, [() => MediaStream, 0]);
export var AddFlowMediaStreams = op(
  n0,
  _AFMS,
  {
    [_h]: ["POST", "/v1/flows/{FlowArn}/mediaStreams", 201],
  },
  () => AddFlowMediaStreamsRequest,
  () => AddFlowMediaStreamsResponse
);
export var UpdateFlowMediaStream = op(
  n0,
  _UFMS,
  {
    [_h]: ["PUT", "/v1/flows/{FlowArn}/mediaStreams/{MediaStreamName}", 202],
  },
  () => UpdateFlowMediaStreamRequest,
  () => UpdateFlowMediaStreamResponse
);
