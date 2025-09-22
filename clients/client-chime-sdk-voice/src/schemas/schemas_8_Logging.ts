// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EMML, _ESIPL, _GVCLC, _GVCLCR, _GVCLCRe, _h, _LC, _PVCLC, _PVCLCR, _PVCLCRu, _VCI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetVoiceConnectorLoggingConfigurationRequest = struct(n0, _GVCLCR, 0, [_VCI], [[0, 1]]);
export var GetVoiceConnectorLoggingConfigurationResponse = struct(n0, _GVCLCRe, 0, [_LC], [() => LoggingConfiguration]);
export var LoggingConfiguration = struct(n0, _LC, 0, [_ESIPL, _EMML], [2, 2]);
export var PutVoiceConnectorLoggingConfigurationRequest = struct(
  n0,
  _PVCLCR,
  0,
  [_VCI, _LC],
  [[0, 1], () => LoggingConfiguration]
);
export var PutVoiceConnectorLoggingConfigurationResponse = struct(n0, _PVCLCRu, 0, [_LC], [() => LoggingConfiguration]);
export var GetVoiceConnectorLoggingConfiguration = op(
  n0,
  _GVCLC,
  {
    [_h]: ["GET", "/voice-connectors/{VoiceConnectorId}/logging-configuration", 200],
  },
  () => GetVoiceConnectorLoggingConfigurationRequest,
  () => GetVoiceConnectorLoggingConfigurationResponse
);
export var PutVoiceConnectorLoggingConfiguration = op(
  n0,
  _PVCLC,
  {
    [_h]: ["PUT", "/voice-connectors/{VoiceConnectorId}/logging-configuration", 200],
  },
  () => PutVoiceConnectorLoggingConfigurationRequest,
  () => PutVoiceConnectorLoggingConfigurationResponse
);
