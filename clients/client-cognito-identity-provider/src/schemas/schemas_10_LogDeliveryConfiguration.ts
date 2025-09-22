// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BA,
  _CWLC,
  _CWLCT,
  _ES,
  _FC,
  _FCT,
  _GLDC,
  _GLDCR,
  _GLDCRe,
  _LCLT,
  _LCo,
  _LCTo,
  _LDC,
  _LDCT,
  _LGA,
  _LL,
  _SAt,
  _SCo,
  _SCTo,
  _UPI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudWatchLogsConfigurationType = struct(n0, _CWLCT, 0, [_LGA], [0]);
export var FirehoseConfigurationType = struct(n0, _FCT, 0, [_SAt], [0]);
export var GetLogDeliveryConfigurationRequest = struct(n0, _GLDCR, 0, [_UPI], [0]);
export var GetLogDeliveryConfigurationResponse = struct(n0, _GLDCRe, 0, [_LDC], [() => LogDeliveryConfigurationType]);
export var LogConfigurationType = struct(
  n0,
  _LCTo,
  0,
  [_LL, _ES, _CWLC, _SCo, _FC],
  [0, 0, () => CloudWatchLogsConfigurationType, () => S3ConfigurationType, () => FirehoseConfigurationType]
);
export var LogDeliveryConfigurationType = struct(n0, _LDCT, 0, [_UPI, _LCo], [0, () => LogConfigurationListType]);
export var S3ConfigurationType = struct(n0, _SCTo, 0, [_BA], [0]);
export var LogConfigurationListType = list(n0, _LCLT, 0, () => LogConfigurationType);
export var GetLogDeliveryConfiguration = op(
  n0,
  _GLDC,
  0,
  () => GetLogDeliveryConfigurationRequest,
  () => GetLogDeliveryConfigurationResponse
);
