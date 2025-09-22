// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _DI, _DSe, _DSR, _SI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var SpeakerId = sim(n0, _SI, 0, 8);
export var DeleteSpeakerRequest = struct(n0, _DSR, 0, [_DI, _SI], [0, [() => SpeakerId, 0]]);
export var DeleteSpeaker = op(
  n0,
  _DSe,
  0,
  () => DeleteSpeakerRequest,
  () => Unit
);
