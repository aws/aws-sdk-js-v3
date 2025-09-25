// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ValidationException as __ValidationException } from "../models/index";
import { _BP, _BPD, _c, _DBP, _DBPR, _e, _EC, _FSI, _h, _hE, _M, _S, _VE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BackupPolicy = struct(n0, _BP, 0, [_S], [0]);
export var BackupPolicyDescription = struct(n0, _BPD, 0, [_BP], [() => BackupPolicy]);
export var DescribeBackupPolicyRequest = struct(n0, _DBPR, 0, [_FSI], [[0, 1]]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_EC, _M],
  [0, 0],

  __ValidationException
);
export var DescribeBackupPolicy = op(
  n0,
  _DBP,
  {
    [_h]: ["GET", "/2015-02-01/file-systems/{FileSystemId}/backup-policy", 200],
  },
  () => DescribeBackupPolicyRequest,
  () => BackupPolicyDescription
);
