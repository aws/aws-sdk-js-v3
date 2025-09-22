// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aAA,
  _AFNC,
  _aMRF,
  _an,
  _ar,
  _ATC,
  _ATCu,
  _au,
  _bAA,
  _bN,
  _bRC,
  _cA,
  _ca,
  _cau,
  _CB,
  _CBo,
  _CCFVD,
  _cCont,
  _cCy,
  _cEKA,
  _CF,
  _CFNC,
  _CFNCo,
  _CFR,
  _CFRr,
  _CFV,
  _CFVR,
  _CFVRr,
  _ch,
  _co,
  _cod,
  _coll,
  _con,
  _cond,
  _condi,
  _conf,
  _conn,
  _cont,
  _cP,
  _CPB,
  _CPTC,
  _cT,
  _d,
  _da,
  _dC,
  _dCE,
  _DCEFVD,
  _DCFVD,
  _de,
  _det,
  _eRA,
  _eT,
  _exp,
  _FC,
  _FCC,
  _FCCC,
  _FCE,
  _FCl,
  _FClo,
  _FClow,
  _FD,
  _FDCC,
  _FFR,
  _FFRi,
  _fI,
  _FN,
  _fN,
  _FNC,
  _FNI,
  _FNIE,
  _FNIl,
  _FNl,
  _FNO,
  _FNOl,
  _fTE,
  _fTI,
  _FV,
  _fV,
  _FVD,
  _FVl,
  _gC,
  _GF,
  _GFR,
  _GFRe,
  _GFV,
  _GFVR,
  _GFVRe,
  _h,
  _IC,
  _iCDT,
  _ICDTFVD,
  _ICFNC,
  _iCn,
  _iCnf,
  _iCnl,
  _id,
  _IFNC,
  _IFNCt,
  _iLB,
  _ILBFVD,
  _in,
  _inl,
  _iNN,
  _inp,
  _iNT,
  _iSn,
  _it,
  _iV,
  _j,
  _kB,
  _KBFNC,
  _kBI,
  _KBOC,
  _KBPT,
  _KBTP,
  _l,
  _lA,
  _la,
  _LCFNC,
  _lCo,
  _le,
  _lF,
  _LFFNC,
  _LFNC,
  _LFNCo,
  _lI,
  _LIFNC,
  _lINT,
  _LINTFVD,
  _lIo,
  _lN,
  _lo,
  _M,
  _m,
  _mA,
  _mCC,
  _MCCFVD,
  _mCE,
  _mCe,
  _MCEFVD,
  _MCFR,
  _mCo,
  _mDC,
  _MDCFVD,
  _Me,
  _me,
  _mEN,
  _MENFVD,
  _mI,
  _mIa,
  _mLCN,
  _MLCNFVD,
  _MLCNFVDu,
  _mLCNu,
  _mLIN,
  _MLINFVD,
  _MLINFVDu,
  _mLINu,
  _mNC,
  _MNCFVD,
  _mNI,
  _mNIC,
  _MNICFVD,
  _mNIE,
  _MNIEFVD,
  _MNIFVD,
  _mNIT,
  _MNITFVD,
  _mNO,
  _MNOFVD,
  _mNOT,
  _MNOTFVD,
  _mSN,
  _MSNFVD,
  _mTa,
  _n,
  _no,
  _nod,
  _nOR,
  _nORR,
  _o,
  _oC,
  _OFNC,
  _ou,
  _pAr,
  _pC,
  _PCe,
  _PFNC,
  _PFNIC,
  _PFNRC,
  _PFNSC,
  _PIC,
  _PIV,
  _PIVL,
  _PMIC,
  _pr,
  _PTC,
  _pTr,
  _r,
  _rCer,
  _res,
  _ret,
  _RFNC,
  _RFNSC,
  _RFNSCe,
  _RMSMC,
  _s,
  _s_,
  _sC,
  _SCB,
  _SCBy,
  _sCer,
  _se,
  _SFNC,
  _SFNSC,
  _SFNSCt,
  _sM,
  _sMC,
  _sO,
  _so,
  _sS,
  _st,
  _STC,
  _sto,
  _t,
  _ta,
  _tar,
  _TC,
  _tC,
  _tCem,
  _TCo,
  _tCo,
  _te,
  _tex,
  _tI,
  _TIS,
  _To,
  _to,
  _Too,
  _too,
  _TP,
  _tP,
  _tPT,
  _TPTC,
  _TS,
  _tS,
  _tT,
  _uA,
  _uCC,
  _UCCFVD,
  _UCCFVDn,
  _uCCn,
  _uCS,
  _UCSFVD,
  _uCSO,
  _UCSOFVD,
  _uCT,
  _UCTFVD,
  _uCTI,
  _UCTIFVD,
  _UF,
  _UFR,
  _UFRp,
  _UFVD,
  _uN,
  _un,
  _UNFVD,
  _uNI,
  _UNIFVD,
  _UNIFVDn,
  _uNIn,
  _uNO,
  _UNOFVD,
  _v,
  _val,
  _VFD,
  _VFDR,
  _VFDRa,
  _VSBRC,
  _VSBRMC,
  _VSRC,
  n0,
} from "./schemas_0";
import { GuardrailConfiguration } from "./schemas_11_Flow";

/* eslint no-var: 0 */

export var FlowConditionExpression = sim(n0, _FCE, 0, 8);
export var FlowNodeInputExpression = sim(n0, _FNIE, 0, 8);
export var InlineCode = sim(n0, _IC, 0, 8);
export var KnowledgeBaseTextPrompt = sim(n0, _KBTP, 0, 8);
export var TextPrompt = sim(n0, _TP, 0, 8);
export var AgentFlowNodeConfiguration = struct(n0, _AFNC, 0, [_aAA], [0]);
export var AnyToolChoice = struct(n0, _ATC, 0, [], []);
export var AutoToolChoice = struct(n0, _ATCu, 0, [], []);
export var CachePointBlock = struct(n0, _CPB, 0, [_t], [0]);
export var ChatPromptTemplateConfiguration = struct(
  n0,
  _CPTC,
  8,
  [_me, _s, _iV, _tC],
  [
    [() => Messages, 0],
    [() => SystemContentBlocks, 0],
    [() => PromptInputVariablesList, 0],
    [() => ToolConfiguration, 0],
  ]
);
export var CollectorFlowNodeConfiguration = struct(n0, _CFNC, 0, [], []);
export var ConditionFlowNodeConfiguration = struct(n0, _CFNCo, 0, [_co], [[() => FlowConditions, 0]]);
export var CreateFlowRequest = struct(
  n0,
  _CFR,
  0,
  [_n, _d, _eRA, _cEKA, _de, _cT, _ta],
  [0, 0, 0, 0, [() => FlowDefinition, 0], [0, 4], 128 | 0]
);
export var CreateFlowResponse = struct(
  n0,
  _CFRr,
  0,
  [_n, _d, _eRA, _cEKA, _id, _ar, _st, _cA, _uA, _v, _de],
  [0, 0, 0, 0, 0, 0, 0, 5, 5, 0, [() => FlowDefinition, 0]]
);
export var CreateFlowVersionRequest = struct(n0, _CFVR, 0, [_fI, _d, _cT], [[0, 1], 0, [0, 4]]);
export var CreateFlowVersionResponse = struct(
  n0,
  _CFVRr,
  0,
  [_n, _d, _eRA, _cEKA, _id, _ar, _st, _cA, _v, _de],
  [0, 0, 0, 0, 0, 0, 0, 5, 0, [() => FlowDefinition, 0]]
);
export var CyclicConnectionFlowValidationDetails = struct(n0, _CCFVD, 0, [_con], [0]);
export var DuplicateConditionExpressionFlowValidationDetails = struct(
  n0,
  _DCEFVD,
  0,
  [_no, _exp],
  [0, [() => FlowConditionExpression, 0]]
);
export var DuplicateConnectionsFlowValidationDetails = struct(n0, _DCFVD, 0, [_so, _tar], [0, 0]);
export var FieldForReranking = struct(n0, _FFR, 0, [_fN], [0]);
export var FlowCondition = struct(n0, _FC, 0, [_n, _exp], [0, [() => FlowConditionExpression, 0]]);
export var FlowConditionalConnectionConfiguration = struct(n0, _FCCC, 0, [_cond], [0]);
export var FlowConnection = struct(
  n0,
  _FCl,
  0,
  [_t, _n, _so, _tar, _conf],
  [0, 0, 0, 0, () => FlowConnectionConfiguration]
);
export var FlowDataConnectionConfiguration = struct(n0, _FDCC, 0, [_sO, _tI], [0, 0]);
export var FlowDefinition = struct(n0, _FD, 8, [_nod, _conn], [[() => FlowNodes, 0], () => FlowConnections]);
export var FlowNode = struct(
  n0,
  _FN,
  0,
  [_n, _t, _conf, _in, _o],
  [0, 0, [() => FlowNodeConfiguration, 0], [() => FlowNodeInputs, 0], () => FlowNodeOutputs]
);
export var FlowNodeInput = struct(n0, _FNI, 0, [_n, _t, _exp, _ca], [0, 0, [() => FlowNodeInputExpression, 0], 0]);
export var FlowNodeOutput = struct(n0, _FNO, 0, [_n, _t], [0, 0]);
export var FlowValidation = struct(n0, _FV, 0, [_m, _se, _det, _t], [0, 0, [() => FlowValidationDetails, 0], 0]);
export var GetFlowRequest = struct(n0, _GFR, 0, [_fI], [[0, 1]]);
export var GetFlowResponse = struct(
  n0,
  _GFRe,
  0,
  [_n, _d, _eRA, _cEKA, _id, _ar, _st, _cA, _uA, _v, _de, _val],
  [0, 0, 0, 0, 0, 0, 0, 5, 5, 0, [() => FlowDefinition, 0], [() => FlowValidations, 0]]
);
export var GetFlowVersionRequest = struct(
  n0,
  _GFVR,
  0,
  [_fI, _fV],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetFlowVersionResponse = struct(
  n0,
  _GFVRe,
  0,
  [_n, _d, _eRA, _cEKA, _id, _ar, _st, _cA, _v, _de],
  [0, 0, 0, 0, 0, 0, 0, 5, 0, [() => FlowDefinition, 0]]
);
export var IncompatibleConnectionDataTypeFlowValidationDetails = struct(n0, _ICDTFVD, 0, [_con], [0]);
export var InlineCodeFlowNodeConfiguration = struct(n0, _ICFNC, 0, [_cod, _l], [[() => InlineCode, 0], 0]);
export var InputFlowNodeConfiguration = struct(n0, _IFNC, 0, [], []);
export var InvalidLoopBoundaryFlowValidationDetails = struct(n0, _ILBFVD, 0, [_con, _so, _tar], [0, 0, 0]);
export var IteratorFlowNodeConfiguration = struct(n0, _IFNCt, 0, [], []);
export var KnowledgeBaseFlowNodeConfiguration = struct(
  n0,
  _KBFNC,
  0,
  [_kBI, _mI, _gC, _nOR, _pTr, _iCn, _rCer, _oC],
  [
    0,
    0,
    () => GuardrailConfiguration,
    1,
    [() => KnowledgeBasePromptTemplate, 0],
    () => PromptInferenceConfiguration,
    [() => VectorSearchRerankingConfiguration, 0],
    [() => KnowledgeBaseOrchestrationConfiguration, 0],
  ]
);
export var KnowledgeBaseOrchestrationConfiguration = struct(
  n0,
  _KBOC,
  0,
  [_pTr, _iCnf, _aMRF, _pC],
  [[() => KnowledgeBasePromptTemplate, 0], () => PromptInferenceConfiguration, 128 | 15, () => PerformanceConfiguration]
);
export var KnowledgeBasePromptTemplate = struct(n0, _KBPT, 0, [_tPT], [[() => KnowledgeBaseTextPrompt, 0]]);
export var LambdaFunctionFlowNodeConfiguration = struct(n0, _LFFNC, 0, [_lA], [0]);
export var LexFlowNodeConfiguration = struct(n0, _LFNC, 0, [_bAA, _lI], [0, 0]);
export var LoopControllerFlowNodeConfiguration = struct(n0, _LCFNC, 0, [_cCont, _mIa], [[() => FlowCondition, 0], 1]);
export var LoopFlowNodeConfiguration = struct(n0, _LFNCo, 0, [_de], [[() => FlowDefinition, 0]]);
export var LoopIncompatibleNodeTypeFlowValidationDetails = struct(n0, _LINTFVD, 0, [_no, _iNT, _iNN], [0, 0, 0]);
export var LoopInputFlowNodeConfiguration = struct(n0, _LIFNC, 0, [], []);
export var MalformedConditionExpressionFlowValidationDetails = struct(n0, _MCEFVD, 0, [_no, _cond, _cau], [0, 0, 0]);
export var MalformedNodeInputExpressionFlowValidationDetails = struct(n0, _MNIEFVD, 0, [_no, _inp, _cau], [0, 0, 0]);
export var Message = struct(n0, _M, 0, [_r, _cont], [0, [() => ContentBlocks, 0]]);
export var MetadataConfigurationForReranking = struct(
  n0,
  _MCFR,
  0,
  [_sM, _sMC],
  [0, [() => RerankingMetadataSelectiveModeConfiguration, 0]]
);
export var MismatchedNodeInputTypeFlowValidationDetails = struct(n0, _MNITFVD, 0, [_no, _inp, _eT], [0, 0, 0]);
export var MismatchedNodeOutputTypeFlowValidationDetails = struct(n0, _MNOTFVD, 0, [_no, _ou, _eT], [0, 0, 0]);
export var MissingConnectionConfigurationFlowValidationDetails = struct(n0, _MCCFVD, 0, [_con], [0]);
export var MissingDefaultConditionFlowValidationDetails = struct(n0, _MDCFVD, 0, [_no], [0]);
export var MissingEndingNodesFlowValidationDetails = struct(n0, _MENFVD, 0, [], []);
export var MissingLoopControllerNodeFlowValidationDetails = struct(n0, _MLCNFVD, 0, [_lN], [0]);
export var MissingLoopInputNodeFlowValidationDetails = struct(n0, _MLINFVD, 0, [_lN], [0]);
export var MissingNodeConfigurationFlowValidationDetails = struct(n0, _MNCFVD, 0, [_no], [0]);
export var MissingNodeInputFlowValidationDetails = struct(n0, _MNIFVD, 0, [_no, _inp], [0, 0]);
export var MissingNodeOutputFlowValidationDetails = struct(n0, _MNOFVD, 0, [_no, _ou], [0, 0]);
export var MissingStartingNodesFlowValidationDetails = struct(n0, _MSNFVD, 0, [], []);
export var MultipleLoopControllerNodesFlowValidationDetails = struct(n0, _MLCNFVDu, 0, [_lN], [0]);
export var MultipleLoopInputNodesFlowValidationDetails = struct(n0, _MLINFVDu, 0, [_lN], [0]);
export var MultipleNodeInputConnectionsFlowValidationDetails = struct(n0, _MNICFVD, 0, [_no, _inp], [0, 0]);
export var OutputFlowNodeConfiguration = struct(n0, _OFNC, 0, [], []);
export var PerformanceConfiguration = struct(n0, _PCe, 0, [_la], [0]);
export var PromptFlowNodeConfiguration = struct(
  n0,
  _PFNC,
  0,
  [_sC, _gC],
  [[() => PromptFlowNodeSourceConfiguration, 0], () => GuardrailConfiguration]
);
export var PromptFlowNodeInlineConfiguration = struct(
  n0,
  _PFNIC,
  0,
  [_tT, _tCem, _mI, _iCn, _aMRF],
  [0, [() => PromptTemplateConfiguration, 0], 0, () => PromptInferenceConfiguration, 15]
);
export var PromptFlowNodeResourceConfiguration = struct(n0, _PFNRC, 0, [_pAr], [0]);
export var PromptInputVariable = struct(n0, _PIV, 0, [_n], [0]);
export var PromptModelInferenceConfiguration = struct(n0, _PMIC, 0, [_te, _tP, _mTa, _sS], [1, 1, 1, 64 | 0]);
export var RetrievalFlowNodeConfiguration = struct(
  n0,
  _RFNC,
  0,
  [_sCer],
  [() => RetrievalFlowNodeServiceConfiguration]
);
export var RetrievalFlowNodeS3Configuration = struct(n0, _RFNSC, 0, [_bN], [0]);
export var SpecificToolChoice = struct(n0, _STC, 0, [_n], [0]);
export var StorageFlowNodeConfiguration = struct(n0, _SFNC, 0, [_sCer], [() => StorageFlowNodeServiceConfiguration]);
export var StorageFlowNodeS3Configuration = struct(n0, _SFNSC, 0, [_bN], [0]);
export var TextPromptTemplateConfiguration = struct(
  n0,
  _TPTC,
  8,
  [_tex, _cP, _iV],
  [[() => TextPrompt, 0], () => CachePointBlock, [() => PromptInputVariablesList, 0]]
);
export var ToolConfiguration = struct(
  n0,
  _TC,
  0,
  [_to, _tCo],
  [
    [() => Tools, 0],
    [() => ToolChoice, 0],
  ]
);
export var ToolSpecification = struct(n0, _TS, 0, [_n, _d, _iSn], [0, 0, () => ToolInputSchema]);
export var UnfulfilledNodeInputFlowValidationDetails = struct(n0, _UNIFVD, 0, [_no, _inp], [0, 0]);
export var UnknownConnectionConditionFlowValidationDetails = struct(n0, _UCCFVD, 0, [_con], [0]);
export var UnknownConnectionSourceFlowValidationDetails = struct(n0, _UCSFVD, 0, [_con], [0]);
export var UnknownConnectionSourceOutputFlowValidationDetails = struct(n0, _UCSOFVD, 0, [_con], [0]);
export var UnknownConnectionTargetFlowValidationDetails = struct(n0, _UCTFVD, 0, [_con], [0]);
export var UnknownConnectionTargetInputFlowValidationDetails = struct(n0, _UCTIFVD, 0, [_con], [0]);
export var UnknownNodeInputFlowValidationDetails = struct(n0, _UNIFVDn, 0, [_no, _inp], [0, 0]);
export var UnknownNodeOutputFlowValidationDetails = struct(n0, _UNOFVD, 0, [_no, _ou], [0, 0]);
export var UnreachableNodeFlowValidationDetails = struct(n0, _UNFVD, 0, [_no], [0]);
export var UnsatisfiedConnectionConditionsFlowValidationDetails = struct(n0, _UCCFVDn, 0, [_con], [0]);
export var UnspecifiedFlowValidationDetails = struct(n0, _UFVD, 0, [], []);
export var UpdateFlowRequest = struct(
  n0,
  _UFR,
  0,
  [_n, _d, _eRA, _cEKA, _de, _fI],
  [0, 0, 0, 0, [() => FlowDefinition, 0], [0, 1]]
);
export var UpdateFlowResponse = struct(
  n0,
  _UFRp,
  0,
  [_n, _d, _eRA, _cEKA, _id, _ar, _st, _cA, _uA, _v, _de],
  [0, 0, 0, 0, 0, 0, 0, 5, 5, 0, [() => FlowDefinition, 0]]
);
export var ValidateFlowDefinitionRequest = struct(n0, _VFDR, 0, [_de], [[() => FlowDefinition, 0]]);
export var ValidateFlowDefinitionResponse = struct(n0, _VFDRa, 0, [_val], [[() => FlowValidations, 0]]);
export var VectorSearchBedrockRerankingConfiguration = struct(
  n0,
  _VSBRC,
  0,
  [_mCo, _nORR, _mCe],
  [() => VectorSearchBedrockRerankingModelConfiguration, 1, [() => MetadataConfigurationForReranking, 0]]
);
export var VectorSearchBedrockRerankingModelConfiguration = struct(n0, _VSBRMC, 0, [_mA, _aMRF], [0, 128 | 15]);
export var VectorSearchRerankingConfiguration = struct(
  n0,
  _VSRC,
  0,
  [_t, _bRC],
  [0, [() => VectorSearchBedrockRerankingConfiguration, 0]]
);
export var ContentBlocks = list(n0, _CB, 0, [() => ContentBlock, 0]);
export var FieldsForReranking = list(n0, _FFRi, 8, () => FieldForReranking);
export var FlowConditions = list(n0, _FClo, 0, [() => FlowCondition, 0]);
export var FlowConnections = list(n0, _FClow, 0, () => FlowConnection);
export var FlowNodeInputs = list(n0, _FNIl, 0, [() => FlowNodeInput, 0]);
export var FlowNodeOutputs = list(n0, _FNOl, 0, () => FlowNodeOutput);
export var FlowNodes = list(n0, _FNl, 0, [() => FlowNode, 0]);
export var FlowValidations = list(n0, _FVl, 0, [() => FlowValidation, 0]);
export var Messages = list(n0, _Me, 0, [() => Message, 0]);
export var PromptInputVariablesList = list(n0, _PIVL, 8, () => PromptInputVariable);
export var SystemContentBlocks = list(n0, _SCB, 0, [() => SystemContentBlock, 0]);
export var Tools = list(n0, _To, 8, () => Tool);
export var AdditionalModelRequestFields = 128 | 15;

export var ContentBlock = uni(n0, _CBo, 8, [_tex, _cP], [0, () => CachePointBlock]);
export var FlowConnectionConfiguration = uni(
  n0,
  _FCC,
  0,
  [_da, _condi],
  [() => FlowDataConnectionConfiguration, () => FlowConditionalConnectionConfiguration]
);
export var FlowNodeConfiguration = uni(
  n0,
  _FNC,
  0,
  [_inp, _ou, _kB, _cond, _le, _pr, _lF, _sto, _a, _ret, _it, _coll, _iCnl, _lo, _lIo, _lCo],
  [
    () => InputFlowNodeConfiguration,
    () => OutputFlowNodeConfiguration,
    [() => KnowledgeBaseFlowNodeConfiguration, 0],
    [() => ConditionFlowNodeConfiguration, 0],
    () => LexFlowNodeConfiguration,
    [() => PromptFlowNodeConfiguration, 0],
    () => LambdaFunctionFlowNodeConfiguration,
    () => StorageFlowNodeConfiguration,
    () => AgentFlowNodeConfiguration,
    () => RetrievalFlowNodeConfiguration,
    () => IteratorFlowNodeConfiguration,
    () => CollectorFlowNodeConfiguration,
    [() => InlineCodeFlowNodeConfiguration, 0],
    [() => LoopFlowNodeConfiguration, 0],
    () => LoopInputFlowNodeConfiguration,
    [() => LoopControllerFlowNodeConfiguration, 0],
  ]
);
export var FlowValidationDetails = uni(
  n0,
  _FVD,
  0,
  [
    _cCy,
    _dC,
    _dCE,
    _uN,
    _uCS,
    _uCSO,
    _uCT,
    _uCTI,
    _uCC,
    _mCE,
    _mNIE,
    _mNIT,
    _mNOT,
    _iCDT,
    _mCC,
    _mDC,
    _mEN,
    _mNC,
    _mNI,
    _mNO,
    _mSN,
    _mNIC,
    _uNI,
    _uCCn,
    _un,
    _uNIn,
    _uNO,
    _mLIN,
    _mLCN,
    _mLINu,
    _mLCNu,
    _lINT,
    _iLB,
  ],
  [
    () => CyclicConnectionFlowValidationDetails,
    () => DuplicateConnectionsFlowValidationDetails,
    [() => DuplicateConditionExpressionFlowValidationDetails, 0],
    () => UnreachableNodeFlowValidationDetails,
    () => UnknownConnectionSourceFlowValidationDetails,
    () => UnknownConnectionSourceOutputFlowValidationDetails,
    () => UnknownConnectionTargetFlowValidationDetails,
    () => UnknownConnectionTargetInputFlowValidationDetails,
    () => UnknownConnectionConditionFlowValidationDetails,
    () => MalformedConditionExpressionFlowValidationDetails,
    () => MalformedNodeInputExpressionFlowValidationDetails,
    () => MismatchedNodeInputTypeFlowValidationDetails,
    () => MismatchedNodeOutputTypeFlowValidationDetails,
    () => IncompatibleConnectionDataTypeFlowValidationDetails,
    () => MissingConnectionConfigurationFlowValidationDetails,
    () => MissingDefaultConditionFlowValidationDetails,
    () => MissingEndingNodesFlowValidationDetails,
    () => MissingNodeConfigurationFlowValidationDetails,
    () => MissingNodeInputFlowValidationDetails,
    () => MissingNodeOutputFlowValidationDetails,
    () => MissingStartingNodesFlowValidationDetails,
    () => MultipleNodeInputConnectionsFlowValidationDetails,
    () => UnfulfilledNodeInputFlowValidationDetails,
    () => UnsatisfiedConnectionConditionsFlowValidationDetails,
    () => UnspecifiedFlowValidationDetails,
    () => UnknownNodeInputFlowValidationDetails,
    () => UnknownNodeOutputFlowValidationDetails,
    () => MissingLoopInputNodeFlowValidationDetails,
    () => MissingLoopControllerNodeFlowValidationDetails,
    () => MultipleLoopInputNodesFlowValidationDetails,
    () => MultipleLoopControllerNodesFlowValidationDetails,
    () => LoopIncompatibleNodeTypeFlowValidationDetails,
    () => InvalidLoopBoundaryFlowValidationDetails,
  ]
);
export var PromptFlowNodeSourceConfiguration = uni(
  n0,
  _PFNSC,
  0,
  [_res, _inl],
  [() => PromptFlowNodeResourceConfiguration, [() => PromptFlowNodeInlineConfiguration, 0]]
);
export var PromptInferenceConfiguration = uni(n0, _PIC, 0, [_tex], [() => PromptModelInferenceConfiguration]);
export var PromptTemplateConfiguration = uni(
  n0,
  _PTC,
  0,
  [_tex, _ch],
  [
    [() => TextPromptTemplateConfiguration, 0],
    [() => ChatPromptTemplateConfiguration, 0],
  ]
);
export var RerankingMetadataSelectiveModeConfiguration = uni(
  n0,
  _RMSMC,
  0,
  [_fTI, _fTE],
  [
    [() => FieldsForReranking, 0],
    [() => FieldsForReranking, 0],
  ]
);
export var RetrievalFlowNodeServiceConfiguration = uni(n0, _RFNSCe, 0, [_s_], [() => RetrievalFlowNodeS3Configuration]);
export var StorageFlowNodeServiceConfiguration = uni(n0, _SFNSCt, 0, [_s_], [() => StorageFlowNodeS3Configuration]);
export var SystemContentBlock = uni(n0, _SCBy, 8, [_tex, _cP], [0, () => CachePointBlock]);
export var Tool = uni(n0, _Too, 0, [_tS, _cP], [() => ToolSpecification, () => CachePointBlock]);
export var ToolChoice = uni(
  n0,
  _TCo,
  8,
  [_au, _an, _too],
  [() => AutoToolChoice, () => AnyToolChoice, () => SpecificToolChoice]
);
export var ToolInputSchema = uni(n0, _TIS, 0, [_j], [15]);
export var CreateFlow = op(
  n0,
  _CF,
  {
    [_h]: ["POST", "/flows/", 201],
  },
  () => CreateFlowRequest,
  () => CreateFlowResponse
);
export var CreateFlowVersion = op(
  n0,
  _CFV,
  {
    [_h]: ["POST", "/flows/{flowIdentifier}/versions", 201],
  },
  () => CreateFlowVersionRequest,
  () => CreateFlowVersionResponse
);
export var GetFlow = op(
  n0,
  _GF,
  {
    [_h]: ["GET", "/flows/{flowIdentifier}/", 200],
  },
  () => GetFlowRequest,
  () => GetFlowResponse
);
export var GetFlowVersion = op(
  n0,
  _GFV,
  {
    [_h]: ["GET", "/flows/{flowIdentifier}/versions/{flowVersion}/", 200],
  },
  () => GetFlowVersionRequest,
  () => GetFlowVersionResponse
);
export var UpdateFlow = op(
  n0,
  _UF,
  {
    [_h]: ["PUT", "/flows/{flowIdentifier}/", 200],
  },
  () => UpdateFlowRequest,
  () => UpdateFlowResponse
);
export var ValidateFlowDefinition = op(
  n0,
  _VFD,
  {
    [_h]: ["POST", "/flows/validate-definition", 200],
  },
  () => ValidateFlowDefinitionRequest,
  () => ValidateFlowDefinitionResponse
);
