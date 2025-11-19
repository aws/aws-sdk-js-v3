const _A = "Action";
const _AL = "ActionList";
const _AR = "ArchiveRule";
const _ARR = "ArchiveRetainRule";
const _AZ = "AvailabilityZones";
const _Ac = "Actions";
const _C = "Count";
const _CA = "CmkArn";
const _CE = "CronExpression";
const _CI = "CreateInterval";
const _CLP = "CreateLifecyclePolicy";
const _CLPR = "CreateLifecyclePolicyRequest";
const _CLPRr = "CreateLifecyclePolicyResponse";
const _CR = "CreateRule";
const _CRC = "CrossRegionCopy";
const _CRCA = "CrossRegionCopyAction";
const _CRCAL = "CrossRegionCopyActionList";
const _CRCDR = "CrossRegionCopyDeprecateRule";
const _CRCR = "CrossRegionCopyRule";
const _CRCRR = "CrossRegionCopyRetainRule";
const _CRCRr = "CrossRegionCopyRules";
const _CRCT = "CrossRegionCopyTargets";
const _CRCTL = "CrossRegionCopyTargetList";
const _CRCTr = "CrossRegionCopyTarget";
const _CT = "CopyTags";
const _Co = "Code";
const _D = "Description";
const _DC = "DateCreated";
const _DLP = "DeleteLifecyclePolicy";
const _DLPR = "DeleteLifecyclePolicyRequest";
const _DLPRe = "DeleteLifecyclePolicyResponse";
const _DM = "DateModified";
const _DP = "DefaultPolicy";
const _DPT = "DefaultPolicyType";
const _DR = "DeprecateRule";
const _DRe = "DescriptionRegex";
const _E = "Exclusions";
const _EBV = "ExcludeBootVolumes";
const _EBVx = "ExcludeBootVolume";
const _EC = "EncryptionConfiguration";
const _ED = "ExtendDeletion";
const _EDVT = "ExcludeDataVolumeTags";
const _EDVTL = "ExcludeDataVolumeTagList";
const _EH = "ExecutionHandler";
const _EHS = "ExecutionHandlerService";
const _EOOSF = "ExecuteOperationOnScriptFailure";
const _EP = "EventParameters";
const _ERA = "ExecutionRoleArn";
const _ES = "EventSource";
const _ET = "EventType";
const _ETL = "ExcludeTagsList";
const _ETx = "ExcludeTags";
const _ETxe = "ExecutionTimeout";
const _EVT = "ExcludeVolumeTypes";
const _En = "Encrypted";
const _FRR = "FastRestoreRule";
const _GLP = "GetLifecyclePolicies";
const _GLPR = "GetLifecyclePoliciesRequest";
const _GLPRe = "GetLifecyclePoliciesResponse";
const _GLPRet = "GetLifecyclePolicyRequest";
const _GLPReti = "GetLifecyclePolicyResponse";
const _GLPe = "GetLifecyclePolicy";
const _I = "Interval";
const _IRE = "InvalidRequestException";
const _ISE = "InternalServerException";
const _IU = "IntervalUnit";
const _K = "Key";
const _L = "Location";
const _LEE = "LimitExceededException";
const _LP = "LifecyclePolicy";
const _LPS = "LifecyclePolicySummary";
const _LPSL = "LifecyclePolicySummaryList";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _M = "Message";
const _MEP = "MutuallyExclusiveParameters";
const _MRC = "MaximumRetryCount";
const _N = "Name";
const _NR = "NoReboot";
const _P = "Parameters";
const _PA = "PolicyArn";
const _PD = "PolicyDetails";
const _PI = "PolicyId";
const _PIo = "PolicyIds";
const _PL = "PolicyLanguage";
const _PT = "PolicyType";
const _Po = "Policies";
const _Pol = "Policy";
const _RA = "ResourceArn";
const _RAT = "RetentionArchiveTier";
const _RI = "RetainInterval";
const _RIe = "ResourceIds";
const _RL = "ResourceLocations";
const _RNFE = "ResourceNotFoundException";
const _RP = "RequiredParameters";
const _RR = "RetainRule";
const _RT = "ResourceTypes";
const _RTe = "ResourceType";
const _S = "State";
const _SL = "ScheduleList";
const _SLc = "ScriptsList";
const _SM = "StatusMessage";
const _SO = "SnapshotOwner";
const _SR = "ShareRules";
const _SRh = "ShareRule";
const _Sc = "Scripts";
const _Sch = "Schedules";
const _Sche = "Schedule";
const _Scr = "Script";
const _St = "Stages";
const _T = "Tags";
const _TA = "TargetAccounts";
const _TK = "TagKeys";
const _TR = "TargetRegion";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _TRa = "TagResource";
const _TT = "TargetTags";
const _TTA = "TagsToAdd";
const _TTAL = "TagsToAddList";
const _TTL = "TargetTagList";
const _Ta = "Target";
const _Tag = "Tag";
const _Ti = "Times";
const _Ty = "Type";
const _UI = "UnshareInterval";
const _UIU = "UnshareIntervalUnit";
const _ULP = "UpdateLifecyclePolicy";
const _ULPR = "UpdateLifecyclePolicyRequest";
const _ULPRp = "UpdateLifecyclePolicyResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _V = "Value";
const _VT = "VariableTags";
const _VTL = "VariableTagsList";
const _c = "client";
const _dPT = "defaultPolicyType";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _pI = "policyIds";
const _rT = "resourceTypes";
const _s = "state";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.dlm";
const _tK = "tagKeys";
const _tT = "targetTags";
const _tTA = "tagsToAdd";
const n0 = "com.amazonaws.dlm";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { DLMServiceException as __DLMServiceException } from "../models/DLMServiceException";
import {
  InternalServerException as __InternalServerException,
  InvalidRequestException as __InvalidRequestException,
  LimitExceededException as __LimitExceededException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/errors";

/* eslint no-var: 0 */

export var Action: StaticStructureSchema = [3, n0, _A, 0, [_N, _CRC], [0, () => CrossRegionCopyActionList]];
export var ArchiveRetainRule: StaticStructureSchema = [3, n0, _ARR, 0, [_RAT], [() => RetentionArchiveTier]];
export var ArchiveRule: StaticStructureSchema = [3, n0, _AR, 0, [_RR], [() => ArchiveRetainRule]];
export var CreateLifecyclePolicyRequest: StaticStructureSchema = [
  3,
  n0,
  _CLPR,
  0,
  [_ERA, _D, _S, _PD, _T, _DP, _CI, _RI, _CT, _ED, _CRCT, _E],
  [0, 0, 0, () => PolicyDetails, 128 | 0, 0, 1, 1, 2, 2, () => CrossRegionCopyTargetList, () => Exclusions],
];
export var CreateLifecyclePolicyResponse: StaticStructureSchema = [3, n0, _CLPRr, 0, [_PI], [0]];
export var CreateRule: StaticStructureSchema = [
  3,
  n0,
  _CR,
  0,
  [_L, _I, _IU, _Ti, _CE, _Sc],
  [0, 1, 0, 64 | 0, 0, () => ScriptsList],
];
export var CrossRegionCopyAction: StaticStructureSchema = [
  3,
  n0,
  _CRCA,
  0,
  [_Ta, _EC, _RR],
  [0, () => EncryptionConfiguration, () => CrossRegionCopyRetainRule],
];
export var CrossRegionCopyDeprecateRule: StaticStructureSchema = [3, n0, _CRCDR, 0, [_I, _IU], [1, 0]];
export var CrossRegionCopyRetainRule: StaticStructureSchema = [3, n0, _CRCRR, 0, [_I, _IU], [1, 0]];
export var CrossRegionCopyRule: StaticStructureSchema = [
  3,
  n0,
  _CRCR,
  0,
  [_TR, _Ta, _En, _CA, _CT, _RR, _DR],
  [0, 0, 2, 0, 2, () => CrossRegionCopyRetainRule, () => CrossRegionCopyDeprecateRule],
];
export var CrossRegionCopyTarget: StaticStructureSchema = [3, n0, _CRCTr, 0, [_TR], [0]];
export var DeleteLifecyclePolicyRequest: StaticStructureSchema = [3, n0, _DLPR, 0, [_PI], [[0, 1]]];
export var DeleteLifecyclePolicyResponse: StaticStructureSchema = [3, n0, _DLPRe, 0, [], []];
export var DeprecateRule: StaticStructureSchema = [3, n0, _DR, 0, [_C, _I, _IU], [1, 1, 0]];
export var EncryptionConfiguration: StaticStructureSchema = [3, n0, _EC, 0, [_En, _CA], [2, 0]];
export var EventParameters: StaticStructureSchema = [3, n0, _EP, 0, [_ET, _SO, _DRe], [0, 64 | 0, 0]];
export var EventSource: StaticStructureSchema = [3, n0, _ES, 0, [_Ty, _P], [0, () => EventParameters]];
export var Exclusions: StaticStructureSchema = [3, n0, _E, 0, [_EBV, _EVT, _ETx], [2, 64 | 0, () => ExcludeTagsList]];
export var FastRestoreRule: StaticStructureSchema = [3, n0, _FRR, 0, [_C, _I, _IU, _AZ], [1, 1, 0, 64 | 0]];
export var GetLifecyclePoliciesRequest: StaticStructureSchema = [
  3,
  n0,
  _GLPR,
  0,
  [_PIo, _S, _RT, _TT, _TTA, _DPT],
  [
    [
      64 | 0,
      {
        [_hQ]: _pI,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _rT,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _tT,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _tTA,
      },
    ],
    [
      0,
      {
        [_hQ]: _dPT,
      },
    ],
  ],
];
export var GetLifecyclePoliciesResponse: StaticStructureSchema = [
  3,
  n0,
  _GLPRe,
  0,
  [_Po],
  [() => LifecyclePolicySummaryList],
];
export var GetLifecyclePolicyRequest: StaticStructureSchema = [3, n0, _GLPRet, 0, [_PI], [[0, 1]]];
export var GetLifecyclePolicyResponse: StaticStructureSchema = [3, n0, _GLPReti, 0, [_Pol], [() => LifecyclePolicy]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_M, _Co],
  [0, 0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var InvalidRequestException: StaticErrorSchema = [
  -3,
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _Co, _RP, _MEP],
  [0, 0, 64 | 0, 64 | 0],
];
TypeRegistry.for(n0).registerError(InvalidRequestException, __InvalidRequestException);

export var LifecyclePolicy: StaticStructureSchema = [
  3,
  n0,
  _LP,
  0,
  [_PI, _D, _S, _SM, _ERA, _DC, _DM, _PD, _T, _PA, _DP],
  [0, 0, 0, 0, 0, 5, 5, () => PolicyDetails, 128 | 0, 0, 2],
];
export var LifecyclePolicySummary: StaticStructureSchema = [
  3,
  n0,
  _LPS,
  0,
  [_PI, _D, _S, _T, _PT, _DP],
  [0, 0, 0, 128 | 0, 0, 2],
];
export var LimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M, _Co, _RTe],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(LimitExceededException, __LimitExceededException);

export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RA], [[0, 1]]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_T], [128 | 0]];
export var _Parameters: StaticStructureSchema = [
  3,
  n0,
  _P,
  0,
  [_EBVx, _NR, _EDVT],
  [2, 2, () => ExcludeDataVolumeTagList],
];
export var PolicyDetails: StaticStructureSchema = [
  3,
  n0,
  _PD,
  0,
  [_PT, _RT, _RL, _TT, _Sch, _P, _ES, _Ac, _PL, _RTe, _CI, _RI, _CT, _CRCT, _ED, _E],
  [
    0,
    64 | 0,
    64 | 0,
    () => TargetTagList,
    () => ScheduleList,
    () => _Parameters,
    () => EventSource,
    () => ActionList,
    0,
    0,
    1,
    1,
    2,
    () => CrossRegionCopyTargetList,
    2,
    () => Exclusions,
  ],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _Co, _RTe, _RIe],
  [0, 0, 0, 64 | 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var RetainRule: StaticStructureSchema = [3, n0, _RR, 0, [_C, _I, _IU], [1, 1, 0]];
export var RetentionArchiveTier: StaticStructureSchema = [3, n0, _RAT, 0, [_C, _I, _IU], [1, 1, 0]];
export var Schedule: StaticStructureSchema = [
  3,
  n0,
  _Sche,
  0,
  [_N, _CT, _TTA, _VT, _CR, _RR, _FRR, _CRCRr, _SR, _DR, _AR],
  [
    0,
    2,
    () => TagsToAddList,
    () => VariableTagsList,
    () => CreateRule,
    () => RetainRule,
    () => FastRestoreRule,
    () => CrossRegionCopyRules,
    () => ShareRules,
    () => DeprecateRule,
    () => ArchiveRule,
  ],
];
export var Script: StaticStructureSchema = [
  3,
  n0,
  _Scr,
  0,
  [_St, _EHS, _EH, _EOOSF, _ETxe, _MRC],
  [64 | 0, 0, 0, 2, 1, 1],
];
export var ShareRule: StaticStructureSchema = [3, n0, _SRh, 0, [_TA, _UI, _UIU], [64 | 0, 1, 0]];
export var Tag: StaticStructureSchema = [3, n0, _Tag, 0, [_K, _V], [0, 0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_RA, _T], [[0, 1], 128 | 0]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var UntagResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_RA, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ],
];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateLifecyclePolicyRequest: StaticStructureSchema = [
  3,
  n0,
  _ULPR,
  0,
  [_PI, _ERA, _S, _D, _PD, _CI, _RI, _CT, _ED, _CRCT, _E],
  [[0, 1], 0, 0, 0, () => PolicyDetails, 1, 1, 2, 2, () => CrossRegionCopyTargetList, () => Exclusions],
];
export var UpdateLifecyclePolicyResponse: StaticStructureSchema = [3, n0, _ULPRp, 0, [], []];
export var __Unit = "unit" as const;

export var DLMServiceException: StaticErrorSchema = [-3, _sm, "DLMServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(DLMServiceException, __DLMServiceException);

export var ActionList: StaticListSchema = [1, n0, _AL, 0, () => Action];
export var AvailabilityZoneList = 64 | 0;

export var CrossRegionCopyActionList: StaticListSchema = [1, n0, _CRCAL, 0, () => CrossRegionCopyAction];
export var CrossRegionCopyRules: StaticListSchema = [1, n0, _CRCRr, 0, () => CrossRegionCopyRule];
export var CrossRegionCopyTargetList: StaticListSchema = [1, n0, _CRCTL, 0, () => CrossRegionCopyTarget];
export var ExcludeDataVolumeTagList: StaticListSchema = [1, n0, _EDVTL, 0, () => Tag];
export var ExcludeTagsList: StaticListSchema = [1, n0, _ETL, 0, () => Tag];
export var ExcludeVolumeTypesList = 64 | 0;

export var LifecyclePolicySummaryList: StaticListSchema = [1, n0, _LPSL, 0, () => LifecyclePolicySummary];
export var ParameterList = 64 | 0;

export var PolicyIdList = 64 | 0;

export var ResourceLocationList = 64 | 0;

export var ResourceTypeValuesList = 64 | 0;

export var ScheduleList: StaticListSchema = [1, n0, _SL, 0, () => Schedule];
export var ScriptsList: StaticListSchema = [1, n0, _SLc, 0, () => Script];
export var ShareRules: StaticListSchema = [1, n0, _SR, 0, () => ShareRule];
export var ShareTargetAccountList = 64 | 0;

export var SnapshotOwnerList = 64 | 0;

export var StagesList = 64 | 0;

export var TagKeyList = 64 | 0;

export var TagsToAddFilterList = 64 | 0;

export var TagsToAddList: StaticListSchema = [1, n0, _TTAL, 0, () => Tag];
export var TargetTagList: StaticListSchema = [1, n0, _TTL, 0, () => Tag];
export var TargetTagsFilterList = 64 | 0;

export var TimesList = 64 | 0;

export var VariableTagsList: StaticListSchema = [1, n0, _VTL, 0, () => Tag];
export var TagMap = 128 | 0;

export var CreateLifecyclePolicy: StaticOperationSchema = [
  9,
  n0,
  _CLP,
  {
    [_h]: ["POST", "/policies", 200],
  },
  () => CreateLifecyclePolicyRequest,
  () => CreateLifecyclePolicyResponse,
];
export var DeleteLifecyclePolicy: StaticOperationSchema = [
  9,
  n0,
  _DLP,
  {
    [_h]: ["DELETE", "/policies/{PolicyId}", 200],
  },
  () => DeleteLifecyclePolicyRequest,
  () => DeleteLifecyclePolicyResponse,
];
export var GetLifecyclePolicies: StaticOperationSchema = [
  9,
  n0,
  _GLP,
  {
    [_h]: ["GET", "/policies", 200],
  },
  () => GetLifecyclePoliciesRequest,
  () => GetLifecyclePoliciesResponse,
];
export var GetLifecyclePolicy: StaticOperationSchema = [
  9,
  n0,
  _GLPe,
  {
    [_h]: ["GET", "/policies/{PolicyId}", 200],
  },
  () => GetLifecyclePolicyRequest,
  () => GetLifecyclePolicyResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TRa,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
export var UpdateLifecyclePolicy: StaticOperationSchema = [
  9,
  n0,
  _ULP,
  {
    [_h]: ["PATCH", "/policies/{PolicyId}", 200],
  },
  () => UpdateLifecyclePolicyRequest,
  () => UpdateLifecyclePolicyResponse,
];
