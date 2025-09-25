// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CSCR,
  _CSCr,
  _CSCRr,
  _CTrea,
  _CTS,
  _CWE,
  _CWEM,
  _DQE,
  _DQEM,
  _ECn,
  _GSC,
  _GSCe,
  _GSCR,
  _GSCRe,
  _GSCRet,
  _GSCRete,
  _JBE,
  _JBEM,
  _KKA,
  _MRax,
  _N,
  _NTe,
  _SC,
  _SCec,
  _SCL,
  _SEL,
  _SEM,
  _SEn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudWatchEncryption = struct(n0, _CWE, 0, [_CWEM, _KKA], [0, 0]);
export var CreateSecurityConfigurationRequest = struct(n0, _CSCR, 0, [_N, _ECn], [0, () => EncryptionConfiguration]);
export var CreateSecurityConfigurationResponse = struct(n0, _CSCRr, 0, [_N, _CTrea], [0, 4]);
export var DataQualityEncryption = struct(n0, _DQE, 0, [_DQEM, _KKA], [0, 0]);
export var EncryptionConfiguration = struct(
  n0,
  _ECn,
  0,
  [_SEn, _CWE, _JBE, _DQE],
  [() => S3EncryptionList, () => CloudWatchEncryption, () => JobBookmarksEncryption, () => DataQualityEncryption]
);
export var GetSecurityConfigurationRequest = struct(n0, _GSCR, 0, [_N], [0]);
export var GetSecurityConfigurationResponse = struct(n0, _GSCRe, 0, [_SC], [() => SecurityConfiguration]);
export var GetSecurityConfigurationsRequest = struct(n0, _GSCRet, 0, [_MRax, _NTe], [1, 0]);
export var GetSecurityConfigurationsResponse = struct(
  n0,
  _GSCRete,
  0,
  [_SCec, _NTe],
  [() => SecurityConfigurationList, 0]
);
export var JobBookmarksEncryption = struct(n0, _JBE, 0, [_JBEM, _KKA], [0, 0]);
export var S3Encryption = struct(n0, _SEn, 0, [_SEM, _KKA], [0, 0]);
export var SecurityConfiguration = struct(n0, _SC, 0, [_N, _CTS, _ECn], [0, 4, () => EncryptionConfiguration]);
export var S3EncryptionList = list(n0, _SEL, 0, () => S3Encryption);
export var SecurityConfigurationList = list(n0, _SCL, 0, () => SecurityConfiguration);
export var CreateSecurityConfiguration = op(
  n0,
  _CSCr,
  0,
  () => CreateSecurityConfigurationRequest,
  () => CreateSecurityConfigurationResponse
);
export var GetSecurityConfiguration = op(
  n0,
  _GSC,
  0,
  () => GetSecurityConfigurationRequest,
  () => GetSecurityConfigurationResponse
);
export var GetSecurityConfigurations = op(
  n0,
  _GSCe,
  0,
  () => GetSecurityConfigurationsRequest,
  () => GetSecurityConfigurationsResponse
);
