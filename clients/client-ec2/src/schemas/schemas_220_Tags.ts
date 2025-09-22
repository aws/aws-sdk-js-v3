// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CTR,
  _CTreat,
  _DR,
  _dR,
  _DTelet,
  _DTR,
  _eQN,
  _Res,
  _rIe,
  _RIes,
  _T,
  _Ta,
  _ta,
  _xN,
  n0,
  TagList,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTagsRequest = struct(
  n0,
  _CTR,
  0,
  [_DR, _Res, _T],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      64 | 0,
      {
        [_xN]: _RIes,
      },
    ],
    [
      () => TagList,
      {
        [_xN]: _Ta,
      },
    ],
  ]
);
export var DeleteTagsRequest = struct(
  n0,
  _DTR,
  0,
  [_DR, _Res, _T],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      64 | 0,
      {
        [_eQN]: `ResourceId`,
        [_xN]: _rIe,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `Tag`,
        [_xN]: _ta,
      },
    ],
  ]
);
export var ResourceIdList = 64 | 0;

export var CreateTags = op(
  n0,
  _CTreat,
  0,
  () => CreateTagsRequest,
  () => Unit
);
export var DeleteTags = op(
  n0,
  _DTelet,
  0,
  () => DeleteTagsRequest,
  () => Unit
);
