// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { S3AccessPointAttachmentNotFound as __S3AccessPointAttachmentNotFound } from "../models/index";
import {
  _Al,
  _c,
  _CRT,
  _CT,
  _DADSAP,
  _DADSAPR,
  _DADSAPRe,
  _e,
  _FSIi,
  _G,
  _L,
  _LTR,
  _M,
  _N,
  _OZFSC,
  _OZFSFSI,
  _OZFSPFSU,
  _PU,
  _RARN,
  _SAP,
  _SAPA,
  _SAPANF,
  _SAPOZFSC,
  _SAPVC,
  _SG,
  _T,
  _Ui,
  _VC,
  _VI,
  _VIp,
  LifecycleTransitionReason,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DetachAndDeleteS3AccessPointRequest = struct(n0, _DADSAPR, 0, [_CRT, _N], [[0, 4], 0]);
export var DetachAndDeleteS3AccessPointResponse = struct(n0, _DADSAPRe, 0, [_L, _N], [0, 0]);
export var OpenZFSFileSystemIdentity = struct(n0, _OZFSFSI, 0, [_T, _PU], [0, () => OpenZFSPosixFileSystemUser]);
export var OpenZFSPosixFileSystemUser = struct(n0, _OZFSPFSU, 0, [_Ui, _G, _SG], [1, 1, 64 | 1]);
export var S3AccessPoint = struct(n0, _SAP, 0, [_RARN, _Al, _VC], [0, 0, () => S3AccessPointVpcConfiguration]);
export var S3AccessPointAttachment = struct(
  n0,
  _SAPA,
  0,
  [_L, _LTR, _CT, _N, _T, _OZFSC, _SAP],
  [0, () => LifecycleTransitionReason, 4, 0, 0, () => S3AccessPointOpenZFSConfiguration, () => S3AccessPoint]
);
export var S3AccessPointAttachmentNotFound = error(
  n0,
  _SAPANF,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __S3AccessPointAttachmentNotFound
);
export var S3AccessPointOpenZFSConfiguration = struct(
  n0,
  _SAPOZFSC,
  0,
  [_VI, _FSIi],
  [0, () => OpenZFSFileSystemIdentity]
);
export var S3AccessPointVpcConfiguration = struct(n0, _SAPVC, 0, [_VIp], [0]);
export var FileSystemSecondaryGIDs = 64 | 1;

export var DetachAndDeleteS3AccessPoint = op(
  n0,
  _DADSAP,
  0,
  () => DetachAndDeleteS3AccessPointRequest,
  () => DetachAndDeleteS3AccessPointResponse
);
