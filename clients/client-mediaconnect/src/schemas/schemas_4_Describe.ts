// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CreateBridge420Exception as __CreateBridge420Exception,
  CreateGateway420Exception as __CreateGateway420Exception,
} from "../models/index";
import {
  _AEGBR,
  _AIGBR,
  _B,
  _b,
  _BA,
  _bA,
  _BM,
  _bM,
  _BP,
  _bP,
  _BS,
  _bS,
  _c,
  _CB,
  _cB,
  _CBE,
  _CBR,
  _CBr,
  _CBRr,
  _CG,
  _CGE,
  _CGR,
  _CGRr,
  _Ch,
  _ch,
  _Co,
  _Cod,
  _cod,
  _code,
  _CS,
  _cS,
  _DFSM,
  _DFSMR,
  _DFSMRe,
  _DFST,
  _DFSTR,
  _DFSTRe,
  _DGe,
  _DGIe,
  _DGIRes,
  _DGIResc,
  _DGRes,
  _DGResc,
  _e,
  _ECB,
  _eCB,
  _EGB,
  _eGB,
  _FA,
  _fA,
  _FH,
  _fH,
  _fR,
  _FRr,
  _fRr,
  _FRra,
  _FW,
  _fW,
  _G,
  _g,
  _GA,
  _gA,
  _GI,
  _gI,
  _GIA,
  _gIA,
  _GM,
  _gM,
  _GN,
  _GS,
  _gS,
  _h,
  _hE,
  _IGB,
  _iGB,
  _II,
  _iI,
  _IM,
  _iM,
  _IS,
  _iS,
  _jN,
  _lOGN,
  _lOMD,
  _lOTS,
  _lOTSP,
  _M,
  _m,
  _MB,
  _mB,
  _MDe,
  _Me,
  _me,
  _MO,
  _mO,
  _N,
  _n,
  _Ne,
  _ne,
  _O,
  _o,
  _PA,
  _pA,
  _Pi,
  _pi,
  _PN,
  _pN,
  _PNr,
  _pNr,
  _PP,
  _pP,
  _PPr,
  _pPr,
  _Pro,
  _pro,
  _RBC,
  _rBC,
  _RN,
  _rN,
  _S,
  _s,
  _SFC,
  _sFC,
  _SR,
  _sR,
  _SS,
  _sS,
  _Str,
  _str,
  _STt,
  _sTt,
  _TD,
  _tD,
  _Th,
  _th,
  _Ti,
  _ti,
  _Tim,
  _tim,
  _TM,
  _tM,
  _TMI,
  _tMI,
  _TSP,
  _TSr,
  n0,
} from "./schemas_0";
import { __listOfAddBridgeSourceRequest, __listOfBridgeSource } from "./schemas_12_Bridge";
import { FailoverConfig } from "./schemas_15_Bridge";
import { __listOfAddBridgeOutputRequest, __listOfBridgeOutput } from "./schemas_16_Bridge";

/* eslint no-var: 0 */

export var AddEgressGatewayBridgeRequest = struct(
  n0,
  _AEGBR,
  0,
  [_MB],
  [
    [
      1,
      {
        [_jN]: _mB,
      },
    ],
  ]
);
export var AddIngressGatewayBridgeRequest = struct(
  n0,
  _AIGBR,
  0,
  [_MB, _MO],
  [
    [
      1,
      {
        [_jN]: _mB,
      },
    ],
    [
      1,
      {
        [_jN]: _mO,
      },
    ],
  ]
);
export var Bridge = struct(
  n0,
  _B,
  0,
  [_BA, _BM, _BS, _EGB, _IGB, _N, _O, _PA, _SFC, _S],
  [
    [
      0,
      {
        [_jN]: _bA,
      },
    ],
    [
      () => __listOfMessageDetail,
      {
        [_jN]: _bM,
      },
    ],
    [
      0,
      {
        [_jN]: _bS,
      },
    ],
    [
      () => EgressGatewayBridge,
      {
        [_jN]: _eGB,
      },
    ],
    [
      () => IngressGatewayBridge,
      {
        [_jN]: _iGB,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfBridgeOutput,
      {
        [_jN]: _o,
      },
    ],
    [
      0,
      {
        [_jN]: _pA,
      },
    ],
    [
      () => FailoverConfig,
      {
        [_jN]: _sFC,
      },
    ],
    [
      () => __listOfBridgeSource,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var CreateBridge420Exception = error(
  n0,
  _CBE,
  {
    [_e]: _c,
    [_hE]: 420,
  },
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __CreateBridge420Exception
);
export var CreateBridgeRequest = struct(
  n0,
  _CBR,
  0,
  [_EGB, _IGB, _N, _O, _PA, _SFC, _S],
  [
    [
      () => AddEgressGatewayBridgeRequest,
      {
        [_jN]: _eGB,
      },
    ],
    [
      () => AddIngressGatewayBridgeRequest,
      {
        [_jN]: _iGB,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfAddBridgeOutputRequest,
      {
        [_jN]: _o,
      },
    ],
    [
      0,
      {
        [_jN]: _pA,
      },
    ],
    [
      () => FailoverConfig,
      {
        [_jN]: _sFC,
      },
    ],
    [
      () => __listOfAddBridgeSourceRequest,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var CreateBridgeResponse = struct(
  n0,
  _CBRr,
  0,
  [_B],
  [
    [
      () => Bridge,
      {
        [_jN]: _b,
      },
    ],
  ]
);
export var CreateGateway420Exception = error(
  n0,
  _CGE,
  {
    [_e]: _c,
    [_hE]: 420,
  },
  [_M],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __CreateGateway420Exception
);
export var CreateGatewayRequest = struct(
  n0,
  _CGR,
  0,
  [_ECB, _N, _Ne],
  [
    [
      64 | 0,
      {
        [_jN]: _eCB,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfGatewayNetwork,
      {
        [_jN]: _ne,
      },
    ],
  ]
);
export var CreateGatewayResponse = struct(
  n0,
  _CGRr,
  0,
  [_G],
  [
    [
      () => Gateway,
      {
        [_jN]: _g,
      },
    ],
  ]
);
export var DescribeFlowSourceMetadataRequest = struct(n0, _DFSMR, 0, [_FA], [[0, 1]]);
export var DescribeFlowSourceMetadataResponse = struct(
  n0,
  _DFSMRe,
  0,
  [_FA, _Me, _Ti, _TMI],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      () => __listOfMessageDetail,
      {
        [_jN]: _me,
      },
    ],
    [
      5,
      {
        [_jN]: _ti,
      },
    ],
    [
      () => TransportMediaInfo,
      {
        [_jN]: _tMI,
      },
    ],
  ]
);
export var DescribeFlowSourceThumbnailRequest = struct(n0, _DFSTR, 0, [_FA], [[0, 1]]);
export var DescribeFlowSourceThumbnailResponse = struct(
  n0,
  _DFSTRe,
  0,
  [_TD],
  [
    [
      () => ThumbnailDetails,
      {
        [_jN]: _tD,
      },
    ],
  ]
);
export var DescribeGatewayInstanceRequest = struct(n0, _DGIRes, 0, [_GIA], [[0, 1]]);
export var DescribeGatewayInstanceResponse = struct(
  n0,
  _DGIResc,
  0,
  [_GI],
  [
    [
      () => GatewayInstance,
      {
        [_jN]: _gI,
      },
    ],
  ]
);
export var DescribeGatewayRequest = struct(n0, _DGRes, 0, [_GA], [[0, 1]]);
export var DescribeGatewayResponse = struct(
  n0,
  _DGResc,
  0,
  [_G],
  [
    [
      () => Gateway,
      {
        [_jN]: _g,
      },
    ],
  ]
);
export var EgressGatewayBridge = struct(
  n0,
  _EGB,
  0,
  [_II, _MB],
  [
    [
      0,
      {
        [_jN]: _iI,
      },
    ],
    [
      1,
      {
        [_jN]: _mB,
      },
    ],
  ]
);
export var FrameResolution = struct(
  n0,
  _FRr,
  0,
  [_FH, _FW],
  [
    [
      1,
      {
        [_jN]: _fH,
      },
    ],
    [
      1,
      {
        [_jN]: _fW,
      },
    ],
  ]
);
export var Gateway = struct(
  n0,
  _G,
  0,
  [_ECB, _GA, _GM, _GS, _N, _Ne],
  [
    [
      64 | 0,
      {
        [_jN]: _eCB,
      },
    ],
    [
      0,
      {
        [_jN]: _gA,
      },
    ],
    [
      () => __listOfMessageDetail,
      {
        [_jN]: _gM,
      },
    ],
    [
      0,
      {
        [_jN]: _gS,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfGatewayNetwork,
      {
        [_jN]: _ne,
      },
    ],
  ]
);
export var GatewayInstance = struct(
  n0,
  _GI,
  0,
  [_BP, _CS, _GA, _GIA, _II, _IM, _IS, _RBC],
  [
    [
      0,
      {
        [_jN]: _bP,
      },
    ],
    [
      0,
      {
        [_jN]: _cS,
      },
    ],
    [
      0,
      {
        [_jN]: _gA,
      },
    ],
    [
      0,
      {
        [_jN]: _gIA,
      },
    ],
    [
      0,
      {
        [_jN]: _iI,
      },
    ],
    [
      () => __listOfMessageDetail,
      {
        [_jN]: _iM,
      },
    ],
    [
      0,
      {
        [_jN]: _iS,
      },
    ],
    [
      1,
      {
        [_jN]: _rBC,
      },
    ],
  ]
);
export var GatewayNetwork = struct(
  n0,
  _GN,
  0,
  [_CB, _N],
  [
    [
      0,
      {
        [_jN]: _cB,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var IngressGatewayBridge = struct(
  n0,
  _IGB,
  0,
  [_II, _MB, _MO],
  [
    [
      0,
      {
        [_jN]: _iI,
      },
    ],
    [
      1,
      {
        [_jN]: _mB,
      },
    ],
    [
      1,
      {
        [_jN]: _mO,
      },
    ],
  ]
);
export var MessageDetail = struct(
  n0,
  _MDe,
  0,
  [_Co, _M, _RN],
  [
    [
      0,
      {
        [_jN]: _cod,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var ThumbnailDetails = struct(
  n0,
  _TD,
  0,
  [_FA, _Th, _TM, _Tim, _Ti],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      0,
      {
        [_jN]: _th,
      },
    ],
    [
      () => __listOfMessageDetail,
      {
        [_jN]: _tM,
      },
    ],
    [
      0,
      {
        [_jN]: _tim,
      },
    ],
    [
      5,
      {
        [_jN]: _ti,
      },
    ],
  ]
);
export var TransportMediaInfo = struct(
  n0,
  _TMI,
  0,
  [_Pro],
  [
    [
      () => __listOfTransportStreamProgram,
      {
        [_jN]: _pro,
      },
    ],
  ]
);
export var TransportStream = struct(
  n0,
  _TSr,
  0,
  [_Ch, _Cod, _FRra, _FRr, _Pi, _SR, _SS, _STt],
  [
    [
      1,
      {
        [_jN]: _ch,
      },
    ],
    [
      0,
      {
        [_jN]: _code,
      },
    ],
    [
      0,
      {
        [_jN]: _fR,
      },
    ],
    [
      () => FrameResolution,
      {
        [_jN]: _fRr,
      },
    ],
    [
      1,
      {
        [_jN]: _pi,
      },
    ],
    [
      1,
      {
        [_jN]: _sR,
      },
    ],
    [
      1,
      {
        [_jN]: _sS,
      },
    ],
    [
      0,
      {
        [_jN]: _sTt,
      },
    ],
  ]
);
export var TransportStreamProgram = struct(
  n0,
  _TSP,
  0,
  [_PP, _PN, _PNr, _PPr, _Str],
  [
    [
      1,
      {
        [_jN]: _pP,
      },
    ],
    [
      0,
      {
        [_jN]: _pN,
      },
    ],
    [
      1,
      {
        [_jN]: _pNr,
      },
    ],
    [
      1,
      {
        [_jN]: _pPr,
      },
    ],
    [
      () => __listOfTransportStream,
      {
        [_jN]: _str,
      },
    ],
  ]
);
export var __listOfGatewayNetwork = list(n0, _lOGN, 0, [() => GatewayNetwork, 0]);
export var __listOfMessageDetail = list(n0, _lOMD, 0, [() => MessageDetail, 0]);
export var __listOfTransportStream = list(n0, _lOTS, 0, [() => TransportStream, 0]);
export var __listOfTransportStreamProgram = list(n0, _lOTSP, 0, [() => TransportStreamProgram, 0]);
export var CreateBridge = op(
  n0,
  _CBr,
  {
    [_h]: ["POST", "/v1/bridges", 201],
  },
  () => CreateBridgeRequest,
  () => CreateBridgeResponse
);
export var CreateGateway = op(
  n0,
  _CG,
  {
    [_h]: ["POST", "/v1/gateways", 201],
  },
  () => CreateGatewayRequest,
  () => CreateGatewayResponse
);
export var DescribeFlowSourceMetadata = op(
  n0,
  _DFSM,
  {
    [_h]: ["GET", "/v1/flows/{FlowArn}/source-metadata", 200],
  },
  () => DescribeFlowSourceMetadataRequest,
  () => DescribeFlowSourceMetadataResponse
);
export var DescribeFlowSourceThumbnail = op(
  n0,
  _DFST,
  {
    [_h]: ["GET", "/v1/flows/{FlowArn}/source-thumbnail", 200],
  },
  () => DescribeFlowSourceThumbnailRequest,
  () => DescribeFlowSourceThumbnailResponse
);
export var DescribeGateway = op(
  n0,
  _DGe,
  {
    [_h]: ["GET", "/v1/gateways/{GatewayArn}", 200],
  },
  () => DescribeGatewayRequest,
  () => DescribeGatewayResponse
);
export var DescribeGatewayInstance = op(
  n0,
  _DGIe,
  {
    [_h]: ["GET", "/v1/gateway-instances/{GatewayInstanceArn}", 200],
  },
  () => DescribeGatewayInstanceRequest,
  () => DescribeGatewayInstanceResponse
);
