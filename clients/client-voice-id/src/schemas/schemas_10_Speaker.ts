// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _CA, _CSI, _DI, _DSes, _DSRe, _DSRes, _GSI, _LAA, _SI, _Sp, _St, _UA, n0 } from "./schemas_0";
import { SpeakerId } from "./schemas_11_Speaker";

/* eslint no-var: 0 */

export var CustomerSpeakerId = sim(n0, _CSI, 0, 8);
export var DescribeSpeakerRequest = struct(n0, _DSRe, 0, [_DI, _SI], [0, [() => SpeakerId, 0]]);
export var DescribeSpeakerResponse = struct(n0, _DSRes, 0, [_Sp], [[() => Speaker, 0]]);
export var Speaker = struct(
  n0,
  _Sp,
  0,
  [_DI, _CSI, _GSI, _St, _CA, _UA, _LAA],
  [0, [() => CustomerSpeakerId, 0], 0, 0, 4, 4, 4]
);
export var DescribeSpeaker = op(
  n0,
  _DSes,
  0,
  () => DescribeSpeakerRequest,
  () => DescribeSpeakerResponse
);
