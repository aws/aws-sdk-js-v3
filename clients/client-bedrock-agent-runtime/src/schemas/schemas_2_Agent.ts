// smithy-typescript generated code
import { error, list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import { ModelNotReadyException as __ModelNotReadyException } from "../models/index";
import {
  _A,
  _a,
  _aAA,
  _AAG,
  _AAGg,
  _aAI,
  _aC,
  _aCAA,
  _ACII,
  _aCII,
  _ACIO,
  _aCIO,
  _ACIP,
  _ACM,
  _aCN,
  _ACOP,
  _ACPS,
  _aDE,
  _aG,
  _aGc,
  _AGE,
  _aGE,
  _aGI,
  _AGII,
  _aGII,
  _AGIO,
  _aGIO,
  _AGN,
  _aGN,
  _AGOS,
  _aI,
  _AII,
  _aII,
  _aIT,
  _aMRF,
  _aN,
  _AP,
  _aP,
  _APIS,
  _APp,
  _APpi,
  _AR,
  _aR,
  _ARB,
  _aS,
  _at,
  _aV,
  _b,
  _bC,
  _BCB,
  _BCD,
  _BCF,
  _bGE,
  _BMC,
  _bMC,
  _BPT,
  _bPT,
  _by,
  _C,
  _c,
  _Ca,
  _CB,
  _CBo,
  _CBon,
  _CC,
  _cC,
  _CCa,
  _cCa,
  _CCo,
  _cCu,
  _CE,
  _cE,
  _cEKA,
  _CH,
  _cH,
  _ch,
  _CI,
  _Ci,
  _cI,
  _ci,
  _CIII,
  _cIII,
  _CIIO,
  _cIIO,
  _cit,
  _CM,
  _cN,
  _CO,
  _Co,
  _cO,
  _co,
  _cod,
  _Col,
  _col,
  _com,
  _con,
  _COT,
  _cOT,
  _COTE,
  _cP,
  _cRI,
  _cS,
  _cT,
  _cW,
  _d,
  _da,
  _DAM,
  _DAMR,
  _DAMRe,
  _dFE,
  _e,
  _eE,
  _en,
  _eO,
  _ePTS,
  _ES,
  _eS,
  _eSC,
  _ESGC,
  _ESRAGC,
  _ESx,
  _eT,
  _eTn,
  _eTnd,
  _eTv,
  _eTx,
  _ev,
  _ex,
  _F,
  _f,
  _FB,
  _fC,
  _FD,
  _fi,
  _FII,
  _fII,
  _fil,
  _fM,
  _fo,
  _FP,
  _FPu,
  _FPun,
  _FR,
  _fR,
  _fRi,
  _FRS,
  _FRSi,
  _FRu,
  _fRu,
  _FS,
  _fS,
  _FSu,
  _FT,
  _fT,
  _Fu,
  _fu,
  _g,
  _GA,
  _gA,
  _GAL,
  _GC,
  _gC,
  _gCe,
  _GCF,
  _GCFL,
  _GCPA,
  _GCW,
  _GCWA,
  _GCWL,
  _GE,
  _gIu,
  _GMW,
  _GMWL,
  _GPEF,
  _GPEFL,
  _GRF,
  _GRFL,
  _GRP,
  _gRP,
  _GSIPA,
  _GT,
  _GTL,
  _GTPA,
  _GTu,
  _gTu,
  _gV,
  _GWPA,
  _h,
  _hE,
  _hH,
  _hM,
  _hQ,
  _hSC,
  _I,
  _i,
  _IA,
  _iA,
  _IAFP,
  _IAPP,
  _IAR,
  _IARCP,
  _IARn,
  _IARS,
  _IATP,
  _IBMC,
  _IC,
  _iC,
  _ICn,
  _iCn,
  _id,
  _IF,
  _IFn,
  _II,
  _iI,
  _IIA,
  _IIAR,
  _IIARn,
  _IIM,
  _IIm,
  _IIn,
  _IInv,
  _iInv,
  _iInvo,
  _IIS,
  _im,
  _In,
  _in,
  _IRM,
  _iSE,
  _ISS,
  _iSS,
  _iSTTLIS,
  _IT,
  _iT,
  _iTn,
  _iTnp,
  _iV,
  _KB,
  _kB,
  _KBC,
  _kBC,
  _KBCn,
  _kBCn,
  _kBI,
  _KBLI,
  _kBLI,
  _KBLIS,
  _KBLO,
  _kBLO,
  _KBn,
  _KBRAGC,
  _kKA,
  _l,
  _lam,
  _M,
  _m,
  _mA,
  _ma,
  _Me,
  _me,
  _Mes,
  _mes,
  _mI,
  _MII,
  _mII,
  _mIO,
  _mL,
  _MNRE,
  _mNRE,
  _mT,
  _mTa,
  _mWL,
  _N,
  _n,
  _O,
  _o,
  _oA,
  _ob,
  _OC,
  _oC,
  _OE,
  _OF,
  _OFu,
  _oL,
  _OMIO,
  _OS,
  _OT,
  _oT,
  _oTr,
  _oTTM,
  _oTu,
  _P,
  _p,
  _Pa,
  _pa,
  _pAGS,
  _pAGSP,
  _Par,
  _PB,
  _pC,
  _PCC,
  _pCC,
  _pCM,
  _PCr,
  _pCr,
  _PCro,
  _pCTTI,
  _PD,
  _pE,
  _PL,
  _PM,
  _pM,
  _POC,
  _pOC,
  _PP,
  _PPMIO,
  _PPMIOr,
  _PPPR,
  _PPPRr,
  _PPr,
  _PPT,
  _pPT,
  _pPTo,
  _PPTr,
  _pR,
  _pr,
  _pS,
  _pSA,
  _PT,
  _pT,
  _PTr,
  _pTr,
  _QTC,
  _qTC,
  _R,
  _r,
  _ra,
  _RAG,
  _RAGC,
  _rAGC,
  _RAGI,
  _RAGO,
  _RAGOE,
  _RAGR,
  _RAGRe,
  _RAGS,
  _RAGSC,
  _RAGSR,
  _RAGSRe,
  _RAGSRO,
  _RB,
  _rB,
  _RBe,
  _rBe,
  _rC,
  _RCB,
  _rCe,
  _rCea,
  _rCed,
  _rCet,
  _rCH,
  _RCIR,
  _rCIR,
  _RCMIO,
  _RCP,
  _rCP,
  _RCR,
  _rCR,
  _RCT,
  _rCT,
  _RD,
  _re,
  _req,
  _RN,
  _rNFE,
  _ro,
  _RR,
  _rR,
  _rRa,
  _RRe,
  _rRe,
  _RRet,
  _RRetrie,
  _RS,
  _rS,
  _RSes,
  _rT,
  _RTB,
  _S,
  _s_,
  _sAe,
  _sAo,
  _sBN,
  _sCe,
  _SCt,
  _sCt,
  _sFR,
  _SI,
  _si,
  _sIe,
  _sIP,
  _sL,
  _so,
  _SOD,
  _SOF,
  _sOK,
  _sou,
  _Sp,
  _sp,
  _sQEE,
  _SS,
  _sSe,
  _sSt,
  _sT,
  _sta,
  _str,
  _stre,
  _sTt,
  _T,
  _t,
  _tE,
  _te,
  _tI,
  _TIC,
  _tIC,
  _tK,
  _TKBI,
  _to,
  _tP,
  _tPo,
  _TPr,
  _TPT,
  _tPT,
  _tr,
  _TRP,
  _tRP,
  _tTM,
  _ty,
  _U,
  _u,
  _uC,
  _uri,
  _V,
  _v,
  _va,
  _vE,
  _wP,
  _xabact,
  _xabami,
  _xabasi,
  _xabkbsi,
  _xasa,
  AccessDeniedException,
  BadGatewayException,
  ConflictException,
  DependencyFailedException,
  InternalServerException,
  n0,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "./schemas_0";
import {
  GuardrailConfiguration,
  KnowledgeBaseRetrievalConfiguration,
  RetrievalResultContent,
  RetrievalResultLocation,
  RetrievalResultMetadata,
} from "./schemas_7_Retrieve";
import { PerformanceConfiguration } from "./schemas_9_Invoke";

/* eslint no-var: 0 */

export var ActionGroupName = sim(n0, _AGN, 0, 8);
export var ActionGroupOutputString = sim(n0, _AGOS, 0, 8);
export var AgentCollaboratorPayloadString = sim(n0, _ACPS, 0, 8);
export var ApiPath = sim(n0, _AP, 0, 8);
export var BasePromptTemplate = sim(n0, _BPT, 0, 8);
export var ByteContentBlob = sim(n0, _BCB, 21, 8);
export var CollaborationInstruction = sim(n0, _CI, 0, 8);
export var FailureReasonString = sim(n0, _FRS, 0, 8);
export var FileBody = sim(n0, _FB, 21, 8);
export var FinalResponseString = sim(n0, _FRSi, 0, 8);
export var Function = sim(n0, _F, 0, 8);
export var Identifier = sim(n0, _I, 0, 8);
export var InputText = sim(n0, _IT, 0, 8);
export var Instruction = sim(n0, _In, 0, 8);
export var KnowledgeBaseLookupInputString = sim(n0, _KBLIS, 0, 8);
export var Name = sim(n0, _N, 0, 8);
export var OutputString = sim(n0, _OS, 0, 8);
export var PartBody = sim(n0, _PB, 21, 8);
export var Payload = sim(n0, _P, 0, 8);
export var PromptText = sim(n0, _PT, 0, 8);
export var RationaleString = sim(n0, _RS, 0, 8);
export var ResourceDescription = sim(n0, _RD, 0, 8);
export var ResourceName = sim(n0, _RN, 0, 8);
export var Source = sim(n0, _S, 0, 8);
export var TextPromptTemplate = sim(n0, _TPT, 0, 8);
export var TraceKnowledgeBaseId = sim(n0, _TKBI, 0, 8);
export var Verb = sim(n0, _V, 0, 8);
export var ActionGroupInvocationInput = struct(
  n0,
  _AGII,
  0,
  [_aGN, _v, _aP, _p, _rB, _f, _eT, _iI],
  [
    [() => ActionGroupName, 0],
    [() => Verb, 0],
    [() => ApiPath, 0],
    () => _Parameters,
    () => RequestBody,
    [() => Function, 0],
    0,
    0,
  ]
);
export var ActionGroupInvocationOutput = struct(
  n0,
  _AGIO,
  0,
  [_t, _me],
  [
    [() => ActionGroupOutputString, 0],
    [() => Metadata, 0],
  ]
);
export var AgentActionGroup = struct(
  n0,
  _AAG,
  0,
  [_aGN, _d, _pAGS, _aGE, _aS, _fS, _pAGSP],
  [
    [() => ResourceName, 0],
    [() => ResourceDescription, 0],
    0,
    () => ActionGroupExecutor,
    [() => APISchema, 0],
    [() => FunctionSchema, 0],
    128 | 0,
  ]
);
export var AgentCollaboratorInputPayload = struct(
  n0,
  _ACIP,
  0,
  [_ty, _t, _rCR],
  [0, [() => AgentCollaboratorPayloadString, 0], [() => ReturnControlResults, 0]]
);
export var AgentCollaboratorInvocationInput = struct(
  n0,
  _ACII,
  0,
  [_aCN, _aCAA, _i],
  [0, 0, [() => AgentCollaboratorInputPayload, 0]]
);
export var AgentCollaboratorInvocationOutput = struct(
  n0,
  _ACIO,
  0,
  [_aCN, _aCAA, _o, _me],
  [0, 0, [() => AgentCollaboratorOutputPayload, 0], [() => Metadata, 0]]
);
export var AgentCollaboratorOutputPayload = struct(
  n0,
  _ACOP,
  0,
  [_ty, _t, _rCP],
  [0, [() => AgentCollaboratorPayloadString, 0], [() => ReturnControlPayload, 0]]
);
export var ApiInvocationInput = struct(
  n0,
  _AII,
  0,
  [_aG, _hM, _aP, _p, _rB, _aIT, _aI, _cN],
  [0, 0, [() => ApiPath, 0], () => ApiParameters, () => ApiRequestBody, 0, 0, [() => Name, 0]]
);
export var ApiParameter = struct(n0, _APp, 0, [_n, _ty, _va], [0, 0, 0]);
export var ApiRequestBody = struct(n0, _ARB, 0, [_co], [() => ApiContentMap]);
export var ApiResult = struct(
  n0,
  _AR,
  0,
  [_aG, _hM, _aP, _cS, _rS, _hSC, _rBe, _aI],
  [0, 0, [() => ApiPath, 0], 0, 0, 1, () => ResponseBody, 0]
);
export var Attribution = struct(n0, _A, 0, [_ci], [[() => Citations, 0]]);
export var BedrockModelConfigurations = struct(n0, _BMC, 0, [_pC], [() => PerformanceConfiguration]);
export var ByteContentDoc = struct(
  n0,
  _BCD,
  0,
  [_id, _cT, _da],
  [[() => Identifier, 0], 0, [() => ByteContentBlob, 0]]
);
export var ByteContentFile = struct(n0, _BCF, 0, [_mT, _da], [0, [() => ByteContentBlob, 0]]);
export var Citation = struct(
  n0,
  _C,
  0,
  [_gRP, _rR],
  [
    [() => GeneratedResponsePart, 0],
    [() => RetrievedReferences, 0],
  ]
);
export var CitationEvent = struct(
  n0,
  _CE,
  0,
  [_cit, _gRP, _rR],
  [
    [() => Citation, 0],
    [() => GeneratedResponsePart, 0],
    [() => RetrievedReferences, 0],
  ]
);
export var CodeInterpreterInvocationInput = struct(n0, _CIII, 0, [_cod, _fi], [0, 64 | 0]);
export var CodeInterpreterInvocationOutput = struct(
  n0,
  _CIIO,
  0,
  [_eO, _eE, _fi, _eTx, _me],
  [0, 0, 64 | 0, 2, [() => Metadata, 0]]
);
export var Collaborator = struct(
  n0,
  _Co,
  0,
  [_cEKA, _fM, _in, _iSTTLIS, _aGc, _kB, _gC, _pOC, _aC, _cC, _aN],
  [
    0,
    0,
    [() => Instruction, 0],
    1,
    [() => AgentActionGroups, 0],
    [() => KnowledgeBases, 0],
    () => GuardrailConfigurationWithArn,
    [() => PromptOverrideConfiguration, 0],
    0,
    [() => CollaboratorConfigurations, 0],
    [() => Name, 0],
  ]
);
export var CollaboratorConfiguration = struct(
  n0,
  _CC,
  0,
  [_cN, _cI, _aAA, _rCH],
  [[() => Name, 0], [() => CollaborationInstruction, 0], 0, 0]
);
export var ContentBody = struct(n0, _CB, 0, [_b, _im], [0, () => ImageInputs]);
export var ConversationHistory = struct(n0, _CH, 0, [_mes], [[() => Messages, 0]]);
export var CustomOrchestration = struct(n0, _CO, 0, [_ex], [() => OrchestrationExecutor]);
export var CustomOrchestrationTrace = struct(n0, _COT, 8, [_tI, _ev], [0, [() => CustomOrchestrationTraceEvent, 0]]);
export var CustomOrchestrationTraceEvent = struct(n0, _COTE, 8, [_t], [0]);
export var DeleteAgentMemoryRequest = struct(
  n0,
  _DAMR,
  0,
  [_aI, _aAI, _mI, _sIe],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _mI,
      },
    ],
    [
      0,
      {
        [_hQ]: _sIe,
      },
    ],
  ]
);
export var DeleteAgentMemoryResponse = struct(n0, _DAMRe, 0, [], []);
export var ExternalSource = struct(n0, _ES, 0, [_sT, _sL, _bC], [0, () => S3ObjectDoc, [() => ByteContentDoc, 0]]);
export var ExternalSourcesGenerationConfiguration = struct(
  n0,
  _ESGC,
  0,
  [_pT, _gC, _iC, _aMRF, _pC],
  [
    [() => PromptTemplate, 0],
    () => GuardrailConfiguration,
    () => InferenceConfig,
    128 | 15,
    () => PerformanceConfiguration,
  ]
);
export var ExternalSourcesRetrieveAndGenerateConfiguration = struct(
  n0,
  _ESRAGC,
  0,
  [_mA, _so, _gCe],
  [0, [() => ExternalSources, 0], [() => ExternalSourcesGenerationConfiguration, 0]]
);
export var FailureTrace = struct(
  n0,
  _FT,
  8,
  [_tI, _fR, _fC, _me],
  [0, [() => FailureReasonString, 0], 1, [() => Metadata, 0]]
);
export var FilePart = struct(n0, _FP, 0, [_fi], [[() => OutputFiles, 0]]);
export var FileSource = struct(n0, _FS, 0, [_sT, _sL, _bC], [0, () => S3ObjectFile, [() => ByteContentFile, 0]]);
export var FinalResponse = struct(
  n0,
  _FR,
  0,
  [_t, _me],
  [
    [() => FinalResponseString, 0],
    [() => Metadata, 0],
  ]
);
export var FunctionDefinition = struct(
  n0,
  _FD,
  0,
  [_n, _d, _p, _rC],
  [[() => ResourceName, 0], 0, () => ParameterMap, 0]
);
export var FunctionInvocationInput = struct(
  n0,
  _FII,
  0,
  [_aG, _p, _f, _aIT, _aI, _cN],
  [0, () => FunctionParameters, 0, 0, 0, [() => Name, 0]]
);
export var FunctionParameter = struct(n0, _FPu, 0, [_n, _ty, _va], [0, 0, 0]);
export var FunctionResult = struct(n0, _FRu, 0, [_aG, _cS, _f, _rBe, _rS, _aI], [0, 0, 0, () => ResponseBody, 0, 0]);
export var GeneratedResponsePart = struct(n0, _GRP, 0, [_tRP], [[() => TextResponsePart, 0]]);
export var GenerationConfiguration = struct(
  n0,
  _GC,
  0,
  [_pT, _gC, _iC, _aMRF, _pC],
  [
    [() => PromptTemplate, 0],
    () => GuardrailConfiguration,
    () => InferenceConfig,
    128 | 15,
    () => PerformanceConfiguration,
  ]
);
export var GuardrailAssessment = struct(
  n0,
  _GA,
  8,
  [_tP, _cP, _wP, _sIP],
  [
    [() => GuardrailTopicPolicyAssessment, 0],
    [() => GuardrailContentPolicyAssessment, 0],
    [() => GuardrailWordPolicyAssessment, 0],
    [() => GuardrailSensitiveInformationPolicyAssessment, 0],
  ]
);
export var GuardrailConfigurationWithArn = struct(n0, _GCWA, 0, [_gIu, _gV], [0, 0]);
export var GuardrailContentFilter = struct(n0, _GCF, 8, [_ty, _con, _a], [0, 0, 0]);
export var GuardrailContentPolicyAssessment = struct(n0, _GCPA, 8, [_fil], [[() => GuardrailContentFilterList, 0]]);
export var GuardrailCustomWord = struct(n0, _GCW, 8, [_ma, _a], [0, 0]);
export var GuardrailEvent = struct(n0, _GE, 0, [_a], [0]);
export var GuardrailManagedWord = struct(n0, _GMW, 8, [_ma, _ty, _a], [0, 0, 0]);
export var GuardrailPiiEntityFilter = struct(n0, _GPEF, 8, [_ty, _ma, _a], [0, 0, 0]);
export var GuardrailRegexFilter = struct(n0, _GRF, 8, [_n, _r, _ma, _a], [0, 0, 0, 0]);
export var GuardrailSensitiveInformationPolicyAssessment = struct(
  n0,
  _GSIPA,
  8,
  [_pE, _re],
  [
    [() => GuardrailPiiEntityFilterList, 0],
    [() => GuardrailRegexFilterList, 0],
  ]
);
export var GuardrailTopic = struct(n0, _GT, 8, [_n, _ty, _a], [0, 0, 0]);
export var GuardrailTopicPolicyAssessment = struct(n0, _GTPA, 8, [_to], [[() => GuardrailTopicList, 0]]);
export var GuardrailTrace = struct(
  n0,
  _GTu,
  8,
  [_a, _tI, _iA, _oA, _me],
  [0, 0, [() => GuardrailAssessmentList, 0], [() => GuardrailAssessmentList, 0], [() => Metadata, 0]]
);
export var GuardrailWordPolicyAssessment = struct(
  n0,
  _GWPA,
  8,
  [_cW, _mWL],
  [
    [() => GuardrailCustomWordList, 0],
    [() => GuardrailManagedWordList, 0],
  ]
);
export var ImageInput = struct(n0, _II, 0, [_fo, _sou], [0, () => ImageInputSource]);
export var InferenceConfig = struct(n0, _IC, 0, [_tIC], [() => TextInferenceConfig]);
export var InferenceConfiguration = struct(n0, _ICn, 0, [_te, _tPo, _tK, _mL, _sSt], [1, 1, 1, 1, 64 | 0]);
export var InlineAgentFilePart = struct(n0, _IAFP, 0, [_fi], [[() => OutputFiles, 0]]);
export var InlineAgentPayloadPart = struct(
  n0,
  _IAPP,
  8,
  [_by, _at],
  [
    [() => PartBody, 0],
    [() => Attribution, 0],
  ]
);
export var InlineAgentReturnControlPayload = struct(n0, _IARCP, 8, [_iInv, _iI], [[() => InvocationInputs, 0], 0]);
export var InlineAgentTracePart = struct(
  n0,
  _IATP,
  8,
  [_sIe, _tr, _cCa, _eTv, _cN],
  [0, [() => Trace, 0], () => CallerChain, 5, [() => Name, 0]]
);
export var InlineBedrockModelConfigurations = struct(n0, _IBMC, 0, [_pC], [() => PerformanceConfiguration]);
export var InlineSessionState = struct(
  n0,
  _ISS,
  0,
  [_sAe, _pSA, _rCIR, _iI, _fi, _cH],
  [
    128 | 0,
    128 | 0,
    [() => ReturnControlInvocationResults, 0],
    0,
    [() => InputFiles, 0],
    [() => ConversationHistory, 0],
  ]
);
export var InputFile = struct(n0, _IF, 0, [_n, _sou, _uC], [0, [() => FileSource, 0], 0]);
export var InvocationInput = struct(
  n0,
  _IIn,
  8,
  [_tI, _iT, _aGII, _kBLI, _cIII, _aCII],
  [
    0,
    0,
    [() => ActionGroupInvocationInput, 0],
    [() => KnowledgeBaseLookupInput, 0],
    () => CodeInterpreterInvocationInput,
    [() => AgentCollaboratorInvocationInput, 0],
  ]
);
export var InvokeAgentRequest = struct(
  n0,
  _IAR,
  0,
  [_sSe, _aI, _aAI, _sIe, _eS, _eTn, _iTn, _mI, _bMC, _sCt, _pCC, _sAo],
  [
    [() => SessionState, 0],
    [0, 1],
    [0, 1],
    [0, 1],
    2,
    2,
    [() => InputText, 0],
    0,
    () => BedrockModelConfigurations,
    () => StreamingConfigurations,
    () => PromptCreationConfigurations,
    [
      0,
      {
        [_hH]: _xasa,
      },
    ],
  ]
);
export var InvokeAgentResponse = struct(
  n0,
  _IARn,
  0,
  [_com, _cT, _sIe, _mI],
  [
    [() => ResponseStream, 16],
    [
      0,
      {
        [_hH]: _xabact,
      },
    ],
    [
      0,
      {
        [_hH]: _xabasi,
      },
    ],
    [
      0,
      {
        [_hH]: _xabami,
      },
    ],
  ]
);
export var InvokeInlineAgentRequest = struct(
  n0,
  _IIAR,
  0,
  [
    _cEKA,
    _fM,
    _in,
    _iSTTLIS,
    _aGc,
    _kB,
    _gC,
    _pOC,
    _aC,
    _cC,
    _aN,
    _sIe,
    _eS,
    _eTn,
    _iTn,
    _sCt,
    _pCC,
    _iSS,
    _col,
    _bMC,
    _oT,
    _cO,
  ],
  [
    0,
    0,
    [() => Instruction, 0],
    1,
    [() => AgentActionGroups, 0],
    [() => KnowledgeBases, 0],
    () => GuardrailConfigurationWithArn,
    [() => PromptOverrideConfiguration, 0],
    0,
    [() => CollaboratorConfigurations, 0],
    [() => Name, 0],
    [0, 1],
    2,
    2,
    [() => InputText, 0],
    () => StreamingConfigurations,
    () => PromptCreationConfigurations,
    [() => InlineSessionState, 0],
    [() => Collaborators, 0],
    () => InlineBedrockModelConfigurations,
    0,
    () => CustomOrchestration,
  ]
);
export var InvokeInlineAgentResponse = struct(
  n0,
  _IIARn,
  0,
  [_com, _cT, _sIe],
  [
    [() => InlineAgentResponseStream, 16],
    [
      0,
      {
        [_hH]: _xabact,
      },
    ],
    [
      0,
      {
        [_hH]: _xabasi,
      },
    ],
  ]
);
export var KnowledgeBase = struct(
  n0,
  _KB,
  0,
  [_kBI, _d, _rCe],
  [0, [() => ResourceDescription, 0], [() => KnowledgeBaseRetrievalConfiguration, 0]]
);
export var KnowledgeBaseConfiguration = struct(
  n0,
  _KBC,
  0,
  [_kBI, _rCe],
  [0, [() => KnowledgeBaseRetrievalConfiguration, 0]]
);
export var KnowledgeBaseLookupInput = struct(
  n0,
  _KBLI,
  0,
  [_t, _kBI],
  [
    [() => KnowledgeBaseLookupInputString, 0],
    [() => TraceKnowledgeBaseId, 0],
  ]
);
export var KnowledgeBaseLookupOutput = struct(
  n0,
  _KBLO,
  0,
  [_rR, _me],
  [
    [() => RetrievedReferences, 0],
    [() => Metadata, 0],
  ]
);
export var KnowledgeBaseRetrieveAndGenerateConfiguration = struct(
  n0,
  _KBRAGC,
  0,
  [_kBI, _mA, _rCe, _gCe, _oC],
  [
    0,
    0,
    [() => KnowledgeBaseRetrievalConfiguration, 0],
    [() => GenerationConfiguration, 0],
    [() => OrchestrationConfiguration, 0],
  ]
);
export var Message = struct(n0, _M, 0, [_ro, _co], [0, [() => ContentBlocks, 0]]);
export var Metadata = struct(n0, _Me, 8, [_sTt, _eTnd, _tTM, _oTTM, _cRI, _u], [5, 5, 1, 1, 0, [() => Usage, 0]]);
export var ModelInvocationInput = struct(
  n0,
  _MII,
  8,
  [_tI, _t, _ty, _oL, _pCM, _iCn, _pM, _fM],
  [0, [() => PromptText, 0], 0, 0, 0, () => InferenceConfiguration, 0, 0]
);
export var ModelNotReadyException = error(
  n0,
  _MNRE,
  {
    [_e]: _c,
    [_hE]: 424,
  },
  [_m],
  [0],

  __ModelNotReadyException
);
export var Observation = struct(
  n0,
  _O,
  8,
  [_tI, _ty, _aGIO, _aCIO, _kBLO, _fRi, _rRe, _cIIO],
  [
    0,
    0,
    [() => ActionGroupInvocationOutput, 0],
    [() => AgentCollaboratorInvocationOutput, 0],
    [() => KnowledgeBaseLookupOutput, 0],
    [() => FinalResponse, 0],
    [() => RepromptResponse, 0],
    [() => CodeInterpreterInvocationOutput, 0],
  ]
);
export var OrchestrationConfiguration = struct(
  n0,
  _OC,
  0,
  [_pT, _iC, _aMRF, _qTC, _pC],
  [
    [() => PromptTemplate, 0],
    () => InferenceConfig,
    128 | 15,
    () => QueryTransformationConfiguration,
    () => PerformanceConfiguration,
  ]
);
export var OrchestrationModelInvocationOutput = struct(
  n0,
  _OMIO,
  8,
  [_tI, _rRa, _me, _rCea],
  [0, [() => RawResponse, 0], [() => Metadata, 0], [() => ReasoningContentBlock, 0]]
);
export var OutputFile = struct(n0, _OF, 8, [_n, _ty, _by], [0, 0, [() => FileBody, 0]]);
export var Parameter = struct(n0, _Pa, 0, [_n, _ty, _va], [0, 0, 0]);
export var ParameterDetail = struct(n0, _PD, 0, [_d, _ty, _req], [0, 0, 2]);
export var PayloadPart = struct(
  n0,
  _PP,
  8,
  [_by, _at],
  [
    [() => PartBody, 0],
    [() => Attribution, 0],
  ]
);
export var PostProcessingModelInvocationOutput = struct(
  n0,
  _PPMIO,
  8,
  [_tI, _pR, _rRa, _me, _rCea],
  [
    0,
    [() => PostProcessingParsedResponse, 0],
    [() => RawResponse, 0],
    [() => Metadata, 0],
    [() => ReasoningContentBlock, 0],
  ]
);
export var PostProcessingParsedResponse = struct(n0, _PPPR, 8, [_t], [[() => OutputString, 0]]);
export var PreProcessingModelInvocationOutput = struct(
  n0,
  _PPMIOr,
  8,
  [_tI, _pR, _rRa, _me, _rCea],
  [
    0,
    [() => PreProcessingParsedResponse, 0],
    [() => RawResponse, 0],
    [() => Metadata, 0],
    [() => ReasoningContentBlock, 0],
  ]
);
export var PreProcessingParsedResponse = struct(n0, _PPPRr, 8, [_ra, _iV], [[() => RationaleString, 0], 2]);
export var PromptConfiguration = struct(
  n0,
  _PCr,
  0,
  [_pTr, _pCM, _pS, _bPT, _iCn, _pM, _fM, _aMRF],
  [0, 0, 0, [() => BasePromptTemplate, 0], () => InferenceConfiguration, 0, 0, 15]
);
export var PromptCreationConfigurations = struct(n0, _PCC, 0, [_pCTTI, _ePTS], [1, 2]);
export var PromptOverrideConfiguration = struct(n0, _POC, 8, [_pCr, _oL], [[() => PromptConfigurations, 0], 0]);
export var PromptTemplate = struct(n0, _PTr, 0, [_tPT], [[() => TextPromptTemplate, 0]]);
export var PropertyParameters = struct(n0, _PPr, 0, [_pr], [() => ParameterList]);
export var QueryTransformationConfiguration = struct(n0, _QTC, 0, [_ty], [0]);
export var Rationale = struct(n0, _R, 8, [_tI, _t], [0, [() => RationaleString, 0]]);
export var RawResponse = struct(n0, _RR, 8, [_co], [0]);
export var ReasoningTextBlock = struct(n0, _RTB, 8, [_t, _si], [0, 0]);
export var RepromptResponse = struct(n0, _RRe, 8, [_t, _sou], [0, [() => Source, 0]]);
export var RequestBody = struct(n0, _RB, 0, [_co], [() => ContentMap]);
export var RetrieveAndGenerateConfiguration = struct(
  n0,
  _RAGC,
  0,
  [_ty, _kBC, _eSC],
  [
    0,
    [() => KnowledgeBaseRetrieveAndGenerateConfiguration, 0],
    [() => ExternalSourcesRetrieveAndGenerateConfiguration, 0],
  ]
);
export var RetrieveAndGenerateInput = struct(n0, _RAGI, 8, [_t], [0]);
export var RetrieveAndGenerateOutput = struct(n0, _RAGO, 8, [_t], [0]);
export var RetrieveAndGenerateOutputEvent = struct(n0, _RAGOE, 8, [_t], [0]);
export var RetrieveAndGenerateRequest = struct(
  n0,
  _RAGR,
  0,
  [_sIe, _i, _rAGC, _sCe],
  [
    0,
    [() => RetrieveAndGenerateInput, 0],
    [() => RetrieveAndGenerateConfiguration, 0],
    () => RetrieveAndGenerateSessionConfiguration,
  ]
);
export var RetrieveAndGenerateResponse = struct(
  n0,
  _RAGRe,
  0,
  [_sIe, _o, _ci, _gA],
  [0, [() => RetrieveAndGenerateOutput, 0], [() => Citations, 0], 0]
);
export var RetrieveAndGenerateSessionConfiguration = struct(n0, _RAGSC, 0, [_kKA], [0]);
export var RetrieveAndGenerateStreamRequest = struct(
  n0,
  _RAGSR,
  0,
  [_sIe, _i, _rAGC, _sCe],
  [
    0,
    [() => RetrieveAndGenerateInput, 0],
    [() => RetrieveAndGenerateConfiguration, 0],
    () => RetrieveAndGenerateSessionConfiguration,
  ]
);
export var RetrieveAndGenerateStreamResponse = struct(
  n0,
  _RAGSRe,
  0,
  [_str, _sIe],
  [
    [() => RetrieveAndGenerateStreamResponseOutput, 16],
    [
      0,
      {
        [_hH]: _xabkbsi,
      },
    ],
  ]
);
export var RetrievedReference = struct(
  n0,
  _RRet,
  0,
  [_co, _l, _me],
  [
    [() => RetrievalResultContent, 0],
    [() => RetrievalResultLocation, 0],
    [() => RetrievalResultMetadata, 0],
  ]
);
export var ReturnControlPayload = struct(n0, _RCP, 8, [_iInv, _iI], [[() => InvocationInputs, 0], 0]);
export var ReturnControlResults = struct(n0, _RCR, 0, [_iI, _rCIR], [0, [() => ReturnControlInvocationResults, 0]]);
export var RoutingClassifierModelInvocationOutput = struct(
  n0,
  _RCMIO,
  8,
  [_tI, _rRa, _me],
  [0, [() => RawResponse, 0], [() => Metadata, 0]]
);
export var S3Identifier = struct(n0, _SI, 0, [_sBN, _sOK], [0, 0]);
export var S3ObjectDoc = struct(n0, _SOD, 0, [_uri], [0]);
export var S3ObjectFile = struct(n0, _SOF, 0, [_uri], [0]);
export var SessionState = struct(
  n0,
  _SS,
  0,
  [_sAe, _pSA, _rCIR, _iI, _fi, _kBCn, _cH],
  [
    128 | 0,
    128 | 0,
    [() => ReturnControlInvocationResults, 0],
    0,
    [() => InputFiles, 0],
    [() => KnowledgeBaseConfigurations, 0],
    [() => ConversationHistory, 0],
  ]
);
export var Span = struct(n0, _Sp, 0, [_sta, _en], [1, 1]);
export var StreamingConfigurations = struct(n0, _SCt, 0, [_sFR, _aGI], [2, 1]);
export var TextInferenceConfig = struct(n0, _TIC, 0, [_te, _tPo, _mTa, _sSt], [1, 1, 1, 64 | 0]);
export var TextResponsePart = struct(n0, _TRP, 8, [_t, _sp], [0, () => Span]);
export var TracePart = struct(
  n0,
  _TPr,
  8,
  [_sIe, _tr, _cCa, _eTv, _cN, _aI, _aAI, _aV],
  [0, [() => Trace, 0], () => CallerChain, 5, [() => Name, 0], 0, 0, 0]
);
export var Usage = struct(n0, _U, 8, [_iTnp, _oTu], [1, 1]);
export var AgentActionGroups = list(n0, _AAGg, 0, [() => AgentActionGroup, 0]);
export var ApiParameters = list(n0, _APpi, 0, () => ApiParameter);
export var CallerChain = list(n0, _CCa, 0, () => Caller);
export var Citations = list(n0, _Ci, 0, [() => Citation, 0]);
export var CollaboratorConfigurations = list(n0, _CCo, 0, [() => CollaboratorConfiguration, 0]);
export var Collaborators = list(n0, _Col, 0, [() => Collaborator, 0]);
export var ContentBlocks = list(n0, _CBo, 0, [() => ContentBlock, 0]);
export var ExternalSources = list(n0, _ESx, 0, [() => ExternalSource, 0]);
export var Files = 64 | 0;

export var FunctionParameters = list(n0, _FPun, 0, () => FunctionParameter);
export var Functions = list(n0, _Fu, 0, [() => FunctionDefinition, 0]);
export var GuardrailAssessmentList = list(n0, _GAL, 0, [() => GuardrailAssessment, 0]);
export var GuardrailContentFilterList = list(n0, _GCFL, 8, [() => GuardrailContentFilter, 0]);
export var GuardrailCustomWordList = list(n0, _GCWL, 8, [() => GuardrailCustomWord, 0]);
export var GuardrailManagedWordList = list(n0, _GMWL, 8, [() => GuardrailManagedWord, 0]);
export var GuardrailPiiEntityFilterList = list(n0, _GPEFL, 8, [() => GuardrailPiiEntityFilter, 0]);
export var GuardrailRegexFilterList = list(n0, _GRFL, 8, [() => GuardrailRegexFilter, 0]);
export var GuardrailTopicList = list(n0, _GTL, 8, [() => GuardrailTopic, 0]);
export var ImageInputs = list(n0, _IIm, 0, () => ImageInput);
export var InputFiles = list(n0, _IFn, 0, [() => InputFile, 0]);
export var InvocationInputs = list(n0, _IInv, 0, [() => InvocationInputMember, 0]);
export var KnowledgeBaseConfigurations = list(n0, _KBCn, 0, [() => KnowledgeBaseConfiguration, 0]);
export var KnowledgeBases = list(n0, _KBn, 0, [() => KnowledgeBase, 0]);
export var Messages = list(n0, _Mes, 0, [() => Message, 0]);
export var OutputFiles = list(n0, _OFu, 0, [() => OutputFile, 0]);
export var ParameterList = list(n0, _PL, 0, () => Parameter);
export var _Parameters = list(n0, _Par, 0, () => Parameter);
export var PromptConfigurations = list(n0, _PCro, 0, [() => PromptConfiguration, 0]);
export var RAGStopSequences = 64 | 0;

export var RetrievedReferences = list(n0, _RRetrie, 0, [() => RetrievedReference, 0]);
export var ReturnControlInvocationResults = list(n0, _RCIR, 0, [() => InvocationResultMember, 0]);
export var StopSequences = 64 | 0;

export var ActionGroupSignatureParams = 128 | 0;

export var ApiContentMap = map(n0, _ACM, 0, 0, () => PropertyParameters);
export var ContentMap = map(n0, _CM, 0, 0, () => _Parameters);
export var ParameterMap = map(n0, _PM, 0, 0, () => ParameterDetail);
export var PromptSessionAttributesMap = 128 | 0;

export var ResponseBody = map(n0, _RBe, 0, 0, () => ContentBody);
export var SessionAttributesMap = 128 | 0;

export var ActionGroupExecutor = uni(n0, _AGE, 0, [_lam, _cCu], [0, 0]);
export var APISchema = uni(n0, _APIS, 0, [_s_, _pa], [() => S3Identifier, [() => Payload, 0]]);
export var Caller = uni(n0, _Ca, 0, [_aAA], [0]);
export var ContentBlock = uni(n0, _CBon, 8, [_t], [0]);
export var FunctionSchema = uni(n0, _FSu, 0, [_fu], [[() => Functions, 0]]);
export var ImageInputSource = uni(n0, _IIS, 0, [_by], [21]);
export var InlineAgentResponseStream = uni(
  n0,
  _IARS,
  {
    [_stre]: 1,
  },
  [_ch, _tr, _rCet, _iSE, _vE, _rNFE, _sQEE, _tE, _aDE, _cE, _dFE, _bGE, _fi],
  [
    [() => InlineAgentPayloadPart, 0],
    [() => InlineAgentTracePart, 0],
    [() => InlineAgentReturnControlPayload, 0],
    [() => InternalServerException, 0],
    [() => ValidationException, 0],
    [() => ResourceNotFoundException, 0],
    [() => ServiceQuotaExceededException, 0],
    [() => ThrottlingException, 0],
    [() => AccessDeniedException, 0],
    [() => ConflictException, 0],
    [() => DependencyFailedException, 0],
    [() => BadGatewayException, 0],
    [() => InlineAgentFilePart, 0],
  ]
);
export var InvocationInputMember = uni(
  n0,
  _IIM,
  0,
  [_aII, _fII],
  [
    [() => ApiInvocationInput, 0],
    [() => FunctionInvocationInput, 0],
  ]
);
export var InvocationResultMember = uni(n0, _IRM, 0, [_aR, _fRu], [[() => ApiResult, 0], () => FunctionResult]);
export var OrchestrationExecutor = uni(n0, _OE, 0, [_lam], [0]);
export var OrchestrationTrace = uni(
  n0,
  _OT,
  8,
  [_ra, _iInvo, _ob, _mII, _mIO],
  [
    [() => Rationale, 0],
    [() => InvocationInput, 0],
    [() => Observation, 0],
    [() => ModelInvocationInput, 0],
    [() => OrchestrationModelInvocationOutput, 0],
  ]
);
export var PostProcessingTrace = uni(
  n0,
  _PPT,
  8,
  [_mII, _mIO],
  [
    [() => ModelInvocationInput, 0],
    [() => PostProcessingModelInvocationOutput, 0],
  ]
);
export var PreProcessingTrace = uni(
  n0,
  _PPTr,
  8,
  [_mII, _mIO],
  [
    [() => ModelInvocationInput, 0],
    [() => PreProcessingModelInvocationOutput, 0],
  ]
);
export var ReasoningContentBlock = uni(n0, _RCB, 8, [_rT, _rCed], [[() => ReasoningTextBlock, 0], 21]);
export var ResponseStream = uni(
  n0,
  _RSes,
  {
    [_stre]: 1,
  },
  [_ch, _tr, _rCet, _iSE, _vE, _rNFE, _sQEE, _tE, _aDE, _cE, _dFE, _bGE, _mNRE, _fi],
  [
    [() => PayloadPart, 0],
    [() => TracePart, 0],
    [() => ReturnControlPayload, 0],
    [() => InternalServerException, 0],
    [() => ValidationException, 0],
    [() => ResourceNotFoundException, 0],
    [() => ServiceQuotaExceededException, 0],
    [() => ThrottlingException, 0],
    [() => AccessDeniedException, 0],
    [() => ConflictException, 0],
    [() => DependencyFailedException, 0],
    [() => BadGatewayException, 0],
    [() => ModelNotReadyException, 0],
    [() => FilePart, 0],
  ]
);
export var RetrieveAndGenerateStreamResponseOutput = uni(
  n0,
  _RAGSRO,
  {
    [_stre]: 1,
  },
  [_o, _cit, _g, _iSE, _vE, _rNFE, _sQEE, _tE, _aDE, _cE, _dFE, _bGE],
  [
    [() => RetrieveAndGenerateOutputEvent, 0],
    [() => CitationEvent, 0],
    () => GuardrailEvent,
    [() => InternalServerException, 0],
    [() => ValidationException, 0],
    [() => ResourceNotFoundException, 0],
    [() => ServiceQuotaExceededException, 0],
    [() => ThrottlingException, 0],
    [() => AccessDeniedException, 0],
    [() => ConflictException, 0],
    [() => DependencyFailedException, 0],
    [() => BadGatewayException, 0],
  ]
);
export var RoutingClassifierTrace = uni(
  n0,
  _RCT,
  8,
  [_iInvo, _ob, _mII, _mIO],
  [
    [() => InvocationInput, 0],
    [() => Observation, 0],
    [() => ModelInvocationInput, 0],
    [() => RoutingClassifierModelInvocationOutput, 0],
  ]
);
export var Trace = uni(
  n0,
  _T,
  8,
  [_gTu, _pPT, _oTr, _pPTo, _rCT, _fT, _cOT],
  [
    [() => GuardrailTrace, 0],
    [() => PreProcessingTrace, 0],
    [() => OrchestrationTrace, 0],
    [() => PostProcessingTrace, 0],
    [() => RoutingClassifierTrace, 0],
    [() => FailureTrace, 0],
    [() => CustomOrchestrationTrace, 0],
  ]
);
export var DeleteAgentMemory = op(
  n0,
  _DAM,
  {
    [_h]: ["DELETE", "/agents/{agentId}/agentAliases/{agentAliasId}/memories", 202],
  },
  () => DeleteAgentMemoryRequest,
  () => DeleteAgentMemoryResponse
);
export var InvokeAgent = op(
  n0,
  _IA,
  {
    [_h]: ["POST", "/agents/{agentId}/agentAliases/{agentAliasId}/sessions/{sessionId}/text", 200],
  },
  () => InvokeAgentRequest,
  () => InvokeAgentResponse
);
export var InvokeInlineAgent = op(
  n0,
  _IIA,
  {
    [_h]: ["POST", "/agents/{sessionId}", 200],
  },
  () => InvokeInlineAgentRequest,
  () => InvokeInlineAgentResponse
);
export var RetrieveAndGenerate = op(
  n0,
  _RAG,
  {
    [_h]: ["POST", "/retrieveAndGenerate", 200],
  },
  () => RetrieveAndGenerateRequest,
  () => RetrieveAndGenerateResponse
);
export var RetrieveAndGenerateStream = op(
  n0,
  _RAGS,
  {
    [_h]: ["POST", "/retrieveAndGenerateStream", 200],
  },
  () => RetrieveAndGenerateStreamRequest,
  () => RetrieveAndGenerateStreamResponse
);
