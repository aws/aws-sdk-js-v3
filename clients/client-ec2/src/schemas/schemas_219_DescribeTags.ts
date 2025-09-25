// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DR,
  _dR,
  _DTes,
  _DTRe,
  _DTRes,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _K,
  _k,
  _MR,
  _mR,
  _NTe,
  _nTe,
  _rIe,
  _RIes,
  _RTe,
  _rTe,
  _T,
  _TDa,
  _TDL,
  _tS,
  _V,
  _v,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeTagsRequest = struct(
  n0,
  _DTRe,
  0,
  [_DR, _Fi, _MR, _NTe],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaxResults`,
        [_xN]: _mR,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var DescribeTagsResult = struct(
  n0,
  _DTRes,
  0,
  [_NTe, _T],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => TagDescriptionList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var TagDescription = struct(
  n0,
  _TDa,
  0,
  [_K, _RIes, _RTe, _V],
  [
    [
      0,
      {
        [_eQN]: `Key`,
        [_xN]: _k,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceId`,
        [_xN]: _rIe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceType`,
        [_xN]: _rTe,
      },
    ],
    [
      0,
      {
        [_eQN]: `Value`,
        [_xN]: _v,
      },
    ],
  ]
);
export var TagDescriptionList = list(n0, _TDL, 0, [
  () => TagDescription,
  {
    [_xN]: _it,
  },
]);
export var DescribeTags = op(
  n0,
  _DTes,
  0,
  () => DescribeTagsRequest,
  () => DescribeTagsResult
);
