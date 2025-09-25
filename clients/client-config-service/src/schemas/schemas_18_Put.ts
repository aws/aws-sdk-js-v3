// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidRoleException as __InvalidRoleException,
  ResourceConcurrentModificationException as __ResourceConcurrentModificationException,
  TooManyTagsException as __TooManyTagsException,
} from "../models/index";
import {
  _AA,
  _AAI,
  _AARu,
  _AASc,
  _AF,
  _CA,
  _CAN,
  _cl,
  _e,
  _IRE,
  _K,
  _m,
  _OAS,
  _PAA,
  _PAAR,
  _PAARu,
  _PCA,
  _PCAR,
  _PCARu,
  _PSQ,
  _PSQR,
  _PSQRu,
  _QA,
  _RCME,
  _SQ,
  _Ta,
  _Tag,
  _TLa,
  _TMTE,
  _V,
  n0,
} from "./schemas_0";
import { StoredQuery } from "./schemas_19_Stored";
import {
  AccountAggregationSourceList,
  AggregatorFilters,
  ConfigurationAggregator,
  OrganizationAggregationSource,
} from "./schemas_23_Configuration";
import { AggregationAuthorization } from "./schemas_27_Aggregation";

/* eslint no-var: 0 */

export var InvalidRoleException = error(
  n0,
  _IRE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidRoleException
);
export var PutAggregationAuthorizationRequest = struct(n0, _PAAR, 0, [_AAI, _AARu, _Ta], [0, 0, () => TagsList]);
export var PutAggregationAuthorizationResponse = struct(n0, _PAARu, 0, [_AA], [() => AggregationAuthorization]);
export var PutConfigurationAggregatorRequest = struct(
  n0,
  _PCAR,
  0,
  [_CAN, _AASc, _OAS, _Ta, _AF],
  [0, () => AccountAggregationSourceList, () => OrganizationAggregationSource, () => TagsList, () => AggregatorFilters]
);
export var PutConfigurationAggregatorResponse = struct(n0, _PCARu, 0, [_CA], [() => ConfigurationAggregator]);
export var PutStoredQueryRequest = struct(n0, _PSQR, 0, [_SQ, _Ta], [() => StoredQuery, () => TagsList]);
export var PutStoredQueryResponse = struct(n0, _PSQRu, 0, [_QA], [0]);
export var ResourceConcurrentModificationException = error(
  n0,
  _RCME,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __ResourceConcurrentModificationException
);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __TooManyTagsException
);
export var TagsList = list(n0, _TLa, 0, () => Tag);
export var PutAggregationAuthorization = op(
  n0,
  _PAA,
  0,
  () => PutAggregationAuthorizationRequest,
  () => PutAggregationAuthorizationResponse
);
export var PutConfigurationAggregator = op(
  n0,
  _PCA,
  0,
  () => PutConfigurationAggregatorRequest,
  () => PutConfigurationAggregatorResponse
);
export var PutStoredQuery = op(
  n0,
  _PSQ,
  0,
  () => PutStoredQueryRequest,
  () => PutStoredQueryResponse
);
