// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AAIc,
  _AM,
  _AMT,
  _Ar,
  _B,
  _CAI,
  _CAIo,
  _CDI,
  _CDN,
  _CIon,
  _CIont,
  _CPD,
  _CT,
  _DA,
  _DAMS,
  _DDI,
  _DDLD,
  _DDLDi,
  _DDS,
  _DDSi,
  _DT,
  _DTe,
  _FA,
  _GDD,
  _GDDR,
  _GDDRe,
  _h,
  _hQ,
  _I,
  _Id,
  _It,
  _LDD,
  _LDDi,
  _LDDR,
  _LDDRi,
  _LDDRis,
  _LDDRist,
  _M,
  _Mo,
  _MR,
  _MTI,
  _NT,
  _RAA,
  _RAAR,
  _RAARe,
  _SA,
  _SDD,
  _SDDR,
  _SDDRt,
  _SF,
  _St,
  _Ta,
  _TF,
  n0,
  TagsMap,
} from "./schemas_0";
import { AuthMaterialString, Brand, Model } from "./schemas_19_Managed";
import { ConnectorDeviceId } from "./schemas_27_List";

/* eslint no-var: 0 */

export var ConnectorDeviceName = sim(n0, _CDN, 0, 8);
export var DiscoveryAuthMaterialString = sim(n0, _DAMS, 0, 8);
export var DeviceDiscoverySummary = struct(n0, _DDS, 0, [_I, _DT, _St], [0, 0, 0]);
export var DiscoveredDeviceSummary = struct(
  n0,
  _DDSi,
  0,
  [_CDI, _CDN, _DTe, _MTI, _Mo, _DA, _B, _M, _AM],
  [
    [() => ConnectorDeviceId, 0],
    [() => ConnectorDeviceName, 0],
    64 | 0,
    0,
    0,
    4,
    [() => Brand, 0],
    [() => Model, 0],
    [() => AuthMaterialString, 0],
  ]
);
export var GetDeviceDiscoveryRequest = struct(n0, _GDDR, 0, [_Id], [[0, 1]]);
export var GetDeviceDiscoveryResponse = struct(
  n0,
  _GDDRe,
  0,
  [_I, _Ar, _DT, _St, _SA, _CIon, _CAI, _AAIc, _FA, _Ta],
  [0, 0, 0, 0, 4, 0, 0, 0, 4, [() => TagsMap, 0]]
);
export var ListDeviceDiscoveriesRequest = struct(
  n0,
  _LDDR,
  0,
  [_NT, _MR, _TF, _SF],
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
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _TF,
      },
    ],
    [
      0,
      {
        [_hQ]: _SF,
      },
    ],
  ]
);
export var ListDeviceDiscoveriesResponse = struct(n0, _LDDRi, 0, [_It, _NT], [() => DeviceDiscoveryListDefinition, 0]);
export var ListDiscoveredDevicesRequest = struct(
  n0,
  _LDDRis,
  0,
  [_Id, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListDiscoveredDevicesResponse = struct(
  n0,
  _LDDRist,
  0,
  [_It, _NT],
  [[() => DiscoveredDeviceListDefinition, 0], 0]
);
export var RegisterAccountAssociationRequest = struct(n0, _RAAR, 0, [_MTI, _AAIc, _DDI], [0, 0, 0]);
export var RegisterAccountAssociationResponse = struct(n0, _RAARe, 0, [_AAIc, _DDI, _MTI], [0, 0, 0]);
export var StartDeviceDiscoveryRequest = struct(
  n0,
  _SDDR,
  0,
  [_DT, _CPD, _CIont, _CAIo, _AAIc, _AM, _AMT, _CT, _Ta],
  [0, 128 | 0, 0, 0, 0, [() => DiscoveryAuthMaterialString, 0], 0, 0, [() => TagsMap, 0]]
);
export var StartDeviceDiscoveryResponse = struct(n0, _SDDRt, 0, [_I, _SA], [0, 4]);
export var DeviceDiscoveryListDefinition = list(n0, _DDLD, 0, () => DeviceDiscoverySummary);
export var DeviceTypeList = 64 | 0;

export var DiscoveredDeviceListDefinition = list(n0, _DDLDi, 0, [() => DiscoveredDeviceSummary, 0]);
export var CustomProtocolDetail = 128 | 0;

export var GetDeviceDiscovery = op(
  n0,
  _GDD,
  {
    [_h]: ["GET", "/device-discoveries/{Identifier}", 200],
  },
  () => GetDeviceDiscoveryRequest,
  () => GetDeviceDiscoveryResponse
);
export var ListDeviceDiscoveries = op(
  n0,
  _LDD,
  {
    [_h]: ["GET", "/device-discoveries", 200],
  },
  () => ListDeviceDiscoveriesRequest,
  () => ListDeviceDiscoveriesResponse
);
export var ListDiscoveredDevices = op(
  n0,
  _LDDi,
  {
    [_h]: ["GET", "/device-discoveries/{Identifier}/devices", 200],
  },
  () => ListDiscoveredDevicesRequest,
  () => ListDiscoveredDevicesResponse
);
export var RegisterAccountAssociation = op(
  n0,
  _RAA,
  {
    [_h]: ["PUT", "/managed-thing-associations/register", 201],
  },
  () => RegisterAccountAssociationRequest,
  () => RegisterAccountAssociationResponse
);
export var StartDeviceDiscovery = op(
  n0,
  _SDD,
  {
    [_h]: ["POST", "/device-discoveries", 201],
  },
  () => StartDeviceDiscoveryRequest,
  () => StartDeviceDiscoveryResponse
);
