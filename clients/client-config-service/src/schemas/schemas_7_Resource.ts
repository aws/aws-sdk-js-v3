// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  OversizedConfigurationItemException as __OversizedConfigurationItemException,
  ResourceNotDiscoveredException as __ResourceNotDiscoveredException,
} from "../models/index";
import {
  _a,
  _aI,
  _AIc,
  _aR,
  _ARI,
  _aZ,
  _BCI,
  _bCI,
  _BCIa,
  _BGARC,
  _BGARCR,
  _BGARCRa,
  _BGRC,
  _BGRCR,
  _BGRCRa,
  _c,
  _CAN,
  _CI,
  _cI,
  _cICT,
  _cIDT,
  _CIL,
  _cIMDH,
  _cIS,
  _cl,
  _cO,
  _CRN,
  _cSI,
  _DRCe,
  _DRCRel,
  _DRES,
  _DRESR,
  _DRESRe,
  _DRIL,
  _e,
  _EMr,
  _eT,
  _F,
  _GARC,
  _GARCR,
  _GARCRe,
  _GRCH,
  _GRCHR,
  _GRCHRe,
  _iDR,
  _IT,
  _L,
  _l,
  _LADR,
  _LADRR,
  _LADRRi,
  _LDR,
  _LDRR,
  _LDRRi,
  _lT,
  _LUTa,
  _m,
  _N,
  _NT,
  _nT,
  _OCIE,
  _R,
  _r,
  _rCT,
  _rDT,
  _Re,
  _rE,
  _RES,
  _RESe,
  _RESem,
  _RESeme,
  _RF,
  _rF,
  _RI,
  _rI,
  _RIe,
  _rIe,
  _rIes,
  _RIeso,
  _RIL,
  _RILe,
  _RK,
  _rK,
  _RKe,
  _RL,
  _RN,
  _rN,
  _RNDE,
  _rNe,
  _RT,
  _rT,
  _SAI,
  _sC,
  _SD,
  _SR,
  _Sta,
  _STt,
  _STto,
  _t,
  _URI,
  _URIL,
  _uRK,
  _v,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AggregateResourceIdentifier = struct(n0, _ARI, 0, [_SAI, _SR, _RI, _RT, _RN], [0, 0, 0, 0, 0]);
export var BaseConfigurationItem = struct(
  n0,
  _BCI,
  0,
  [_v, _aI, _cICT, _cIS, _cSI, _a, _rT, _rI, _rN, _aR, _aZ, _rCT, _c, _sC, _rF, _cIDT],
  [0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 128 | 0, 0, 4]
);
export var BatchGetAggregateResourceConfigRequest = struct(
  n0,
  _BGARCR,
  0,
  [_CAN, _RIe],
  [0, () => ResourceIdentifiersList]
);
export var BatchGetAggregateResourceConfigResponse = struct(
  n0,
  _BGARCRa,
  0,
  [_BCIa, _URI],
  [() => BaseConfigurationItems, () => UnprocessedResourceIdentifierList]
);
export var BatchGetResourceConfigRequest = struct(n0, _BGRCR, 0, [_rK], [() => ResourceKeys]);
export var BatchGetResourceConfigResponse = struct(
  n0,
  _BGRCRa,
  0,
  [_bCI, _uRK],
  [() => BaseConfigurationItems, () => ResourceKeys]
);
export var ConfigurationItem = struct(
  n0,
  _CI,
  0,
  [_v, _aI, _cICT, _cIS, _cSI, _cIMDH, _a, _rT, _rI, _rN, _aR, _aZ, _rCT, _t, _rE, _r, _c, _sC, _rF, _cIDT],
  [0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 128 | 0, 64 | 0, () => RelationshipList, 0, 128 | 0, 0, 4]
);
export var DeleteResourceConfigRequest = struct(n0, _DRCRel, 0, [_RT, _RI], [0, 0]);
export var DescribeRemediationExecutionStatusRequest = struct(
  n0,
  _DRESR,
  0,
  [_CRN, _RK, _L, _NT],
  [0, () => ResourceKeys, 1, 0]
);
export var DescribeRemediationExecutionStatusResponse = struct(
  n0,
  _DRESRe,
  0,
  [_RES, _NT],
  [() => RemediationExecutionStatuses, 0]
);
export var GetAggregateResourceConfigRequest = struct(
  n0,
  _GARCR,
  0,
  [_CAN, _RIeso],
  [0, () => AggregateResourceIdentifier]
);
export var GetAggregateResourceConfigResponse = struct(n0, _GARCRe, 0, [_CI], [() => ConfigurationItem]);
export var GetResourceConfigHistoryRequest = struct(
  n0,
  _GRCHR,
  0,
  [_rT, _rI, _lT, _eT, _cO, _l, _nT],
  [0, 0, 4, 4, 0, 1, 0]
);
export var GetResourceConfigHistoryResponse = struct(n0, _GRCHRe, 0, [_cI, _nT], [() => ConfigurationItemList, 0]);
export var ListAggregateDiscoveredResourcesRequest = struct(
  n0,
  _LADRR,
  0,
  [_CAN, _RT, _F, _L, _NT],
  [0, 0, () => ResourceFilters, 1, 0]
);
export var ListAggregateDiscoveredResourcesResponse = struct(
  n0,
  _LADRRi,
  0,
  [_RIe, _NT],
  [() => DiscoveredResourceIdentifierList, 0]
);
export var ListDiscoveredResourcesRequest = struct(
  n0,
  _LDRR,
  0,
  [_rT, _rIe, _rN, _l, _iDR, _nT],
  [0, 64 | 0, 0, 1, 2, 0]
);
export var ListDiscoveredResourcesResponse = struct(n0, _LDRRi, 0, [_rIes, _nT], [() => ResourceIdentifierList, 0]);
export var OversizedConfigurationItemException = error(
  n0,
  _OCIE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __OversizedConfigurationItemException
);
export var Relationship = struct(n0, _R, 0, [_rT, _rI, _rN, _rNe], [0, 0, 0, 0]);
export var RemediationExecutionStatus = struct(
  n0,
  _RESe,
  0,
  [_RKe, _Sta, _SD, _IT, _LUTa],
  [() => ResourceKey, 0, () => RemediationExecutionSteps, 4, 4]
);
export var RemediationExecutionStep = struct(n0, _RESem, 0, [_N, _Sta, _EMr, _STt, _STto], [0, 0, 0, 4, 4]);
export var ResourceFilters = struct(n0, _RF, 0, [_AIc, _RI, _RN, _Re], [0, 0, 0, 0]);
export var ResourceIdentifier = struct(n0, _RIeso, 0, [_rT, _rI, _rN, _rDT], [0, 0, 0, 4]);
export var ResourceKey = struct(n0, _RKe, 0, [_rT, _rI], [0, 0]);
export var ResourceNotDiscoveredException = error(
  n0,
  _RNDE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __ResourceNotDiscoveredException
);
export var BaseConfigurationItems = list(n0, _BCIa, 0, () => BaseConfigurationItem);
export var ConfigurationItemList = list(n0, _CIL, 0, () => ConfigurationItem);
export var DiscoveredResourceIdentifierList = list(n0, _DRIL, 0, () => AggregateResourceIdentifier);
export var RelatedEventList = 64 | 0;

export var RelationshipList = list(n0, _RL, 0, () => Relationship);
export var RemediationExecutionStatuses = list(n0, _RES, 0, () => RemediationExecutionStatus);
export var RemediationExecutionSteps = list(n0, _RESeme, 0, () => RemediationExecutionStep);
export var ResourceIdentifierList = list(n0, _RIL, 0, () => ResourceIdentifier);
export var ResourceIdentifiersList = list(n0, _RILe, 0, () => AggregateResourceIdentifier);
export var ResourceIdList = 64 | 0;

export var ResourceKeys = list(n0, _RK, 0, () => ResourceKey);
export var UnprocessedResourceIdentifierList = list(n0, _URIL, 0, () => AggregateResourceIdentifier);
export var SupplementaryConfiguration = 128 | 0;

export var Tags = 128 | 0;

export var BatchGetAggregateResourceConfig = op(
  n0,
  _BGARC,
  0,
  () => BatchGetAggregateResourceConfigRequest,
  () => BatchGetAggregateResourceConfigResponse
);
export var BatchGetResourceConfig = op(
  n0,
  _BGRC,
  0,
  () => BatchGetResourceConfigRequest,
  () => BatchGetResourceConfigResponse
);
export var DeleteResourceConfig = op(
  n0,
  _DRCe,
  0,
  () => DeleteResourceConfigRequest,
  () => Unit
);
export var DescribeRemediationExecutionStatus = op(
  n0,
  _DRES,
  0,
  () => DescribeRemediationExecutionStatusRequest,
  () => DescribeRemediationExecutionStatusResponse
);
export var GetAggregateResourceConfig = op(
  n0,
  _GARC,
  0,
  () => GetAggregateResourceConfigRequest,
  () => GetAggregateResourceConfigResponse
);
export var GetResourceConfigHistory = op(
  n0,
  _GRCH,
  0,
  () => GetResourceConfigHistoryRequest,
  () => GetResourceConfigHistoryResponse
);
export var ListAggregateDiscoveredResources = op(
  n0,
  _LADR,
  0,
  () => ListAggregateDiscoveredResourcesRequest,
  () => ListAggregateDiscoveredResourcesResponse
);
export var ListDiscoveredResources = op(
  n0,
  _LDR,
  0,
  () => ListDiscoveredResourcesRequest,
  () => ListDiscoveredResourcesResponse
);
