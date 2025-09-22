// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  IdempotentParameterMismatch as __IdempotentParameterMismatch,
  InvalidResultTokenException as __InvalidResultTokenException,
  MaxNumberOfConfigRulesExceededException as __MaxNumberOfConfigRulesExceededException,
} from "../models/index";
import {
  _A,
  _AER,
  _AERg,
  _AERL,
  _AIc,
  _ARw,
  _C,
  _CAN,
  _CB,
  _CBR,
  _CBRo,
  _cl,
  _CPDu,
  _CPEF,
  _CPER,
  _CPN,
  _CPRER,
  _CPRERL,
  _CRAo,
  _CRI,
  _CRIo,
  _CRIT,
  _CRN,
  _CRNo,
  _CRo,
  _CRon,
  _CRS,
  _CRT,
  _CRTo,
  _CT,
  _CTl,
  _CTo,
  _D,
  _DCBR,
  _DCBRR,
  _DCBRRe,
  _DCRes,
  _DCRF,
  _DCRRes,
  _DCRResc,
  _E,
  _e,
  _EC,
  _ECI,
  _EDLD,
  _EE,
  _EM,
  _EMC,
  _EMv,
  _ER,
  _ERI,
  _ERQ,
  _ERv,
  _ES,
  _EST,
  _ESv,
  _ETv,
  _Ev,
  _F,
  _FE,
  _FR,
  _GACDBCR,
  _GACDBCRR,
  _GACDBCRRe,
  _GCDBCR,
  _GCDBCRR,
  _GCDBCRRe,
  _GCDBR,
  _GCDBRR,
  _GCDBRRe,
  _GCPCD,
  _GCPCDR,
  _GCPCDRe,
  _GRES,
  _GRESR,
  _GRESRe,
  _hE,
  _IP,
  _IPM,
  _IRTE,
  _L,
  _M,
  _m,
  _MEF,
  _MNOCREE,
  _MT,
  _NT,
  _O,
  _OT,
  _PCR,
  _PCRR,
  _PE,
  _PEE,
  _PEER,
  _PEERu,
  _PER,
  _PERu,
  _PR,
  _PT,
  _RCeso,
  _RCST,
  _RD,
  _REI,
  _RI,
  _RIes,
  _RRT,
  _RT,
  _RTes,
  _S,
  _SDo,
  _SDou,
  _SIo,
  _So,
  _SRERta,
  _SRERtar,
  _SREt,
  _St,
  _Ta,
  _TK,
  _TM,
  _TVa,
  n0,
  Unit,
} from "./schemas_0";
import { TagsList } from "./schemas_18_Put";
import { Compliance } from "./schemas_32_Compliance";

/* eslint no-var: 0 */

export var AggregateEvaluationResult = struct(
  n0,
  _AER,
  0,
  [_ERI, _CT, _RRT, _CRIT, _A, _AIc, _ARw],
  [() => EvaluationResultIdentifier, 0, 4, 4, 0, 0, 0]
);
export var ComplianceByResource = struct(n0, _CBR, 0, [_RT, _RI, _C], [0, 0, () => Compliance]);
export var ConfigRule = struct(
  n0,
  _CRo,
  0,
  [_CRN, _CRAo, _CRI, _D, _S, _So, _IP, _MEF, _CRS, _CB, _EM],
  [0, 0, 0, 0, () => Scope, () => Source, 0, 0, 0, 0, () => EvaluationModes]
);
export var ConformancePackEvaluationFilters = struct(n0, _CPEF, 0, [_CRNo, _CT, _RT, _RIes], [64 | 0, 0, 0, 64 | 0]);
export var ConformancePackEvaluationResult = struct(
  n0,
  _CPER,
  0,
  [_CT, _ERI, _CRIT, _RRT, _A],
  [0, () => EvaluationResultIdentifier, 4, 4, 0]
);
export var CustomPolicyDetails = struct(n0, _CPDu, 0, [_PR, _PT, _EDLD], [0, 0, 2]);
export var DescribeComplianceByResourceRequest = struct(n0, _DCBRR, 0, [_RT, _RI, _CTo, _L, _NT], [0, 0, 64 | 0, 1, 0]);
export var DescribeComplianceByResourceResponse = struct(
  n0,
  _DCBRRe,
  0,
  [_CBRo, _NT],
  [() => ComplianceByResources, 0]
);
export var DescribeConfigRulesFilters = struct(n0, _DCRF, 0, [_EMv], [0]);
export var DescribeConfigRulesRequest = struct(
  n0,
  _DCRRes,
  0,
  [_CRNo, _NT, _F],
  [64 | 0, 0, () => DescribeConfigRulesFilters]
);
export var DescribeConfigRulesResponse = struct(n0, _DCRResc, 0, [_CRon, _NT], [() => ConfigRules, 0]);
export var Evaluation = struct(n0, _E, 0, [_CRT, _CRIo, _CT, _A, _OT], [0, 0, 0, 0, 4]);
export var EvaluationContext = struct(n0, _EC, 0, [_ECI], [0]);
export var EvaluationModeConfiguration = struct(n0, _EMC, 0, [_M], [0]);
export var EvaluationResult = struct(
  n0,
  _ER,
  0,
  [_ERI, _CT, _RRT, _CRIT, _A, _RTes],
  [() => EvaluationResultIdentifier, 0, 4, 4, 0, 0]
);
export var EvaluationResultIdentifier = struct(n0, _ERI, 0, [_ERQ, _OT, _REI], [() => EvaluationResultQualifier, 4, 0]);
export var EvaluationResultQualifier = struct(n0, _ERQ, 0, [_CRN, _RT, _RI, _EMv], [0, 0, 0, 0]);
export var EvaluationStatus = struct(n0, _ES, 0, [_St, _FR], [0, 0]);
export var ExternalEvaluation = struct(n0, _EE, 0, [_CRT, _CRIo, _CT, _A, _OT], [0, 0, 0, 0, 4]);
export var GetAggregateComplianceDetailsByConfigRuleRequest = struct(
  n0,
  _GACDBCRR,
  0,
  [_CAN, _CRN, _AIc, _ARw, _CT, _L, _NT],
  [0, 0, 0, 0, 0, 1, 0]
);
export var GetAggregateComplianceDetailsByConfigRuleResponse = struct(
  n0,
  _GACDBCRRe,
  0,
  [_AERg, _NT],
  [() => AggregateEvaluationResultList, 0]
);
export var GetComplianceDetailsByConfigRuleRequest = struct(n0, _GCDBCRR, 0, [_CRN, _CTo, _L, _NT], [0, 64 | 0, 1, 0]);
export var GetComplianceDetailsByConfigRuleResponse = struct(
  n0,
  _GCDBCRRe,
  0,
  [_ERv, _NT],
  [() => EvaluationResults, 0]
);
export var GetComplianceDetailsByResourceRequest = struct(
  n0,
  _GCDBRR,
  0,
  [_RT, _RI, _CTo, _NT, _REI],
  [0, 0, 64 | 0, 0, 0]
);
export var GetComplianceDetailsByResourceResponse = struct(n0, _GCDBRRe, 0, [_ERv, _NT], [() => EvaluationResults, 0]);
export var GetConformancePackComplianceDetailsRequest = struct(
  n0,
  _GCPCDR,
  0,
  [_CPN, _F, _L, _NT],
  [0, () => ConformancePackEvaluationFilters, 1, 0]
);
export var GetConformancePackComplianceDetailsResponse = struct(
  n0,
  _GCPCDRe,
  0,
  [_CPN, _CPRER, _NT],
  [0, () => ConformancePackRuleEvaluationResultsList, 0]
);
export var GetResourceEvaluationSummaryRequest = struct(n0, _GRESR, 0, [_REI], [0]);
export var GetResourceEvaluationSummaryResponse = struct(
  n0,
  _GRESRe,
  0,
  [_REI, _EMv, _ES, _EST, _C, _EC, _RD],
  [0, 0, () => EvaluationStatus, 4, 0, () => EvaluationContext, () => ResourceDetails]
);
export var IdempotentParameterMismatch = error(
  n0,
  _IPM,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_m],
  [0],

  __IdempotentParameterMismatch
);
export var InvalidResultTokenException = error(
  n0,
  _IRTE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidResultTokenException
);
export var MaxNumberOfConfigRulesExceededException = error(
  n0,
  _MNOCREE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __MaxNumberOfConfigRulesExceededException
);
export var PutConfigRuleRequest = struct(n0, _PCRR, 0, [_CRo, _Ta], [() => ConfigRule, () => TagsList]);
export var PutEvaluationsRequest = struct(n0, _PER, 0, [_Ev, _RTes, _TM], [() => Evaluations, 0, 2]);
export var PutEvaluationsResponse = struct(n0, _PERu, 0, [_FE], [() => Evaluations]);
export var PutExternalEvaluationRequest = struct(n0, _PEER, 0, [_CRN, _EE], [0, () => ExternalEvaluation]);
export var PutExternalEvaluationResponse = struct(n0, _PEERu, 0, [], []);
export var ResourceDetails = struct(n0, _RD, 0, [_RI, _RT, _RCeso, _RCST], [0, 0, 0, 0]);
export var Scope = struct(n0, _S, 0, [_CRTo, _TK, _TVa, _CRIo], [64 | 0, 0, 0, 0]);
export var Source = struct(n0, _So, 0, [_O, _SIo, _SDo, _CPDu], [0, 0, () => SourceDetails, () => CustomPolicyDetails]);
export var SourceDetail = struct(n0, _SDou, 0, [_ESv, _MT, _MEF], [0, 0, 0]);
export var StartResourceEvaluationRequest = struct(
  n0,
  _SRERta,
  0,
  [_RD, _EC, _EMv, _ETv, _CTl],
  [() => ResourceDetails, () => EvaluationContext, 0, 1, 0]
);
export var StartResourceEvaluationResponse = struct(n0, _SRERtar, 0, [_REI], [0]);
export var AggregateEvaluationResultList = list(n0, _AERL, 0, () => AggregateEvaluationResult);
export var ComplianceByResources = list(n0, _CBRo, 0, () => ComplianceByResource);
export var ComplianceResourceTypes = 64 | 0;

export var ConfigRules = list(n0, _CRon, 0, () => ConfigRule);
export var ConformancePackComplianceResourceIds = 64 | 0;

export var ConformancePackRuleEvaluationResultsList = list(n0, _CPRERL, 0, () => ConformancePackEvaluationResult);
export var EvaluationModes = list(n0, _EM, 0, () => EvaluationModeConfiguration);
export var EvaluationResults = list(n0, _ERv, 0, () => EvaluationResult);
export var Evaluations = list(n0, _Ev, 0, () => Evaluation);
export var SourceDetails = list(n0, _SDo, 0, () => SourceDetail);
export var DescribeComplianceByResource = op(
  n0,
  _DCBR,
  0,
  () => DescribeComplianceByResourceRequest,
  () => DescribeComplianceByResourceResponse
);
export var DescribeConfigRules = op(
  n0,
  _DCRes,
  0,
  () => DescribeConfigRulesRequest,
  () => DescribeConfigRulesResponse
);
export var GetAggregateComplianceDetailsByConfigRule = op(
  n0,
  _GACDBCR,
  0,
  () => GetAggregateComplianceDetailsByConfigRuleRequest,
  () => GetAggregateComplianceDetailsByConfigRuleResponse
);
export var GetComplianceDetailsByConfigRule = op(
  n0,
  _GCDBCR,
  0,
  () => GetComplianceDetailsByConfigRuleRequest,
  () => GetComplianceDetailsByConfigRuleResponse
);
export var GetComplianceDetailsByResource = op(
  n0,
  _GCDBR,
  0,
  () => GetComplianceDetailsByResourceRequest,
  () => GetComplianceDetailsByResourceResponse
);
export var GetConformancePackComplianceDetails = op(
  n0,
  _GCPCD,
  0,
  () => GetConformancePackComplianceDetailsRequest,
  () => GetConformancePackComplianceDetailsResponse
);
export var GetResourceEvaluationSummary = op(
  n0,
  _GRES,
  0,
  () => GetResourceEvaluationSummaryRequest,
  () => GetResourceEvaluationSummaryResponse
);
export var PutConfigRule = op(
  n0,
  _PCR,
  0,
  () => PutConfigRuleRequest,
  () => Unit
);
export var PutEvaluations = op(
  n0,
  _PE,
  0,
  () => PutEvaluationsRequest,
  () => PutEvaluationsResponse
);
export var PutExternalEvaluation = op(
  n0,
  _PEE,
  0,
  () => PutExternalEvaluationRequest,
  () => PutExternalEvaluationResponse
);
export var StartResourceEvaluation = op(
  n0,
  _SREt,
  0,
  () => StartResourceEvaluationRequest,
  () => StartResourceEvaluationResponse
);
