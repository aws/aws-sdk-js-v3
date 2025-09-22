// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _acc, _AD, _aI, _CM, _CMR, _CMRr, _em, _h, _jN, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AccountDetail = struct(
  n0,
  _AD,
  0,
  [_aI, _em],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _em,
      },
    ],
  ]
);
export var CreateMemberRequest = struct(
  n0,
  _CMR,
  0,
  [_acc, _t],
  [
    [
      () => AccountDetail,
      {
        [_jN]: _acc,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateMemberResponse = struct(
  n0,
  _CMRr,
  0,
  [_a],
  [
    [
      0,
      {
        [_jN]: _a,
      },
    ],
  ]
);
export var CreateMember = op(
  n0,
  _CM,
  {
    [_h]: ["POST", "/members", 200],
  },
  () => CreateMemberRequest,
  () => CreateMemberResponse
);
