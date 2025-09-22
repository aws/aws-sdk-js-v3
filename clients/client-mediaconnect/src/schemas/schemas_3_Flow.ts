// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AddFlowOutputs420Exception as __AddFlowOutputs420Exception,
  CreateFlow420Exception as __CreateFlow420Exception,
  GrantFlowEntitlements420Exception as __GrantFlowEntitlements420Exception,
} from "../models/index";
import {
  _AFO,
  _AFOE,
  _AFOR,
  _AFORd,
  _AFS,
  _AFSR,
  _AFSRd,
  _Al,
  _al,
  _AM,
  _AMS,
  _aMS,
  _AMSu,
  _AOR,
  _AZ,
  _aZ,
  _BA,
  _bA,
  _BF,
  _bF,
  _BPr,
  _bPr,
  _c,
  _CAL,
  _cAL,
  _CF,
  _cF,
  _CFE,
  _CFR,
  _CFr,
  _CFRr,
  _CIV,
  _cIV,
  _CQAS,
  _cQAS,
  _D,
  _d,
  _DC,
  _dC,
  _DCe,
  _DCR,
  _De,
  _de,
  _Dec,
  _dec,
  _DFe,
  _DFRes,
  _DFResc,
  _DI,
  _dI,
  _DIe,
  _dIe,
  _DP,
  _dP,
  _DSA,
  _dSA,
  _DSP,
  _dSP,
  _DTSFP,
  _dTSFP,
  _E,
  _e,
  _EA,
  _eA,
  _EI,
  _eI,
  _En,
  _en,
  _ENn,
  _eNn,
  _Ent,
  _ent,
  _enti,
  _EP,
  _eP,
  _EPn,
  _ePn,
  _EPR,
  _Er,
  _er,
  _ES,
  _eS,
  _F,
  _f,
  _FA,
  _fA,
  _FF,
  _fF,
  _FSl,
  _fSl,
  _GBS,
  _gBS,
  _GER,
  _GFE,
  _GFEE,
  _GFER,
  _GFERr,
  _h,
  _hE,
  _I,
  _i,
  _IC,
  _iC,
  _ICn,
  _ICR,
  _IIn,
  _iIn,
  _IIng,
  _iIng,
  _IP,
  _iP,
  _IPn,
  _iPn,
  _IR,
  _jN,
  _KT,
  _kT,
  _LA,
  _lA,
  _lOAMS,
  _lOAOR,
  _lODC,
  _lODCR,
  _lOE,
  _lOGER,
  _lOIC,
  _lOICR,
  _lOMSOC,
  _lOMSOCR,
  _lOMSSC,
  _lOMSSCR,
  _lONDSC,
  _lOOi,
  _lOS,
  _lOSSR,
  _lOVMS,
  _M,
  _m,
  _Ma,
  _ma,
  _MB,
  _mB,
  _MC,
  _MD,
  _mD,
  _Me,
  _me,
  _ML,
  _mL,
  _MLi,
  _mLi,
  _MLIA,
  _mLIA,
  _MN,
  _mN,
  _MS,
  _mS,
  _MSB,
  _mSB,
  _MSD,
  _mSD,
  _MSH,
  _mSH,
  _MSN,
  _mSN,
  _MSOC,
  _mSOC,
  _MSOCe,
  _MSOCR,
  _MSSC,
  _mSSC,
  _MSSCe,
  _MSSCR,
  _N,
  _n,
  _NC,
  _nC,
  _NDS,
  _nDS,
  _NDSC,
  _NPN,
  _nPN,
  _NSd,
  _nSd,
  _NSHQ,
  _nSHQ,
  _O,
  _o,
  _OA,
  _oA,
  _OI,
  _oI,
  _OS,
  _oS,
  _Ou,
  _ou,
  _P,
  _p,
  _PIA,
  _pIA,
  _Pr,
  _pr,
  _rA,
  _RAo,
  _Re,
  _re,
  _RI,
  _rI,
  _RIe,
  _rIe,
  _S,
  _s,
  _SA,
  _sA,
  _SAe,
  _sAe,
  _SAo,
  _sAo,
  _SCP,
  _sCP,
  _SFC,
  _sFC,
  _SGBSR,
  _SI,
  _sI,
  _SIA,
  _sIA,
  _SL,
  _sL,
  _SLA,
  _sLA,
  _SLP,
  _sLP,
  _SMC,
  _sMC,
  _So,
  _so,
  _SSR,
  _St,
  _st,
  _Sta,
  _sta,
  _Su,
  _su,
  _Tr,
  _tr,
  _TS,
  _tS,
  _TSh,
  _tSh,
  _U,
  _u,
  _UE,
  _UF,
  _UFE,
  _UFER,
  _UFERp,
  _UFO,
  _UFOR,
  _UFORp,
  _UFR,
  _UFRp,
  _UFS,
  _UFSR,
  _UFSRp,
  _UGBSR,
  _UM,
  _VI,
  _vI,
  _VIA,
  _vIA,
  _VIAp,
  _vIAp,
  _VIN,
  _vIN,
  _VMS,
  _vMS,
  _VMSi,
  _WC,
  _wC,
  n0,
} from "./schemas_0";
import { __listOfAddMediaStreamRequest, __listOfMediaStream } from "./schemas_2_Flow";
import { Maintenance } from "./schemas_6_Flow";
import { VpcInterfaceAttachment } from "./schemas_7_Flow";
import { __listOfVpcInterface, __listOfVpcInterfaceRequest } from "./schemas_9_Flow";
import { FailoverConfig, UpdateFailoverConfig } from "./schemas_15_Bridge";

/* eslint no-var: 0 */

export var AddFlowOutputs420Exception = error(
  n0,
  _AFOE,
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

  __AddFlowOutputs420Exception
);
export var AddFlowOutputsRequest = struct(
  n0,
  _AFOR,
  0,
  [_FA, _O],
  [
    [0, 1],
    [
      () => __listOfAddOutputRequest,
      {
        [_jN]: _o,
      },
    ],
  ]
);
export var AddFlowOutputsResponse = struct(
  n0,
  _AFORd,
  0,
  [_FA, _O],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      () => __listOfOutput,
      {
        [_jN]: _o,
      },
    ],
  ]
);
export var AddFlowSourcesRequest = struct(
  n0,
  _AFSR,
  0,
  [_FA, _S],
  [
    [0, 1],
    [
      () => __listOfSetSourceRequest,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var AddFlowSourcesResponse = struct(
  n0,
  _AFSRd,
  0,
  [_FA, _S],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      () => __listOfSource,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var AddMaintenance = struct(
  n0,
  _AM,
  0,
  [_MD, _MSH],
  [
    [
      0,
      {
        [_jN]: _mD,
      },
    ],
    [
      0,
      {
        [_jN]: _mSH,
      },
    ],
  ]
);
export var AddOutputRequest = struct(
  n0,
  _AOR,
  0,
  [_CAL, _D, _De, _E, _ML, _MSOC, _MLi, _N, _P, _Pr, _RI, _SCP, _SL, _SI, _VIA, _OS, _NSHQ, _NPN],
  [
    [
      64 | 0,
      {
        [_jN]: _cAL,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _de,
      },
    ],
    [
      () => Encryption,
      {
        [_jN]: _en,
      },
    ],
    [
      1,
      {
        [_jN]: _mL,
      },
    ],
    [
      () => __listOfMediaStreamOutputConfigurationRequest,
      {
        [_jN]: _mSOC,
      },
    ],
    [
      1,
      {
        [_jN]: _mLi,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
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
      0,
      {
        [_jN]: _rI,
      },
    ],
    [
      1,
      {
        [_jN]: _sCP,
      },
    ],
    [
      1,
      {
        [_jN]: _sL,
      },
    ],
    [
      0,
      {
        [_jN]: _sI,
      },
    ],
    [
      () => VpcInterfaceAttachment,
      {
        [_jN]: _vIA,
      },
    ],
    [
      0,
      {
        [_jN]: _oS,
      },
    ],
    [
      1,
      {
        [_jN]: _nSHQ,
      },
    ],
    [
      0,
      {
        [_jN]: _nPN,
      },
    ],
  ]
);
export var AudioMonitoringSetting = struct(
  n0,
  _AMS,
  0,
  [_SA],
  [
    [
      () => SilentAudio,
      {
        [_jN]: _sA,
      },
    ],
  ]
);
export var BlackFrames = struct(
  n0,
  _BF,
  0,
  [_St, _TS],
  [
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      1,
      {
        [_jN]: _tS,
      },
    ],
  ]
);
export var CreateFlow420Exception = error(
  n0,
  _CFE,
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

  __CreateFlow420Exception
);
export var CreateFlowRequest = struct(
  n0,
  _CFR,
  0,
  [_AZ, _En, _MS, _N, _O, _So, _SFC, _S, _VI, _Ma, _SMC, _FSl, _NC],
  [
    [
      0,
      {
        [_jN]: _aZ,
      },
    ],
    [
      () => __listOfGrantEntitlementRequest,
      {
        [_jN]: _ent,
      },
    ],
    [
      () => __listOfAddMediaStreamRequest,
      {
        [_jN]: _mS,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfAddOutputRequest,
      {
        [_jN]: _o,
      },
    ],
    [
      () => SetSourceRequest,
      {
        [_jN]: _so,
      },
    ],
    [
      () => FailoverConfig,
      {
        [_jN]: _sFC,
      },
    ],
    [
      () => __listOfSetSourceRequest,
      {
        [_jN]: _s,
      },
    ],
    [
      () => __listOfVpcInterfaceRequest,
      {
        [_jN]: _vI,
      },
    ],
    [
      () => AddMaintenance,
      {
        [_jN]: _ma,
      },
    ],
    [
      () => MonitoringConfig,
      {
        [_jN]: _sMC,
      },
    ],
    [
      0,
      {
        [_jN]: _fSl,
      },
    ],
    [
      () => NdiConfig,
      {
        [_jN]: _nC,
      },
    ],
  ]
);
export var CreateFlowResponse = struct(
  n0,
  _CFRr,
  0,
  [_F],
  [
    [
      () => Flow,
      {
        [_jN]: _f,
      },
    ],
  ]
);
export var DescribeFlowRequest = struct(n0, _DFRes, 0, [_FA], [[0, 1]]);
export var DescribeFlowResponse = struct(
  n0,
  _DFResc,
  0,
  [_F, _Me],
  [
    [
      () => Flow,
      {
        [_jN]: _f,
      },
    ],
    [
      () => Messages,
      {
        [_jN]: _me,
      },
    ],
  ]
);
export var DestinationConfiguration = struct(
  n0,
  _DC,
  0,
  [_DI, _DP, _I, _OI],
  [
    [
      0,
      {
        [_jN]: _dI,
      },
    ],
    [
      1,
      {
        [_jN]: _dP,
      },
    ],
    [
      () => Interface,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _oI,
      },
    ],
  ]
);
export var DestinationConfigurationRequest = struct(
  n0,
  _DCR,
  0,
  [_DI, _DP, _I],
  [
    [
      0,
      {
        [_jN]: _dI,
      },
    ],
    [
      1,
      {
        [_jN]: _dP,
      },
    ],
    [
      () => InterfaceRequest,
      {
        [_jN]: _i,
      },
    ],
  ]
);
export var EncodingParameters = struct(
  n0,
  _EP,
  0,
  [_CF, _EPn],
  [
    [
      1,
      {
        [_jN]: _cF,
      },
    ],
    [
      0,
      {
        [_jN]: _eP,
      },
    ],
  ]
);
export var EncodingParametersRequest = struct(
  n0,
  _EPR,
  0,
  [_CF, _EPn],
  [
    [
      1,
      {
        [_jN]: _cF,
      },
    ],
    [
      0,
      {
        [_jN]: _eP,
      },
    ],
  ]
);
export var Encryption = struct(
  n0,
  _E,
  0,
  [_Al, _CIV, _DIe, _KT, _Re, _RIe, _RAo, _SAe, _U],
  [
    [
      0,
      {
        [_jN]: _al,
      },
    ],
    [
      0,
      {
        [_jN]: _cIV,
      },
    ],
    [
      0,
      {
        [_jN]: _dIe,
      },
    ],
    [
      0,
      {
        [_jN]: _kT,
      },
    ],
    [
      0,
      {
        [_jN]: _re,
      },
    ],
    [
      0,
      {
        [_jN]: _rIe,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      0,
      {
        [_jN]: _sAe,
      },
    ],
    [
      0,
      {
        [_jN]: _u,
      },
    ],
  ]
);
export var Entitlement = struct(
  n0,
  _Ent,
  0,
  [_DTSFP, _D, _E, _EA, _ES, _N, _Su],
  [
    [
      1,
      {
        [_jN]: _dTSFP,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      () => Encryption,
      {
        [_jN]: _en,
      },
    ],
    [
      0,
      {
        [_jN]: _eA,
      },
    ],
    [
      0,
      {
        [_jN]: _eS,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _su,
      },
    ],
  ]
);
export var Flow = struct(
  n0,
  _F,
  0,
  [_AZ, _D, _EI, _En, _FA, _MS, _N, _O, _So, _SFC, _S, _Sta, _VI, _Ma, _SMC, _FSl, _NC],
  [
    [
      0,
      {
        [_jN]: _aZ,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _eI,
      },
    ],
    [
      () => __listOfEntitlement,
      {
        [_jN]: _ent,
      },
    ],
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
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => __listOfOutput,
      {
        [_jN]: _o,
      },
    ],
    [
      () => Source,
      {
        [_jN]: _so,
      },
    ],
    [
      () => FailoverConfig,
      {
        [_jN]: _sFC,
      },
    ],
    [
      () => __listOfSource,
      {
        [_jN]: _s,
      },
    ],
    [
      0,
      {
        [_jN]: _sta,
      },
    ],
    [
      () => __listOfVpcInterface,
      {
        [_jN]: _vI,
      },
    ],
    [
      () => Maintenance,
      {
        [_jN]: _ma,
      },
    ],
    [
      () => MonitoringConfig,
      {
        [_jN]: _sMC,
      },
    ],
    [
      0,
      {
        [_jN]: _fSl,
      },
    ],
    [
      () => NdiConfig,
      {
        [_jN]: _nC,
      },
    ],
  ]
);
export var FrozenFrames = struct(
  n0,
  _FF,
  0,
  [_St, _TS],
  [
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      1,
      {
        [_jN]: _tS,
      },
    ],
  ]
);
export var GatewayBridgeSource = struct(
  n0,
  _GBS,
  0,
  [_BA, _VIA],
  [
    [
      0,
      {
        [_jN]: _bA,
      },
    ],
    [
      () => VpcInterfaceAttachment,
      {
        [_jN]: _vIA,
      },
    ],
  ]
);
export var GrantEntitlementRequest = struct(
  n0,
  _GER,
  0,
  [_DTSFP, _D, _E, _ES, _N, _Su],
  [
    [
      1,
      {
        [_jN]: _dTSFP,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      () => Encryption,
      {
        [_jN]: _en,
      },
    ],
    [
      0,
      {
        [_jN]: _eS,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _su,
      },
    ],
  ]
);
export var GrantFlowEntitlements420Exception = error(
  n0,
  _GFEE,
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

  __GrantFlowEntitlements420Exception
);
export var GrantFlowEntitlementsRequest = struct(
  n0,
  _GFER,
  0,
  [_En, _FA],
  [
    [
      () => __listOfGrantEntitlementRequest,
      {
        [_jN]: _ent,
      },
    ],
    [0, 1],
  ]
);
export var GrantFlowEntitlementsResponse = struct(
  n0,
  _GFERr,
  0,
  [_En, _FA],
  [
    [
      () => __listOfEntitlement,
      {
        [_jN]: _ent,
      },
    ],
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
  ]
);
export var InputConfiguration = struct(
  n0,
  _IC,
  0,
  [_IIn, _IP, _I],
  [
    [
      0,
      {
        [_jN]: _iIn,
      },
    ],
    [
      1,
      {
        [_jN]: _iP,
      },
    ],
    [
      () => Interface,
      {
        [_jN]: _i,
      },
    ],
  ]
);
export var InputConfigurationRequest = struct(
  n0,
  _ICR,
  0,
  [_IP, _I],
  [
    [
      1,
      {
        [_jN]: _iP,
      },
    ],
    [
      () => InterfaceRequest,
      {
        [_jN]: _i,
      },
    ],
  ]
);
export var Interface = struct(
  n0,
  _I,
  0,
  [_N],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var InterfaceRequest = struct(
  n0,
  _IR,
  0,
  [_N],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var MediaStreamOutputConfiguration = struct(
  n0,
  _MSOCe,
  0,
  [_DCe, _ENn, _EP, _MSN],
  [
    [
      () => __listOfDestinationConfiguration,
      {
        [_jN]: _dC,
      },
    ],
    [
      0,
      {
        [_jN]: _eNn,
      },
    ],
    [
      () => EncodingParameters,
      {
        [_jN]: _ePn,
      },
    ],
    [
      0,
      {
        [_jN]: _mSN,
      },
    ],
  ]
);
export var MediaStreamOutputConfigurationRequest = struct(
  n0,
  _MSOCR,
  0,
  [_DCe, _ENn, _EP, _MSN],
  [
    [
      () => __listOfDestinationConfigurationRequest,
      {
        [_jN]: _dC,
      },
    ],
    [
      0,
      {
        [_jN]: _eNn,
      },
    ],
    [
      () => EncodingParametersRequest,
      {
        [_jN]: _ePn,
      },
    ],
    [
      0,
      {
        [_jN]: _mSN,
      },
    ],
  ]
);
export var MediaStreamSourceConfiguration = struct(
  n0,
  _MSSC,
  0,
  [_ENn, _ICn, _MSN],
  [
    [
      0,
      {
        [_jN]: _eNn,
      },
    ],
    [
      () => __listOfInputConfiguration,
      {
        [_jN]: _iC,
      },
    ],
    [
      0,
      {
        [_jN]: _mSN,
      },
    ],
  ]
);
export var MediaStreamSourceConfigurationRequest = struct(
  n0,
  _MSSCR,
  0,
  [_ENn, _ICn, _MSN],
  [
    [
      0,
      {
        [_jN]: _eNn,
      },
    ],
    [
      () => __listOfInputConfigurationRequest,
      {
        [_jN]: _iC,
      },
    ],
    [
      0,
      {
        [_jN]: _mSN,
      },
    ],
  ]
);
export var Messages = struct(
  n0,
  _Me,
  0,
  [_Er],
  [
    [
      64 | 0,
      {
        [_jN]: _er,
      },
    ],
  ]
);
export var MonitoringConfig = struct(
  n0,
  _MC,
  0,
  [_TSh, _AMSu, _CQAS, _VMS],
  [
    [
      0,
      {
        [_jN]: _tSh,
      },
    ],
    [
      () => __listOfAudioMonitoringSetting,
      {
        [_jN]: _aMS,
      },
    ],
    [
      0,
      {
        [_jN]: _cQAS,
      },
    ],
    [
      () => __listOfVideoMonitoringSetting,
      {
        [_jN]: _vMS,
      },
    ],
  ]
);
export var NdiConfig = struct(
  n0,
  _NC,
  0,
  [_NSd, _MN, _NDS],
  [
    [
      0,
      {
        [_jN]: _nSd,
      },
    ],
    [
      0,
      {
        [_jN]: _mN,
      },
    ],
    [
      () => __listOfNdiDiscoveryServerConfig,
      {
        [_jN]: _nDS,
      },
    ],
  ]
);
export var NdiDiscoveryServerConfig = struct(
  n0,
  _NDSC,
  0,
  [_DSA, _DSP, _VIAp],
  [
    [
      0,
      {
        [_jN]: _dSA,
      },
    ],
    [
      1,
      {
        [_jN]: _dSP,
      },
    ],
    [
      0,
      {
        [_jN]: _vIAp,
      },
    ],
  ]
);
export var Output = struct(
  n0,
  _Ou,
  0,
  [_DTSFP, _D, _De, _E, _EA, _LA, _MLIA, _MSOC, _N, _OA, _P, _Tr, _VIA, _BA, _BPr, _OS, _PIA],
  [
    [
      1,
      {
        [_jN]: _dTSFP,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _de,
      },
    ],
    [
      () => Encryption,
      {
        [_jN]: _en,
      },
    ],
    [
      0,
      {
        [_jN]: _eA,
      },
    ],
    [
      0,
      {
        [_jN]: _lA,
      },
    ],
    [
      0,
      {
        [_jN]: _mLIA,
      },
    ],
    [
      () => __listOfMediaStreamOutputConfiguration,
      {
        [_jN]: _mSOC,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _oA,
      },
    ],
    [
      1,
      {
        [_jN]: _p,
      },
    ],
    [
      () => Transport,
      {
        [_jN]: _tr,
      },
    ],
    [
      () => VpcInterfaceAttachment,
      {
        [_jN]: _vIA,
      },
    ],
    [
      0,
      {
        [_jN]: _bA,
      },
    ],
    [
      64 | 1,
      {
        [_jN]: _bPr,
      },
    ],
    [
      0,
      {
        [_jN]: _oS,
      },
    ],
    [
      0,
      {
        [_jN]: _pIA,
      },
    ],
  ]
);
export var SetGatewayBridgeSourceRequest = struct(
  n0,
  _SGBSR,
  0,
  [_BA, _VIA],
  [
    [
      0,
      {
        [_jN]: _bA,
      },
    ],
    [
      () => VpcInterfaceAttachment,
      {
        [_jN]: _vIA,
      },
    ],
  ]
);
export var SetSourceRequest = struct(
  n0,
  _SSR,
  0,
  [_Dec, _D, _EA, _IPn, _MB, _ML, _MSB, _MSSCe, _MLi, _N, _Pr, _SCP, _SIA, _SLA, _SLP, _SI, _VIN, _WC, _GBS],
  [
    [
      () => Encryption,
      {
        [_jN]: _dec,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _eA,
      },
    ],
    [
      1,
      {
        [_jN]: _iPn,
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
        [_jN]: _mL,
      },
    ],
    [
      1,
      {
        [_jN]: _mSB,
      },
    ],
    [
      () => __listOfMediaStreamSourceConfigurationRequest,
      {
        [_jN]: _mSSC,
      },
    ],
    [
      1,
      {
        [_jN]: _mLi,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
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
        [_jN]: _sCP,
      },
    ],
    [
      0,
      {
        [_jN]: _sIA,
      },
    ],
    [
      0,
      {
        [_jN]: _sLA,
      },
    ],
    [
      1,
      {
        [_jN]: _sLP,
      },
    ],
    [
      0,
      {
        [_jN]: _sI,
      },
    ],
    [
      0,
      {
        [_jN]: _vIN,
      },
    ],
    [
      0,
      {
        [_jN]: _wC,
      },
    ],
    [
      () => SetGatewayBridgeSourceRequest,
      {
        [_jN]: _gBS,
      },
    ],
  ]
);
export var SilentAudio = struct(
  n0,
  _SA,
  0,
  [_St, _TS],
  [
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      1,
      {
        [_jN]: _tS,
      },
    ],
  ]
);
export var Source = struct(
  n0,
  _So,
  0,
  [_DTSFP, _Dec, _D, _EA, _IIng, _IPn, _MSSCe, _N, _SCP, _SIA, _SAo, _Tr, _VIN, _WC, _GBS, _PIA],
  [
    [
      1,
      {
        [_jN]: _dTSFP,
      },
    ],
    [
      () => Encryption,
      {
        [_jN]: _dec,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _eA,
      },
    ],
    [
      0,
      {
        [_jN]: _iIng,
      },
    ],
    [
      1,
      {
        [_jN]: _iPn,
      },
    ],
    [
      () => __listOfMediaStreamSourceConfiguration,
      {
        [_jN]: _mSSC,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      1,
      {
        [_jN]: _sCP,
      },
    ],
    [
      0,
      {
        [_jN]: _sIA,
      },
    ],
    [
      0,
      {
        [_jN]: _sAo,
      },
    ],
    [
      () => Transport,
      {
        [_jN]: _tr,
      },
    ],
    [
      0,
      {
        [_jN]: _vIN,
      },
    ],
    [
      0,
      {
        [_jN]: _wC,
      },
    ],
    [
      () => GatewayBridgeSource,
      {
        [_jN]: _gBS,
      },
    ],
    [
      0,
      {
        [_jN]: _pIA,
      },
    ],
  ]
);
export var Transport = struct(
  n0,
  _Tr,
  0,
  [_CAL, _MB, _ML, _MSB, _MLi, _Pr, _RI, _SCP, _SIA, _SL, _SLA, _SLP, _SI, _NSHQ, _NPN],
  [
    [
      64 | 0,
      {
        [_jN]: _cAL,
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
        [_jN]: _mL,
      },
    ],
    [
      1,
      {
        [_jN]: _mSB,
      },
    ],
    [
      1,
      {
        [_jN]: _mLi,
      },
    ],
    [
      0,
      {
        [_jN]: _pr,
      },
    ],
    [
      0,
      {
        [_jN]: _rI,
      },
    ],
    [
      1,
      {
        [_jN]: _sCP,
      },
    ],
    [
      0,
      {
        [_jN]: _sIA,
      },
    ],
    [
      1,
      {
        [_jN]: _sL,
      },
    ],
    [
      0,
      {
        [_jN]: _sLA,
      },
    ],
    [
      1,
      {
        [_jN]: _sLP,
      },
    ],
    [
      0,
      {
        [_jN]: _sI,
      },
    ],
    [
      1,
      {
        [_jN]: _nSHQ,
      },
    ],
    [
      0,
      {
        [_jN]: _nPN,
      },
    ],
  ]
);
export var UpdateEncryption = struct(
  n0,
  _UE,
  0,
  [_Al, _CIV, _DIe, _KT, _Re, _RIe, _RAo, _SAe, _U],
  [
    [
      0,
      {
        [_jN]: _al,
      },
    ],
    [
      0,
      {
        [_jN]: _cIV,
      },
    ],
    [
      0,
      {
        [_jN]: _dIe,
      },
    ],
    [
      0,
      {
        [_jN]: _kT,
      },
    ],
    [
      0,
      {
        [_jN]: _re,
      },
    ],
    [
      0,
      {
        [_jN]: _rIe,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      0,
      {
        [_jN]: _sAe,
      },
    ],
    [
      0,
      {
        [_jN]: _u,
      },
    ],
  ]
);
export var UpdateFlowEntitlementRequest = struct(
  n0,
  _UFER,
  0,
  [_D, _E, _EA, _ES, _FA, _Su],
  [
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      () => UpdateEncryption,
      {
        [_jN]: _en,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _eS,
      },
    ],
    [0, 1],
    [
      64 | 0,
      {
        [_jN]: _su,
      },
    ],
  ]
);
export var UpdateFlowEntitlementResponse = struct(
  n0,
  _UFERp,
  0,
  [_Ent, _FA],
  [
    [
      () => Entitlement,
      {
        [_jN]: _enti,
      },
    ],
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
  ]
);
export var UpdateFlowOutputRequest = struct(
  n0,
  _UFOR,
  0,
  [_CAL, _D, _De, _E, _FA, _ML, _MSOC, _MLi, _OA, _P, _Pr, _RI, _SCP, _SIA, _SL, _SI, _VIA, _OS, _NPN, _NSHQ],
  [
    [
      64 | 0,
      {
        [_jN]: _cAL,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _de,
      },
    ],
    [
      () => UpdateEncryption,
      {
        [_jN]: _en,
      },
    ],
    [0, 1],
    [
      1,
      {
        [_jN]: _mL,
      },
    ],
    [
      () => __listOfMediaStreamOutputConfigurationRequest,
      {
        [_jN]: _mSOC,
      },
    ],
    [
      1,
      {
        [_jN]: _mLi,
      },
    ],
    [0, 1],
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
      0,
      {
        [_jN]: _rI,
      },
    ],
    [
      1,
      {
        [_jN]: _sCP,
      },
    ],
    [
      0,
      {
        [_jN]: _sIA,
      },
    ],
    [
      1,
      {
        [_jN]: _sL,
      },
    ],
    [
      0,
      {
        [_jN]: _sI,
      },
    ],
    [
      () => VpcInterfaceAttachment,
      {
        [_jN]: _vIA,
      },
    ],
    [
      0,
      {
        [_jN]: _oS,
      },
    ],
    [
      0,
      {
        [_jN]: _nPN,
      },
    ],
    [
      1,
      {
        [_jN]: _nSHQ,
      },
    ],
  ]
);
export var UpdateFlowOutputResponse = struct(
  n0,
  _UFORp,
  0,
  [_FA, _Ou],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      () => Output,
      {
        [_jN]: _ou,
      },
    ],
  ]
);
export var UpdateFlowRequest = struct(
  n0,
  _UFR,
  0,
  [_FA, _SFC, _Ma, _SMC, _NC],
  [
    [0, 1],
    [
      () => UpdateFailoverConfig,
      {
        [_jN]: _sFC,
      },
    ],
    [
      () => UpdateMaintenance,
      {
        [_jN]: _ma,
      },
    ],
    [
      () => MonitoringConfig,
      {
        [_jN]: _sMC,
      },
    ],
    [
      () => NdiConfig,
      {
        [_jN]: _nC,
      },
    ],
  ]
);
export var UpdateFlowResponse = struct(
  n0,
  _UFRp,
  0,
  [_F],
  [
    [
      () => Flow,
      {
        [_jN]: _f,
      },
    ],
  ]
);
export var UpdateFlowSourceRequest = struct(
  n0,
  _UFSR,
  0,
  [_Dec, _D, _EA, _FA, _IPn, _MB, _ML, _MSB, _MSSCe, _MLi, _Pr, _SCP, _SIA, _SAo, _SLA, _SLP, _SI, _VIN, _WC, _GBS],
  [
    [
      () => UpdateEncryption,
      {
        [_jN]: _dec,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _eA,
      },
    ],
    [0, 1],
    [
      1,
      {
        [_jN]: _iPn,
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
        [_jN]: _mL,
      },
    ],
    [
      1,
      {
        [_jN]: _mSB,
      },
    ],
    [
      () => __listOfMediaStreamSourceConfigurationRequest,
      {
        [_jN]: _mSSC,
      },
    ],
    [
      1,
      {
        [_jN]: _mLi,
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
        [_jN]: _sCP,
      },
    ],
    [
      0,
      {
        [_jN]: _sIA,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _sLA,
      },
    ],
    [
      1,
      {
        [_jN]: _sLP,
      },
    ],
    [
      0,
      {
        [_jN]: _sI,
      },
    ],
    [
      0,
      {
        [_jN]: _vIN,
      },
    ],
    [
      0,
      {
        [_jN]: _wC,
      },
    ],
    [
      () => UpdateGatewayBridgeSourceRequest,
      {
        [_jN]: _gBS,
      },
    ],
  ]
);
export var UpdateFlowSourceResponse = struct(
  n0,
  _UFSRp,
  0,
  [_FA, _So],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      () => Source,
      {
        [_jN]: _so,
      },
    ],
  ]
);
export var UpdateGatewayBridgeSourceRequest = struct(
  n0,
  _UGBSR,
  0,
  [_BA, _VIA],
  [
    [
      0,
      {
        [_jN]: _bA,
      },
    ],
    [
      () => VpcInterfaceAttachment,
      {
        [_jN]: _vIA,
      },
    ],
  ]
);
export var UpdateMaintenance = struct(
  n0,
  _UM,
  0,
  [_MD, _MSD, _MSH],
  [
    [
      0,
      {
        [_jN]: _mD,
      },
    ],
    [
      0,
      {
        [_jN]: _mSD,
      },
    ],
    [
      0,
      {
        [_jN]: _mSH,
      },
    ],
  ]
);
export var VideoMonitoringSetting = struct(
  n0,
  _VMSi,
  0,
  [_BF, _FF],
  [
    [
      () => BlackFrames,
      {
        [_jN]: _bF,
      },
    ],
    [
      () => FrozenFrames,
      {
        [_jN]: _fF,
      },
    ],
  ]
);
export var __listOfAddOutputRequest = list(n0, _lOAOR, 0, [() => AddOutputRequest, 0]);
export var __listOfAudioMonitoringSetting = list(n0, _lOAMS, 0, [() => AudioMonitoringSetting, 0]);
export var __listOfDestinationConfiguration = list(n0, _lODC, 0, [() => DestinationConfiguration, 0]);
export var __listOfDestinationConfigurationRequest = list(n0, _lODCR, 0, [() => DestinationConfigurationRequest, 0]);
export var __listOfEntitlement = list(n0, _lOE, 0, [() => Entitlement, 0]);
export var __listOfGrantEntitlementRequest = list(n0, _lOGER, 0, [() => GrantEntitlementRequest, 0]);
export var __listOfInputConfiguration = list(n0, _lOIC, 0, [() => InputConfiguration, 0]);
export var __listOfInputConfigurationRequest = list(n0, _lOICR, 0, [() => InputConfigurationRequest, 0]);
export var __listOfInteger = 64 | 1;

export var __listOfMediaStreamOutputConfiguration = list(n0, _lOMSOC, 0, [() => MediaStreamOutputConfiguration, 0]);
export var __listOfMediaStreamOutputConfigurationRequest = list(n0, _lOMSOCR, 0, [
  () => MediaStreamOutputConfigurationRequest,
  0,
]);
export var __listOfMediaStreamSourceConfiguration = list(n0, _lOMSSC, 0, [() => MediaStreamSourceConfiguration, 0]);
export var __listOfMediaStreamSourceConfigurationRequest = list(n0, _lOMSSCR, 0, [
  () => MediaStreamSourceConfigurationRequest,
  0,
]);
export var __listOfNdiDiscoveryServerConfig = list(n0, _lONDSC, 0, [() => NdiDiscoveryServerConfig, 0]);
export var __listOfOutput = list(n0, _lOOi, 0, [() => Output, 0]);
export var __listOfSetSourceRequest = list(n0, _lOSSR, 0, [() => SetSourceRequest, 0]);
export var __listOfSource = list(n0, _lOS, 0, [() => Source, 0]);
export var __listOfVideoMonitoringSetting = list(n0, _lOVMS, 0, [() => VideoMonitoringSetting, 0]);
export var AddFlowOutputs = op(
  n0,
  _AFO,
  {
    [_h]: ["POST", "/v1/flows/{FlowArn}/outputs", 201],
  },
  () => AddFlowOutputsRequest,
  () => AddFlowOutputsResponse
);
export var AddFlowSources = op(
  n0,
  _AFS,
  {
    [_h]: ["POST", "/v1/flows/{FlowArn}/source", 201],
  },
  () => AddFlowSourcesRequest,
  () => AddFlowSourcesResponse
);
export var CreateFlow = op(
  n0,
  _CFr,
  {
    [_h]: ["POST", "/v1/flows", 201],
  },
  () => CreateFlowRequest,
  () => CreateFlowResponse
);
export var DescribeFlow = op(
  n0,
  _DFe,
  {
    [_h]: ["GET", "/v1/flows/{FlowArn}", 200],
  },
  () => DescribeFlowRequest,
  () => DescribeFlowResponse
);
export var GrantFlowEntitlements = op(
  n0,
  _GFE,
  {
    [_h]: ["POST", "/v1/flows/{FlowArn}/entitlements", 200],
  },
  () => GrantFlowEntitlementsRequest,
  () => GrantFlowEntitlementsResponse
);
export var UpdateFlow = op(
  n0,
  _UF,
  {
    [_h]: ["PUT", "/v1/flows/{FlowArn}", 202],
  },
  () => UpdateFlowRequest,
  () => UpdateFlowResponse
);
export var UpdateFlowEntitlement = op(
  n0,
  _UFE,
  {
    [_h]: ["PUT", "/v1/flows/{FlowArn}/entitlements/{EntitlementArn}", 202],
  },
  () => UpdateFlowEntitlementRequest,
  () => UpdateFlowEntitlementResponse
);
export var UpdateFlowOutput = op(
  n0,
  _UFO,
  {
    [_h]: ["PUT", "/v1/flows/{FlowArn}/outputs/{OutputArn}", 202],
  },
  () => UpdateFlowOutputRequest,
  () => UpdateFlowOutputResponse
);
export var UpdateFlowSource = op(
  n0,
  _UFS,
  {
    [_h]: ["PUT", "/v1/flows/{FlowArn}/source/{SourceArn}", 202],
  },
  () => UpdateFlowSourceRequest,
  () => UpdateFlowSourceResponse
);
