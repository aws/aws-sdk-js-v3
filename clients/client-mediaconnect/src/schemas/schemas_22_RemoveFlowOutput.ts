// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FA, _fA, _h, _jN, _OA, _oA, _RFO, _RFOR, _RFORe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveFlowOutputRequest = struct(
  n0,
  _RFOR,
  0,
  [_FA, _OA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var RemoveFlowOutputResponse = struct(
  n0,
  _RFORe,
  0,
  [_FA, _OA],
  [
    [
      0,
      {
        [_jN]: _fA,
      },
    ],
    [
      0,
      {
        [_jN]: _oA,
      },
    ],
  ]
);
export var RemoveFlowOutput = op(
  n0,
  _RFO,
  {
    [_h]: ["DELETE", "/v1/flows/{FlowArn}/outputs/{OutputArn}", 202],
  },
  () => RemoveFlowOutputRequest,
  () => RemoveFlowOutputResponse
);
