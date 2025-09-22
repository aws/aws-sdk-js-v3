// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _ACt,
  _aCt,
  _Ar,
  _ar,
  _ASnc,
  _aSnc,
  _aSud,
  _ASudi,
  _AZv,
  _aZv,
  _Ci,
  _ci,
  _CIR,
  _CIr,
  _CIRr,
  _CPI,
  _CPIR,
  _CPIRr,
  _Dec,
  _dec,
  _Des,
  _des,
  _DIes,
  _DIRes,
  _DIResc,
  _FAlo,
  _fAlo,
  _Ga,
  _ga,
  _hQ,
  _ht,
  _I,
  _i,
  _IC,
  _iC,
  _ID,
  _iD,
  _IDn,
  _IDR,
  _IDRn,
  _IDRnp,
  _IDS,
  _IDV,
  _IIn,
  _In,
  _in,
  _INL,
  _iNL,
  _Inp,
  _inp,
  _Ip,
  _ip,
  _IPI,
  _iPI,
  _IRDR,
  _ISG,
  _iSG,
  _ISL,
  _ISnp,
  _ISR,
  _IST,
  _iST,
  _iTd,
  _IVR,
  _jN,
  _LI,
  _LIR,
  _LIRi,
  _lOI,
  _lOID,
  _lOIDR,
  _lOIDRi,
  _lOIDRis,
  _lOIDS,
  _lOIRDR,
  _lOIS,
  _lOISL,
  _lOISR,
  _lOMCF,
  _lOMCFR,
  _lOMS,
  _lOMSCR,
  _lOMSUR,
  _lOSCS,
  _lOSCSR,
  _lOSRG,
  _MCF,
  _mCF,
  _MCFe,
  _MCFR,
  _MIe,
  _mIe,
  _ML,
  _mL,
  _MR,
  _mR,
  _MSCR,
  _MSCRu,
  _MSu,
  _mSu,
  _MSult,
  _MSUR,
  _MSURu,
  _N,
  _n,
  _Ne,
  _ne,
  _NII,
  _nII,
  _NRe,
  _nRe,
  _NT,
  _nT,
  _Po,
  _po,
  _PP,
  _pP,
  _PSA,
  _pSA,
  _RA,
  _rA,
  _RIe,
  _rIe,
  _SCDR,
  _SCDr,
  _SCS,
  _sCS,
  _SCSR,
  _SCSr,
  _SGe,
  _sGe,
  _SGI,
  _sGI,
  _SI,
  _sI,
  _SIA,
  _sIA,
  _SIt,
  _sIt,
  _SIu,
  _sIu,
  _SLA,
  _sLA,
  _SLP,
  _sLP,
  _SN,
  _sN,
  _So,
  _so,
  _SRG,
  _sRG,
  _SRGm,
  _SRGS,
  _sRGS,
  _SRGSS,
  _SSd,
  _sSd,
  _SSdp,
  _sSdp,
  _SSR,
  _SSr,
  _sSr,
  _St,
  _st,
  _SU,
  _sU,
  _Ta,
  _ta,
  _Ty,
  _ty,
  _UI,
  _UIR,
  _UIRp,
  _Ur,
  _ur,
  _Us,
  _us,
  _V,
  _v,
  _VSid,
  _vSid,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateInputRequest = struct(
  n0,
  _CIR,
  0,
  [_Des, _ID, _ISG, _MCF, _N, _RIe, _RA, _So, _Ta, _Ty, _V, _SSr, _INL, _MSu, _SRGS, _SSd],
  [
    [
      () => __listOfInputDestinationRequest,
      {
        [_jN]: _des,
      },
    ],
    [
      () => __listOfInputDeviceSettings,
      {
        [_jN]: _iD,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _iSG,
      },
    ],
    [
      () => __listOfMediaConnectFlowRequest,
      {
        [_jN]: _mCF,
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
        [_jN]: _rIe,
        [_iTd]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _rA,
      },
    ],
    [
      () => __listOfInputSourceRequest,
      {
        [_jN]: _so,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
    [
      () => InputVpcRequest,
      {
        [_jN]: _v,
      },
    ],
    [
      () => SrtSettingsRequest,
      {
        [_jN]: _sSr,
      },
    ],
    [
      0,
      {
        [_jN]: _iNL,
      },
    ],
    [
      () => MulticastSettingsCreateRequest,
      {
        [_jN]: _mSu,
      },
    ],
    [
      () => Smpte2110ReceiverGroupSettings,
      {
        [_jN]: _sRGS,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sSd,
      },
    ],
  ]
);
export var CreateInputResponse = struct(
  n0,
  _CIRr,
  0,
  [_In],
  [
    [
      () => Input,
      {
        [_jN]: _in,
      },
    ],
  ]
);
export var CreatePartnerInputRequest = struct(
  n0,
  _CPIR,
  0,
  [_IIn, _RIe, _Ta],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _rIe,
        [_iTd]: 1,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var CreatePartnerInputResponse = struct(
  n0,
  _CPIRr,
  0,
  [_In],
  [
    [
      () => Input,
      {
        [_jN]: _in,
      },
    ],
  ]
);
export var DescribeInputRequest = struct(n0, _DIRes, 0, [_IIn], [[0, 1]]);
export var DescribeInputResponse = struct(
  n0,
  _DIResc,
  0,
  [_Ar, _ACt, _Des, _I, _IC, _ID, _IPI, _IST, _MCF, _N, _RA, _SGe, _So, _St, _Ta, _Ty, _SSr, _INL, _MSu, _SRGS, _SSd],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aCt,
      },
    ],
    [
      () => __listOfInputDestination,
      {
        [_jN]: _des,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _iC,
      },
    ],
    [
      () => __listOfInputDeviceSettings,
      {
        [_jN]: _iD,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _iPI,
      },
    ],
    [
      0,
      {
        [_jN]: _iST,
      },
    ],
    [
      () => __listOfMediaConnectFlow,
      {
        [_jN]: _mCF,
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
        [_jN]: _rA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sGe,
      },
    ],
    [
      () => __listOfInputSource,
      {
        [_jN]: _so,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
    [
      () => SrtSettings,
      {
        [_jN]: _sSr,
      },
    ],
    [
      0,
      {
        [_jN]: _iNL,
      },
    ],
    [
      () => MulticastSettings,
      {
        [_jN]: _mSu,
      },
    ],
    [
      () => Smpte2110ReceiverGroupSettings,
      {
        [_jN]: _sRGS,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sSd,
      },
    ],
  ]
);
export var Input = struct(
  n0,
  _In,
  0,
  [_Ar, _ACt, _Des, _I, _IC, _ID, _IPI, _IST, _MCF, _N, _RA, _SGe, _So, _St, _Ta, _Ty, _SSr, _INL, _MSu, _SRGS, _SSd],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aCt,
      },
    ],
    [
      () => __listOfInputDestination,
      {
        [_jN]: _des,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _iC,
      },
    ],
    [
      () => __listOfInputDeviceSettings,
      {
        [_jN]: _iD,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _iPI,
      },
    ],
    [
      0,
      {
        [_jN]: _iST,
      },
    ],
    [
      () => __listOfMediaConnectFlow,
      {
        [_jN]: _mCF,
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
        [_jN]: _rA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sGe,
      },
    ],
    [
      () => __listOfInputSource,
      {
        [_jN]: _so,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      0,
      {
        [_jN]: _ty,
      },
    ],
    [
      () => SrtSettings,
      {
        [_jN]: _sSr,
      },
    ],
    [
      0,
      {
        [_jN]: _iNL,
      },
    ],
    [
      () => MulticastSettings,
      {
        [_jN]: _mSu,
      },
    ],
    [
      () => Smpte2110ReceiverGroupSettings,
      {
        [_jN]: _sRGS,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sSd,
      },
    ],
  ]
);
export var InputDestination = struct(
  n0,
  _IDn,
  0,
  [_Ip, _Po, _Ur, _V, _Ne, _NRe],
  [
    [
      0,
      {
        [_jN]: _ip,
      },
    ],
    [
      0,
      {
        [_jN]: _po,
      },
    ],
    [
      0,
      {
        [_jN]: _ur,
      },
    ],
    [
      () => InputDestinationVpc,
      {
        [_jN]: _v,
      },
    ],
    [
      0,
      {
        [_jN]: _ne,
      },
    ],
    [
      () => __listOfInputDestinationRoute,
      {
        [_jN]: _nRe,
      },
    ],
  ]
);
export var InputDestinationRequest = struct(
  n0,
  _IDR,
  0,
  [_SN, _Ne, _NRe, _SIA],
  [
    [
      0,
      {
        [_jN]: _sN,
      },
    ],
    [
      0,
      {
        [_jN]: _ne,
      },
    ],
    [
      () => __listOfInputRequestDestinationRoute,
      {
        [_jN]: _nRe,
      },
    ],
    [
      0,
      {
        [_jN]: _sIA,
      },
    ],
  ]
);
export var InputDestinationRoute = struct(
  n0,
  _IDRn,
  0,
  [_Ci, _Ga],
  [
    [
      0,
      {
        [_jN]: _ci,
      },
    ],
    [
      0,
      {
        [_jN]: _ga,
      },
    ],
  ]
);
export var InputDestinationVpc = struct(
  n0,
  _IDV,
  0,
  [_AZv, _NII],
  [
    [
      0,
      {
        [_jN]: _aZv,
      },
    ],
    [
      0,
      {
        [_jN]: _nII,
      },
    ],
  ]
);
export var InputDeviceRequest = struct(
  n0,
  _IDRnp,
  0,
  [_I],
  [
    [
      0,
      {
        [_jN]: _i,
      },
    ],
  ]
);
export var InputDeviceSettings = struct(
  n0,
  _IDS,
  0,
  [_I],
  [
    [
      0,
      {
        [_jN]: _i,
      },
    ],
  ]
);
export var InputRequestDestinationRoute = struct(
  n0,
  _IRDR,
  0,
  [_Ci, _Ga],
  [
    [
      0,
      {
        [_jN]: _ci,
      },
    ],
    [
      0,
      {
        [_jN]: _ga,
      },
    ],
  ]
);
export var InputSdpLocation = struct(
  n0,
  _ISL,
  0,
  [_MIe, _SU],
  [
    [
      1,
      {
        [_jN]: _mIe,
      },
    ],
    [
      0,
      {
        [_jN]: _sU,
      },
    ],
  ]
);
export var InputSource = struct(
  n0,
  _ISnp,
  0,
  [_PP, _Ur, _Us],
  [
    [
      0,
      {
        [_jN]: _pP,
      },
    ],
    [
      0,
      {
        [_jN]: _ur,
      },
    ],
    [
      0,
      {
        [_jN]: _us,
      },
    ],
  ]
);
export var InputSourceRequest = struct(
  n0,
  _ISR,
  0,
  [_PP, _Ur, _Us],
  [
    [
      0,
      {
        [_jN]: _pP,
      },
    ],
    [
      0,
      {
        [_jN]: _ur,
      },
    ],
    [
      0,
      {
        [_jN]: _us,
      },
    ],
  ]
);
export var InputVpcRequest = struct(
  n0,
  _IVR,
  0,
  [_SGI, _SIu],
  [
    [
      64 | 0,
      {
        [_jN]: _sGI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sIu,
      },
    ],
  ]
);
export var ListInputsRequest = struct(
  n0,
  _LIR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListInputsResponse = struct(
  n0,
  _LIRi,
  0,
  [_Inp, _NT],
  [
    [
      () => __listOfInput,
      {
        [_jN]: _inp,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var MediaConnectFlow = struct(
  n0,
  _MCFe,
  0,
  [_FAlo],
  [
    [
      0,
      {
        [_jN]: _fAlo,
      },
    ],
  ]
);
export var MediaConnectFlowRequest = struct(
  n0,
  _MCFR,
  0,
  [_FAlo],
  [
    [
      0,
      {
        [_jN]: _fAlo,
      },
    ],
  ]
);
export var MulticastSettings = struct(
  n0,
  _MSu,
  0,
  [_So],
  [
    [
      () => __listOfMulticastSource,
      {
        [_jN]: _so,
      },
    ],
  ]
);
export var MulticastSettingsCreateRequest = struct(
  n0,
  _MSCR,
  0,
  [_So],
  [
    [
      () => __listOfMulticastSourceCreateRequest,
      {
        [_jN]: _so,
      },
    ],
  ]
);
export var MulticastSettingsUpdateRequest = struct(
  n0,
  _MSUR,
  0,
  [_So],
  [
    [
      () => __listOfMulticastSourceUpdateRequest,
      {
        [_jN]: _so,
      },
    ],
  ]
);
export var MulticastSource = struct(
  n0,
  _MSult,
  0,
  [_SI, _Ur],
  [
    [
      0,
      {
        [_jN]: _sI,
      },
    ],
    [
      0,
      {
        [_jN]: _ur,
      },
    ],
  ]
);
export var MulticastSourceCreateRequest = struct(
  n0,
  _MSCRu,
  0,
  [_SI, _Ur],
  [
    [
      0,
      {
        [_jN]: _sI,
      },
    ],
    [
      0,
      {
        [_jN]: _ur,
      },
    ],
  ]
);
export var MulticastSourceUpdateRequest = struct(
  n0,
  _MSURu,
  0,
  [_SI, _Ur],
  [
    [
      0,
      {
        [_jN]: _sI,
      },
    ],
    [
      0,
      {
        [_jN]: _ur,
      },
    ],
  ]
);
export var Smpte2110ReceiverGroup = struct(
  n0,
  _SRG,
  0,
  [_SSdp],
  [
    [
      () => Smpte2110ReceiverGroupSdpSettings,
      {
        [_jN]: _sSdp,
      },
    ],
  ]
);
export var Smpte2110ReceiverGroupSdpSettings = struct(
  n0,
  _SRGSS,
  0,
  [_ASnc, _ASudi, _VSid],
  [
    [
      () => __listOfInputSdpLocation,
      {
        [_jN]: _aSnc,
      },
    ],
    [
      () => __listOfInputSdpLocation,
      {
        [_jN]: _aSud,
      },
    ],
    [
      () => InputSdpLocation,
      {
        [_jN]: _vSid,
      },
    ],
  ]
);
export var Smpte2110ReceiverGroupSettings = struct(
  n0,
  _SRGS,
  0,
  [_SRGm],
  [
    [
      () => __listOfSmpte2110ReceiverGroup,
      {
        [_jN]: _sRG,
      },
    ],
  ]
);
export var SrtCallerDecryption = struct(
  n0,
  _SCDr,
  0,
  [_A, _PSA],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _pSA,
      },
    ],
  ]
);
export var SrtCallerDecryptionRequest = struct(
  n0,
  _SCDR,
  0,
  [_A, _PSA],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _pSA,
      },
    ],
  ]
);
export var SrtCallerSource = struct(
  n0,
  _SCS,
  0,
  [_Dec, _ML, _SLA, _SLP, _SIt],
  [
    [
      () => SrtCallerDecryption,
      {
        [_jN]: _dec,
      },
    ],
    [
      1,
      {
        [_jN]: _mL,
      },
    ],
    [
      0,
      {
        [_jN]: _sLA,
      },
    ],
    [
      0,
      {
        [_jN]: _sLP,
      },
    ],
    [
      0,
      {
        [_jN]: _sIt,
      },
    ],
  ]
);
export var SrtCallerSourceRequest = struct(
  n0,
  _SCSR,
  0,
  [_Dec, _ML, _SLA, _SLP, _SIt],
  [
    [
      () => SrtCallerDecryptionRequest,
      {
        [_jN]: _dec,
      },
    ],
    [
      1,
      {
        [_jN]: _mL,
      },
    ],
    [
      0,
      {
        [_jN]: _sLA,
      },
    ],
    [
      0,
      {
        [_jN]: _sLP,
      },
    ],
    [
      0,
      {
        [_jN]: _sIt,
      },
    ],
  ]
);
export var SrtSettings = struct(
  n0,
  _SSr,
  0,
  [_SCSr],
  [
    [
      () => __listOfSrtCallerSource,
      {
        [_jN]: _sCS,
      },
    ],
  ]
);
export var SrtSettingsRequest = struct(
  n0,
  _SSR,
  0,
  [_SCSr],
  [
    [
      () => __listOfSrtCallerSourceRequest,
      {
        [_jN]: _sCS,
      },
    ],
  ]
);
export var UpdateInputRequest = struct(
  n0,
  _UIR,
  0,
  [_Des, _ID, _IIn, _ISG, _MCF, _N, _RA, _So, _SSr, _MSu, _SRGS, _SSd],
  [
    [
      () => __listOfInputDestinationRequest,
      {
        [_jN]: _des,
      },
    ],
    [
      () => __listOfInputDeviceRequest,
      {
        [_jN]: _iD,
      },
    ],
    [0, 1],
    [
      64 | 0,
      {
        [_jN]: _iSG,
      },
    ],
    [
      () => __listOfMediaConnectFlowRequest,
      {
        [_jN]: _mCF,
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
        [_jN]: _rA,
      },
    ],
    [
      () => __listOfInputSourceRequest,
      {
        [_jN]: _so,
      },
    ],
    [
      () => SrtSettingsRequest,
      {
        [_jN]: _sSr,
      },
    ],
    [
      () => MulticastSettingsUpdateRequest,
      {
        [_jN]: _mSu,
      },
    ],
    [
      () => Smpte2110ReceiverGroupSettings,
      {
        [_jN]: _sRGS,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sSd,
      },
    ],
  ]
);
export var UpdateInputResponse = struct(
  n0,
  _UIRp,
  0,
  [_In],
  [
    [
      () => Input,
      {
        [_jN]: _in,
      },
    ],
  ]
);
export var __listOfInput = list(n0, _lOI, 0, [() => Input, 0]);
export var __listOfInputDestination = list(n0, _lOID, 0, [() => InputDestination, 0]);
export var __listOfInputDestinationRequest = list(n0, _lOIDR, 0, [() => InputDestinationRequest, 0]);
export var __listOfInputDestinationRoute = list(n0, _lOIDRi, 0, [() => InputDestinationRoute, 0]);
export var __listOfInputDeviceRequest = list(n0, _lOIDRis, 0, [() => InputDeviceRequest, 0]);
export var __listOfInputDeviceSettings = list(n0, _lOIDS, 0, [() => InputDeviceSettings, 0]);
export var __listOfInputRequestDestinationRoute = list(n0, _lOIRDR, 0, [() => InputRequestDestinationRoute, 0]);
export var __listOfInputSdpLocation = list(n0, _lOISL, 0, [() => InputSdpLocation, 0]);
export var __listOfInputSource = list(n0, _lOIS, 0, [() => InputSource, 0]);
export var __listOfInputSourceRequest = list(n0, _lOISR, 0, [() => InputSourceRequest, 0]);
export var __listOfMediaConnectFlow = list(n0, _lOMCF, 0, [() => MediaConnectFlow, 0]);
export var __listOfMediaConnectFlowRequest = list(n0, _lOMCFR, 0, [() => MediaConnectFlowRequest, 0]);
export var __listOfMulticastSource = list(n0, _lOMS, 0, [() => MulticastSource, 0]);
export var __listOfMulticastSourceCreateRequest = list(n0, _lOMSCR, 0, [() => MulticastSourceCreateRequest, 0]);
export var __listOfMulticastSourceUpdateRequest = list(n0, _lOMSUR, 0, [() => MulticastSourceUpdateRequest, 0]);
export var __listOfSmpte2110ReceiverGroup = list(n0, _lOSRG, 0, [() => Smpte2110ReceiverGroup, 0]);
export var __listOfSrtCallerSource = list(n0, _lOSCS, 0, [() => SrtCallerSource, 0]);
export var __listOfSrtCallerSourceRequest = list(n0, _lOSCSR, 0, [() => SrtCallerSourceRequest, 0]);
export var InputSdiSources = 64 | 0;

export var CreateInput = op(
  n0,
  _CIr,
  {
    [_ht]: ["POST", "/prod/inputs", 201],
  },
  () => CreateInputRequest,
  () => CreateInputResponse
);
export var CreatePartnerInput = op(
  n0,
  _CPI,
  {
    [_ht]: ["POST", "/prod/inputs/{InputId}/partners", 201],
  },
  () => CreatePartnerInputRequest,
  () => CreatePartnerInputResponse
);
export var DescribeInput = op(
  n0,
  _DIes,
  {
    [_ht]: ["GET", "/prod/inputs/{InputId}", 200],
  },
  () => DescribeInputRequest,
  () => DescribeInputResponse
);
export var ListInputs = op(
  n0,
  _LI,
  {
    [_ht]: ["GET", "/prod/inputs", 200],
  },
  () => ListInputsRequest,
  () => ListInputsResponse
);
export var UpdateInput = op(
  n0,
  _UI,
  {
    [_ht]: ["PUT", "/prod/inputs/{InputId}", 200],
  },
  () => UpdateInputRequest,
  () => UpdateInputResponse
);
