// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aDI,
  _AE,
  _aE,
  _aI,
  _aIc,
  _BUMEDIS,
  _BUMEDISR,
  _BUMEDISRa,
  _cR,
  _DOC,
  _DOCR,
  _DOCRe,
  _ec,
  _ecr,
  _eM,
  _fAI,
  _ht,
  _l,
  _lC,
  _MAEDIS,
  _MAEDISL,
  _mALR,
  _oPP,
  _pP,
  _s,
  _UEDIC,
  _UEDICR,
  _UEDICRp,
  _UOC,
  _UOCR,
  _UOCRp,
  n0,
} from "./schemas_0";
import {
  FailedMemberAccountEc2DeepInspectionStatusStateList,
  MemberAccountEc2DeepInspectionStatusStateList,
} from "./schemas_1_Status";

/* eslint no-var: 0 */

export var AutoEnable = struct(n0, _AE, 0, [_ec, _ecr, _l, _lC, _cR], [2, 2, 2, 2, 2]);
export var BatchUpdateMemberEc2DeepInspectionStatusRequest = struct(
  n0,
  _BUMEDISR,
  0,
  [_aIc],
  [() => MemberAccountEc2DeepInspectionStatusList]
);
export var BatchUpdateMemberEc2DeepInspectionStatusResponse = struct(
  n0,
  _BUMEDISRa,
  0,
  [_aIc, _fAI],
  [() => MemberAccountEc2DeepInspectionStatusStateList, () => FailedMemberAccountEc2DeepInspectionStatusStateList]
);
export var DescribeOrganizationConfigurationRequest = struct(n0, _DOCR, 0, [], []);
export var DescribeOrganizationConfigurationResponse = struct(n0, _DOCRe, 0, [_aE, _mALR], [() => AutoEnable, 2]);
export var MemberAccountEc2DeepInspectionStatus = struct(n0, _MAEDIS, 0, [_aI, _aDI], [0, 2]);
export var UpdateEc2DeepInspectionConfigurationRequest = struct(n0, _UEDICR, 0, [_aDI, _pP], [2, 64 | 0]);
export var UpdateEc2DeepInspectionConfigurationResponse = struct(
  n0,
  _UEDICRp,
  0,
  [_pP, _oPP, _s, _eM],
  [64 | 0, 64 | 0, 0, 0]
);
export var UpdateOrganizationConfigurationRequest = struct(n0, _UOCR, 0, [_aE], [() => AutoEnable]);
export var UpdateOrganizationConfigurationResponse = struct(n0, _UOCRp, 0, [_aE], [() => AutoEnable]);
export var MemberAccountEc2DeepInspectionStatusList = list(n0, _MAEDISL, 0, () => MemberAccountEc2DeepInspectionStatus);
export var BatchUpdateMemberEc2DeepInspectionStatus = op(
  n0,
  _BUMEDIS,
  {
    [_ht]: ["POST", "/ec2deepinspectionstatus/member/batch/update", 200],
  },
  () => BatchUpdateMemberEc2DeepInspectionStatusRequest,
  () => BatchUpdateMemberEc2DeepInspectionStatusResponse
);
export var DescribeOrganizationConfiguration = op(
  n0,
  _DOC,
  {
    [_ht]: ["POST", "/organizationconfiguration/describe", 200],
  },
  () => DescribeOrganizationConfigurationRequest,
  () => DescribeOrganizationConfigurationResponse
);
export var UpdateEc2DeepInspectionConfiguration = op(
  n0,
  _UEDIC,
  {
    [_ht]: ["POST", "/ec2deepinspectionconfiguration/update", 200],
  },
  () => UpdateEc2DeepInspectionConfigurationRequest,
  () => UpdateEc2DeepInspectionConfigurationResponse
);
export var UpdateOrganizationConfiguration = op(
  n0,
  _UOC,
  {
    [_ht]: ["POST", "/organizationconfiguration/update", 200],
  },
  () => UpdateOrganizationConfigurationRequest,
  () => UpdateOrganizationConfigurationResponse
);
