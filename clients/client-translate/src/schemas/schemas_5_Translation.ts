// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _JI, _JS, _STTJRto, _STTJRtop, _STTJt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopTextTranslationJobRequest = struct(n0, _STTJRto, 0, [_JI], [0]);
export var StopTextTranslationJobResponse = struct(n0, _STTJRtop, 0, [_JI, _JS], [0, 0]);
export var StopTextTranslationJob = op(
  n0,
  _STTJt,
  0,
  () => StopTextTranslationJobRequest,
  () => StopTextTranslationJobResponse
);
