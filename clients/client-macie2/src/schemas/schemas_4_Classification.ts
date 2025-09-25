// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aEOM,
  _bNu,
  _cS,
  _cSI,
  _CSS,
  _dA,
  _exc,
  _fEA,
  _GADC,
  _GADCR,
  _GADCRe,
  _GCS,
  _GCSR,
  _GCSRe,
  _h,
  _hQ,
  _i,
  _jN,
  _LCS,
  _LCSR,
  _LCSRi,
  _lOCSS,
  _lUA,
  _n,
  _nT,
  _s,
  _s_,
  _SCS,
  _SCSE,
  _sITI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClassificationScopeSummary = struct(
  n0,
  _CSS,
  0,
  [_i, _n],
  [
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
  ]
);
export var GetAutomatedDiscoveryConfigurationRequest = struct(n0, _GADCR, 0, [], []);
export var GetAutomatedDiscoveryConfigurationResponse = struct(
  n0,
  _GADCRe,
  0,
  [_aEOM, _cSI, _dA, _fEA, _lUA, _sITI, _s],
  [
    [
      0,
      {
        [_jN]: _aEOM,
      },
    ],
    [
      0,
      {
        [_jN]: _cSI,
      },
    ],
    [
      5,
      {
        [_jN]: _dA,
      },
    ],
    [
      5,
      {
        [_jN]: _fEA,
      },
    ],
    [
      5,
      {
        [_jN]: _lUA,
      },
    ],
    [
      0,
      {
        [_jN]: _sITI,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var GetClassificationScopeRequest = struct(n0, _GCSR, 0, [_i], [[0, 1]]);
export var GetClassificationScopeResponse = struct(
  n0,
  _GCSRe,
  0,
  [_i, _n, _s_],
  [
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => S3ClassificationScope,
      {
        [_jN]: _s_,
      },
    ],
  ]
);
export var ListClassificationScopesRequest = struct(
  n0,
  _LCSR,
  0,
  [_n, _nT],
  [
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListClassificationScopesResponse = struct(
  n0,
  _LCSRi,
  0,
  [_cS, _nT],
  [
    [
      () => __listOfClassificationScopeSummary,
      {
        [_jN]: _cS,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var S3ClassificationScope = struct(
  n0,
  _SCS,
  0,
  [_exc],
  [
    [
      () => S3ClassificationScopeExclusion,
      {
        [_jN]: _exc,
      },
    ],
  ]
);
export var S3ClassificationScopeExclusion = struct(
  n0,
  _SCSE,
  0,
  [_bNu],
  [
    [
      64 | 0,
      {
        [_jN]: _bNu,
      },
    ],
  ]
);
export var __listOfClassificationScopeSummary = list(n0, _lOCSS, 0, [() => ClassificationScopeSummary, 0]);
export var GetAutomatedDiscoveryConfiguration = op(
  n0,
  _GADC,
  {
    [_h]: ["GET", "/automated-discovery/configuration", 200],
  },
  () => GetAutomatedDiscoveryConfigurationRequest,
  () => GetAutomatedDiscoveryConfigurationResponse
);
export var GetClassificationScope = op(
  n0,
  _GCS,
  {
    [_h]: ["GET", "/classification-scopes/{id}", 200],
  },
  () => GetClassificationScopeRequest,
  () => GetClassificationScopeResponse
);
export var ListClassificationScopes = op(
  n0,
  _LCS,
  {
    [_h]: ["GET", "/classification-scopes", 200],
  },
  () => ListClassificationScopesRequest,
  () => ListClassificationScopesResponse
);
