// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _CLr,
  _Cr,
  _Cre,
  _DVCTC,
  _DVCTCR,
  _h,
  _LVCTC,
  _LVCTCR,
  _LVCTCRi,
  _P,
  _PVCTC,
  _PVCTCR,
  _SS,
  _SSL,
  _U,
  _Us,
  _VCI,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveString = sim(n0, _SS, 0, 8);
export var Credential = struct(
  n0,
  _Cr,
  0,
  [_U, _P],
  [
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
  ]
);
export var DeleteVoiceConnectorTerminationCredentialsRequest = struct(
  n0,
  _DVCTCR,
  0,
  [_VCI, _Us],
  [
    [0, 1],
    [() => SensitiveStringList, 0],
  ]
);
export var ListVoiceConnectorTerminationCredentialsRequest = struct(n0, _LVCTCR, 0, [_VCI], [[0, 1]]);
export var ListVoiceConnectorTerminationCredentialsResponse = struct(
  n0,
  _LVCTCRi,
  0,
  [_Us],
  [[() => SensitiveStringList, 0]]
);
export var PutVoiceConnectorTerminationCredentialsRequest = struct(
  n0,
  _PVCTCR,
  0,
  [_VCI, _Cre],
  [
    [0, 1],
    [() => CredentialList, 0],
  ]
);
export var CredentialList = list(n0, _CLr, 0, [() => Credential, 0]);
export var SensitiveStringList = list(n0, _SSL, 0, [() => SensitiveString, 0]);
export var DeleteVoiceConnectorTerminationCredentials = op(
  n0,
  _DVCTC,
  {
    [_h]: ["POST", "/voice-connectors/{VoiceConnectorId}/termination/credentials?operation=delete", 204],
  },
  () => DeleteVoiceConnectorTerminationCredentialsRequest,
  () => Unit
);
export var ListVoiceConnectorTerminationCredentials = op(
  n0,
  _LVCTC,
  {
    [_h]: ["GET", "/voice-connectors/{VoiceConnectorId}/termination/credentials", 200],
  },
  () => ListVoiceConnectorTerminationCredentialsRequest,
  () => ListVoiceConnectorTerminationCredentialsResponse
);
export var PutVoiceConnectorTerminationCredentials = op(
  n0,
  _PVCTC,
  {
    [_h]: ["POST", "/voice-connectors/{VoiceConnectorId}/termination/credentials?operation=put", 204],
  },
  () => PutVoiceConnectorTerminationCredentialsRequest,
  () => Unit
);
