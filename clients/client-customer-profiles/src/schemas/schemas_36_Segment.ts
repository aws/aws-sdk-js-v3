// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CA,
  _D,
  _DN,
  _DNi,
  _h,
  _hQ,
  _It,
  _jN,
  _LSD,
  _LSDR,
  _LSDRi,
  _MR,
  _mr,
  _NT,
  _nt,
  _SDA,
  _SDI,
  _SDL,
  _SDN,
  _Ta,
  n0,
  sensitiveText,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListSegmentDefinitionsRequest = struct(
  n0,
  _LSDR,
  0,
  [_DN, _MR, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListSegmentDefinitionsResponse = struct(
  n0,
  _LSDRi,
  0,
  [_NT, _It],
  [
    [
      0,
      {
        [_jN]: _NT,
      },
    ],
    [
      () => SegmentDefinitionsList,
      {
        [_jN]: _It,
      },
    ],
  ]
);
export var SegmentDefinitionItem = struct(
  n0,
  _SDI,
  0,
  [_SDN, _DNi, _D, _SDA, _CA, _Ta],
  [
    [
      0,
      {
        [_jN]: _SDN,
      },
    ],
    [
      0,
      {
        [_jN]: _DNi,
      },
    ],
    [
      () => sensitiveText,
      {
        [_jN]: _D,
      },
    ],
    [
      0,
      {
        [_jN]: _SDA,
      },
    ],
    [
      4,
      {
        [_jN]: _CA,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _Ta,
      },
    ],
  ]
);
export var SegmentDefinitionsList = list(n0, _SDL, 0, [() => SegmentDefinitionItem, 0]);
export var ListSegmentDefinitions = op(
  n0,
  _LSD,
  {
    [_h]: ["GET", "/domains/{DomainName}/segment-definitions", 200],
  },
  () => ListSegmentDefinitionsRequest,
  () => ListSegmentDefinitionsResponse
);
