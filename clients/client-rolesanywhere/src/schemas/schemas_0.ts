const _ADE = "AccessDeniedException";
const _AM = "AttributeMapping";
const _AMt = "AttributeMappings";
const _CD = "CrlDetail";
const _CDR = "CrlDetailResponse";
const _CDr = "CrlDetails";
const _CP = "CreateProfile";
const _CPR = "CreateProfileRequest";
const _CS = "CredentialSummary";
const _CSr = "CredentialSummaries";
const _CTA = "CreateTrustAnchor";
const _CTAR = "CreateTrustAnchorRequest";
const _DAM = "DeleteAttributeMapping";
const _DAMR = "DeleteAttributeMappingRequest";
const _DAMRe = "DeleteAttributeMappingResponse";
const _DC = "DeleteCrl";
const _DCi = "DisableCrl";
const _DP = "DeleteProfile";
const _DPi = "DisableProfile";
const _DTA = "DeleteTrustAnchor";
const _DTAi = "DisableTrustAnchor";
const _EC = "EnableCrl";
const _EP = "EnableProfile";
const _ETA = "EnableTrustAnchor";
const _GC = "GetCrl";
const _GP = "GetProfile";
const _GS = "GetSubject";
const _GTA = "GetTrustAnchor";
const _IC = "ImportCrl";
const _ICR = "ImportCrlRequest";
const _IP = "InstanceProperty";
const _IPn = "InstanceProperties";
const _LC = "ListCrls";
const _LCR = "ListCrlsResponse";
const _LP = "ListProfiles";
const _LPR = "ListProfilesResponse";
const _LR = "ListRequest";
const _LS = "ListSubjects";
const _LSR = "ListSubjectsResponse";
const _LTA = "ListTrustAnchors";
const _LTAR = "ListTrustAnchorsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _MR = "MappingRule";
const _MRa = "MappingRules";
const _NS = "NotificationSetting";
const _NSD = "NotificationSettingDetail";
const _NSDo = "NotificationSettingDetails";
const _NSK = "NotificationSettingKey";
const _NSKo = "NotificationSettingKeys";
const _NSo = "NotificationSettings";
const _PAM = "PutAttributeMapping";
const _PAMR = "PutAttributeMappingRequest";
const _PAMRu = "PutAttributeMappingResponse";
const _PD = "ProfileDetail";
const _PDR = "ProfileDetailResponse";
const _PDr = "ProfileDetails";
const _PNS = "PutNotificationSettings";
const _PNSR = "PutNotificationSettingsRequest";
const _PNSRu = "PutNotificationSettingsResponse";
const _RNFE = "ResourceNotFoundException";
const _RNS = "ResetNotificationSettings";
const _RNSR = "ResetNotificationSettingsRequest";
const _RNSRe = "ResetNotificationSettingsResponse";
const _S = "Source";
const _SCR = "ScalarCrlRequest";
const _SD = "SubjectDetail";
const _SDR = "SubjectDetailResponse";
const _SDo = "SourceData";
const _SPR = "ScalarProfileRequest";
const _SS = "SubjectSummary";
const _SSR = "ScalarSubjectRequest";
const _SSu = "SubjectSummaries";
const _STAR = "ScalarTrustAnchorRequest";
const _T = "Tag";
const _TAD = "TrustAnchorDetail";
const _TADR = "TrustAnchorDetailResponse";
const _TADr = "TrustAnchorDetails";
const _TK = "TagKey";
const _TKL = "TagKeyList";
const _TL = "TagList";
const _TMTE = "TooManyTagsException";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _TV = "TagValue";
const _UC = "UpdateCrl";
const _UCR = "UpdateCrlRequest";
const _UP = "UpdateProfile";
const _UPR = "UpdateProfileRequest";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _UTA = "UpdateTrustAnchor";
const _UTAR = "UpdateTrustAnchorRequest";
const _VE = "ValidationException";
const _aM = "attributeMappings";
const _aPA = "acmPcaArn";
const _aRSN = "acceptRoleSessionName";
const _c = "client";
const _cA = "crlArn";
const _cAr = "createdAt";
const _cB = "configuredBy";
const _cBr = "createdBy";
const _cD = "crlData";
const _cF = "certificateField";
const _cI = "crlId";
const _ch = "channel";
const _cr = "crl";
const _cre = "credentials";
const _crl = "crls";
const _dS = "durationSeconds";
const _e = "error";
const _en = "enabled";
const _ev = "event";
const _f = "failed";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _i = "issuer";
const _iP = "instanceProperties";
const _k = "key";
const _lSA = "lastSeenAt";
const _m = "message";
const _mPA = "managedPolicyArns";
const _mR = "mappingRules";
const _n = "name";
const _nS = "notificationSettings";
const _nSK = "notificationSettingKeys";
const _nT = "nextToken";
const _p = "profile";
const _pA = "profileArn";
const _pI = "profileId";
const _pS = "pageSize";
const _pr = "properties";
const _pro = "profiles";
const _rA = "roleArns";
const _rAe = "resourceArn";
const _rIP = "requireInstanceProperties";
const _s = "source";
const _sA = "seenAt";
const _sAu = "subjectArn";
const _sD = "sourceData";
const _sI = "subjectId";
const _sN = "serialNumber";
const _sP = "sessionPolicy";
const _sT = "sourceType";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.rolesanywhere";
const _sp = "specifiers";
const _spe = "specifier";
const _su = "subjects";
const _sub = "subject";
const _t = "tags";
const _tA = "trustAnchors";
const _tAA = "trustAnchorArn";
const _tAI = "trustAnchorId";
const _tAr = "trustAnchor";
const _tK = "tagKeys";
const _th = "threshold";
const _uA = "updatedAt";
const _v = "value";
const _xCD = "x509CertificateData";
const _xS = "x509Subject";
const n0 = "com.amazonaws.rolesanywhere";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException,
  ResourceNotFoundException,
  TooManyTagsException,
  ValidationException,
} from "../models/errors";
import { RolesAnywhereServiceException } from "../models/RolesAnywhereServiceException";

/* eslint no-var: 0 */
var TagKey: StaticSimpleSchema = [0, n0, _TK, 8, 0];
var TagValue: StaticSimpleSchema = [0, n0, _TV, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_m], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var AttributeMapping$: StaticStructureSchema = [3, n0, _AM, 0, [_cF, _mR], [0, () => MappingRules]];
export var CreateProfileRequest$: StaticStructureSchema = [
  3,
  n0,
  _CPR,
  0,
  [_n, _rIP, _sP, _rA, _mPA, _dS, _en, _t, _aRSN],
  [0, 2, 0, 64 | 0, 64 | 0, 1, 2, [() => TagList, 0], 2],
];
export var CreateTrustAnchorRequest$: StaticStructureSchema = [
  3,
  n0,
  _CTAR,
  0,
  [_n, _s, _en, _t, _nS],
  [0, () => Source$, 2, [() => TagList, 0], () => NotificationSettings],
];
export var CredentialSummary$: StaticStructureSchema = [
  3,
  n0,
  _CS,
  0,
  [_sA, _sN, _i, _en, _xCD, _f],
  [5, 0, 0, 2, 0, 2],
];
export var CrlDetail$: StaticStructureSchema = [
  3,
  n0,
  _CD,
  0,
  [_cI, _cA, _n, _en, _cD, _tAA, _cAr, _uA],
  [0, 0, 0, 2, 21, 0, 5, 5],
];
export var CrlDetailResponse$: StaticStructureSchema = [3, n0, _CDR, 0, [_cr], [() => CrlDetail$]];
export var DeleteAttributeMappingRequest$: StaticStructureSchema = [
  3,
  n0,
  _DAMR,
  0,
  [_pI, _cF, _sp],
  [
    [0, 1],
    [0, { [_hQ]: _cF }],
    [64 | 0, { [_hQ]: _sp }],
  ],
];
export var DeleteAttributeMappingResponse$: StaticStructureSchema = [3, n0, _DAMRe, 0, [_p], [() => ProfileDetail$]];
export var ImportCrlRequest$: StaticStructureSchema = [
  3,
  n0,
  _ICR,
  0,
  [_n, _cD, _en, _t, _tAA],
  [0, 21, 2, [() => TagList, 0], 0],
];
export var InstanceProperty$: StaticStructureSchema = [3, n0, _IP, 0, [_sA, _pr, _f], [5, 128 | 0, 2]];
export var ListCrlsResponse$: StaticStructureSchema = [3, n0, _LCR, 0, [_nT, _crl], [0, () => CrlDetails]];
export var ListProfilesResponse$: StaticStructureSchema = [3, n0, _LPR, 0, [_nT, _pro], [0, () => ProfileDetails]];
export var ListRequest$: StaticStructureSchema = [
  3,
  n0,
  _LR,
  0,
  [_nT, _pS],
  [
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _pS }],
  ],
];
export var ListSubjectsResponse$: StaticStructureSchema = [3, n0, _LSR, 0, [_su, _nT], [() => SubjectSummaries, 0]];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR, 0, [_rAe], [[0, { [_hQ]: _rAe }]]];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_t], [[() => TagList, 0]]];
export var ListTrustAnchorsResponse$: StaticStructureSchema = [
  3,
  n0,
  _LTAR,
  0,
  [_nT, _tA],
  [0, () => TrustAnchorDetails],
];
export var MappingRule$: StaticStructureSchema = [3, n0, _MR, 0, [_spe], [0]];
export var NotificationSetting$: StaticStructureSchema = [3, n0, _NS, 0, [_en, _ev, _th, _ch], [2, 0, 1, 0]];
export var NotificationSettingDetail$: StaticStructureSchema = [
  3,
  n0,
  _NSD,
  0,
  [_en, _ev, _th, _ch, _cB],
  [2, 0, 1, 0, 0],
];
export var NotificationSettingKey$: StaticStructureSchema = [3, n0, _NSK, 0, [_ev, _ch], [0, 0]];
export var ProfileDetail$: StaticStructureSchema = [
  3,
  n0,
  _PD,
  0,
  [_pI, _pA, _n, _rIP, _en, _cBr, _sP, _rA, _mPA, _cAr, _uA, _dS, _aRSN, _aM],
  [0, 0, 0, 2, 2, 0, 0, 64 | 0, 64 | 0, 5, 5, 1, 2, () => AttributeMappings],
];
export var ProfileDetailResponse$: StaticStructureSchema = [3, n0, _PDR, 0, [_p], [() => ProfileDetail$]];
export var PutAttributeMappingRequest$: StaticStructureSchema = [
  3,
  n0,
  _PAMR,
  0,
  [_pI, _cF, _mR],
  [[0, 1], 0, () => MappingRules],
];
export var PutAttributeMappingResponse$: StaticStructureSchema = [3, n0, _PAMRu, 0, [_p], [() => ProfileDetail$]];
export var PutNotificationSettingsRequest$: StaticStructureSchema = [
  3,
  n0,
  _PNSR,
  0,
  [_tAI, _nS],
  [0, () => NotificationSettings],
];
export var PutNotificationSettingsResponse$: StaticStructureSchema = [
  3,
  n0,
  _PNSRu,
  0,
  [_tAr],
  [() => TrustAnchorDetail$],
];
export var ResetNotificationSettingsRequest$: StaticStructureSchema = [
  3,
  n0,
  _RNSR,
  0,
  [_tAI, _nSK],
  [0, () => NotificationSettingKeys],
];
export var ResetNotificationSettingsResponse$: StaticStructureSchema = [
  3,
  n0,
  _RNSRe,
  0,
  [_tAr],
  [() => TrustAnchorDetail$],
];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ScalarCrlRequest$: StaticStructureSchema = [3, n0, _SCR, 0, [_cI], [[0, 1]]];
export var ScalarProfileRequest$: StaticStructureSchema = [3, n0, _SPR, 0, [_pI], [[0, 1]]];
export var ScalarSubjectRequest$: StaticStructureSchema = [3, n0, _SSR, 0, [_sI], [[0, 1]]];
export var ScalarTrustAnchorRequest$: StaticStructureSchema = [3, n0, _STAR, 0, [_tAI], [[0, 1]]];
export var Source$: StaticStructureSchema = [3, n0, _S, 0, [_sT, _sD], [0, () => SourceData$]];
export var SubjectDetail$: StaticStructureSchema = [
  3,
  n0,
  _SD,
  0,
  [_sAu, _sI, _en, _xS, _lSA, _cAr, _uA, _cre, _iP],
  [0, 0, 2, 0, 5, 5, 5, () => CredentialSummaries, () => InstanceProperties],
];
export var SubjectDetailResponse$: StaticStructureSchema = [3, n0, _SDR, 0, [_sub], [() => SubjectDetail$]];
export var SubjectSummary$: StaticStructureSchema = [
  3,
  n0,
  _SS,
  0,
  [_sAu, _sI, _en, _xS, _lSA, _cAr, _uA],
  [0, 0, 2, 0, 5, 5, 5],
];
export var Tag$: StaticStructureSchema = [
  3,
  n0,
  _T,
  0,
  [_k, _v],
  [
    [() => TagKey, 0],
    [() => TagValue, 0],
  ],
];
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR, 0, [_rAe, _t], [0, [() => TagList, 0]]];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var TooManyTagsException$: StaticErrorSchema = [-3, n0, _TMTE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
TypeRegistry.for(n0).registerError(TooManyTagsException$, TooManyTagsException);
export var TrustAnchorDetail$: StaticStructureSchema = [
  3,
  n0,
  _TAD,
  0,
  [_tAI, _tAA, _n, _s, _en, _cAr, _uA, _nS],
  [0, 0, 0, () => Source$, 2, 5, 5, () => NotificationSettingDetails],
];
export var TrustAnchorDetailResponse$: StaticStructureSchema = [3, n0, _TADR, 0, [_tAr], [() => TrustAnchorDetail$]];
export var UntagResourceRequest$: StaticStructureSchema = [3, n0, _URR, 0, [_rAe, _tK], [0, [() => TagKeyList, 0]]];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateCrlRequest$: StaticStructureSchema = [3, n0, _UCR, 0, [_cI, _n, _cD], [[0, 1], 0, 21]];
export var UpdateProfileRequest$: StaticStructureSchema = [
  3,
  n0,
  _UPR,
  0,
  [_pI, _n, _sP, _rA, _mPA, _dS, _aRSN],
  [[0, 1], 0, 0, 64 | 0, 64 | 0, 1, 2],
];
export var UpdateTrustAnchorRequest$: StaticStructureSchema = [
  3,
  n0,
  _UTAR,
  0,
  [_tAI, _n, _s],
  [[0, 1], 0, () => Source$],
];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var RolesAnywhereServiceException$: StaticErrorSchema = [-3, _sm, "RolesAnywhereServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(RolesAnywhereServiceException$, RolesAnywhereServiceException);
var AttributeMappings: StaticListSchema = [1, n0, _AMt, 0, () => AttributeMapping$];
var CredentialSummaries: StaticListSchema = [1, n0, _CSr, 0, () => CredentialSummary$];
var CrlDetails: StaticListSchema = [1, n0, _CDr, 0, () => CrlDetail$];
var InstanceProperties: StaticListSchema = [1, n0, _IPn, 0, () => InstanceProperty$];
var ManagedPolicyList = 64 | 0;
var MappingRules: StaticListSchema = [1, n0, _MRa, 0, () => MappingRule$];
var NotificationSettingDetails: StaticListSchema = [1, n0, _NSDo, 0, () => NotificationSettingDetail$];
var NotificationSettingKeys: StaticListSchema = [1, n0, _NSKo, 0, () => NotificationSettingKey$];
var NotificationSettings: StaticListSchema = [1, n0, _NSo, 0, () => NotificationSetting$];
var ProfileDetails: StaticListSchema = [1, n0, _PDr, 0, () => ProfileDetail$];
var RoleArnList = 64 | 0;
var SpecifierList = 64 | 0;
var SubjectSummaries: StaticListSchema = [1, n0, _SSu, 0, () => SubjectSummary$];
var TagKeyList: StaticListSchema = [1, n0, _TKL, 0, [() => TagKey, 0]];
var TagList: StaticListSchema = [1, n0, _TL, 0, [() => Tag$, 0]];
var TrustAnchorDetails: StaticListSchema = [1, n0, _TADr, 0, () => TrustAnchorDetail$];
var InstancePropertyMap = 128 | 0;
export var SourceData$: StaticStructureSchema = [3, n0, _SDo, 0, [_xCD, _aPA], [0, 0]];
export var CreateProfile$: StaticOperationSchema = [
  9,
  n0,
  _CP,
  { [_h]: ["POST", "/profiles", 201] },
  () => CreateProfileRequest$,
  () => ProfileDetailResponse$,
];
export var CreateTrustAnchor$: StaticOperationSchema = [
  9,
  n0,
  _CTA,
  { [_h]: ["POST", "/trustanchors", 201] },
  () => CreateTrustAnchorRequest$,
  () => TrustAnchorDetailResponse$,
];
export var DeleteAttributeMapping$: StaticOperationSchema = [
  9,
  n0,
  _DAM,
  { [_h]: ["DELETE", "/profiles/{profileId}/mappings", 200] },
  () => DeleteAttributeMappingRequest$,
  () => DeleteAttributeMappingResponse$,
];
export var DeleteCrl$: StaticOperationSchema = [
  9,
  n0,
  _DC,
  { [_h]: ["DELETE", "/crl/{crlId}", 200] },
  () => ScalarCrlRequest$,
  () => CrlDetailResponse$,
];
export var DeleteProfile$: StaticOperationSchema = [
  9,
  n0,
  _DP,
  { [_h]: ["DELETE", "/profile/{profileId}", 200] },
  () => ScalarProfileRequest$,
  () => ProfileDetailResponse$,
];
export var DeleteTrustAnchor$: StaticOperationSchema = [
  9,
  n0,
  _DTA,
  { [_h]: ["DELETE", "/trustanchor/{trustAnchorId}", 200] },
  () => ScalarTrustAnchorRequest$,
  () => TrustAnchorDetailResponse$,
];
export var DisableCrl$: StaticOperationSchema = [
  9,
  n0,
  _DCi,
  { [_h]: ["POST", "/crl/{crlId}/disable", 200] },
  () => ScalarCrlRequest$,
  () => CrlDetailResponse$,
];
export var DisableProfile$: StaticOperationSchema = [
  9,
  n0,
  _DPi,
  { [_h]: ["POST", "/profile/{profileId}/disable", 200] },
  () => ScalarProfileRequest$,
  () => ProfileDetailResponse$,
];
export var DisableTrustAnchor$: StaticOperationSchema = [
  9,
  n0,
  _DTAi,
  { [_h]: ["POST", "/trustanchor/{trustAnchorId}/disable", 200] },
  () => ScalarTrustAnchorRequest$,
  () => TrustAnchorDetailResponse$,
];
export var EnableCrl$: StaticOperationSchema = [
  9,
  n0,
  _EC,
  { [_h]: ["POST", "/crl/{crlId}/enable", 200] },
  () => ScalarCrlRequest$,
  () => CrlDetailResponse$,
];
export var EnableProfile$: StaticOperationSchema = [
  9,
  n0,
  _EP,
  { [_h]: ["POST", "/profile/{profileId}/enable", 200] },
  () => ScalarProfileRequest$,
  () => ProfileDetailResponse$,
];
export var EnableTrustAnchor$: StaticOperationSchema = [
  9,
  n0,
  _ETA,
  { [_h]: ["POST", "/trustanchor/{trustAnchorId}/enable", 200] },
  () => ScalarTrustAnchorRequest$,
  () => TrustAnchorDetailResponse$,
];
export var GetCrl$: StaticOperationSchema = [
  9,
  n0,
  _GC,
  { [_h]: ["GET", "/crl/{crlId}", 200] },
  () => ScalarCrlRequest$,
  () => CrlDetailResponse$,
];
export var GetProfile$: StaticOperationSchema = [
  9,
  n0,
  _GP,
  { [_h]: ["GET", "/profile/{profileId}", 200] },
  () => ScalarProfileRequest$,
  () => ProfileDetailResponse$,
];
export var GetSubject$: StaticOperationSchema = [
  9,
  n0,
  _GS,
  { [_h]: ["GET", "/subject/{subjectId}", 200] },
  () => ScalarSubjectRequest$,
  () => SubjectDetailResponse$,
];
export var GetTrustAnchor$: StaticOperationSchema = [
  9,
  n0,
  _GTA,
  { [_h]: ["GET", "/trustanchor/{trustAnchorId}", 200] },
  () => ScalarTrustAnchorRequest$,
  () => TrustAnchorDetailResponse$,
];
export var ImportCrl$: StaticOperationSchema = [
  9,
  n0,
  _IC,
  { [_h]: ["POST", "/crls", 201] },
  () => ImportCrlRequest$,
  () => CrlDetailResponse$,
];
export var ListCrls$: StaticOperationSchema = [
  9,
  n0,
  _LC,
  { [_h]: ["GET", "/crls", 200] },
  () => ListRequest$,
  () => ListCrlsResponse$,
];
export var ListProfiles$: StaticOperationSchema = [
  9,
  n0,
  _LP,
  { [_h]: ["GET", "/profiles", 200] },
  () => ListRequest$,
  () => ListProfilesResponse$,
];
export var ListSubjects$: StaticOperationSchema = [
  9,
  n0,
  _LS,
  { [_h]: ["GET", "/subjects", 200] },
  () => ListRequest$,
  () => ListSubjectsResponse$,
];
export var ListTagsForResource$: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["GET", "/ListTagsForResource", 200] },
  () => ListTagsForResourceRequest$,
  () => ListTagsForResourceResponse$,
];
export var ListTrustAnchors$: StaticOperationSchema = [
  9,
  n0,
  _LTA,
  { [_h]: ["GET", "/trustanchors", 200] },
  () => ListRequest$,
  () => ListTrustAnchorsResponse$,
];
export var PutAttributeMapping$: StaticOperationSchema = [
  9,
  n0,
  _PAM,
  { [_h]: ["PUT", "/profiles/{profileId}/mappings", 200] },
  () => PutAttributeMappingRequest$,
  () => PutAttributeMappingResponse$,
];
export var PutNotificationSettings$: StaticOperationSchema = [
  9,
  n0,
  _PNS,
  { [_h]: ["PATCH", "/put-notifications-settings", 200] },
  () => PutNotificationSettingsRequest$,
  () => PutNotificationSettingsResponse$,
];
export var ResetNotificationSettings$: StaticOperationSchema = [
  9,
  n0,
  _RNS,
  { [_h]: ["PATCH", "/reset-notifications-settings", 200] },
  () => ResetNotificationSettingsRequest$,
  () => ResetNotificationSettingsResponse$,
];
export var TagResource$: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["POST", "/TagResource", 201] },
  () => TagResourceRequest$,
  () => TagResourceResponse$,
];
export var UntagResource$: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_h]: ["POST", "/UntagResource", 200] },
  () => UntagResourceRequest$,
  () => UntagResourceResponse$,
];
export var UpdateCrl$: StaticOperationSchema = [
  9,
  n0,
  _UC,
  { [_h]: ["PATCH", "/crl/{crlId}", 200] },
  () => UpdateCrlRequest$,
  () => CrlDetailResponse$,
];
export var UpdateProfile$: StaticOperationSchema = [
  9,
  n0,
  _UP,
  { [_h]: ["PATCH", "/profile/{profileId}", 200] },
  () => UpdateProfileRequest$,
  () => ProfileDetailResponse$,
];
export var UpdateTrustAnchor$: StaticOperationSchema = [
  9,
  n0,
  _UTA,
  { [_h]: ["PATCH", "/trustanchor/{trustAnchorId}", 200] },
  () => UpdateTrustAnchorRequest$,
  () => TrustAnchorDetailResponse$,
];
