// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FA, _fA, _h, _jN, _MSN, _mSN, _RFMS, _RFMSR, _RFMSRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveFlowMediaStreamRequest = struct(
  n0,
  _RFMSR,
  0,
  [_FA, _MSN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var RemoveFlowMediaStreamResponse = struct(
  n0,
  _RFMSRe,
  0,
  [_FA, _MSN],
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
        [_jN]: _mSN,
      },
    ],
  ]
);
export var RemoveFlowMediaStream = op(
  n0,
  _RFMS,
  {
    [_h]: ["DELETE", "/v1/flows/{FlowArn}/mediaStreams/{MediaStreamName}", 200],
  },
  () => RemoveFlowMediaStreamRequest,
  () => RemoveFlowMediaStreamResponse
);
