// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ApiKeyLimitExceededException as __ApiKeyLimitExceededException,
  ApiKeyValidityOutOfBoundsException as __ApiKeyValidityOutOfBoundsException,
  LimitExceededException as __LimitExceededException,
} from "../models/index";
import {
  _aI,
  _aK,
  _AKLEE,
  _AKVOOBE,
  _AMGA,
  _AMGAR,
  _AMGARs,
  _ASGA,
  _ASGAR,
  _ASGARs,
  _c,
  _CAK,
  _CAKR,
  _CAKRr,
  _de,
  _e,
  _ex,
  _h,
  _hE,
  _hQ,
  _i,
  _LEE,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _mAI,
  _rA,
  _sAA,
  _sAAC,
  _sAI,
  _t,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UAK,
  _UAKR,
  _UAKRp,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";
import { SourceApiAssociation, SourceApiAssociationConfig } from "./schemas_10_Api";
import { ApiKey } from "./schemas_19_Api";

/* eslint no-var: 0 */

export var ApiKeyLimitExceededException = error(
  n0,
  _AKLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ApiKeyLimitExceededException
);
export var ApiKeyValidityOutOfBoundsException = error(
  n0,
  _AKVOOBE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ApiKeyValidityOutOfBoundsException
);
export var AssociateMergedGraphqlApiRequest = struct(
  n0,
  _AMGAR,
  0,
  [_sAI, _mAI, _de, _sAAC],
  [[0, 1], 0, 0, () => SourceApiAssociationConfig]
);
export var AssociateMergedGraphqlApiResponse = struct(n0, _AMGARs, 0, [_sAA], [() => SourceApiAssociation]);
export var AssociateSourceGraphqlApiRequest = struct(
  n0,
  _ASGAR,
  0,
  [_mAI, _sAI, _de, _sAAC],
  [[0, 1], 0, 0, () => SourceApiAssociationConfig]
);
export var AssociateSourceGraphqlApiResponse = struct(n0, _ASGARs, 0, [_sAA], [() => SourceApiAssociation]);
export var CreateApiKeyRequest = struct(n0, _CAKR, 0, [_aI, _de, _ex], [[0, 1], 0, 1]);
export var CreateApiKeyResponse = struct(n0, _CAKRr, 0, [_aK], [() => ApiKey]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __LimitExceededException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [128 | 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _t], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateApiKeyRequest = struct(n0, _UAKR, 0, [_aI, _i, _de, _ex], [[0, 1], [0, 1], 0, 1]);
export var UpdateApiKeyResponse = struct(n0, _UAKRp, 0, [_aK], [() => ApiKey]);
export var TagKeyList = 64 | 0;

export var AssociateMergedGraphqlApi = op(
  n0,
  _AMGA,
  {
    [_h]: ["POST", "/v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations", 200],
  },
  () => AssociateMergedGraphqlApiRequest,
  () => AssociateMergedGraphqlApiResponse
);
export var AssociateSourceGraphqlApi = op(
  n0,
  _ASGA,
  {
    [_h]: ["POST", "/v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations", 200],
  },
  () => AssociateSourceGraphqlApiRequest,
  () => AssociateSourceGraphqlApiResponse
);
export var CreateApiKey = op(
  n0,
  _CAK,
  {
    [_h]: ["POST", "/v1/apis/{apiId}/apikeys", 200],
  },
  () => CreateApiKeyRequest,
  () => CreateApiKeyResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/v1/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/v1/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/v1/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateApiKey = op(
  n0,
  _UAK,
  {
    [_h]: ["POST", "/v1/apis/{apiId}/apikeys/{id}", 200],
  },
  () => UpdateApiKeyRequest,
  () => UpdateApiKeyResponse
);
