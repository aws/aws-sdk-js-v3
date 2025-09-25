// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cVCI, _dNI, _RDN, _RDNI, _RDNO, _s, _SDN, _SDNI, _SDNIt, _SDNO, _SDNOt, _SDNt, _sR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RebootDbNodeInput = struct(
  n0,
  _RDNI,
  0,
  [_cVCI, _dNI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var RebootDbNodeOutput = struct(n0, _RDNO, 0, [_dNI, _s, _sR], [0, 0, 0]);
export var StartDbNodeInput = struct(
  n0,
  _SDNI,
  0,
  [_cVCI, _dNI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var StartDbNodeOutput = struct(n0, _SDNO, 0, [_dNI, _s, _sR], [0, 0, 0]);
export var StopDbNodeInput = struct(
  n0,
  _SDNIt,
  0,
  [_cVCI, _dNI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var StopDbNodeOutput = struct(n0, _SDNOt, 0, [_dNI, _s, _sR], [0, 0, 0]);
export var RebootDbNode = op(
  n0,
  _RDN,
  0,
  () => RebootDbNodeInput,
  () => RebootDbNodeOutput
);
export var StartDbNode = op(
  n0,
  _SDN,
  0,
  () => StartDbNodeInput,
  () => StartDbNodeOutput
);
export var StopDbNode = op(
  n0,
  _SDNt,
  0,
  () => StopDbNodeInput,
  () => StopDbNodeOutput
);
