// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ESMAML,
  _GSMALC,
  _GSMALCR,
  _GSMALCRe,
  _h,
  _PSMALC,
  _PSMALCR,
  _PSMALCRu,
  _SMAI,
  _SMALC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetSipMediaApplicationLoggingConfigurationRequest = struct(n0, _GSMALCR, 0, [_SMAI], [[0, 1]]);
export var GetSipMediaApplicationLoggingConfigurationResponse = struct(
  n0,
  _GSMALCRe,
  0,
  [_SMALC],
  [() => SipMediaApplicationLoggingConfiguration]
);
export var PutSipMediaApplicationLoggingConfigurationRequest = struct(
  n0,
  _PSMALCR,
  0,
  [_SMAI, _SMALC],
  [[0, 1], () => SipMediaApplicationLoggingConfiguration]
);
export var PutSipMediaApplicationLoggingConfigurationResponse = struct(
  n0,
  _PSMALCRu,
  0,
  [_SMALC],
  [() => SipMediaApplicationLoggingConfiguration]
);
export var SipMediaApplicationLoggingConfiguration = struct(n0, _SMALC, 0, [_ESMAML], [2]);
export var GetSipMediaApplicationLoggingConfiguration = op(
  n0,
  _GSMALC,
  {
    [_h]: ["GET", "/sip-media-applications/{SipMediaApplicationId}/logging-configuration", 200],
  },
  () => GetSipMediaApplicationLoggingConfigurationRequest,
  () => GetSipMediaApplicationLoggingConfigurationResponse
);
export var PutSipMediaApplicationLoggingConfiguration = op(
  n0,
  _PSMALC,
  {
    [_h]: ["PUT", "/sip-media-applications/{SipMediaApplicationId}/logging-configuration", 200],
  },
  () => PutSipMediaApplicationLoggingConfigurationRequest,
  () => PutSipMediaApplicationLoggingConfigurationResponse
);
