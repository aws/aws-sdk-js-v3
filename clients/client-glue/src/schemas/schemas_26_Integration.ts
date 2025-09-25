// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  IntegrationNotFoundFault as __IntegrationNotFoundFault,
  TargetResourceNotFound as __TargetResourceNotFound,
} from "../models/index";
import {
  _AEC,
  _c,
  _CNo,
  _CSon,
  _CTr,
  _D,
  _DFa,
  _DIes,
  _DII,
  _DIIR,
  _DIIRe,
  _DIRes,
  _DIResc,
  _E,
  _e,
  _EBA,
  _ECr,
  _EM,
  _Fil,
  _GIRP,
  _GIRPR,
  _GIRPRe,
  _hE,
  _IAnt,
  _ICn,
  _IEL,
  _IEn,
  _IFL,
  _IFn,
  _II,
  _IIL,
  _IIn,
  _IInb,
  _IL,
  _IN,
  _In,
  _INFF,
  _Int,
  _ITLn,
  _k,
  _KA,
  _KKI,
  _M,
  _Mar,
  _MRa,
  _N,
  _RA,
  _RAe,
  _RIef,
  _SAo,
  _SPo,
  _SPP,
  _St,
  _TA,
  _Tag,
  _Tag_,
  _TPP,
  _TRNF,
  _UIRP,
  _UIRPR,
  _UIRPRp,
  _v,
  _Val,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeInboundIntegrationsRequest = struct(n0, _DIIR, 0, [_IAnt, _Mar, _MRa, _TA], [0, 0, 1, 0]);
export var DescribeInboundIntegrationsResponse = struct(
  n0,
  _DIIRe,
  0,
  [_IIn, _Mar],
  [() => InboundIntegrationsList, 0]
);
export var DescribeIntegrationsRequest = struct(
  n0,
  _DIRes,
  0,
  [_II, _Mar, _MRa, _Fil],
  [0, 0, 1, () => IntegrationFilterList]
);
export var DescribeIntegrationsResponse = struct(n0, _DIResc, 0, [_In, _Mar], [() => IntegrationsList, 0]);
export var GetIntegrationResourcePropertyRequest = struct(n0, _GIRPR, 0, [_RAe], [0]);
export var GetIntegrationResourcePropertyResponse = struct(
  n0,
  _GIRPRe,
  0,
  [_RAe, _SPP, _TPP],
  [0, () => SourceProcessingProperties, () => TargetProcessingProperties]
);
export var InboundIntegration = struct(
  n0,
  _IInb,
  0,
  [_SAo, _TA, _IAnt, _St, _CTr, _ICn, _E],
  [0, 0, 0, 0, 4, () => IntegrationConfig, () => IntegrationErrorList]
);
export var Integration = struct(
  n0,
  _Int,
  0,
  [_SAo, _TA, _D, _IN, _IAnt, _KKI, _AEC, _Tag, _St, _CTr, _ICn, _E, _DFa],
  [0, 0, 0, 0, 0, 0, 128 | 0, () => IntegrationTagsList, 0, 4, () => IntegrationConfig, () => IntegrationErrorList, 0]
);
export var IntegrationConfig = struct(n0, _ICn, 0, [_RIef, _SPo, _CSon], [0, 128 | 0, 2]);
export var IntegrationError = struct(n0, _IEn, 0, [_ECr, _EM], [0, 0]);
export var IntegrationFilter = struct(n0, _IFn, 0, [_N, _Val], [0, 64 | 0]);
export var IntegrationNotFoundFault = error(
  n0,
  _INFF,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __IntegrationNotFoundFault
);
export var SourceProcessingProperties = struct(n0, _SPP, 0, [_RA], [0]);
export var Tag = struct(n0, _Tag_, 0, [_k, _v], [0, 0]);
export var TargetProcessingProperties = struct(n0, _TPP, 0, [_RA, _KA, _CNo, _EBA], [0, 0, 0, 0]);
export var TargetResourceNotFound = error(
  n0,
  _TRNF,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __TargetResourceNotFound
);
export var UpdateIntegrationResourcePropertyRequest = struct(
  n0,
  _UIRPR,
  0,
  [_RAe, _SPP, _TPP],
  [0, () => SourceProcessingProperties, () => TargetProcessingProperties]
);
export var UpdateIntegrationResourcePropertyResponse = struct(
  n0,
  _UIRPRp,
  0,
  [_RAe, _SPP, _TPP],
  [0, () => SourceProcessingProperties, () => TargetProcessingProperties]
);
export var InboundIntegrationsList = list(n0, _IIL, 0, () => InboundIntegration);
export var IntegrationErrorList = list(n0, _IEL, 0, () => IntegrationError);
export var IntegrationFilterList = list(n0, _IFL, 0, () => IntegrationFilter);
export var IntegrationFilterValues = 64 | 0;

export var IntegrationsList = list(n0, _IL, 0, () => Integration);
export var IntegrationTagsList = list(n0, _ITLn, 0, () => Tag);
export var IntegrationAdditionalEncryptionContextMap = 128 | 0;

export var IntegrationSourcePropertiesMap = 128 | 0;

export var DescribeInboundIntegrations = op(
  n0,
  _DII,
  0,
  () => DescribeInboundIntegrationsRequest,
  () => DescribeInboundIntegrationsResponse
);
export var DescribeIntegrations = op(
  n0,
  _DIes,
  0,
  () => DescribeIntegrationsRequest,
  () => DescribeIntegrationsResponse
);
export var GetIntegrationResourceProperty = op(
  n0,
  _GIRP,
  0,
  () => GetIntegrationResourcePropertyRequest,
  () => GetIntegrationResourcePropertyResponse
);
export var UpdateIntegrationResourceProperty = op(
  n0,
  _UIRP,
  0,
  () => UpdateIntegrationResourcePropertyRequest,
  () => UpdateIntegrationResourcePropertyResponse
);
