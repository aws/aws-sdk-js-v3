// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _AAIc,
  _at,
  _aTI,
  _CA,
  _Ca,
  _ca,
  _CAa,
  _CAI,
  _cC,
  _CCo,
  _CCom,
  _CDI,
  _CDN,
  _CE,
  _CEM,
  _CEom,
  _CEOV,
  _CESC,
  _CI,
  _CIonn,
  _cl,
  _com,
  _CP,
  _CR,
  _CRC,
  _CRCa,
  _CRE,
  _CREa,
  _CSa,
  _CSI,
  _D,
  _DDI,
  _De,
  _Dev,
  _DM,
  _dT,
  _E,
  _EI,
  _eI,
  _en,
  _EV,
  _ev,
  _F,
  _fI,
  _fM,
  _gC,
  _GMTC,
  _GMTCR,
  _GMTCRe,
  _GMTS,
  _GMTSR,
  _GMTSRe,
  _GSV,
  _GSVR,
  _GSVRe,
  _h,
  _hQ,
  _i,
  _Id,
  _MAa,
  _MC,
  _MCa,
  _MCat,
  _MCR,
  _MCRA,
  _MCRAa,
  _MCRC,
  _MCRCa,
  _MCRE,
  _MCREa,
  _ME,
  _Me,
  _MEa,
  _MF,
  _MTI,
  _n,
  _Na,
  _nI,
  _Op,
  _OV,
  _p,
  _pa,
  _pI,
  _pr,
  _r,
  _re,
  _S,
  _SC,
  _SCE,
  _SCER,
  _SCERe,
  _SCt,
  _SCta,
  _SE,
  _SEt,
  _SI,
  _SMTC,
  _SMTCR,
  _SMTCRe,
  _sT,
  _SV,
  _sV,
  _SVI,
  _T,
  _TIr,
  _TPUI,
  _UI,
  _V,
  _v,
  _va,
  n0,
} from "./schemas_0";
import { ConnectorDeviceName } from "./schemas_4_Device";
import { ConnectorDeviceId } from "./schemas_27_List";

/* eslint no-var: 0 */

export var CapabilityProperties = sim(n0, _CP, 15, 8);
export var ConnectorEventMessage = sim(n0, _CEM, 0, 8);
export var ConnectorEventOperationVersion = sim(n0, _CEOV, 0, 8);
export var ConnectorEventStatusCode = sim(n0, _CESC, 1, 8);
export var MatterAttributes = sim(n0, _MAa, 15, 8);
export var MatterFields = sim(n0, _MF, 15, 8);
export var ThirdPartyUserId = sim(n0, _TPUI, 0, 8);
export var CapabilityAction = struct(n0, _CA, 0, [_n, _r, _aTI, _p], [0, 0, 0, [() => CapabilityProperties, 0]]);
export var CapabilityReport = struct(n0, _CR, 0, [_v, _nI, _en], [0, 0, () => CapabilityReportEndpoints]);
export var CapabilityReportCapability = struct(
  n0,
  _CRC,
  0,
  [_i, _n, _v, _pr, _a, _ev],
  [0, 0, 0, 64 | 0, 64 | 0, 64 | 0]
);
export var CapabilityReportEndpoint = struct(
  n0,
  _CRE,
  0,
  [_i, _dT, _ca],
  [0, 64 | 0, () => CapabilityReportCapabilities]
);
export var CapabilitySchemaItem = struct(n0, _CSI, 0, [_F, _CI, _EI, _EV, _S], [0, 0, 0, 1, 15]);
export var CommandCapability = struct(n0, _CCo, 0, [_i, _n, _v, _a], [0, 0, 0, [() => CapabilityActions, 0]]);
export var CommandEndpoint = struct(n0, _CE, 0, [_eI, _ca], [0, [() => CommandCapabilities, 0]]);
export var Device = struct(
  n0,
  _De,
  0,
  [_CDI, _CDN, _CR, _CSa, _DM],
  [
    [() => ConnectorDeviceId, 0],
    [() => ConnectorDeviceName, 0],
    () => MatterCapabilityReport,
    () => CapabilitySchemas,
    15,
  ]
);
export var GetManagedThingCapabilitiesRequest = struct(n0, _GMTCR, 0, [_Id], [[0, 1]]);
export var GetManagedThingCapabilitiesResponse = struct(
  n0,
  _GMTCRe,
  0,
  [_MTI, _Ca, _CR],
  [0, 0, () => CapabilityReport]
);
export var GetManagedThingStateRequest = struct(n0, _GMTSR, 0, [_MTI], [[0, 1]]);
export var GetManagedThingStateResponse = struct(n0, _GMTSRe, 0, [_E], [[() => StateEndpoints, 0]]);
export var GetSchemaVersionRequest = struct(
  n0,
  _GSVR,
  0,
  [_T, _SVI, _F],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _F,
      },
    ],
  ]
);
export var GetSchemaVersionResponse = struct(n0, _GSVRe, 0, [_SI, _T, _D, _Na, _SV, _V, _S], [0, 0, 0, 0, 0, 0, 15]);
export var MatterCapabilityReport = struct(n0, _MCR, 0, [_v, _nI, _en], [0, 0, () => MatterCapabilityReportEndpoints]);
export var MatterCapabilityReportAttribute = struct(n0, _MCRA, 0, [_i, _n, _va], [0, 0, 15]);
export var MatterCapabilityReportCluster = struct(
  n0,
  _MCRC,
  0,
  [_i, _re, _pI, _n, _sV, _at, _com, _ev, _fM, _gC, _fI],
  [0, 1, 0, 0, 0, () => MatterCapabilityReportAttributes, 64 | 0, 64 | 0, 1, 64 | 0, 1]
);
export var MatterCapabilityReportEndpoint = struct(
  n0,
  _MCRE,
  0,
  [_i, _dT, _cl, _pa, _sT, _cC],
  [0, 64 | 0, () => MatterCapabilityReportClusters, 64 | 0, 64 | 0, 64 | 0]
);
export var MatterCluster = struct(
  n0,
  _MC,
  0,
  [_i, _at, _com, _ev],
  [0, [() => MatterAttributes, 0], [() => MatterCommands, 0], [() => MatterEvents, 0]]
);
export var MatterEndpoint = struct(n0, _ME, 0, [_i, _cl], [0, [() => MatterClusters, 0]]);
export var SendConnectorEventRequest = struct(
  n0,
  _SCER,
  0,
  [_CIonn, _UI, _Op, _OV, _SC, _Me, _DDI, _CDI, _TIr, _Dev, _ME],
  [
    [0, 1],
    [() => ThirdPartyUserId, 0],
    0,
    [() => ConnectorEventOperationVersion, 0],
    [() => ConnectorEventStatusCode, 0],
    [() => ConnectorEventMessage, 0],
    0,
    [() => ConnectorDeviceId, 0],
    0,
    [() => Devices, 0],
    [() => MatterEndpoint, 0],
  ]
);
export var SendConnectorEventResponse = struct(n0, _SCERe, 0, [_CIonn], [0]);
export var SendManagedThingCommandRequest = struct(
  n0,
  _SMTCR,
  0,
  [_MTI, _E, _CAI, _AAIc],
  [[0, 1], [() => CommandEndpoints, 0], 0, 0]
);
export var SendManagedThingCommandResponse = struct(n0, _SMTCRe, 0, [_TIr], [0]);
export var StateCapability = struct(n0, _SCt, 0, [_i, _n, _v, _pr], [0, 0, 0, [() => CapabilityProperties, 0]]);
export var StateEndpoint = struct(n0, _SE, 0, [_eI, _ca], [0, [() => StateCapabilities, 0]]);
export var CapabilityActions = list(n0, _CAa, 0, [() => CapabilityAction, 0]);
export var CapabilityReportActions = 64 | 0;

export var CapabilityReportCapabilities = list(n0, _CRCa, 0, () => CapabilityReportCapability);
export var CapabilityReportEndpoints = list(n0, _CREa, 0, () => CapabilityReportEndpoint);
export var CapabilityReportEvents = 64 | 0;

export var CapabilityReportProperties = 64 | 0;

export var CapabilitySchemas = list(n0, _CSa, 0, () => CapabilitySchemaItem);
export var CommandCapabilities = list(n0, _CCom, 0, [() => CommandCapability, 0]);
export var CommandEndpoints = list(n0, _CEom, 0, [() => CommandEndpoint, 0]);
export var Devices = list(n0, _Dev, 0, [() => Device, 0]);
export var DeviceTypes = 64 | 0;

export var MatterCapabilityReportAttributes = list(n0, _MCRAa, 0, () => MatterCapabilityReportAttribute);
export var MatterCapabilityReportClusters = list(n0, _MCRCa, 0, () => MatterCapabilityReportCluster);
export var MatterCapabilityReportCommands = 64 | 0;

export var MatterCapabilityReportEndpointClientClusters = 64 | 0;

export var MatterCapabilityReportEndpointParts = 64 | 0;

export var MatterCapabilityReportEndpoints = list(n0, _MCREa, 0, () => MatterCapabilityReportEndpoint);
export var MatterCapabilityReportEndpointSemanticTags = 64 | 0;

export var MatterCapabilityReportEvents = 64 | 0;

export var MatterCapabilityReportGeneratedCommands = 64 | 0;

export var MatterClusters = list(n0, _MCa, 0, [() => MatterCluster, 0]);
export var StateCapabilities = list(n0, _SCta, 0, [() => StateCapability, 0]);
export var StateEndpoints = list(n0, _SEt, 0, [() => StateEndpoint, 0]);
export var MatterCommands = map(n0, _MCat, 0, [0, 0], [() => MatterFields, 0]);
export var MatterEvents = map(n0, _MEa, 0, [0, 0], [() => MatterFields, 0]);
export var GetManagedThingCapabilities = op(
  n0,
  _GMTC,
  {
    [_h]: ["GET", "/managed-things-capabilities/{Identifier}", 200],
  },
  () => GetManagedThingCapabilitiesRequest,
  () => GetManagedThingCapabilitiesResponse
);
export var GetManagedThingState = op(
  n0,
  _GMTS,
  {
    [_h]: ["GET", "/managed-thing-states/{ManagedThingId}", 200],
  },
  () => GetManagedThingStateRequest,
  () => GetManagedThingStateResponse
);
export var GetSchemaVersion = op(
  n0,
  _GSV,
  {
    [_h]: ["GET", "/schema-versions/{Type}/{SchemaVersionedId}", 200],
  },
  () => GetSchemaVersionRequest,
  () => GetSchemaVersionResponse
);
export var SendConnectorEvent = op(
  n0,
  _SCE,
  {
    [_h]: ["POST", "/connector-event/{ConnectorId}", 202],
  },
  () => SendConnectorEventRequest,
  () => SendConnectorEventResponse
);
export var SendManagedThingCommand = op(
  n0,
  _SMTC,
  {
    [_h]: ["POST", "/managed-things-command/{ManagedThingId}", 202],
  },
  () => SendManagedThingCommandRequest,
  () => SendManagedThingCommandResponse
);
