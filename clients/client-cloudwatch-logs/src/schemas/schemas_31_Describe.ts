// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aPc, _ar, _cTr, _De, _des, _dNe, _PD, _PDR, _PDRu, _rAo, _tA, _ta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Destination = struct(n0, _De, 0, [_dNe, _tA, _rAo, _aPc, _ar, _cTr], [0, 0, 0, 0, 0, 1]);
export var PutDestinationRequest = struct(n0, _PDR, 0, [_dNe, _tA, _rAo, _ta], [0, 0, 0, 128 | 0]);
export var PutDestinationResponse = struct(n0, _PDRu, 0, [_des], [() => Destination]);
export var PutDestination = op(
  n0,
  _PD,
  0,
  () => PutDestinationRequest,
  () => PutDestinationResponse
);
