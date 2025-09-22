// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Cid,
  _cS,
  _DPLes,
  _DPLR,
  _DPLRe,
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _MR,
  _NTe,
  _nTe,
  _PL,
  _PLI,
  _pLI,
  _PLIr,
  _PLN,
  _pLN,
  _PLr,
  _PLRISL,
  _pLS,
  _PLSr,
  _xN,
  FilterList,
  n0,
  ValueStringList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribePrefixListsRequest = struct(
  n0,
  _DPLR,
  0,
  [_DR, _Fi, _MR, _NTe, _PLIr],
  [
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
    [
      () => PrefixListResourceIdStringList,
      {
        [_xN]: _PLI,
      },
    ],
  ]
);
export var DescribePrefixListsResult = struct(
  n0,
  _DPLRe,
  0,
  [_NTe, _PLr],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => PrefixListSet,
      {
        [_eQN]: `PrefixListSet`,
        [_xN]: _pLS,
      },
    ],
  ]
);
export var PrefixList = struct(
  n0,
  _PL,
  0,
  [_Cid, _PLI, _PLN],
  [
    [
      () => ValueStringList,
      {
        [_eQN]: `CidrSet`,
        [_xN]: _cS,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrefixListId`,
        [_xN]: _pLI,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrefixListName`,
        [_xN]: _pLN,
      },
    ],
  ]
);
export var PrefixListResourceIdStringList = list(n0, _PLRISL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var PrefixListSet = list(n0, _PLSr, 0, [
  () => PrefixList,
  {
    [_xN]: _it,
  },
]);
export var DescribePrefixLists = op(
  n0,
  _DPLes,
  0,
  () => DescribePrefixListsRequest,
  () => DescribePrefixListsResult
);
