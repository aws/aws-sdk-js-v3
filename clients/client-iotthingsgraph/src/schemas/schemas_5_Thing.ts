// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AETT, _AETTR, _AETTRs, _DEFT, _DEFTR, _DEFTRi, _eI, _eT, _nV, _tN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateEntityToThingRequest = struct(n0, _AETTR, 0, [_tN, _eI, _nV], [0, 0, 1]);
export var AssociateEntityToThingResponse = struct(n0, _AETTRs, 0, [], []);
export var DissociateEntityFromThingRequest = struct(n0, _DEFTR, 0, [_tN, _eT], [0, 0]);
export var DissociateEntityFromThingResponse = struct(n0, _DEFTRi, 0, [], []);
export var AssociateEntityToThing = op(
  n0,
  _AETT,
  0,
  () => AssociateEntityToThingRequest,
  () => AssociateEntityToThingResponse
);
export var DissociateEntityFromThing = op(
  n0,
  _DEFT,
  0,
  () => DissociateEntityFromThingRequest,
  () => DissociateEntityFromThingResponse
);
