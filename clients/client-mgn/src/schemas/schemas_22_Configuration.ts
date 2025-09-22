// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _a,
  _ADE,
  _aDSG,
  _aIDc,
  _aPIA,
  _bM,
  _bT,
  _c,
  _CLCT,
  _CLCTR,
  _co,
  _cPI,
  _cPIP,
  _CRCT,
  _CRCTR,
  _cT,
  _dLSDT,
  _dPR,
  _e,
  _eE,
  _eEKA,
  _eMAT,
  _hE,
  _hH,
  _hQ,
  _ht,
  _IS,
  _ISE,
  _ISR,
  _ISRn,
  _l,
  _lCTID,
  _lD,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _lVC,
  _m,
  _mATMID,
  _n,
  _pLA,
  _qC,
  _RA,
  _rA,
  _rAS,
  _rCTID,
  _rD,
  _rSIT,
  _rSSGID,
  _sASI,
  _sAT,
  _sCe,
  _ser,
  _sSIDo,
  _sVC,
  _sVMS,
  _t,
  _TE,
  _tITRSM,
  _TK,
  _tK,
  _TR,
  _TRR,
  _uDRS,
  _uFE,
  _ULCT,
  _ULCTR,
  _UR,
  _URC,
  _URCR,
  _URCT,
  _URCTR,
  _URR,
  n0,
  TagsMap,
  Unit,
} from "./schemas_0";
import {
  LaunchConfigurationTemplate,
  LaunchTemplateDiskConf,
  Licensing,
  PostLaunchActions,
} from "./schemas_3_LaunchConfiguration";
import {
  ReplicationConfiguration,
  ReplicationConfigurationReplicatedDisks,
  ReplicationConfigurationTemplate,
} from "./schemas_12_Configuration";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m, _co],
  [0, 0],

  __AccessDeniedException
);
export var CreateLaunchConfigurationTemplateRequest = struct(
  n0,
  _CLCTR,
  0,
  [_pLA, _eMAT, _mATMID, _t, _lD, _tITRSM, _cPI, _aPIA, _cT, _l, _bM, _sVMS, _sVC, _lVC],
  [
    () => PostLaunchActions,
    2,
    0,
    [() => TagsMap, 0],
    0,
    0,
    2,
    2,
    2,
    () => Licensing,
    0,
    1,
    () => LaunchTemplateDiskConf,
    () => LaunchTemplateDiskConf,
  ]
);
export var CreateReplicationConfigurationTemplateRequest = struct(
  n0,
  _CRCTR,
  0,
  [_sASI, _aDSG, _rSSGID, _rSIT, _uDRS, _dLSDT, _eE, _eEKA, _bT, _dPR, _cPIP, _sAT, _uFE, _t],
  [0, 2, 64 | 0, 0, 2, 0, 0, 0, 1, 0, 2, [() => TagsMap, 0], 2, [() => TagsMap, 0]]
);
export var InitializeServiceRequest = struct(n0, _ISR, 0, [], []);
export var InitializeServiceResponse = struct(n0, _ISRn, 0, [], []);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _ser,
    [_hE]: 500,
  },
  [_m, _rAS],
  [
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __InternalServerException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [[() => TagsMap, 0]]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_rA, _t],
  [
    [0, 1],
    [() => TagsMap, 0],
  ]
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _sCe, _qC, _rAS],
  [
    0,
    0,
    0,
    [
      0,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __ThrottlingException
);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      () => TagKeys,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UpdateLaunchConfigurationTemplateRequest = struct(
  n0,
  _ULCTR,
  0,
  [_lCTID, _pLA, _eMAT, _mATMID, _lD, _tITRSM, _cPI, _aPIA, _cT, _l, _bM, _sVMS, _sVC, _lVC],
  [
    0,
    () => PostLaunchActions,
    2,
    0,
    0,
    0,
    2,
    2,
    2,
    () => Licensing,
    0,
    1,
    () => LaunchTemplateDiskConf,
    () => LaunchTemplateDiskConf,
  ]
);
export var UpdateReplicationConfigurationRequest = struct(
  n0,
  _URCR,
  0,
  [_sSIDo, _n, _sASI, _aDSG, _rSSGID, _rSIT, _uDRS, _dLSDT, _rD, _eE, _eEKA, _bT, _dPR, _cPIP, _sAT, _uFE, _aIDc],
  [0, 0, 0, 2, 64 | 0, 0, 2, 0, () => ReplicationConfigurationReplicatedDisks, 0, 0, 1, 0, 2, [() => TagsMap, 0], 2, 0]
);
export var UpdateReplicationConfigurationTemplateRequest = struct(
  n0,
  _URCTR,
  0,
  [_rCTID, _a, _sASI, _aDSG, _rSSGID, _rSIT, _uDRS, _dLSDT, _eE, _eEKA, _bT, _dPR, _cPIP, _sAT, _uFE],
  [0, 0, 0, 2, 64 | 0, 0, 2, 0, 0, 0, 1, 0, 2, [() => TagsMap, 0], 2]
);
export var TagKeys = list(n0, _TK, 8, 0);
export var CreateLaunchConfigurationTemplate = op(
  n0,
  _CLCT,
  {
    [_ht]: ["POST", "/CreateLaunchConfigurationTemplate", 201],
  },
  () => CreateLaunchConfigurationTemplateRequest,
  () => LaunchConfigurationTemplate
);
export var CreateReplicationConfigurationTemplate = op(
  n0,
  _CRCT,
  {
    [_ht]: ["POST", "/CreateReplicationConfigurationTemplate", 201],
  },
  () => CreateReplicationConfigurationTemplateRequest,
  () => ReplicationConfigurationTemplate
);
export var InitializeService = op(
  n0,
  _IS,
  {
    [_ht]: ["POST", "/InitializeService", 204],
  },
  () => InitializeServiceRequest,
  () => InitializeServiceResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_ht]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_ht]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_ht]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => Unit
);
export var UpdateLaunchConfigurationTemplate = op(
  n0,
  _ULCT,
  {
    [_ht]: ["POST", "/UpdateLaunchConfigurationTemplate", 200],
  },
  () => UpdateLaunchConfigurationTemplateRequest,
  () => LaunchConfigurationTemplate
);
export var UpdateReplicationConfiguration = op(
  n0,
  _URC,
  {
    [_ht]: ["POST", "/UpdateReplicationConfiguration", 200],
  },
  () => UpdateReplicationConfigurationRequest,
  () => ReplicationConfiguration
);
export var UpdateReplicationConfigurationTemplate = op(
  n0,
  _URCT,
  {
    [_ht]: ["POST", "/UpdateReplicationConfigurationTemplate", 200],
  },
  () => UpdateReplicationConfigurationTemplateRequest,
  () => ReplicationConfigurationTemplate
);
