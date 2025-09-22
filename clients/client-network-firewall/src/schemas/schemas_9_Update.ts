// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceOwnerCheckException as __ResourceOwnerCheckException } from "../models/index";
import {
  _AZCP,
  _c,
  _DP,
  _e,
  _EC,
  _FAi,
  _FN,
  _FPCP,
  _M,
  _ROCE,
  _SCP,
  _UAZCP,
  _UAZCPR,
  _UAZCPRp,
  _UFDP,
  _UFDPR,
  _UFDPRp,
  _UFEC,
  _UFECR,
  _UFECRp,
  _UFPCP,
  _UFPCPR,
  _UFPCPRp,
  _USCP,
  _USCPR,
  _USCPRp,
  _UT,
  EncryptionConfiguration,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ResourceOwnerCheckException = error(
  n0,
  _ROCE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ResourceOwnerCheckException
);
export var UpdateAvailabilityZoneChangeProtectionRequest = struct(
  n0,
  _UAZCPR,
  0,
  [_UT, _FAi, _FN, _AZCP],
  [0, 0, 0, 2]
);
export var UpdateAvailabilityZoneChangeProtectionResponse = struct(
  n0,
  _UAZCPRp,
  0,
  [_UT, _FAi, _FN, _AZCP],
  [0, 0, 0, 2]
);
export var UpdateFirewallDeleteProtectionRequest = struct(n0, _UFDPR, 0, [_UT, _FAi, _FN, _DP], [0, 0, 0, 2]);
export var UpdateFirewallDeleteProtectionResponse = struct(n0, _UFDPRp, 0, [_FAi, _FN, _DP, _UT], [0, 0, 2, 0]);
export var UpdateFirewallEncryptionConfigurationRequest = struct(
  n0,
  _UFECR,
  0,
  [_UT, _FAi, _FN, _EC],
  [0, 0, 0, () => EncryptionConfiguration]
);
export var UpdateFirewallEncryptionConfigurationResponse = struct(
  n0,
  _UFECRp,
  0,
  [_FAi, _FN, _UT, _EC],
  [0, 0, 0, () => EncryptionConfiguration]
);
export var UpdateFirewallPolicyChangeProtectionRequest = struct(n0, _UFPCPR, 0, [_UT, _FAi, _FN, _FPCP], [0, 0, 0, 2]);
export var UpdateFirewallPolicyChangeProtectionResponse = struct(
  n0,
  _UFPCPRp,
  0,
  [_UT, _FAi, _FN, _FPCP],
  [0, 0, 0, 2]
);
export var UpdateSubnetChangeProtectionRequest = struct(n0, _USCPR, 0, [_UT, _FAi, _FN, _SCP], [0, 0, 0, 2]);
export var UpdateSubnetChangeProtectionResponse = struct(n0, _USCPRp, 0, [_UT, _FAi, _FN, _SCP], [0, 0, 0, 2]);
export var UpdateAvailabilityZoneChangeProtection = op(
  n0,
  _UAZCP,
  0,
  () => UpdateAvailabilityZoneChangeProtectionRequest,
  () => UpdateAvailabilityZoneChangeProtectionResponse
);
export var UpdateFirewallDeleteProtection = op(
  n0,
  _UFDP,
  0,
  () => UpdateFirewallDeleteProtectionRequest,
  () => UpdateFirewallDeleteProtectionResponse
);
export var UpdateFirewallEncryptionConfiguration = op(
  n0,
  _UFEC,
  0,
  () => UpdateFirewallEncryptionConfigurationRequest,
  () => UpdateFirewallEncryptionConfigurationResponse
);
export var UpdateFirewallPolicyChangeProtection = op(
  n0,
  _UFPCP,
  0,
  () => UpdateFirewallPolicyChangeProtectionRequest,
  () => UpdateFirewallPolicyChangeProtectionResponse
);
export var UpdateSubnetChangeProtection = op(
  n0,
  _USCP,
  0,
  () => UpdateSubnetChangeProtectionRequest,
  () => UpdateSubnetChangeProtectionResponse
);
