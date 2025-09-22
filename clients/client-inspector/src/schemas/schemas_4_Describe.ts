// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _AA,
  _aA,
  _aI,
  _aIm,
  _AR,
  _aR,
  _ar,
  _aRA,
  _aRAs,
  _aRC,
  _ARL,
  _ARN,
  _ARNL,
  _ARSC,
  _ARSCL,
  _aSG,
  _AT,
  _aTA,
  _aTAs,
  _aTAss,
  _aTAsse,
  _ATL,
  _ATLs,
  _ATs,
  _aTs,
  _aTss,
  _aTsse,
  _cA,
  _cAo,
  _co,
  _d,
  _DARe,
  _DARRe,
  _DARRes,
  _DATes,
  _DATesc,
  _DATRes,
  _DATResc,
  _DATRescr,
  _DATRescri,
  _dC,
  _DCAAR,
  _DCAARR,
  _de,
  _DF,
  _DFR,
  _DFRe,
  _dIS,
  _DRG,
  _DRGR,
  _DRGRe,
  _e,
  _ev,
  _F,
  _f,
  _fA,
  _fC,
  _fI,
  _FL,
  _gI,
  _gN,
  _h,
  _i,
  _iAp,
  _iApv,
  _iOC,
  _ISA,
  _l,
  _lARA,
  _m,
  _n,
  _NI,
  _nI,
  _NIe,
  _nII,
  _no,
  _nS,
  _pDN,
  _pDNu,
  _PI,
  _pI,
  _PIA,
  _pIA,
  _pIAr,
  _r,
  _rA,
  _rAe,
  _RG,
  _rG,
  _rGA,
  _rGAe,
  _RGL,
  _rPA,
  _rPAu,
  _s,
  _sA,
  _sAe,
  _sC,
  _sCA,
  _se,
  _sev,
  _SG,
  _sG,
  _SGe,
  _sI,
  _sPSC,
  _sTA,
  _sV,
  _t,
  _Ta,
  _ti,
  _uA,
  _uAFF,
  _uAs,
  _va,
  _vI,
  n0,
  Unit,
} from "./schemas_0";
import { ResourceGroupTags, Tag } from "./schemas_2_Resource";
import { FailedItems } from "./schemas_3_Describe";
import { AttributeList, UserAttributeList } from "./schemas_9_Describe";

/* eslint no-var: 0 */

export var AssessmentRun = struct(
  n0,
  _AR,
  0,
  [_ar, _n, _aTA, _s, _dIS, _rPA, _uAFF, _cA, _sA, _cAo, _sCA, _dC, _sC, _no, _fC],
  [
    0,
    0,
    0,
    0,
    1,
    64 | 0,
    () => UserAttributeList,
    4,
    4,
    4,
    4,
    2,
    () => AssessmentRunStateChangeList,
    () => AssessmentRunNotificationList,
    128 | 1,
  ]
);
export var AssessmentRunNotification = struct(n0, _ARN, 0, [_d, _ev, _m, _e, _sTA, _sPSC], [4, 0, 0, 2, 0, 0]);
export var AssessmentRunStateChange = struct(n0, _ARSC, 0, [_sCA, _s], [4, 0]);
export var AssessmentTarget = struct(n0, _AT, 0, [_ar, _n, _rGA, _cA, _uA], [0, 0, 0, 4, 4]);
export var AssessmentTemplate = struct(
  n0,
  _ATs,
  0,
  [_ar, _n, _aTAs, _dIS, _rPA, _uAFF, _lARA, _aRC, _cA],
  [0, 0, 0, 1, 64 | 0, () => UserAttributeList, 0, 1, 4]
);
export var AssetAttributes = struct(
  n0,
  _AA,
  0,
  [_sV, _aI, _aSG, _aIm, _h, _iAp, _t, _nI],
  [1, 0, 0, 0, 0, 64 | 0, () => Tags, () => NetworkInterfaces]
);
export var DescribeAssessmentRunsRequest = struct(n0, _DARRe, 0, [_aRAs], [64 | 0]);
export var DescribeAssessmentRunsResponse = struct(
  n0,
  _DARRes,
  0,
  [_aR, _fI],
  [() => AssessmentRunList, () => FailedItems]
);
export var DescribeAssessmentTargetsRequest = struct(n0, _DATRes, 0, [_aTAss], [64 | 0]);
export var DescribeAssessmentTargetsResponse = struct(
  n0,
  _DATResc,
  0,
  [_aTs, _fI],
  [() => AssessmentTargetList, () => FailedItems]
);
export var DescribeAssessmentTemplatesRequest = struct(n0, _DATRescr, 0, [_aTAsse], [64 | 0]);
export var DescribeAssessmentTemplatesResponse = struct(
  n0,
  _DATRescri,
  0,
  [_aTss, _fI],
  [() => AssessmentTemplateList, () => FailedItems]
);
export var DescribeCrossAccountAccessRoleResponse = struct(n0, _DCAARR, 0, [_rA, _va, _rAe], [0, 2, 4]);
export var DescribeFindingsRequest = struct(n0, _DFR, 0, [_fA, _l], [64 | 0, 0]);
export var DescribeFindingsResponse = struct(n0, _DFRe, 0, [_f, _fI], [() => FindingList, () => FailedItems]);
export var DescribeResourceGroupsRequest = struct(n0, _DRGR, 0, [_rGAe], [64 | 0]);
export var DescribeResourceGroupsResponse = struct(
  n0,
  _DRGRe,
  0,
  [_rG, _fI],
  [() => ResourceGroupList, () => FailedItems]
);
export var Finding = struct(
  n0,
  _F,
  0,
  [_ar, _sV, _se, _sAe, _aTsse, _aA, _i, _ti, _de, _r, _sev, _nS, _co, _iOC, _a, _uAs, _cA, _uA],
  [
    0,
    1,
    0,
    () => InspectorServiceAttributes,
    0,
    () => AssetAttributes,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    () => AttributeList,
    () => UserAttributeList,
    4,
    4,
  ]
);
export var InspectorServiceAttributes = struct(n0, _ISA, 0, [_sV, _aRA, _rPAu], [1, 0, 0]);
export var NetworkInterface = struct(
  n0,
  _NI,
  0,
  [_nII, _sI, _vI, _pDN, _pIA, _pIAr, _pDNu, _pI, _iApv, _sG],
  [0, 0, 0, 0, 0, () => PrivateIpAddresses, 0, 0, 64 | 0, () => SecurityGroups]
);
export var PrivateIp = struct(n0, _PI, 0, [_pDN, _pIA], [0, 0]);
export var ResourceGroup = struct(n0, _RG, 0, [_ar, _t, _cA], [0, () => ResourceGroupTags, 4]);
export var SecurityGroup = struct(n0, _SG, 0, [_gN, _gI], [0, 0]);
export var AssessmentRulesPackageArnList = 64 | 0;

export var AssessmentRunList = list(n0, _ARL, 0, () => AssessmentRun);
export var AssessmentRunNotificationList = list(n0, _ARNL, 0, () => AssessmentRunNotification);
export var AssessmentRunStateChangeList = list(n0, _ARSCL, 0, () => AssessmentRunStateChange);
export var AssessmentTargetList = list(n0, _ATL, 0, () => AssessmentTarget);
export var AssessmentTemplateList = list(n0, _ATLs, 0, () => AssessmentTemplate);
export var FindingList = list(n0, _FL, 0, () => Finding);
export var Ipv4AddressList = 64 | 0;

export var Ipv6Addresses = 64 | 0;

export var NetworkInterfaces = list(n0, _NIe, 0, () => NetworkInterface);
export var PrivateIpAddresses = list(n0, _PIA, 0, () => PrivateIp);
export var ResourceGroupList = list(n0, _RGL, 0, () => ResourceGroup);
export var SecurityGroups = list(n0, _SGe, 0, () => SecurityGroup);
export var Tags = list(n0, _Ta, 0, () => Tag);
export var AssessmentRunFindingCounts = 128 | 1;

export var DescribeAssessmentRuns = op(
  n0,
  _DARe,
  0,
  () => DescribeAssessmentRunsRequest,
  () => DescribeAssessmentRunsResponse
);
export var DescribeAssessmentTargets = op(
  n0,
  _DATes,
  0,
  () => DescribeAssessmentTargetsRequest,
  () => DescribeAssessmentTargetsResponse
);
export var DescribeAssessmentTemplates = op(
  n0,
  _DATesc,
  0,
  () => DescribeAssessmentTemplatesRequest,
  () => DescribeAssessmentTemplatesResponse
);
export var DescribeCrossAccountAccessRole = op(
  n0,
  _DCAAR,
  0,
  () => Unit,
  () => DescribeCrossAccountAccessRoleResponse
);
export var DescribeFindings = op(
  n0,
  _DF,
  0,
  () => DescribeFindingsRequest,
  () => DescribeFindingsResponse
);
export var DescribeResourceGroups = op(
  n0,
  _DRG,
  0,
  () => DescribeResourceGroupsRequest,
  () => DescribeResourceGroupsResponse
);
