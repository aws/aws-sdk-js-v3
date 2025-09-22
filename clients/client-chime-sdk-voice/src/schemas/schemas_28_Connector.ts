// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CCST,
  _ESC,
  _GVCESC,
  _GVCESCR,
  _GVCESCRe,
  _h,
  _PVCESC,
  _PVCESCR,
  _PVCESCRu,
  _SBCT,
  _VCI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ExternalSystemsConfiguration = struct(n0, _ESC, 0, [_SBCT, _CCST], [64 | 0, 64 | 0]);
export var GetVoiceConnectorExternalSystemsConfigurationRequest = struct(n0, _GVCESCR, 0, [_VCI], [[0, 1]]);
export var GetVoiceConnectorExternalSystemsConfigurationResponse = struct(
  n0,
  _GVCESCRe,
  0,
  [_ESC],
  [() => ExternalSystemsConfiguration]
);
export var PutVoiceConnectorExternalSystemsConfigurationRequest = struct(
  n0,
  _PVCESCR,
  0,
  [_VCI, _SBCT, _CCST],
  [[0, 1], 64 | 0, 64 | 0]
);
export var PutVoiceConnectorExternalSystemsConfigurationResponse = struct(
  n0,
  _PVCESCRu,
  0,
  [_ESC],
  [() => ExternalSystemsConfiguration]
);
export var ContactCenterSystemTypeList = 64 | 0;

export var SessionBorderControllerTypeList = 64 | 0;

export var GetVoiceConnectorExternalSystemsConfiguration = op(
  n0,
  _GVCESC,
  {
    [_h]: ["GET", "/voice-connectors/{VoiceConnectorId}/external-systems-configuration", 200],
  },
  () => GetVoiceConnectorExternalSystemsConfigurationRequest,
  () => GetVoiceConnectorExternalSystemsConfigurationResponse
);
export var PutVoiceConnectorExternalSystemsConfiguration = op(
  n0,
  _PVCESC,
  {
    [_h]: ["PUT", "/voice-connectors/{VoiceConnectorId}/external-systems-configuration", 200],
  },
  () => PutVoiceConnectorExternalSystemsConfigurationRequest,
  () => PutVoiceConnectorExternalSystemsConfigurationResponse
);
