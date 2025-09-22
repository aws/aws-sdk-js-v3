// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { WAFServiceLinkedRoleErrorException as __WAFServiceLinkedRoleErrorException } from "../models/index";
import {
  _c,
  _e,
  _GLC,
  _GLCR,
  _GLCRe,
  _L,
  _LC,
  _LCo,
  _LDC,
  _LLC,
  _LLCR,
  _LLCRi,
  _m,
  _NM,
  _PLC,
  _PLCR,
  _PLCRu,
  _RA,
  _RF,
  _WAFSLREE,
  FieldToMatch,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetLoggingConfigurationRequest = struct(n0, _GLCR, 0, [_RA], [0]);
export var GetLoggingConfigurationResponse = struct(n0, _GLCRe, 0, [_LC], [() => LoggingConfiguration]);
export var ListLoggingConfigurationsRequest = struct(n0, _LLCR, 0, [_NM, _L], [0, 1]);
export var ListLoggingConfigurationsResponse = struct(n0, _LLCRi, 0, [_LCo, _NM], [() => LoggingConfigurations, 0]);
export var LoggingConfiguration = struct(n0, _LC, 0, [_RA, _LDC, _RF], [0, 64 | 0, () => RedactedFields]);
export var PutLoggingConfigurationRequest = struct(n0, _PLCR, 0, [_LC], [() => LoggingConfiguration]);
export var PutLoggingConfigurationResponse = struct(n0, _PLCRu, 0, [_LC], [() => LoggingConfiguration]);
export var WAFServiceLinkedRoleErrorException = error(
  n0,
  _WAFSLREE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __WAFServiceLinkedRoleErrorException
);
export var LogDestinationConfigs = 64 | 0;

export var LoggingConfigurations = list(n0, _LCo, 0, () => LoggingConfiguration);
export var RedactedFields = list(n0, _RF, 0, () => FieldToMatch);
export var GetLoggingConfiguration = op(
  n0,
  _GLC,
  0,
  () => GetLoggingConfigurationRequest,
  () => GetLoggingConfigurationResponse
);
export var ListLoggingConfigurations = op(
  n0,
  _LLC,
  0,
  () => ListLoggingConfigurationsRequest,
  () => ListLoggingConfigurationsResponse
);
export var PutLoggingConfiguration = op(
  n0,
  _PLC,
  0,
  () => PutLoggingConfigurationRequest,
  () => PutLoggingConfigurationResponse
);
