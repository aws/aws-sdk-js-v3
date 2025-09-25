// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACA,
  _ACAc,
  _ACAL,
  _ACAV,
  _CIACAC,
  _CIACACR,
  _CIACACRr,
  _DIACACe,
  _DIACACRes,
  _DIACACResc,
  _IA,
  _IACAC,
  _K,
  _S,
  _SR,
  _St,
  _UIACAC,
  _UIACACR,
  _UIACACRp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessControlAttribute = struct(n0, _ACA, 0, [_K, _V], [0, () => AccessControlAttributeValue]);
export var AccessControlAttributeValue = struct(n0, _ACAV, 0, [_S], [64 | 0]);
export var CreateInstanceAccessControlAttributeConfigurationRequest = struct(
  n0,
  _CIACACR,
  0,
  [_IA, _IACAC],
  [0, () => InstanceAccessControlAttributeConfiguration]
);
export var CreateInstanceAccessControlAttributeConfigurationResponse = struct(n0, _CIACACRr, 0, [], []);
export var DescribeInstanceAccessControlAttributeConfigurationRequest = struct(n0, _DIACACRes, 0, [_IA], [0]);
export var DescribeInstanceAccessControlAttributeConfigurationResponse = struct(
  n0,
  _DIACACResc,
  0,
  [_St, _SR, _IACAC],
  [0, 0, () => InstanceAccessControlAttributeConfiguration]
);
export var InstanceAccessControlAttributeConfiguration = struct(
  n0,
  _IACAC,
  0,
  [_ACAc],
  [() => AccessControlAttributeList]
);
export var UpdateInstanceAccessControlAttributeConfigurationRequest = struct(
  n0,
  _UIACACR,
  0,
  [_IA, _IACAC],
  [0, () => InstanceAccessControlAttributeConfiguration]
);
export var UpdateInstanceAccessControlAttributeConfigurationResponse = struct(n0, _UIACACRp, 0, [], []);
export var AccessControlAttributeList = list(n0, _ACAL, 0, () => AccessControlAttribute);
export var AccessControlAttributeValueSourceList = 64 | 0;

export var CreateInstanceAccessControlAttributeConfiguration = op(
  n0,
  _CIACAC,
  0,
  () => CreateInstanceAccessControlAttributeConfigurationRequest,
  () => CreateInstanceAccessControlAttributeConfigurationResponse
);
export var DescribeInstanceAccessControlAttributeConfiguration = op(
  n0,
  _DIACACe,
  0,
  () => DescribeInstanceAccessControlAttributeConfigurationRequest,
  () => DescribeInstanceAccessControlAttributeConfigurationResponse
);
export var UpdateInstanceAccessControlAttributeConfiguration = op(
  n0,
  _UIACAC,
  0,
  () => UpdateInstanceAccessControlAttributeConfigurationRequest,
  () => UpdateInstanceAccessControlAttributeConfigurationResponse
);
