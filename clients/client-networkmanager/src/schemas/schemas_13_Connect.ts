// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AI,
  _AMS,
  _ASA,
  _AWSL,
  _BC,
  _BO,
  _C,
  _CA,
  _CAI,
  _cAI,
  _CCP,
  _CCPR,
  _CCPRr,
  _CD,
  _CDR,
  _CDRr,
  _CNAo,
  _CNAor,
  _CNI,
  _cNI,
  _Con,
  _CP,
  _CPBC,
  _CPBCL,
  _CPC,
  _CPE,
  _CPEL,
  _CPI,
  _CPo,
  _CPS,
  _CPSL,
  _CPSo,
  _CT,
  _CVA,
  _CVAR,
  _CVARr,
  _D,
  _DA,
  _DCP,
  _DCPR,
  _DCPRe,
  _DD,
  _DDR,
  _DDRe,
  _De,
  _Dev,
  _DI,
  _dIe,
  _DIev,
  _DL,
  _DSn,
  _EL,
  _GCP,
  _GCPR,
  _GCPRe,
  _GD,
  _GDR,
  _GDRe,
  _GNI,
  _GVA,
  _GVAR,
  _GVARe,
  _h,
  _hQ,
  _ICB,
  _IS,
  _L,
  _LCP,
  _LCPR,
  _LCPRi,
  _LME,
  _M,
  _Mo,
  _MR,
  _mR,
  _NT,
  _nT,
  _O,
  _P,
  _PA,
  _PAe,
  _RA,
  _RI,
  _RSA,
  _S,
  _SA,
  _SAu,
  _SGRS,
  _SI,
  _sI,
  _SNe,
  _T,
  _Ty,
  _UD,
  _UDR,
  _UDRp,
  _UVA,
  _UVAR,
  _UVARp,
  _VA,
  _VAp,
  _Ve,
  _VO,
  _Z,
  Attachment,
  n0,
  TagList,
} from "./schemas_0";
import { Location } from "./schemas_6_Site";

/* eslint no-var: 0 */

export var AWSLocation = struct(n0, _AWSL, 0, [_Z, _SA], [0, 0]);
export var BgpOptions = struct(n0, _BO, 0, [_PA], [1]);
export var ConnectPeer = struct(
  n0,
  _CP,
  0,
  [_CNI, _CAI, _CPI, _EL, _S, _CA, _Con, _T, _SA, _LME],
  [0, 0, 0, 0, 0, 4, () => ConnectPeerConfiguration, () => TagList, 0, () => ConnectPeerErrorList]
);
export var ConnectPeerBgpConfiguration = struct(n0, _CPBC, 0, [_CNAo, _PA, _CNAor, _PAe], [1, 1, 0, 0]);
export var ConnectPeerConfiguration = struct(
  n0,
  _CPC,
  0,
  [_CNAor, _PAe, _ICB, _P, _BC],
  [0, 0, 64 | 0, 0, () => ConnectPeerBgpConfigurationList]
);
export var ConnectPeerError = struct(n0, _CPE, 0, [_C, _M, _RA, _RI], [0, 0, 0, 0]);
export var ConnectPeerSummary = struct(
  n0,
  _CPS,
  0,
  [_CNI, _CAI, _CPI, _EL, _CPSo, _CA, _T, _SA],
  [0, 0, 0, 0, 0, 4, () => TagList, 0]
);
export var CreateConnectPeerRequest = struct(
  n0,
  _CCPR,
  0,
  [_CAI, _CNAor, _PAe, _BO, _ICB, _T, _CT, _SA],
  [0, 0, 0, () => BgpOptions, 64 | 0, () => TagList, [0, 4], 0]
);
export var CreateConnectPeerResponse = struct(n0, _CCPRr, 0, [_CP], [() => ConnectPeer]);
export var CreateDeviceRequest = struct(
  n0,
  _CDR,
  0,
  [_GNI, _AWSL, _D, _Ty, _Ve, _Mo, _SNe, _L, _SI, _T],
  [[0, 1], () => AWSLocation, 0, 0, 0, 0, 0, [() => Location, 0], 0, () => TagList]
);
export var CreateDeviceResponse = struct(n0, _CDRr, 0, [_De], [[() => Device, 0]]);
export var CreateVpcAttachmentRequest = struct(
  n0,
  _CVAR,
  0,
  [_CNI, _VA, _SAu, _O, _T, _CT],
  [0, 0, 64 | 0, () => VpcOptions, () => TagList, [0, 4]]
);
export var CreateVpcAttachmentResponse = struct(n0, _CVARr, 0, [_VAp], [() => VpcAttachment]);
export var DeleteConnectPeerRequest = struct(n0, _DCPR, 0, [_CPI], [[0, 1]]);
export var DeleteConnectPeerResponse = struct(n0, _DCPRe, 0, [_CP], [() => ConnectPeer]);
export var DeleteDeviceRequest = struct(
  n0,
  _DDR,
  0,
  [_GNI, _DI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDeviceResponse = struct(n0, _DDRe, 0, [_De], [[() => Device, 0]]);
export var Device = struct(
  n0,
  _De,
  0,
  [_DI, _DA, _GNI, _AWSL, _D, _Ty, _Ve, _Mo, _SNe, _L, _SI, _CA, _S, _T],
  [0, 0, 0, () => AWSLocation, 0, 0, 0, 0, 0, [() => Location, 0], 0, 4, 0, () => TagList]
);
export var GetConnectPeerRequest = struct(n0, _GCPR, 0, [_CPI], [[0, 1]]);
export var GetConnectPeerResponse = struct(n0, _GCPRe, 0, [_CP], [() => ConnectPeer]);
export var GetDevicesRequest = struct(
  n0,
  _GDR,
  0,
  [_GNI, _DIev, _SI, _MR, _NT],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _dIe,
      },
    ],
    [
      0,
      {
        [_hQ]: _sI,
      },
    ],
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
export var GetDevicesResponse = struct(n0, _GDRe, 0, [_Dev, _NT], [[() => DeviceList, 0], 0]);
export var GetVpcAttachmentRequest = struct(n0, _GVAR, 0, [_AI], [[0, 1]]);
export var GetVpcAttachmentResponse = struct(n0, _GVARe, 0, [_VAp], [() => VpcAttachment]);
export var ListConnectPeersRequest = struct(
  n0,
  _LCPR,
  0,
  [_CNI, _CAI, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _cNI,
      },
    ],
    [
      0,
      {
        [_hQ]: _cAI,
      },
    ],
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
export var ListConnectPeersResponse = struct(n0, _LCPRi, 0, [_CPo, _NT], [() => ConnectPeerSummaryList, 0]);
export var UpdateDeviceRequest = struct(
  n0,
  _UDR,
  0,
  [_GNI, _DI, _AWSL, _D, _Ty, _Ve, _Mo, _SNe, _L, _SI],
  [[0, 1], [0, 1], () => AWSLocation, 0, 0, 0, 0, 0, [() => Location, 0], 0]
);
export var UpdateDeviceResponse = struct(n0, _UDRp, 0, [_De], [[() => Device, 0]]);
export var UpdateVpcAttachmentRequest = struct(
  n0,
  _UVAR,
  0,
  [_AI, _ASA, _RSA, _O],
  [[0, 1], 64 | 0, 64 | 0, () => VpcOptions]
);
export var UpdateVpcAttachmentResponse = struct(n0, _UVARp, 0, [_VAp], [() => VpcAttachment]);
export var VpcAttachment = struct(n0, _VAp, 0, [_A, _SAu, _O], [() => Attachment, 64 | 0, () => VpcOptions]);
export var VpcOptions = struct(n0, _VO, 0, [_IS, _AMS, _DSn, _SGRS], [2, 2, 2, 2]);
export var ConnectPeerBgpConfigurationList = list(n0, _CPBCL, 0, () => ConnectPeerBgpConfiguration);
export var ConnectPeerErrorList = list(n0, _CPEL, 0, () => ConnectPeerError);
export var ConnectPeerSummaryList = list(n0, _CPSL, 0, () => ConnectPeerSummary);
export var DeviceIdList = 64 | 0;

export var DeviceList = list(n0, _DL, 0, [() => Device, 0]);
export var SubnetArnList = 64 | 0;

export var CreateConnectPeer = op(
  n0,
  _CCP,
  {
    [_h]: ["POST", "/connect-peers", 200],
  },
  () => CreateConnectPeerRequest,
  () => CreateConnectPeerResponse
);
export var CreateDevice = op(
  n0,
  _CD,
  {
    [_h]: ["POST", "/global-networks/{GlobalNetworkId}/devices", 200],
  },
  () => CreateDeviceRequest,
  () => CreateDeviceResponse
);
export var CreateVpcAttachment = op(
  n0,
  _CVA,
  {
    [_h]: ["POST", "/vpc-attachments", 200],
  },
  () => CreateVpcAttachmentRequest,
  () => CreateVpcAttachmentResponse
);
export var DeleteConnectPeer = op(
  n0,
  _DCP,
  {
    [_h]: ["DELETE", "/connect-peers/{ConnectPeerId}", 200],
  },
  () => DeleteConnectPeerRequest,
  () => DeleteConnectPeerResponse
);
export var DeleteDevice = op(
  n0,
  _DD,
  {
    [_h]: ["DELETE", "/global-networks/{GlobalNetworkId}/devices/{DeviceId}", 200],
  },
  () => DeleteDeviceRequest,
  () => DeleteDeviceResponse
);
export var GetConnectPeer = op(
  n0,
  _GCP,
  {
    [_h]: ["GET", "/connect-peers/{ConnectPeerId}", 200],
  },
  () => GetConnectPeerRequest,
  () => GetConnectPeerResponse
);
export var GetDevices = op(
  n0,
  _GD,
  {
    [_h]: ["GET", "/global-networks/{GlobalNetworkId}/devices", 200],
  },
  () => GetDevicesRequest,
  () => GetDevicesResponse
);
export var GetVpcAttachment = op(
  n0,
  _GVA,
  {
    [_h]: ["GET", "/vpc-attachments/{AttachmentId}", 200],
  },
  () => GetVpcAttachmentRequest,
  () => GetVpcAttachmentResponse
);
export var ListConnectPeers = op(
  n0,
  _LCP,
  {
    [_h]: ["GET", "/connect-peers", 200],
  },
  () => ListConnectPeersRequest,
  () => ListConnectPeersResponse
);
export var UpdateDevice = op(
  n0,
  _UD,
  {
    [_h]: ["PATCH", "/global-networks/{GlobalNetworkId}/devices/{DeviceId}", 200],
  },
  () => UpdateDeviceRequest,
  () => UpdateDeviceResponse
);
export var UpdateVpcAttachment = op(
  n0,
  _UVA,
  {
    [_h]: ["PATCH", "/vpc-attachments/{AttachmentId}", 200],
  },
  () => UpdateVpcAttachmentRequest,
  () => UpdateVpcAttachmentResponse
);
