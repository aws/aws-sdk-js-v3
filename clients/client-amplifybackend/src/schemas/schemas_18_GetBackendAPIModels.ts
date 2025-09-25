// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _BEN,
  _GBAPIMe,
  _GBAPIMRet,
  _GBAPIMReta,
  _h,
  _jN,
  _MIS,
  _mIS,
  _Mo,
  _mo,
  _RN,
  _rN,
  _St,
  _st,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetBackendAPIModelsRequest = struct(
  n0,
  _GBAPIMRet,
  0,
  [_AI, _BEN, _RN],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var GetBackendAPIModelsResponse = struct(
  n0,
  _GBAPIMReta,
  0,
  [_Mo, _St, _MIS],
  [
    [
      0,
      {
        [_jN]: _mo,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      0,
      {
        [_jN]: _mIS,
      },
    ],
  ]
);
export var GetBackendAPIModels = op(
  n0,
  _GBAPIMe,
  {
    [_h]: ["POST", "/backend/{AppId}/api/{BackendEnvironmentName}/getModels", 200],
  },
  () => GetBackendAPIModelsRequest,
  () => GetBackendAPIModelsResponse
);
