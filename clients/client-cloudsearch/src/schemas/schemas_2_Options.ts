// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DisabledOperationException as __DisabledOperationException,
  LimitExceededException as __LimitExceededException,
  ResourceAlreadyExistsException as __ResourceAlreadyExistsException,
} from "../models/index";
import {
  _AOS,
  _AOv,
  _AP,
  _aQE,
  _ASn,
  _C,
  _c,
  _CDR,
  _CDr,
  _CDRr,
  _D,
  _DAOe,
  _DAOR,
  _DAORe,
  _DAS,
  _DASR,
  _DASRe,
  _DDEO,
  _DDEOR,
  _DDEORe,
  _DE,
  _DEO,
  _DEOS,
  _DER,
  _DERe,
  _DIF,
  _DIFR,
  _DIFRe,
  _DN,
  _DOE,
  _DS,
  _DSe,
  _DSR,
  _DSRe,
  _E,
  _e,
  _EHTTPS,
  _hE,
  _IF,
  _LEE,
  _M,
  _MAZ,
  _O,
  _RAEE,
  _S,
  _SP,
  _Su,
  _TLSSP,
  _UAO,
  _UAOR,
  _UAORp,
  _UDEO,
  _UDEOR,
  _UDEORp,
  _USAP,
  _USAPR,
  _USAPRp,
  _USP,
  _USPR,
  _USPRp,
  n0,
  OptionStatus,
} from "./schemas_0";
import { IndexField, IndexFieldStatus } from "./schemas_1_Index";
import {
  AnalysisScheme,
  AnalysisSchemeStatus,
  Expression,
  ExpressionStatus,
  Suggester,
  SuggesterStatus,
} from "./schemas_3_Describe";
import { AccessPoliciesStatus } from "./schemas_5_Policies";
import { DomainStatus } from "./schemas_6_Domain";
import { ScalingParameters, ScalingParametersStatus } from "./schemas_7_ScalingParameters";

/* eslint no-var: 0 */

export var AvailabilityOptionsStatus = struct(n0, _AOS, 0, [_O, _S], [2, () => OptionStatus]);
export var CreateDomainRequest = struct(n0, _CDR, 0, [_DN], [0]);
export var CreateDomainResponse = struct(n0, _CDRr, 0, [_DS], [() => DomainStatus]);
export var DefineAnalysisSchemeRequest = struct(n0, _DASR, 0, [_DN, _ASn], [0, () => AnalysisScheme]);
export var DefineAnalysisSchemeResponse = struct(n0, _DASRe, 0, [_ASn], [() => AnalysisSchemeStatus]);
export var DefineExpressionRequest = struct(n0, _DER, 0, [_DN, _E], [0, () => Expression]);
export var DefineExpressionResponse = struct(n0, _DERe, 0, [_E], [() => ExpressionStatus]);
export var DefineIndexFieldRequest = struct(n0, _DIFR, 0, [_DN, _IF], [0, () => IndexField]);
export var DefineIndexFieldResponse = struct(n0, _DIFRe, 0, [_IF], [() => IndexFieldStatus]);
export var DefineSuggesterRequest = struct(n0, _DSR, 0, [_DN, _Su], [0, () => Suggester]);
export var DefineSuggesterResponse = struct(n0, _DSRe, 0, [_Su], [() => SuggesterStatus]);
export var DescribeAvailabilityOptionsRequest = struct(n0, _DAOR, 0, [_DN, _D], [0, 2]);
export var DescribeAvailabilityOptionsResponse = struct(n0, _DAORe, 0, [_AOv], [() => AvailabilityOptionsStatus]);
export var DescribeDomainEndpointOptionsRequest = struct(n0, _DDEOR, 0, [_DN, _D], [0, 2]);
export var DescribeDomainEndpointOptionsResponse = struct(n0, _DDEORe, 0, [_DEO], [() => DomainEndpointOptionsStatus]);
export var DisabledOperationException = error(
  n0,
  _DOE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`DisabledAction`, 409],
  },
  [_C, _M],
  [0, 0],

  __DisabledOperationException
);
export var DomainEndpointOptions = struct(n0, _DEO, 0, [_EHTTPS, _TLSSP], [2, 0]);
export var DomainEndpointOptionsStatus = struct(
  n0,
  _DEOS,
  0,
  [_O, _S],
  [() => DomainEndpointOptions, () => OptionStatus]
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`LimitExceeded`, 409],
  },
  [_C, _M],
  [0, 0],

  __LimitExceededException
);
export var ResourceAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`ResourceAlreadyExists`, 409],
  },
  [_C, _M],
  [0, 0],

  __ResourceAlreadyExistsException
);
export var UpdateAvailabilityOptionsRequest = struct(n0, _UAOR, 0, [_DN, _MAZ], [0, 2]);
export var UpdateAvailabilityOptionsResponse = struct(n0, _UAORp, 0, [_AOv], [() => AvailabilityOptionsStatus]);
export var UpdateDomainEndpointOptionsRequest = struct(n0, _UDEOR, 0, [_DN, _DEO], [0, () => DomainEndpointOptions]);
export var UpdateDomainEndpointOptionsResponse = struct(n0, _UDEORp, 0, [_DEO], [() => DomainEndpointOptionsStatus]);
export var UpdateScalingParametersRequest = struct(n0, _USPR, 0, [_DN, _SP], [0, () => ScalingParameters]);
export var UpdateScalingParametersResponse = struct(n0, _USPRp, 0, [_SP], [() => ScalingParametersStatus]);
export var UpdateServiceAccessPoliciesRequest = struct(n0, _USAPR, 0, [_DN, _AP], [0, 0]);
export var UpdateServiceAccessPoliciesResponse = struct(n0, _USAPRp, 0, [_AP], [() => AccessPoliciesStatus]);
export var CreateDomain = op(
  n0,
  _CDr,
  0,
  () => CreateDomainRequest,
  () => CreateDomainResponse
);
export var DefineAnalysisScheme = op(
  n0,
  _DAS,
  0,
  () => DefineAnalysisSchemeRequest,
  () => DefineAnalysisSchemeResponse
);
export var DefineExpression = op(
  n0,
  _DE,
  0,
  () => DefineExpressionRequest,
  () => DefineExpressionResponse
);
export var DefineIndexField = op(
  n0,
  _DIF,
  0,
  () => DefineIndexFieldRequest,
  () => DefineIndexFieldResponse
);
export var DefineSuggester = op(
  n0,
  _DSe,
  0,
  () => DefineSuggesterRequest,
  () => DefineSuggesterResponse
);
export var DescribeAvailabilityOptions = op(
  n0,
  _DAOe,
  0,
  () => DescribeAvailabilityOptionsRequest,
  () => DescribeAvailabilityOptionsResponse
);
export var DescribeDomainEndpointOptions = op(
  n0,
  _DDEO,
  0,
  () => DescribeDomainEndpointOptionsRequest,
  () => DescribeDomainEndpointOptionsResponse
);
export var UpdateAvailabilityOptions = op(
  n0,
  _UAO,
  0,
  () => UpdateAvailabilityOptionsRequest,
  () => UpdateAvailabilityOptionsResponse
);
export var UpdateDomainEndpointOptions = op(
  n0,
  _UDEO,
  0,
  () => UpdateDomainEndpointOptionsRequest,
  () => UpdateDomainEndpointOptionsResponse
);
export var UpdateScalingParameters = op(
  n0,
  _USP,
  0,
  () => UpdateScalingParametersRequest,
  () => UpdateScalingParametersResponse
);
export var UpdateServiceAccessPolicies = op(
  n0,
  _USAP,
  0,
  () => UpdateServiceAccessPoliciesRequest,
  () => UpdateServiceAccessPoliciesResponse
);
