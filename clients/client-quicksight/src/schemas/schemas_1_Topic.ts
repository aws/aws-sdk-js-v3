// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _AAI,
  _AAl,
  _AF,
  _AFP,
  _AInsw,
  _AIp,
  _AMg,
  _Anc,
  _Ans,
  _APB,
  _APBL,
  _Ar,
  _ATn,
  _BCF,
  _BCTRA,
  _BCTRAR,
  _BCTRARa,
  _BOSS,
  _CAFL,
  _CAFo,
  _CAon,
  _CATR,
  _CCE,
  _CCEL,
  _CCo,
  _CD,
  _CDRo,
  _CF,
  _CFat,
  _CFD,
  _CFF,
  _CFN,
  _CFNo,
  _CFRa,
  _CFRL,
  _CFS,
  _CFTa,
  _CIS,
  _CIu,
  _CMo,
  _CN,
  _CO,
  _Colu,
  _Cons,
  _COonf,
  _CSolumny,
  _CSur,
  _CTo,
  _CTRA,
  _CTRAr,
  _CTrea,
  _CTRreat,
  _CTRreate,
  _CTRS,
  _CTRSR,
  _CTRSRr,
  _CVe,
  _CVS,
  _CVSe,
  _DA,
  _DAa,
  _Data,
  _DDa,
  _DDCN,
  _De,
  _Def,
  _DFa,
  _DFe,
  _DFi,
  _DFO,
  _DIat,
  _DIis,
  _Dir,
  _DM,
  _DNa,
  _DRDG,
  _DRF,
  _DSat,
  _DSec,
  _DTescr,
  _DTRescrib,
  _DTRescribe,
  _DTRSe,
  _DTRSRes,
  _DTRSResc,
  _E,
  _ED,
  _EN,
  _ER,
  _ESn,
  _Fac,
  _FAM,
  _FAML,
  _FAo,
  _FCilte,
  _FCVa,
  _FCVS,
  _FD,
  _FDi,
  _Fi,
  _FN,
  _FNil,
  _FSil,
  _FTi,
  _Fu,
  _GBL,
  _GS,
  _h,
  _hQ,
  _IA,
  _Ide,
  _Iden,
  _IE,
  _IIIT,
  _Inc,
  _Inv,
  _Ir,
  _LNO,
  _LTRA,
  _LTRAR,
  _LTRARi,
  _LTRS,
  _LTRSR,
  _LTRSRi,
  _Max,
  _Met,
  _Metr,
  _MIe,
  _Min,
  _Mir,
  _MOe,
  _N,
  _n,
  _NA,
  _Na,
  _NAA,
  _NAIF,
  _NEa,
  _NEame,
  _NED,
  _NEDa,
  _NEDM,
  _NEF,
  _NEN,
  _NER,
  _NF,
  _NFT,
  _NFu,
  _NRF,
  _OF,
  _Of,
  _OFN,
  _OL,
  _Ope,
  _Oper,
  _P,
  _Pe,
  _PF,
  _PNr,
  _PRr,
  _PU,
  _PV,
  _Q,
  _QBIE,
  _R,
  _RAe,
  _RAep,
  _RCa,
  _RDFe,
  _RDFF,
  _RI,
  _Ro,
  _RS,
  _RSe,
  _S,
  _SAta,
  _SAu,
  _SCi,
  _SDo,
  _SET,
  _SIl,
  _Slo,
  _Slot,
  _SOp,
  _Sor,
  _SR,
  _St,
  _STem,
  _STN,
  _STor,
  _SVu,
  _Sy,
  _T,
  _t,
  _Ta,
  _TAo,
  _TBL,
  _TCFC,
  _TCFo,
  _TCFop,
  _TCFopi,
  _TCo,
  _TCOo,
  _TCop,
  _TCV,
  _TCVo,
  _TCVS,
  _TD,
  _TDRF,
  _Tem,
  _TFo,
  _TFop,
  _TG,
  _Ti,
  _TIo,
  _TIR,
  _TIRCA,
  _TIRCM,
  _TIRFE,
  _TIRFL,
  _TIRFO,
  _TIRGB,
  _TIRGBL,
  _TIRM,
  _TIRML,
  _TNE,
  _TNEF,
  _TNEo,
  _TNF,
  _TNRF,
  _TNy,
  _Top,
  _TP,
  _TRA,
  _TRAo,
  _TRDF,
  _TRFC,
  _TRi,
  _TRS,
  _TRSS,
  _TRSSo,
  _TSCo,
  _TSFC,
  _TSTo,
  _TTe,
  _TTop,
  _TUSV,
  _TVop,
  _TVopi,
  _UBCF,
  _UDQBA,
  _UDQBAR,
  _UDQBARp,
  _UEV,
  _UG,
  _UO,
  _US,
  _UTpd,
  _UTRpdat,
  _UTRpdate,
  _UTRS,
  _UTRSR,
  _UTRSRp,
  _V,
  _VI,
  _Visu,
  _VL,
  _VO,
  _WSi,
  Expression,
  n0,
  SensitiveString,
  TagList,
} from "./schemas_0";
import { InvalidTopicReviewedAnswers, SucceededTopicReviewedAnswers } from "./schemas_34_TopicReviewed";
import { SensitiveStringList } from "./schemas_85_Dashboard";

/* eslint no-var: 0 */

export var CustomInstructionsString = sim(n0, _CIS, 0, 8);
export var AggFunction = struct(n0, _AF, 0, [_A, _AFP, _Pe, _PF], [0, 128 | 0, 0, 0]);
export var AggregationPartitionBy = struct(n0, _APB, 0, [_FN, _TG], [0, 0]);
export var Anchor = struct(n0, _Anc, 0, [_ATn, _TG, _Of], [0, 0, 1]);
export var BatchCreateTopicReviewedAnswerRequest = struct(
  n0,
  _BCTRAR,
  0,
  [_AAI, _TIo, _Ans],
  [
    [0, 1],
    [0, 1],
    [() => CreateTopicReviewedAnswers, 0],
  ]
);
export var BatchCreateTopicReviewedAnswerResponse = struct(
  n0,
  _BCTRARa,
  0,
  [_TIo, _TAo, _SAu, _IA, _St, _RI],
  [0, 0, () => SucceededTopicReviewedAnswers, () => InvalidTopicReviewedAnswers, [1, 32], 0]
);
export var CellValueSynonym = struct(n0, _CVS, 0, [_CVe, _Sy], [0, 64 | 0]);
export var CollectiveConstant = struct(n0, _CCo, 0, [_VL], [64 | 0]);
export var CollectiveConstantEntry = struct(n0, _CCE, 0, [_CTo, _V], [0, 0]);
export var ComparativeOrder = struct(n0, _CO, 0, [_UO, _SOp, _TUSV], [0, 64 | 0, 0]);
export var ContributionAnalysisFactor = struct(n0, _CAFo, 0, [_FN], [0]);
export var ContributionAnalysisTimeRanges = struct(
  n0,
  _CATR,
  0,
  [_SR, _ER],
  [() => TopicIRFilterOption, () => TopicIRFilterOption]
);
export var CreateTopicRefreshScheduleRequest = struct(
  n0,
  _CTRSR,
  0,
  [_AAI, _TIo, _DA, _DNa, _RSe],
  [[0, 1], [0, 1], 0, 0, () => TopicRefreshSchedule]
);
export var CreateTopicRefreshScheduleResponse = struct(
  n0,
  _CTRSRr,
  0,
  [_TIo, _TAo, _DA, _St, _RI],
  [0, 0, 0, [1, 32], 0]
);
export var CreateTopicRequest = struct(
  n0,
  _CTRreat,
  0,
  [_AAI, _TIo, _Top, _Ta, _FAo, _CIu],
  [[0, 1], 0, [() => TopicDetails, 0], () => TagList, 64 | 0, [() => CustomInstructions, 0]]
);
export var CreateTopicResponse = struct(n0, _CTRreate, 0, [_Ar, _TIo, _RAe, _RI, _St], [0, 0, 0, 0, [1, 32]]);
export var CreateTopicReviewedAnswer = struct(
  n0,
  _CTRA,
  0,
  [_AInsw, _DA, _Q, _Mir, _PV, _Tem],
  [0, 0, 0, [() => TopicIR, 0], [() => TopicVisual, 0], () => TopicTemplate]
);
export var CustomInstructions = struct(n0, _CIu, 0, [_CIS], [[() => CustomInstructionsString, 0]]);
export var DataAggregation = struct(n0, _DAa, 0, [_DRDG, _DDCN], [0, 0]);
export var DatasetMetadata = struct(
  n0,
  _DM,
  0,
  [_DA, _DNa, _DDa, _DAa, _Fi, _Colu, _CF, _NEa],
  [
    0,
    0,
    0,
    () => DataAggregation,
    [() => TopicFilters, 0],
    [() => TopicColumns, 0],
    [() => TopicCalculatedFields, 0],
    () => TopicNamedEntities,
  ]
);
export var DefaultFormatting = struct(n0, _DFe, 0, [_DFi, _DFO], [0, () => DisplayFormatOptions]);
export var DescribeTopicRefreshScheduleRequest = struct(
  n0,
  _DTRSRes,
  0,
  [_AAI, _TIo, _DIat],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeTopicRefreshScheduleResponse = struct(
  n0,
  _DTRSResc,
  0,
  [_TIo, _TAo, _DA, _RSe, _St, _RI],
  [0, 0, 0, () => TopicRefreshSchedule, [1, 32], 0]
);
export var DescribeTopicRequest = struct(
  n0,
  _DTRescrib,
  0,
  [_AAI, _TIo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeTopicResponse = struct(
  n0,
  _DTRescribe,
  0,
  [_Ar, _TIo, _Top, _RI, _St, _CIu],
  [0, 0, [() => TopicDetails, 0], 0, [1, 32], [() => CustomInstructions, 0]]
);
export var DisplayFormatOptions = struct(
  n0,
  _DFO,
  0,
  [_UBCF, _BCF, _DFa, _DSec, _GS, _UG, _FD, _P, _S, _US, _NF, _CSur],
  [2, 0, 0, 0, 0, 2, 1, 0, 0, 0, () => NegativeFormat, 0]
);
export var FilterAggMetrics = struct(n0, _FAM, 0, [_MOe, _Fu, _SDo], [() => Identifier, 0, 0]);
export var Identifier = struct(n0, _Ide, 0, [_Iden], [0]);
export var ListTopicRefreshSchedulesRequest = struct(
  n0,
  _LTRSR,
  0,
  [_AAI, _TIo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var ListTopicRefreshSchedulesResponse = struct(
  n0,
  _LTRSRi,
  0,
  [_TIo, _TAo, _RS, _St, _RI],
  [0, 0, () => TopicRefreshScheduleSummaries, [1, 32], 0]
);
export var ListTopicReviewedAnswersRequest = struct(
  n0,
  _LTRAR,
  0,
  [_AAI, _TIo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var ListTopicReviewedAnswersResponse = struct(
  n0,
  _LTRARi,
  0,
  [_TIo, _TAo, _Ans, _St, _RI],
  [0, 0, [() => TopicReviewedAnswers, 0], [1, 32], 0]
);
export var NamedEntityDefinition = struct(
  n0,
  _NED,
  0,
  [_FN, _PNr, _PRr, _PU, _Met],
  [0, 0, 0, 0, () => NamedEntityDefinitionMetric]
);
export var NamedEntityDefinitionMetric = struct(n0, _NEDM, 0, [_A, _AFP], [0, 128 | 0]);
export var NamedEntityRef = struct(n0, _NER, 0, [_NEN], [0]);
export var NegativeFormat = struct(n0, _NF, 0, [_P, _S], [0, 0]);
export var RangeConstant = struct(n0, _RCa, 0, [_Min, _Max], [0, 0]);
export var SemanticEntityType = struct(n0, _SET, 0, [_TNy, _STN, _TP], [0, 0, 128 | 0]);
export var SemanticType = struct(
  n0,
  _STem,
  0,
  [_TNy, _STN, _TP, _TCV, _TCVS, _FCVa, _FCVS],
  [
    0,
    0,
    128 | 0,
    [() => SensitiveString, 0],
    [() => SensitiveStringList, 0],
    [() => SensitiveString, 0],
    [() => SensitiveStringList, 0],
  ]
);
export var Slot = struct(n0, _Slo, 0, [_SIl, _VI], [0, 0]);
export var TopicCalculatedField = struct(
  n0,
  _TCFo,
  0,
  [_CFN, _CFD, _E, _CFS, _IIIT, _DIis, _CDRo, _TG, _DFe, _A, _CO, _STem, _AAl, _NAA, _NAIF, _CVSe, _NA],
  [
    0,
    0,
    [() => Expression, 0],
    64 | 0,
    2,
    2,
    0,
    0,
    () => DefaultFormatting,
    0,
    () => ComparativeOrder,
    [() => SemanticType, 0],
    64 | 0,
    64 | 0,
    2,
    () => CellValueSynonyms,
    2,
  ]
);
export var TopicCategoryFilter = struct(
  n0,
  _TCFop,
  0,
  [_CFF, _CFTa, _Cons, _Inv],
  [0, 0, [() => TopicCategoryFilterConstant, 0], 2]
);
export var TopicCategoryFilterConstant = struct(n0, _TCFC, 8, [_CTo, _SCi, _CCo], [0, 0, () => CollectiveConstant]);
export var TopicColumn = struct(
  n0,
  _TCo,
  0,
  [_CN, _CFNo, _CD, _CSolumny, _CDRo, _A, _IIIT, _DIis, _CO, _STem, _TG, _AAl, _NAA, _DFe, _NAIF, _CVSe, _NA],
  [
    0,
    0,
    0,
    64 | 0,
    0,
    0,
    2,
    2,
    () => ComparativeOrder,
    [() => SemanticType, 0],
    0,
    64 | 0,
    64 | 0,
    () => DefaultFormatting,
    2,
    () => CellValueSynonyms,
    2,
  ]
);
export var TopicConfigOptions = struct(n0, _TCOo, 0, [_QBIE], [2]);
export var TopicConstantValue = struct(
  n0,
  _TCVo,
  0,
  [_CTo, _V, _Min, _Max, _VL],
  [0, 0, 0, 0, () => CollectiveConstantEntryList]
);
export var TopicDateRangeFilter = struct(n0, _TDRF, 0, [_Inc, _Cons], [2, [() => TopicRangeFilterConstant, 0]]);
export var TopicDetails = struct(
  n0,
  _TD,
  0,
  [_N, _De, _UEV, _DSat, _COonf],
  [0, 0, 0, [() => Datasets, 0], () => TopicConfigOptions]
);
export var TopicFilter = struct(
  n0,
  _TFo,
  0,
  [_FDi, _FCilte, _FNil, _FSil, _OFN, _FTi, _CFat, _NEF, _NRF, _DRF, _RDFe, _NFu],
  [
    0,
    0,
    0,
    64 | 0,
    0,
    0,
    [() => TopicCategoryFilter, 0],
    [() => TopicNumericEqualityFilter, 0],
    [() => TopicNumericRangeFilter, 0],
    [() => TopicDateRangeFilter, 0],
    [() => TopicRelativeDateFilter, 0],
    [() => TopicNullFilter, 0],
  ]
);
export var TopicIR = struct(
  n0,
  _TIR,
  0,
  [_Metr, _GBL, _Fi, _Sor, _CAon, _Visu],
  [
    [() => TopicIRMetricList, 0],
    () => TopicIRGroupByList,
    () => TopicIRFilterList,
    () => TopicSortClause,
    () => TopicIRContributionAnalysis,
    () => VisualOptions,
  ]
);
export var TopicIRComparisonMethod = struct(n0, _TIRCM, 0, [_T, _Pe, _WSi], [0, 0, 1]);
export var TopicIRContributionAnalysis = struct(
  n0,
  _TIRCA,
  0,
  [_Fac, _TRi, _Dir, _STor],
  [() => ContributionAnalysisFactorsList, () => ContributionAnalysisTimeRanges, 0, 0]
);
export var TopicIRFilterOption = struct(
  n0,
  _TIRFO,
  0,
  [_FTi, _FCilte, _OF, _Fu, _Cons, _Inv, _NFu, _A, _AFP, _APB, _R, _Inc, _TG, _LNO, _AMg, _TBL, _SDo, _Anc],
  [
    0,
    0,
    () => Identifier,
    0,
    () => TopicConstantValue,
    2,
    0,
    0,
    128 | 0,
    () => AggregationPartitionByList,
    () => TopicConstantValue,
    2,
    0,
    () => TopicConstantValue,
    () => FilterAggMetricsList,
    () => TopicConstantValue,
    0,
    () => Anchor,
  ]
);
export var TopicIRGroupBy = struct(
  n0,
  _TIRGB,
  0,
  [_FN, _TG, _Sor, _DFi, _DFO, _NEame],
  [() => Identifier, 0, () => TopicSortClause, 0, () => DisplayFormatOptions, () => NamedEntityRef]
);
export var TopicIRMetric = struct(
  n0,
  _TIRM,
  0,
  [_MIe, _Fu, _Ope, _CMo, _E, _CFRa, _DFi, _DFO, _NEame],
  [
    () => Identifier,
    () => AggFunction,
    () => OperandList,
    () => TopicIRComparisonMethod,
    [() => Expression, 0],
    () => CalculatedFieldReferenceList,
    0,
    () => DisplayFormatOptions,
    () => NamedEntityRef,
  ]
);
export var TopicNamedEntity = struct(
  n0,
  _TNE,
  0,
  [_EN, _ED, _ESn, _SET, _Def],
  [0, 0, 64 | 0, () => SemanticEntityType, () => NamedEntityDefinitions]
);
export var TopicNullFilter = struct(n0, _TNF, 0, [_NFT, _Cons, _Inv], [0, [() => TopicSingularFilterConstant, 0], 2]);
export var TopicNumericEqualityFilter = struct(n0, _TNEF, 0, [_Cons, _A], [[() => TopicSingularFilterConstant, 0], 0]);
export var TopicNumericRangeFilter = struct(
  n0,
  _TNRF,
  0,
  [_Inc, _Cons, _A],
  [2, [() => TopicRangeFilterConstant, 0], 0]
);
export var TopicRangeFilterConstant = struct(n0, _TRFC, 8, [_CTo, _RCa], [0, () => RangeConstant]);
export var TopicRefreshSchedule = struct(n0, _TRS, 0, [_IE, _BOSS, _SAta, _Ti, _RAep, _TSTo], [2, 2, 4, 0, 0, 0]);
export var TopicRefreshScheduleSummary = struct(
  n0,
  _TRSS,
  0,
  [_DIat, _DA, _DNa, _RSe],
  [0, 0, 0, () => TopicRefreshSchedule]
);
export var TopicRelativeDateFilter = struct(
  n0,
  _TRDF,
  0,
  [_TG, _RDFF, _Cons],
  [0, 0, [() => TopicSingularFilterConstant, 0]]
);
export var TopicReviewedAnswer = struct(
  n0,
  _TRA,
  0,
  [_Ar, _AInsw, _DA, _Q, _Mir, _PV, _Tem],
  [0, 0, 0, 0, [() => TopicIR, 0], [() => TopicVisual, 0], () => TopicTemplate]
);
export var TopicSingularFilterConstant = struct(n0, _TSFC, 8, [_CTo, _SCi], [0, 0]);
export var TopicSortClause = struct(n0, _TSCo, 0, [_Oper, _SDo], [() => Identifier, 0]);
export var TopicTemplate = struct(n0, _TTop, 0, [_TTe, _Slot], [0, () => Slots]);
export var TopicVisual = struct(
  n0,
  _TVop,
  0,
  [_VI, _Ro, _Ir, _SVu],
  [0, 0, [() => TopicIR, 0], [() => TopicVisuals, 0]]
);
export var UpdateDefaultQBusinessApplicationRequest = struct(
  n0,
  _UDQBAR,
  0,
  [_AAI, _Na, _AIp],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    0,
  ]
);
export var UpdateDefaultQBusinessApplicationResponse = struct(n0, _UDQBARp, 0, [_RI, _St], [0, [1, 32]]);
export var UpdateTopicRefreshScheduleRequest = struct(
  n0,
  _UTRSR,
  0,
  [_AAI, _TIo, _DIat, _RSe],
  [[0, 1], [0, 1], [0, 1], () => TopicRefreshSchedule]
);
export var UpdateTopicRefreshScheduleResponse = struct(
  n0,
  _UTRSRp,
  0,
  [_TIo, _TAo, _DA, _St, _RI],
  [0, 0, 0, [1, 32], 0]
);
export var UpdateTopicRequest = struct(
  n0,
  _UTRpdat,
  0,
  [_AAI, _TIo, _Top, _CIu],
  [
    [0, 1],
    [0, 1],
    [() => TopicDetails, 0],
    [() => CustomInstructions, 0],
  ]
);
export var UpdateTopicResponse = struct(n0, _UTRpdate, 0, [_TIo, _Ar, _RAe, _RI, _St], [0, 0, 0, 0, [1, 32]]);
export var VisualOptions = struct(n0, _VO, 0, [_t], [0]);
export var AggregationPartitionByList = list(n0, _APBL, 0, () => AggregationPartitionBy);
export var AuthorSpecifiedAggregations = 64 | 0;

export var CalculatedFieldReferenceList = list(n0, _CFRL, 0, () => Identifier);
export var CellValueSynonyms = list(n0, _CVSe, 0, () => CellValueSynonym);
export var CollectiveConstantEntryList = list(n0, _CCEL, 0, () => CollectiveConstantEntry);
export var ContributionAnalysisFactorsList = list(n0, _CAFL, 0, () => ContributionAnalysisFactor);
export var CreateTopicReviewedAnswers = list(n0, _CTRAr, 0, [() => CreateTopicReviewedAnswer, 0]);
export var Datasets = list(n0, _Data, 0, [() => DatasetMetadata, 0]);
export var FilterAggMetricsList = list(n0, _FAML, 0, () => FilterAggMetrics);
export var NamedEntityDefinitions = list(n0, _NEDa, 0, () => NamedEntityDefinition);
export var OperandList = list(n0, _OL, 0, () => Identifier);
export var Slots = list(n0, _Slot, 0, () => Slot);
export var Synonyms = 64 | 0;

export var TopicCalculatedFields = list(n0, _TCFopi, 0, [() => TopicCalculatedField, 0]);
export var TopicColumns = list(n0, _TCop, 0, [() => TopicColumn, 0]);
export var TopicFilters = list(n0, _TFop, 0, [() => TopicFilter, 0]);
export var TopicIRFilterEntry = list(n0, _TIRFE, 0, () => TopicIRFilterOption);
export var TopicIRFilterList = list(n0, _TIRFL, 0, () => TopicIRFilterEntry);
export var TopicIRGroupByList = list(n0, _TIRGBL, 0, () => TopicIRGroupBy);
export var TopicIRMetricList = list(n0, _TIRML, 0, [() => TopicIRMetric, 0]);
export var TopicNamedEntities = list(n0, _TNEo, 0, () => TopicNamedEntity);
export var TopicRefreshScheduleSummaries = list(n0, _TRSSo, 0, () => TopicRefreshScheduleSummary);
export var TopicReviewedAnswers = list(n0, _TRAo, 0, [() => TopicReviewedAnswer, 0]);
export var TopicVisuals = list(n0, _TVopi, 0, [() => TopicVisual, 0]);
export var AggFunctionParamMap = 128 | 0;

export var AggregationFunctionParameters = 128 | 0;

export var TypeParameters = 128 | 0;

export var BatchCreateTopicReviewedAnswer = op(
  n0,
  _BCTRA,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/topics/{TopicId}/batch-create-reviewed-answers", 200],
  },
  () => BatchCreateTopicReviewedAnswerRequest,
  () => BatchCreateTopicReviewedAnswerResponse
);
export var CreateTopic = op(
  n0,
  _CTrea,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/topics", 200],
  },
  () => CreateTopicRequest,
  () => CreateTopicResponse
);
export var CreateTopicRefreshSchedule = op(
  n0,
  _CTRS,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/topics/{TopicId}/schedules", 200],
  },
  () => CreateTopicRefreshScheduleRequest,
  () => CreateTopicRefreshScheduleResponse
);
export var DescribeTopic = op(
  n0,
  _DTescr,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/topics/{TopicId}", 200],
  },
  () => DescribeTopicRequest,
  () => DescribeTopicResponse
);
export var DescribeTopicRefreshSchedule = op(
  n0,
  _DTRSe,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/topics/{TopicId}/schedules/{DatasetId}", 200],
  },
  () => DescribeTopicRefreshScheduleRequest,
  () => DescribeTopicRefreshScheduleResponse
);
export var ListTopicRefreshSchedules = op(
  n0,
  _LTRS,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/topics/{TopicId}/schedules", 200],
  },
  () => ListTopicRefreshSchedulesRequest,
  () => ListTopicRefreshSchedulesResponse
);
export var ListTopicReviewedAnswers = op(
  n0,
  _LTRA,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/topics/{TopicId}/reviewed-answers", 200],
  },
  () => ListTopicReviewedAnswersRequest,
  () => ListTopicReviewedAnswersResponse
);
export var UpdateDefaultQBusinessApplication = op(
  n0,
  _UDQBA,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/default-qbusiness-application", 200],
  },
  () => UpdateDefaultQBusinessApplicationRequest,
  () => UpdateDefaultQBusinessApplicationResponse
);
export var UpdateTopic = op(
  n0,
  _UTpd,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/topics/{TopicId}", 200],
  },
  () => UpdateTopicRequest,
  () => UpdateTopicResponse
);
export var UpdateTopicRefreshSchedule = op(
  n0,
  _UTRS,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/topics/{TopicId}/schedules/{DatasetId}", 200],
  },
  () => UpdateTopicRefreshScheduleRequest,
  () => UpdateTopicRefreshScheduleResponse
);
