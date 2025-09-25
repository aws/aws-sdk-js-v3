// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GVCTH, _GVCTHR, _GVCTHRe, _h, _So, _TH, _Ti, _VCI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetVoiceConnectorTerminationHealthRequest = struct(n0, _GVCTHR, 0, [_VCI], [[0, 1]]);
export var GetVoiceConnectorTerminationHealthResponse = struct(n0, _GVCTHRe, 0, [_TH], [() => TerminationHealth]);
export var TerminationHealth = struct(n0, _TH, 0, [_Ti, _So], [5, 0]);
export var GetVoiceConnectorTerminationHealth = op(
  n0,
  _GVCTH,
  {
    [_h]: ["GET", "/voice-connectors/{VoiceConnectorId}/termination/health", 200],
  },
  () => GetVoiceConnectorTerminationHealthRequest,
  () => GetVoiceConnectorTerminationHealthResponse
);
