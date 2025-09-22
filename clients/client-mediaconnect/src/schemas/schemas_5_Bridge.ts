// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ABO,
  _ABORd,
  _ABORdd,
  _ABS,
  _ABSRd,
  _ABSRdd,
  _B,
  _b,
  _BA,
  _bA,
  _DB,
  _DBe,
  _DBR,
  _DBRe,
  _DBRes,
  _DBResc,
  _DS,
  _dS,
  _EGB,
  _eGB,
  _FA,
  _fA,
  _FS,
  _fS,
  _FVIA,
  _fVIA,
  _h,
  _IA,
  _iA,
  _IGB,
  _iGB,
  _jN,
  _MB,
  _mB,
  _MI,
  _mI,
  _MO,
  _mO,
  _MSS,
  _mSS,
  _NN,
  _nN,
  _NO,
  _nO,
  _NS,
  _nS,
  _O,
  _o,
  _ON,
  _oN,
  _Ou,
  _ou,
  _P,
  _p,
  _Pr,
  _pr,
  _RBO,
  _RBOR,
  _RBORe,
  _RBS,
  _RBSR,
  _RBSRe,
  _S,
  _s,
  _SFC,
  _sFC,
  _SN,
  _sN,
  _So,
  _so,
  _T,
  _t,
  _UB,
  _UBFSR,
  _UBNOR,
  _UBNSR,
  _UBO,
  _UBOR,
  _UBORp,
  _UBR,
  _UBRp,
  _UBS,
  _UBSp,
  _UBSR,
  _UBSRp,
  _UBSRpd,
  _UBSRpda,
  _UEGBR,
  _UIGBR,
  n0,
} from "./schemas_0";
import { Bridge } from "./schemas_4_Describe";
import { VpcInterfaceAttachment } from "./schemas_7_Flow";
import {
  __listOfAddBridgeSourceRequest,
  __listOfBridgeSource,
  BridgeSource,
  MulticastSourceSettings,
} from "./schemas_12_Bridge";
import { UpdateFailoverConfig } from "./schemas_15_Bridge";
import { __listOfAddBridgeOutputRequest, __listOfBridgeOutput, BridgeOutput } from "./schemas_16_Bridge";

/* eslint no-var: 0 */

export var AddBridgeOutputsRequest = struct(
  n0,
  _ABORd,
  0,
  [_BA, _O],
  [
    [0, 1],
    [
      () => __listOfAddBridgeOutputRequest,
      {
        [_jN]: _o,
      },
    ],
  ]
);
export var AddBridgeOutputsResponse = struct(
  n0,
  _ABORdd,
  0,
  [_BA, _O],
  [
    [
      0,
      {
        [_jN]: _bA,
      },
    ],
    [
      () => __listOfBridgeOutput,
      {
        [_jN]: _o,
      },
    ],
  ]
);
export var AddBridgeSourcesRequest = struct(
  n0,
  _ABSRd,
  0,
  [_BA, _S],
  [
    [0, 1],
    [
      () => __listOfAddBridgeSourceRequest,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var AddBridgeSourcesResponse = struct(
  n0,
  _ABSRdd,
  0,
  [_BA, _S],
  [
    [
      0,
      {
        [_jN]: _bA,
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
export var DeleteBridgeRequest = struct(n0, _DBR, 0, [_BA], [[0, 1]]);
export var DeleteBridgeResponse = struct(
  n0,
  _DBRe,
  0,
  [_BA],
  [
    [
      0,
      {
        [_jN]: _bA,
      },
    ],
  ]
);
export var DescribeBridgeRequest = struct(n0, _DBRes, 0, [_BA], [[0, 1]]);
export var DescribeBridgeResponse = struct(
  n0,
  _DBResc,
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
export var RemoveBridgeOutputRequest = struct(
  n0,
  _RBOR,
  0,
  [_BA, _ON],
  [
    [0, 1],
    [0, 1],
  ]
);
export var RemoveBridgeOutputResponse = struct(
  n0,
  _RBORe,
  0,
  [_BA, _ON],
  [
    [
      0,
      {
        [_jN]: _bA,
      },
    ],
    [
      0,
      {
        [_jN]: _oN,
      },
    ],
  ]
);
export var RemoveBridgeSourceRequest = struct(
  n0,
  _RBSR,
  0,
  [_BA, _SN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var RemoveBridgeSourceResponse = struct(
  n0,
  _RBSRe,
  0,
  [_BA, _SN],
  [
    [
      0,
      {
        [_jN]: _bA,
      },
    ],
    [
      0,
      {
        [_jN]: _sN,
      },
    ],
  ]
);
export var UpdateBridgeFlowSourceRequest = struct(
  n0,
  _UBFSR,
  0,
  [_FA, _FVIA],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      () => VpcInterfaceAttachment,
      {
        [_jN]: _fVIA,
      },
    ],
  ]
);
export var UpdateBridgeNetworkOutputRequest = struct(
  n0,
  _UBNOR,
  0,
  [_IA, _NN, _P, _Pr, _T],
  [
    [
      0,
      {
        [_jN]: _iA,
      },
    ],
    [
      0,
      {
        [_jN]: _nN,
      },
    ],
    [
      1,
      {
        [_jN]: _p,
      },
    ],
    [
      0,
      {
        [_jN]: _pr,
      },
    ],
    [
      1,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var UpdateBridgeNetworkSourceRequest = struct(
  n0,
  _UBNSR,
  0,
  [_MI, _MSS, _NN, _P, _Pr],
  [
    [
      0,
      {
        [_jN]: _mI,
      },
    ],
    [
      () => MulticastSourceSettings,
      {
        [_jN]: _mSS,
      },
    ],
    [
      0,
      {
        [_jN]: _nN,
      },
    ],
    [
      1,
      {
        [_jN]: _p,
      },
    ],
    [
      0,
      {
        [_jN]: _pr,
      },
    ],
  ]
);
export var UpdateBridgeOutputRequest = struct(
  n0,
  _UBOR,
  0,
  [_BA, _NO, _ON],
  [
    [0, 1],
    [
      () => UpdateBridgeNetworkOutputRequest,
      {
        [_jN]: _nO,
      },
    ],
    [0, 1],
  ]
);
export var UpdateBridgeOutputResponse = struct(
  n0,
  _UBORp,
  0,
  [_BA, _Ou],
  [
    [
      0,
      {
        [_jN]: _bA,
      },
    ],
    [
      () => BridgeOutput,
      {
        [_jN]: _ou,
      },
    ],
  ]
);
export var UpdateBridgeRequest = struct(
  n0,
  _UBR,
  0,
  [_BA, _EGB, _IGB, _SFC],
  [
    [0, 1],
    [
      () => UpdateEgressGatewayBridgeRequest,
      {
        [_jN]: _eGB,
      },
    ],
    [
      () => UpdateIngressGatewayBridgeRequest,
      {
        [_jN]: _iGB,
      },
    ],
    [
      () => UpdateFailoverConfig,
      {
        [_jN]: _sFC,
      },
    ],
  ]
);
export var UpdateBridgeResponse = struct(
  n0,
  _UBRp,
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
export var UpdateBridgeSourceRequest = struct(
  n0,
  _UBSR,
  0,
  [_BA, _FS, _NS, _SN],
  [
    [0, 1],
    [
      () => UpdateBridgeFlowSourceRequest,
      {
        [_jN]: _fS,
      },
    ],
    [
      () => UpdateBridgeNetworkSourceRequest,
      {
        [_jN]: _nS,
      },
    ],
    [0, 1],
  ]
);
export var UpdateBridgeSourceResponse = struct(
  n0,
  _UBSRp,
  0,
  [_BA, _So],
  [
    [
      0,
      {
        [_jN]: _bA,
      },
    ],
    [
      () => BridgeSource,
      {
        [_jN]: _so,
      },
    ],
  ]
);
export var UpdateBridgeStateRequest = struct(
  n0,
  _UBSRpd,
  0,
  [_BA, _DS],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _dS,
      },
    ],
  ]
);
export var UpdateBridgeStateResponse = struct(
  n0,
  _UBSRpda,
  0,
  [_BA, _DS],
  [
    [
      0,
      {
        [_jN]: _bA,
      },
    ],
    [
      0,
      {
        [_jN]: _dS,
      },
    ],
  ]
);
export var UpdateEgressGatewayBridgeRequest = struct(
  n0,
  _UEGBR,
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
export var UpdateIngressGatewayBridgeRequest = struct(
  n0,
  _UIGBR,
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
export var AddBridgeOutputs = op(
  n0,
  _ABO,
  {
    [_h]: ["POST", "/v1/bridges/{BridgeArn}/outputs", 202],
  },
  () => AddBridgeOutputsRequest,
  () => AddBridgeOutputsResponse
);
export var AddBridgeSources = op(
  n0,
  _ABS,
  {
    [_h]: ["POST", "/v1/bridges/{BridgeArn}/sources", 202],
  },
  () => AddBridgeSourcesRequest,
  () => AddBridgeSourcesResponse
);
export var DeleteBridge = op(
  n0,
  _DB,
  {
    [_h]: ["DELETE", "/v1/bridges/{BridgeArn}", 200],
  },
  () => DeleteBridgeRequest,
  () => DeleteBridgeResponse
);
export var DescribeBridge = op(
  n0,
  _DBe,
  {
    [_h]: ["GET", "/v1/bridges/{BridgeArn}", 200],
  },
  () => DescribeBridgeRequest,
  () => DescribeBridgeResponse
);
export var RemoveBridgeOutput = op(
  n0,
  _RBO,
  {
    [_h]: ["DELETE", "/v1/bridges/{BridgeArn}/outputs/{OutputName}", 202],
  },
  () => RemoveBridgeOutputRequest,
  () => RemoveBridgeOutputResponse
);
export var RemoveBridgeSource = op(
  n0,
  _RBS,
  {
    [_h]: ["DELETE", "/v1/bridges/{BridgeArn}/sources/{SourceName}", 202],
  },
  () => RemoveBridgeSourceRequest,
  () => RemoveBridgeSourceResponse
);
export var UpdateBridge = op(
  n0,
  _UB,
  {
    [_h]: ["PUT", "/v1/bridges/{BridgeArn}", 202],
  },
  () => UpdateBridgeRequest,
  () => UpdateBridgeResponse
);
export var UpdateBridgeOutput = op(
  n0,
  _UBO,
  {
    [_h]: ["PUT", "/v1/bridges/{BridgeArn}/outputs/{OutputName}", 202],
  },
  () => UpdateBridgeOutputRequest,
  () => UpdateBridgeOutputResponse
);
export var UpdateBridgeSource = op(
  n0,
  _UBS,
  {
    [_h]: ["PUT", "/v1/bridges/{BridgeArn}/sources/{SourceName}", 202],
  },
  () => UpdateBridgeSourceRequest,
  () => UpdateBridgeSourceResponse
);
export var UpdateBridgeState = op(
  n0,
  _UBSp,
  {
    [_h]: ["PUT", "/v1/bridges/{BridgeArn}/state", 202],
  },
  () => UpdateBridgeStateRequest,
  () => UpdateBridgeStateResponse
);
