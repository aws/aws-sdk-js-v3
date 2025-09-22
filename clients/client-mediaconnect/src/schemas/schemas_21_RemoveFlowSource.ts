// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FA, _fA, _h, _jN, _RFS, _RFSR, _RFSRe, _SAo, _sAo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveFlowSourceRequest = struct(
  n0,
  _RFSR,
  0,
  [_FA, _SAo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var RemoveFlowSourceResponse = struct(
  n0,
  _RFSRe,
  0,
  [_FA, _SAo],
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
        [_jN]: _sAo,
      },
    ],
  ]
);
export var RemoveFlowSource = op(
  n0,
  _RFS,
  {
    [_h]: ["DELETE", "/v1/flows/{FlowArn}/source/{SourceArn}", 202],
  },
  () => RemoveFlowSourceRequest,
  () => RemoveFlowSourceResponse
);
