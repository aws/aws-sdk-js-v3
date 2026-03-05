const _AD = "ArtifactDetails";
const _ADE = "AccessDeniedException";
const _AS = "ActivateSubscription";
const _ASI = "ActivateSubscriptionInput";
const _ASO = "ActivateSubscriptionOutput";
const _CD = "CreateDomain";
const _CDI = "CreateDomainInput";
const _CDO = "CreateDomainOutput";
const _CE = "ConflictException";
const _CNGR = "ClinicalNoteGenerationResult";
const _CNGS = "ClinicalNoteGenerationSettings";
const _CNGSR = "ClinicalNoteGenerationSettingsResponse";
const _CS = "CreateSubscription";
const _CSI = "CreateSubscriptionInput";
const _CSO = "CreateSubscriptionOutput";
const _CT = "CustomTemplate";
const _CTR = "CustomTemplateResponse";
const _CWAC = "CreateWebAppConfiguration";
const _DD = "DeleteDomain";
const _DDI = "DeleteDomainInput";
const _DDO = "DeleteDomainOutput";
const _DS = "DomainSummary";
const _DSI = "DeactivateSubscriptionInput";
const _DSL = "DomainSummaryList";
const _DSO = "DeactivateSubscriptionOutput";
const _DSe = "DeactivateSubscription";
const _EC = "EncounterContext";
const _ECn = "EncryptionContext";
const _FHIRS = "FHIRServer";
const _GD = "GetDomain";
const _GDI = "GetDomainInput";
const _GDO = "GetDomainOutput";
const _GMSLS = "GetMedicalScribeListeningSession";
const _GMSLSI = "GetMedicalScribeListeningSessionInput";
const _GMSLSO = "GetMedicalScribeListeningSessionOutput";
const _GPIJ = "GetPatientInsightsJob";
const _GPIJR = "GetPatientInsightsJobRequest";
const _GPIJRe = "GetPatientInsightsJobResponse";
const _GS = "GetSubscription";
const _GSI = "GetSubscriptionInput";
const _GSO = "GetSubscriptionOutput";
const _IC = "InsightsContext";
const _IDC = "InputDataConfig";
const _IO = "InsightsOutput";
const _ISE = "InternalServerException";
const _LD = "ListDomains";
const _LDI = "ListDomainsInput";
const _LDO = "ListDomainsOutput";
const _LS = "ListSubscriptions";
const _LSI = "ListSubscriptionsInput";
const _LSO = "ListSubscriptionsOutput";
const _LTFR = "ListTagsForResource";
const _LTFRI = "ListTagsForResourceInput";
const _LTFRO = "ListTagsForResourceOutput";
const _MSAE = "MedicalScribeAudioEvent";
const _MSCD = "MedicalScribeChannelDefinition";
const _MSCDe = "MedicalScribeChannelDefinitions";
const _MSCE = "MedicalScribeConfigurationEvent";
const _MSIS = "MedicalScribeInputStream";
const _MSLSD = "MedicalScribeListeningSessionDetails";
const _MSOS = "MedicalScribeOutputStream";
const _MSPSAR = "MedicalScribePostStreamActionsResult";
const _MSPSAS = "MedicalScribePostStreamActionSettings";
const _MSPSASR = "MedicalScribePostStreamActionSettingsResponse";
const _MSSCE = "MedicalScribeSessionControlEvent";
const _MSTE = "MedicalScribeTranscriptEvent";
const _MSTS = "MedicalScribeTranscriptSegment";
const _MT = "ManagedTemplate";
const _MTR = "ManagedTemplateResponse";
const _NTS = "NoteTemplateSettings";
const _NTSR = "NoteTemplateSettingsResponse";
const _ODC = "OutputDataConfig";
const _P = "Pronouns";
const _PIEC = "PatientInsightsEncounterContext";
const _PIPC = "PatientInsightsPatientContext";
const _RNFE = "ResourceNotFoundException";
const _SAS = "SensitiveAlphanumericString";
const _SD = "SubscriptionDescription";
const _SIDS = "SensitiveIsoDateString";
const _SL = "SubscriptionList";
const _SMS = "SensitiveMarkdownString";
const _SMSLS = "StartMedicalScribeListeningSession";
const _SMSLSI = "StartMedicalScribeListeningSessionInput";
const _SMSLSO = "StartMedicalScribeListeningSessionOutput";
const _SNES = "SensitiveNonEmptyString";
const _SPIJ = "StartPatientInsightsJob";
const _SPIJR = "StartPatientInsightsJobRequest";
const _SPIJRt = "StartPatientInsightsJobResponse";
const _SQEE = "ServiceQuotaExceededException";
const _SS = "S3Source";
const _SSo = "S3Sources";
const _TE = "ThrottlingException";
const _TI = "TemplateInstructions";
const _TR = "TagResource";
const _TRI = "TagResourceInput";
const _TSI = "TemplateSectionInstruction";
const _UC = "UserContext";
const _UR = "UntagResource";
const _URI = "UntagResourceInput";
const _VE = "ValidationException";
const _WAC = "WebAppConfiguration";
const _a = "arn";
const _aA = "activatedAt";
const _aBO = "audioBeginOffset";
const _aC = "audioChunk";
const _aE = "audioEvent";
const _aEO = "audioEndOffset";
const _aVSR = "afterVisitSummaryResult";
const _c = "client";
const _cA = "createdAt";
const _cD = "channelDefinitions";
const _cE = "configurationEvent";
const _cI = "channelId";
const _cNGR = "clinicalNoteGenerationResult";
const _cNGS = "clinicalNoteGenerationSettings";
const _cT = "creationTime";
const _cTl = "clientToken";
const _cTu = "customTemplate";
const _co = "content";
const _d = "domains";
const _dA = "deactivatedAt";
const _dI = "domainId";
const _dOB = "dateOfBirth";
const _e = "error";
const _eC = "encryptionContext";
const _eCP = "encounterContextProvided";
const _eCn = "encounterContext";
const _eR = "ehrRole";
const _eRn = "encounterReason";
const _eT = "encryptionType";
const _en = "endpoint";
const _fE = "fhirEndpoint";
const _fR = "failureReason";
const _fS = "fhirServer";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _iAI = "idcApplicationId";
const _iC = "insightsContext";
const _iDC = "inputDataConfig";
const _iFE = "internalFailureException";
const _iII = "idcInstanceId";
const _iO = "insightsOutput";
const _iP = "isPartial";
const _iR = "idcRegion";
const _iS = "inputStream";
const _iT = "insightsType";
const _jA = "jobArn";
const _jI = "jobId";
const _jS = "jobStatus";
const _kKA = "kmsKeyArn";
const _lC = "languageCode";
const _lUA = "lastUpdatedAt";
const _m = "message";
const _mE = "mediaEncoding";
const _mR = "maxResults";
const _mSLSD = "medicalScribeListeningSessionDetails";
const _mSRH = "mediaSampleRateHertz";
const _mT = "managedTemplate";
const _n = "name";
const _nR = "noteResult";
const _nT = "nextToken";
const _nTS = "noteTemplateSettings";
const _oDC = "outputDataConfig";
const _oL = "outputLocation";
const _oSU = "outputS3Uri";
const _oT = "oauthToken";
const _p = "pronouns";
const _pC = "patientContext";
const _pI = "patientId";
const _pR = "participantRole";
const _pSAR = "postStreamActionResult";
const _pSAS = "postStreamActionSettings";
const _r = "role";
const _rA = "resourceArn";
const _rI = "requestId";
const _rS = "responseStream";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.connecthealth";
const _sCE = "sessionControlEvent";
const _sCT = "streamCreationTime";
const _sD = "statusDetails";
const _sET = "streamEndTime";
const _sH = "sectionHeader";
const _sI = "subscriptionId";
const _sIe = "sessionId";
const _sIec = "sectionInstruction";
const _sIeg = "segmentId";
const _sOP = "s3OutputPath";
const _sS = "s3Sources";
const _sSt = "streamStatus";
const _se = "server";
const _sp = "specialty";
const _st = "status";
const _str = "streaming";
const _su = "subscription";
const _sub = "subscriptions";
const _t = "tags";
const _tE = "transcriptEvent";
const _tI = "templateInstructions";
const _tK = "tagKeys";
const _tR = "transcriptResult";
const _tS = "transcriptSegment";
const _tT = "templateType";
const _ty = "type";
const _u = "uri";
const _uC = "unstructuredContext";
const _uCs = "userContext";
const _uI = "userId";
const _uT = "updatedTime";
const _vE = "validationException";
const _wAC = "webAppConfiguration";
const _wASC = "webAppSetupConfiguration";
const _wAU = "webAppUrl";
const _xamdi = "x-amzn-medscribe-domain-id";
const _xamlc = "x-amzn-medscribe-language-code";
const _xamme = "x-amzn-medscribe-media-encoding";
const _xamsi = "x-amzn-medscribe-session-id";
const _xamsi_ = "x-amzn-medscribe-subscription-id";
const _xamsr = "x-amzn-medscribe-sample-rate";
const _xari = "x-amzn-request-id";
const n0 = "com.amazonaws.connecthealth";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import { ConnectHealthServiceException } from "../models/ConnectHealthServiceException";
import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var ConnectHealthServiceException$: StaticErrorSchema = [-3, _s, "ConnectHealthServiceException", 0, [], []];
_s_registry.registerError(ConnectHealthServiceException$, ConnectHealthServiceException);
const n0_registry = TypeRegistry.for(n0);
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 401 },
  [_m],
  [0]
];
n0_registry.registerError(AccessDeniedException$, AccessDeniedException);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_m],
  [0]
];
n0_registry.registerError(ConflictException$, ConflictException);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m],
  [0]
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m],
  [0]
];
n0_registry.registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_m],
  [0]
];
n0_registry.registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m],
  [0]
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
n0_registry.registerError(ValidationException$, ValidationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
var Pronouns: StaticSimpleSchema = [0, n0, _P, 8, 0];
var SensitiveAlphanumericString: StaticSimpleSchema = [0, n0, _SAS, 8, 0];
var SensitiveIsoDateString: StaticSimpleSchema = [0, n0, _SIDS, 8, 0];
var SensitiveMarkdownString: StaticSimpleSchema = [0, n0, _SMS, 8, 0];
var SensitiveNonEmptyString: StaticSimpleSchema = [0, n0, _SNES, 8, 0];
export var ActivateSubscriptionInput$: StaticStructureSchema = [3, n0, _ASI,
  0,
  [_dI, _sI],
  [[0, 1], [0, 1]], 2
];
export var ActivateSubscriptionOutput$: StaticStructureSchema = [3, n0, _ASO,
  0,
  [_su],
  [() => SubscriptionDescription$]
];
export var ArtifactDetails$: StaticStructureSchema = [3, n0, _AD,
  0,
  [_oL, _st, _fR],
  [0, 0, 0]
];
export var ClinicalNoteGenerationResult$: StaticStructureSchema = [3, n0, _CNGR,
  0,
  [_nR, _tR, _aVSR],
  [() => ArtifactDetails$, () => ArtifactDetails$, () => ArtifactDetails$]
];
export var ClinicalNoteGenerationSettings$: StaticStructureSchema = [3, n0, _CNGS,
  0,
  [_nTS],
  [[() => NoteTemplateSettings$, 0]], 1
];
export var ClinicalNoteGenerationSettingsResponse$: StaticStructureSchema = [3, n0, _CNGSR,
  0,
  [_nTS],
  [() => NoteTemplateSettingsResponse$]
];
export var CreateDomainInput$: StaticStructureSchema = [3, n0, _CDI,
  0,
  [_n, _kKA, _wASC, _t],
  [0, 0, () => CreateWebAppConfiguration$, 128 | 0], 1
];
export var CreateDomainOutput$: StaticStructureSchema = [3, n0, _CDO,
  0,
  [_dI, _a, _n, _st, _cA, _kKA, _eC, _wAU, _wAC],
  [0, 0, 0, 0, 4, 0, () => EncryptionContext$, 0, () => WebAppConfiguration$], 5
];
export var CreateSubscriptionInput$: StaticStructureSchema = [3, n0, _CSI,
  0,
  [_dI],
  [[0, 1]], 1
];
export var CreateSubscriptionOutput$: StaticStructureSchema = [3, n0, _CSO,
  0,
  [_dI, _sI, _a, _st, _cA, _lUA, _aA, _dA],
  [0, 0, 0, 0, 4, 4, 4, 4], 6
];
export var CreateWebAppConfiguration$: StaticStructureSchema = [3, n0, _CWAC,
  0,
  [_eR, _iII, _iR],
  [0, 0, 0], 3
];
export var CustomTemplate$: StaticStructureSchema = [3, n0, _CT,
  0,
  [_tT, _tI],
  [0, [() => TemplateInstructions, 0]], 2
];
export var CustomTemplateResponse$: StaticStructureSchema = [3, n0, _CTR,
  0,
  [_tT],
  [0]
];
export var DeactivateSubscriptionInput$: StaticStructureSchema = [3, n0, _DSI,
  0,
  [_dI, _sI],
  [[0, 1], [0, 1]], 2
];
export var DeactivateSubscriptionOutput$: StaticStructureSchema = [3, n0, _DSO,
  0,
  [_su],
  [() => SubscriptionDescription$]
];
export var DeleteDomainInput$: StaticStructureSchema = [3, n0, _DDI,
  0,
  [_dI],
  [[0, 1]], 1
];
export var DeleteDomainOutput$: StaticStructureSchema = [3, n0, _DDO,
  0,
  [_dI, _a, _st],
  [0, 0, 0], 3
];
export var DomainSummary$: StaticStructureSchema = [3, n0, _DS,
  0,
  [_dI, _a, _n, _st, _cA],
  [0, 0, 0, 0, 4], 5
];
export var EncounterContext$: StaticStructureSchema = [3, n0, _EC,
  0,
  [_uC],
  [[() => SensitiveMarkdownString, 0]]
];
export var EncryptionContext$: StaticStructureSchema = [3, n0, _ECn,
  0,
  [_eT, _kKA],
  [0, 0], 1
];
export var FHIRServer$: StaticStructureSchema = [3, n0, _FHIRS,
  0,
  [_fE, _oT],
  [0, [() => SensitiveNonEmptyString, 0]], 1
];
export var GetDomainInput$: StaticStructureSchema = [3, n0, _GDI,
  0,
  [_dI],
  [[0, 1]], 1
];
export var GetDomainOutput$: StaticStructureSchema = [3, n0, _GDO,
  0,
  [_dI, _a, _n, _st, _cA, _kKA, _eC, _wAU, _wAC, _t],
  [0, 0, 0, 0, 4, 0, () => EncryptionContext$, 0, () => WebAppConfiguration$, 128 | 0], 5
];
export var GetMedicalScribeListeningSessionInput$: StaticStructureSchema = [3, n0, _GMSLSI,
  0,
  [_sIe, _dI, _sI],
  [[0, 1], [0, 1], [0, 1]], 3
];
export var GetMedicalScribeListeningSessionOutput$: StaticStructureSchema = [3, n0, _GMSLSO,
  0,
  [_mSLSD],
  [() => MedicalScribeListeningSessionDetails$]
];
export var GetPatientInsightsJobRequest$: StaticStructureSchema = [3, n0, _GPIJR,
  0,
  [_dI, _jI],
  [[0, 1], [0, 1]], 2
];
export var GetPatientInsightsJobResponse$: StaticStructureSchema = [3, n0, _GPIJRe,
  0,
  [_jI, _jA, _jS, _pC, _iC, _eCn, _uCs, _iDC, _oDC, _cT, _uT, _iO, _sD],
  [0, 0, 0, [() => PatientInsightsPatientContext$, 0], () => InsightsContext$, [() => PatientInsightsEncounterContext$, 0], [() => UserContext$, 0], [() => InputDataConfig$, 0], () => OutputDataConfig$, 5, 5, () => InsightsOutput$, 0], 9
];
export var GetSubscriptionInput$: StaticStructureSchema = [3, n0, _GSI,
  0,
  [_dI, _sI],
  [[0, 1], [0, 1]], 2
];
export var GetSubscriptionOutput$: StaticStructureSchema = [3, n0, _GSO,
  0,
  [_su],
  [() => SubscriptionDescription$]
];
export var InputDataConfig$: StaticStructureSchema = [3, n0, _IDC,
  0,
  [_fS, _sS],
  [[() => FHIRServer$, 0], () => S3Sources]
];
export var InsightsContext$: StaticStructureSchema = [3, n0, _IC,
  0,
  [_iT],
  [0], 1
];
export var InsightsOutput$: StaticStructureSchema = [3, n0, _IO,
  0,
  [_u],
  [0], 1
];
export var ListDomainsInput$: StaticStructureSchema = [3, n0, _LDI,
  0,
  [_st, _mR, _nT],
  [[0, { [_hQ]: _st }], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }]]
];
export var ListDomainsOutput$: StaticStructureSchema = [3, n0, _LDO,
  0,
  [_d, _nT],
  [() => DomainSummaryList, 0], 1
];
export var ListSubscriptionsInput$: StaticStructureSchema = [3, n0, _LSI,
  0,
  [_dI, _mR, _nT],
  [[0, 1], [1, { [_hQ]: _mR }], [0, { [_hQ]: _nT }]], 1
];
export var ListSubscriptionsOutput$: StaticStructureSchema = [3, n0, _LSO,
  0,
  [_sub, _nT],
  [() => SubscriptionList, 0], 1
];
export var ListTagsForResourceInput$: StaticStructureSchema = [3, n0, _LTFRI,
  0,
  [_rA],
  [[0, 1]], 1
];
export var ListTagsForResourceOutput$: StaticStructureSchema = [3, n0, _LTFRO,
  0,
  [_t],
  [128 | 0]
];
export var ManagedTemplate$: StaticStructureSchema = [3, n0, _MT,
  0,
  [_tT],
  [0], 1
];
export var ManagedTemplateResponse$: StaticStructureSchema = [3, n0, _MTR,
  0,
  [_tT],
  [0]
];
export var MedicalScribeAudioEvent$: StaticStructureSchema = [3, n0, _MSAE,
  0,
  [_aC],
  [21], 1
];
export var MedicalScribeChannelDefinition$: StaticStructureSchema = [3, n0, _MSCD,
  0,
  [_cI, _pR],
  [1, 0], 2
];
export var MedicalScribeConfigurationEvent$: StaticStructureSchema = [3, n0, _MSCE,
  0,
  [_pSAS, _cD, _eCn],
  [[() => MedicalScribePostStreamActionSettings$, 0], () => MedicalScribeChannelDefinitions, [() => EncounterContext$, 0]], 1
];
export var MedicalScribeListeningSessionDetails$: StaticStructureSchema = [3, n0, _MSLSD,
  0,
  [_sIe, _dI, _sI, _lC, _mSRH, _mE, _cD, _pSAS, _pSAR, _eCP, _sSt, _sCT, _sET],
  [0, 0, 0, 0, 1, 0, () => MedicalScribeChannelDefinitions, () => MedicalScribePostStreamActionSettingsResponse$, () => MedicalScribePostStreamActionsResult$, 2, 0, 4, 4]
];
export var MedicalScribePostStreamActionSettings$: StaticStructureSchema = [3, n0, _MSPSAS,
  0,
  [_oSU, _cNGS],
  [0, [() => ClinicalNoteGenerationSettings$, 0]], 2
];
export var MedicalScribePostStreamActionSettingsResponse$: StaticStructureSchema = [3, n0, _MSPSASR,
  0,
  [_oSU, _cNGS],
  [0, () => ClinicalNoteGenerationSettingsResponse$], 2
];
export var MedicalScribePostStreamActionsResult$: StaticStructureSchema = [3, n0, _MSPSAR,
  0,
  [_cNGR],
  [() => ClinicalNoteGenerationResult$]
];
export var MedicalScribeSessionControlEvent$: StaticStructureSchema = [3, n0, _MSSCE,
  0,
  [_ty],
  [0]
];
export var MedicalScribeTranscriptEvent$: StaticStructureSchema = [3, n0, _MSTE,
  0,
  [_tS],
  [() => MedicalScribeTranscriptSegment$]
];
export var MedicalScribeTranscriptSegment$: StaticStructureSchema = [3, n0, _MSTS,
  0,
  [_sIeg, _aBO, _aEO, _iP, _cI, _co],
  [0, 1, 1, 2, 0, 0]
];
export var OutputDataConfig$: StaticStructureSchema = [3, n0, _ODC,
  0,
  [_sOP],
  [0], 1
];
export var PatientInsightsEncounterContext$: StaticStructureSchema = [3, n0, _PIEC,
  0,
  [_eRn],
  [[() => SensitiveNonEmptyString, 0]], 1
];
export var PatientInsightsPatientContext$: StaticStructureSchema = [3, n0, _PIPC,
  0,
  [_pI, _dOB, _p],
  [[() => SensitiveNonEmptyString, 0], [() => SensitiveIsoDateString, 0], [() => Pronouns, 0]], 1
];
export var S3Source$: StaticStructureSchema = [3, n0, _SS,
  0,
  [_u],
  [0], 1
];
export var StartMedicalScribeListeningSessionInput$: StaticStructureSchema = [3, n0, _SMSLSI,
  0,
  [_sIe, _dI, _sI, _lC, _mSRH, _mE, _iS],
  [[0, { [_hH]: _xamsi }], [0, { [_hH]: _xamdi }], [0, { [_hH]: _xamsi_ }], [0, { [_hH]: _xamlc }], [1, { [_hH]: _xamsr }], [0, { [_hH]: _xamme }], [() => MedicalScribeInputStream$, 16]], 6
];
export var StartMedicalScribeListeningSessionOutput$: StaticStructureSchema = [3, n0, _SMSLSO,
  0,
  [_sIe, _dI, _sI, _rI, _lC, _mSRH, _mE, _rS],
  [[0, { [_hH]: _xamsi }], [0, { [_hH]: _xamdi }], [0, { [_hH]: _xamsi_ }], [0, { [_hH]: _xari }], [0, { [_hH]: _xamlc }], [1, { [_hH]: _xamsr }], [0, { [_hH]: _xamme }], [() => MedicalScribeOutputStream$, 16]]
];
export var StartPatientInsightsJobRequest$: StaticStructureSchema = [3, n0, _SPIJR,
  0,
  [_dI, _pC, _iC, _eCn, _uCs, _iDC, _oDC, _cTl],
  [[0, 1], [() => PatientInsightsPatientContext$, 0], () => InsightsContext$, [() => PatientInsightsEncounterContext$, 0], [() => UserContext$, 0], [() => InputDataConfig$, 0], () => OutputDataConfig$, [0, 4]], 7
];
export var StartPatientInsightsJobResponse$: StaticStructureSchema = [3, n0, _SPIJRt,
  0,
  [_jA, _jI, _cT],
  [0, 0, 5], 2
];
export var SubscriptionDescription$: StaticStructureSchema = [3, n0, _SD,
  0,
  [_dI, _sI, _a, _st, _cA, _lUA, _aA, _dA],
  [0, 0, 0, 0, 4, 4, 4, 4], 6
];
export var TagResourceInput$: StaticStructureSchema = [3, n0, _TRI,
  0,
  [_rA, _t],
  [[0, 1], 128 | 0], 2
];
export var TemplateSectionInstruction$: StaticStructureSchema = [3, n0, _TSI,
  0,
  [_sH, _sIec],
  [[() => SensitiveAlphanumericString, 0], [() => SensitiveMarkdownString, 0]], 2
];
export var UntagResourceInput$: StaticStructureSchema = [3, n0, _URI,
  0,
  [_rA, _tK],
  [[0, 1], [64 | 0, { [_hQ]: _tK }]], 2
];
export var UserContext$: StaticStructureSchema = [3, n0, _UC,
  0,
  [_r, _uI, _sp],
  [0, [() => SensitiveNonEmptyString, 0], 0], 2
];
export var WebAppConfiguration$: StaticStructureSchema = [3, n0, _WAC,
  0,
  [_eR, _iAI, _iR],
  [0, 0, 0], 3
];
var __Unit = "unit" as const;
var DomainSummaryList: StaticListSchema = [1, n0, _DSL,
  0, () => DomainSummary$
];
var MedicalScribeChannelDefinitions: StaticListSchema = [1, n0, _MSCDe,
  0, () => MedicalScribeChannelDefinition$
];
var S3Sources: StaticListSchema = [1, n0, _SSo,
  0, () => S3Source$
];
var SubscriptionList: StaticListSchema = [1, n0, _SL,
  0, () => SubscriptionDescription$
];
var TagKeyList = 64 | 0;
var TemplateInstructions: StaticListSchema = [1, n0, _TI,
  0, [() => TemplateSectionInstruction$,
    0]
];
var TagMap = 128 | 0;
export var MedicalScribeInputStream$: StaticUnionSchema = [4, n0, _MSIS,
  { [_str]: 1 },
  [_aE, _sCE, _cE],
  [() => MedicalScribeAudioEvent$, () => MedicalScribeSessionControlEvent$, [() => MedicalScribeConfigurationEvent$, 0]]
];
export var MedicalScribeOutputStream$: StaticUnionSchema = [4, n0, _MSOS,
  { [_str]: 1 },
  [_tE, _iFE, _vE],
  [() => MedicalScribeTranscriptEvent$, [() => InternalServerException$, 0], [() => ValidationException$, 0]]
];
export var NoteTemplateSettings$: StaticUnionSchema = [4, n0, _NTS,
  0,
  [_mT, _cTu],
  [() => ManagedTemplate$, [() => CustomTemplate$, 0]]
];
export var NoteTemplateSettingsResponse$: StaticUnionSchema = [4, n0, _NTSR,
  0,
  [_mT, _cTu],
  [() => ManagedTemplateResponse$, () => CustomTemplateResponse$]
];
export var ActivateSubscription$: StaticOperationSchema = [9, n0, _AS,
  { [_h]: ["POST", "/domains/{domainId}/subscriptions/{subscriptionId}/activate", 200] }, () => ActivateSubscriptionInput$, () => ActivateSubscriptionOutput$
];
export var CreateDomain$: StaticOperationSchema = [9, n0, _CD,
  { [_h]: ["POST", "/domain", 201] }, () => CreateDomainInput$, () => CreateDomainOutput$
];
export var CreateSubscription$: StaticOperationSchema = [9, n0, _CS,
  { [_h]: ["POST", "/domains/{domainId}/subscriptions", 201] }, () => CreateSubscriptionInput$, () => CreateSubscriptionOutput$
];
export var DeactivateSubscription$: StaticOperationSchema = [9, n0, _DSe,
  { [_h]: ["POST", "/domains/{domainId}/subscriptions/{subscriptionId}/deactivate", 200] }, () => DeactivateSubscriptionInput$, () => DeactivateSubscriptionOutput$
];
export var DeleteDomain$: StaticOperationSchema = [9, n0, _DD,
  { [_h]: ["DELETE", "/domain/{domainId}", 200] }, () => DeleteDomainInput$, () => DeleteDomainOutput$
];
export var GetDomain$: StaticOperationSchema = [9, n0, _GD,
  { [_h]: ["GET", "/domain/{domainId}", 200] }, () => GetDomainInput$, () => GetDomainOutput$
];
export var GetMedicalScribeListeningSession$: StaticOperationSchema = [9, n0, _GMSLS,
  { [_en]: ["streaming."], [_h]: ["GET", "/medical-scribe-stream/domain/{domainId}/subscription/{subscriptionId}/session/{sessionId}", 200] }, () => GetMedicalScribeListeningSessionInput$, () => GetMedicalScribeListeningSessionOutput$
];
export var GetPatientInsightsJob$: StaticOperationSchema = [9, n0, _GPIJ,
  { [_en]: ["runtime."], [_h]: ["GET", "/domain/{domainId}/patient-insights-job/{jobId}", 200] }, () => GetPatientInsightsJobRequest$, () => GetPatientInsightsJobResponse$
];
export var GetSubscription$: StaticOperationSchema = [9, n0, _GS,
  { [_h]: ["GET", "/domains/{domainId}/subscriptions/{subscriptionId}", 200] }, () => GetSubscriptionInput$, () => GetSubscriptionOutput$
];
export var ListDomains$: StaticOperationSchema = [9, n0, _LD,
  { [_h]: ["GET", "/domain", 200] }, () => ListDomainsInput$, () => ListDomainsOutput$
];
export var ListSubscriptions$: StaticOperationSchema = [9, n0, _LS,
  { [_h]: ["GET", "/domains/{domainId}/subscriptions", 200] }, () => ListSubscriptionsInput$, () => ListSubscriptionsOutput$
];
export var ListTagsForResource$: StaticOperationSchema = [9, n0, _LTFR,
  { [_h]: ["GET", "/tags/{resourceArn}", 200] }, () => ListTagsForResourceInput$, () => ListTagsForResourceOutput$
];
export var StartMedicalScribeListeningSession$: StaticOperationSchema = [9, n0, _SMSLS,
  { [_en]: ["streaming."], [_h]: ["POST", "/medical-scribe-stream/", 200] }, () => StartMedicalScribeListeningSessionInput$, () => StartMedicalScribeListeningSessionOutput$
];
export var StartPatientInsightsJob$: StaticOperationSchema = [9, n0, _SPIJ,
  { [_en]: ["runtime."], [_h]: ["POST", "/domain/{domainId}/patient-insights-job", 200] }, () => StartPatientInsightsJobRequest$, () => StartPatientInsightsJobResponse$
];
export var TagResource$: StaticOperationSchema = [9, n0, _TR,
  { [_h]: ["POST", "/tags/{resourceArn}", 204] }, () => TagResourceInput$, () => __Unit
];
export var UntagResource$: StaticOperationSchema = [9, n0, _UR,
  { [_h]: ["DELETE", "/tags/{resourceArn}", 204] }, () => UntagResourceInput$, () => __Unit
];
