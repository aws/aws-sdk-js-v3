// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACC,
  _ACCS,
  _ACCSL,
  _DACC,
  _DACCR,
  _DACCRe,
  _I,
  _II,
  _LACC,
  _LACCR,
  _LACCRi,
  _MR,
  _NTe,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessControlConfigurationSummary = struct(n0, _ACCS, 0, [_I], [0]);
export var DeleteAccessControlConfigurationRequest = struct(n0, _DACCR, 0, [_II, _I], [0, 0]);
export var DeleteAccessControlConfigurationResponse = struct(n0, _DACCRe, 0, [], []);
export var ListAccessControlConfigurationsRequest = struct(n0, _LACCR, 0, [_II, _NTe, _MR], [0, 0, 1]);
export var ListAccessControlConfigurationsResponse = struct(
  n0,
  _LACCRi,
  0,
  [_NTe, _ACC],
  [0, () => AccessControlConfigurationSummaryList]
);
export var AccessControlConfigurationSummaryList = list(n0, _ACCSL, 0, () => AccessControlConfigurationSummary);
export var DeleteAccessControlConfiguration = op(
  n0,
  _DACC,
  0,
  () => DeleteAccessControlConfigurationRequest,
  () => DeleteAccessControlConfigurationResponse
);
export var ListAccessControlConfigurations = op(
  n0,
  _LACC,
  0,
  () => ListAccessControlConfigurationsRequest,
  () => ListAccessControlConfigurationsResponse
);
