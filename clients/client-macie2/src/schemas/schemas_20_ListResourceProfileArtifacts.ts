// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _art, _cRS, _h, _hQ, _jN, _lORPA, _LRPA, _LRPAR, _LRPARi, _nT, _rAe, _RPA, _se, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListResourceProfileArtifactsRequest = struct(
  n0,
  _LRPAR,
  0,
  [_nT, _rAe],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _rAe,
      },
    ],
  ]
);
export var ListResourceProfileArtifactsResponse = struct(
  n0,
  _LRPARi,
  0,
  [_art, _nT],
  [
    [
      () => __listOfResourceProfileArtifact,
      {
        [_jN]: _art,
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
export var ResourceProfileArtifact = struct(
  n0,
  _RPA,
  0,
  [_a, _cRS, _se],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
    [
      0,
      {
        [_jN]: _cRS,
      },
    ],
    [
      2,
      {
        [_jN]: _se,
      },
    ],
  ]
);
export var __listOfResourceProfileArtifact = list(n0, _lORPA, 0, [() => ResourceProfileArtifact, 0]);
export var ListResourceProfileArtifacts = op(
  n0,
  _LRPA,
  {
    [_h]: ["GET", "/resource-profiles/artifacts", 200],
  },
  () => ListResourceProfileArtifactsRequest,
  () => ListResourceProfileArtifactsResponse
);
