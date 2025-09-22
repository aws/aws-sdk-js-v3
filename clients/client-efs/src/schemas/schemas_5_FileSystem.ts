// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  IncorrectFileSystemLifeCycleState as __IncorrectFileSystemLifeCycleState,
  InvalidPolicyException as __InvalidPolicyException,
  ReplicationAlreadyExists as __ReplicationAlreadyExists,
  TooManyRequests as __TooManyRequests,
} from "../models/index";
import {
  _BP,
  _BPLSC,
  _c,
  _DFSP,
  _DFSPR,
  _e,
  _EC,
  _FSI,
  _h,
  _hE,
  _IFSLCS,
  _IPE,
  _LP,
  _M,
  _PBP,
  _PBPR,
  _PFSP,
  _PFSPR,
  _PLC,
  _PLCR,
  _Po,
  _RAE,
  _ROP,
  _TMR,
  _UFSP,
  _UFSPR,
  n0,
  Unit,
} from "./schemas_0";
import { LifecycleConfigurationDescription, LifecyclePolicies } from "./schemas_9_Configuration";
import { BackupPolicy, BackupPolicyDescription } from "./schemas_10_Policy";
import { FileSystemPolicyDescription } from "./schemas_13_Policy";
import { FileSystemProtectionDescription } from "./schemas_15_File";

/* eslint no-var: 0 */

export var DeleteFileSystemPolicyRequest = struct(n0, _DFSPR, 0, [_FSI], [[0, 1]]);
export var IncorrectFileSystemLifeCycleState = error(
  n0,
  _IFSLCS,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_EC, _M],
  [0, 0],

  __IncorrectFileSystemLifeCycleState
);
export var InvalidPolicyException = error(
  n0,
  _IPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_EC, _M],
  [0, 0],

  __InvalidPolicyException
);
export var PutBackupPolicyRequest = struct(n0, _PBPR, 0, [_FSI, _BP], [[0, 1], () => BackupPolicy]);
export var PutFileSystemPolicyRequest = struct(n0, _PFSPR, 0, [_FSI, _Po, _BPLSC], [[0, 1], 0, 2]);
export var PutLifecycleConfigurationRequest = struct(n0, _PLCR, 0, [_FSI, _LP], [[0, 1], () => LifecyclePolicies]);
export var ReplicationAlreadyExists = error(
  n0,
  _RAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_EC, _M],
  [0, 0],

  __ReplicationAlreadyExists
);
export var TooManyRequests = error(
  n0,
  _TMR,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_EC, _M],
  [0, 0],

  __TooManyRequests
);
export var UpdateFileSystemProtectionRequest = struct(n0, _UFSPR, 0, [_FSI, _ROP], [[0, 1], 0]);
export var DeleteFileSystemPolicy = op(
  n0,
  _DFSP,
  {
    [_h]: ["DELETE", "/2015-02-01/file-systems/{FileSystemId}/policy", 200],
  },
  () => DeleteFileSystemPolicyRequest,
  () => Unit
);
export var PutBackupPolicy = op(
  n0,
  _PBP,
  {
    [_h]: ["PUT", "/2015-02-01/file-systems/{FileSystemId}/backup-policy", 200],
  },
  () => PutBackupPolicyRequest,
  () => BackupPolicyDescription
);
export var PutFileSystemPolicy = op(
  n0,
  _PFSP,
  {
    [_h]: ["PUT", "/2015-02-01/file-systems/{FileSystemId}/policy", 200],
  },
  () => PutFileSystemPolicyRequest,
  () => FileSystemPolicyDescription
);
export var PutLifecycleConfiguration = op(
  n0,
  _PLC,
  {
    [_h]: ["PUT", "/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration", 200],
  },
  () => PutLifecycleConfigurationRequest,
  () => LifecycleConfigurationDescription
);
export var UpdateFileSystemProtection = op(
  n0,
  _UFSP,
  {
    [_h]: ["PUT", "/2015-02-01/file-systems/{FileSystemId}/protection", 200],
  },
  () => UpdateFileSystemProtectionRequest,
  () => FileSystemProtectionDescription
);
