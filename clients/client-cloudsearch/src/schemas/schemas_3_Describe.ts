// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AO,
  _AS,
  _ASL,
  _ASN,
  _ASn,
  _ASna,
  _ASNn,
  _ASS,
  _ASSL,
  _D,
  _DASe,
  _DASes,
  _DASRel,
  _DASRele,
  _DASRes,
  _DASResc,
  _DEe,
  _DEes,
  _DERel,
  _DERele,
  _DERes,
  _DEResc,
  _DN,
  _DSel,
  _DSes,
  _DSO,
  _DSRel,
  _DSRele,
  _DSRes,
  _DSResc,
  _E,
  _EN,
  _ENx,
  _ES,
  _ESL,
  _EV,
  _Ex,
  _FM,
  _JTD,
  _O,
  _S,
  _SD,
  _SEor,
  _SFo,
  _SN,
  _SNu,
  _SSL,
  _SSu,
  _St,
  _Su,
  _Sug,
  _Sy,
  n0,
  OptionStatus,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnalysisOptions = struct(n0, _AO, 0, [_Sy, _St, _SD, _JTD, _AS], [0, 0, 0, 0, 0]);
export var AnalysisScheme = struct(n0, _ASn, 0, [_ASN, _ASL, _AO], [0, 0, () => AnalysisOptions]);
export var AnalysisSchemeStatus = struct(n0, _ASS, 0, [_O, _S], [() => AnalysisScheme, () => OptionStatus]);
export var DeleteAnalysisSchemeRequest = struct(n0, _DASRel, 0, [_DN, _ASN], [0, 0]);
export var DeleteAnalysisSchemeResponse = struct(n0, _DASRele, 0, [_ASn], [() => AnalysisSchemeStatus]);
export var DeleteExpressionRequest = struct(n0, _DERel, 0, [_DN, _EN], [0, 0]);
export var DeleteExpressionResponse = struct(n0, _DERele, 0, [_E], [() => ExpressionStatus]);
export var DeleteSuggesterRequest = struct(n0, _DSRel, 0, [_DN, _SN], [0, 0]);
export var DeleteSuggesterResponse = struct(n0, _DSRele, 0, [_Su], [() => SuggesterStatus]);
export var DescribeAnalysisSchemesRequest = struct(n0, _DASRes, 0, [_DN, _ASNn, _D], [0, 64 | 0, 2]);
export var DescribeAnalysisSchemesResponse = struct(n0, _DASResc, 0, [_ASna], [() => AnalysisSchemeStatusList]);
export var DescribeExpressionsRequest = struct(n0, _DERes, 0, [_DN, _ENx, _D], [0, 64 | 0, 2]);
export var DescribeExpressionsResponse = struct(n0, _DEResc, 0, [_Ex], [() => ExpressionStatusList]);
export var DescribeSuggestersRequest = struct(n0, _DSRes, 0, [_DN, _SNu, _D], [0, 64 | 0, 2]);
export var DescribeSuggestersResponse = struct(n0, _DSResc, 0, [_Sug], [() => SuggesterStatusList]);
export var DocumentSuggesterOptions = struct(n0, _DSO, 0, [_SFo, _FM, _SEor], [0, 0, 0]);
export var Expression = struct(n0, _E, 0, [_EN, _EV], [0, 0]);
export var ExpressionStatus = struct(n0, _ES, 0, [_O, _S], [() => Expression, () => OptionStatus]);
export var Suggester = struct(n0, _Su, 0, [_SN, _DSO], [0, () => DocumentSuggesterOptions]);
export var SuggesterStatus = struct(n0, _SSu, 0, [_O, _S], [() => Suggester, () => OptionStatus]);
export var AnalysisSchemeStatusList = list(n0, _ASSL, 0, () => AnalysisSchemeStatus);
export var ExpressionStatusList = list(n0, _ESL, 0, () => ExpressionStatus);
export var StandardNameList = 64 | 0;

export var SuggesterStatusList = list(n0, _SSL, 0, () => SuggesterStatus);
export var DeleteAnalysisScheme = op(
  n0,
  _DASe,
  0,
  () => DeleteAnalysisSchemeRequest,
  () => DeleteAnalysisSchemeResponse
);
export var DeleteExpression = op(
  n0,
  _DEe,
  0,
  () => DeleteExpressionRequest,
  () => DeleteExpressionResponse
);
export var DeleteSuggester = op(
  n0,
  _DSel,
  0,
  () => DeleteSuggesterRequest,
  () => DeleteSuggesterResponse
);
export var DescribeAnalysisSchemes = op(
  n0,
  _DASes,
  0,
  () => DescribeAnalysisSchemesRequest,
  () => DescribeAnalysisSchemesResponse
);
export var DescribeExpressions = op(
  n0,
  _DEes,
  0,
  () => DescribeExpressionsRequest,
  () => DescribeExpressionsResponse
);
export var DescribeSuggesters = op(
  n0,
  _DSes,
  0,
  () => DescribeSuggestersRequest,
  () => DescribeSuggestersResponse
);
