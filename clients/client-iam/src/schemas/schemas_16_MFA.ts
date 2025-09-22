// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { InvalidAuthenticationCodeException as __InvalidAuthenticationCodeException } from "../models/index";
import {
  _AC,
  _ACu,
  _aQE,
  _AS,
  _BD,
  _BSS,
  _c,
  _Ce,
  _CVMFAD,
  _CVMFADR,
  _CVMFADRr,
  _DMFAD,
  _DMFADR,
  _DVMFAD,
  _DVMFADR,
  _e,
  _EDn,
  _EMFAD,
  _EMFADR,
  _GMFAD,
  _GMFADR,
  _GMFADRe,
  _hE,
  _IACE,
  _IT,
  _LMFAD,
  _LMFADR,
  _LMFADRi,
  _LMFADT,
  _LMFADTR,
  _LMFADTRi,
  _LVMFAD,
  _LVMFADR,
  _LVMFADRi,
  _m,
  _Ma,
  _mDLT,
  _MFAD,
  _MFADe,
  _MI,
  _P,
  _QRCPNG,
  _RMFAD,
  _RMFADR,
  _SNer,
  _T,
  _TK,
  _TMFAD,
  _TMFADR,
  _UMFAD,
  _UMFADR,
  _UN,
  _Us,
  _VMFAD,
  _VMFADi,
  _vMFADLT,
  _VMFADN,
  n0,
  tagListType,
  Unit,
} from "./schemas_0";
import { User } from "./schemas_9_User";

/* eslint no-var: 0 */

export var BootstrapDatum = sim(n0, _BD, 21, 8);
export var CreateVirtualMFADeviceRequest = struct(n0, _CVMFADR, 0, [_P, _VMFADN, _T], [0, 0, () => tagListType]);
export var CreateVirtualMFADeviceResponse = struct(n0, _CVMFADRr, 0, [_VMFAD], [[() => VirtualMFADevice, 0]]);
export var DeactivateMFADeviceRequest = struct(n0, _DMFADR, 0, [_UN, _SNer], [0, 0]);
export var DeleteVirtualMFADeviceRequest = struct(n0, _DVMFADR, 0, [_SNer], [0]);
export var EnableMFADeviceRequest = struct(n0, _EMFADR, 0, [_UN, _SNer, _AC, _ACu], [0, 0, 0, 0]);
export var GetMFADeviceRequest = struct(n0, _GMFADR, 0, [_SNer, _UN], [0, 0]);
export var GetMFADeviceResponse = struct(n0, _GMFADRe, 0, [_UN, _SNer, _EDn, _Ce], [0, 0, 4, 128 | 0]);
export var InvalidAuthenticationCodeException = error(
  n0,
  _IACE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`InvalidAuthenticationCode`, 403],
  },
  [_m],
  [0],

  __InvalidAuthenticationCodeException
);
export var ListMFADevicesRequest = struct(n0, _LMFADR, 0, [_UN, _Ma, _MI], [0, 0, 1]);
export var ListMFADevicesResponse = struct(n0, _LMFADRi, 0, [_MFAD, _IT, _Ma], [() => mfaDeviceListType, 2, 0]);
export var ListMFADeviceTagsRequest = struct(n0, _LMFADTR, 0, [_SNer, _Ma, _MI], [0, 0, 1]);
export var ListMFADeviceTagsResponse = struct(n0, _LMFADTRi, 0, [_T, _IT, _Ma], [() => tagListType, 2, 0]);
export var ListVirtualMFADevicesRequest = struct(n0, _LVMFADR, 0, [_AS, _Ma, _MI], [0, 0, 1]);
export var ListVirtualMFADevicesResponse = struct(
  n0,
  _LVMFADRi,
  0,
  [_VMFADi, _IT, _Ma],
  [[() => virtualMFADeviceListType, 0], 2, 0]
);
export var MFADevice = struct(n0, _MFADe, 0, [_UN, _SNer, _EDn], [0, 0, 4]);
export var ResyncMFADeviceRequest = struct(n0, _RMFADR, 0, [_UN, _SNer, _AC, _ACu], [0, 0, 0, 0]);
export var TagMFADeviceRequest = struct(n0, _TMFADR, 0, [_SNer, _T], [0, () => tagListType]);
export var UntagMFADeviceRequest = struct(n0, _UMFADR, 0, [_SNer, _TK], [0, 64 | 0]);
export var VirtualMFADevice = struct(
  n0,
  _VMFAD,
  0,
  [_SNer, _BSS, _QRCPNG, _Us, _EDn, _T],
  [0, [() => BootstrapDatum, 0], [() => BootstrapDatum, 0], () => User, 4, () => tagListType]
);
export var mfaDeviceListType = list(n0, _mDLT, 0, () => MFADevice);
export var virtualMFADeviceListType = list(n0, _vMFADLT, 0, [() => VirtualMFADevice, 0]);
export var CertificationMapType = 128 | 0;

export var CreateVirtualMFADevice = op(
  n0,
  _CVMFAD,
  0,
  () => CreateVirtualMFADeviceRequest,
  () => CreateVirtualMFADeviceResponse
);
export var DeactivateMFADevice = op(
  n0,
  _DMFAD,
  0,
  () => DeactivateMFADeviceRequest,
  () => Unit
);
export var DeleteVirtualMFADevice = op(
  n0,
  _DVMFAD,
  0,
  () => DeleteVirtualMFADeviceRequest,
  () => Unit
);
export var EnableMFADevice = op(
  n0,
  _EMFAD,
  0,
  () => EnableMFADeviceRequest,
  () => Unit
);
export var GetMFADevice = op(
  n0,
  _GMFAD,
  0,
  () => GetMFADeviceRequest,
  () => GetMFADeviceResponse
);
export var ListMFADevices = op(
  n0,
  _LMFAD,
  0,
  () => ListMFADevicesRequest,
  () => ListMFADevicesResponse
);
export var ListMFADeviceTags = op(
  n0,
  _LMFADT,
  0,
  () => ListMFADeviceTagsRequest,
  () => ListMFADeviceTagsResponse
);
export var ListVirtualMFADevices = op(
  n0,
  _LVMFAD,
  0,
  () => ListVirtualMFADevicesRequest,
  () => ListVirtualMFADevicesResponse
);
export var ResyncMFADevice = op(
  n0,
  _RMFAD,
  0,
  () => ResyncMFADeviceRequest,
  () => Unit
);
export var TagMFADevice = op(
  n0,
  _TMFAD,
  0,
  () => TagMFADeviceRequest,
  () => Unit
);
export var UntagMFADevice = op(
  n0,
  _UMFAD,
  0,
  () => UntagMFADeviceRequest,
  () => Unit
);
