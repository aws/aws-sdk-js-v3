// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ACIPI,
  _acipi,
  _ACR,
  _acr,
  _AI,
  _aI,
  _AUPI,
  _aupi,
  _AUPWCI,
  _aupwci,
  _BMAI,
  _bMAI,
  _E,
  _e,
  _h,
  _jN,
  _LAC,
  _lAC,
  _LACRO,
  _UBC,
  _UBCR,
  _UBCRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var LoginAuthConfigReqObj = struct(
  n0,
  _LACRO,
  0,
  [_ACIPI, _ACR, _AUPI, _AUPWCI],
  [
    [
      0,
      {
        [_jN]: _acipi,
      },
    ],
    [
      0,
      {
        [_jN]: _acr,
      },
    ],
    [
      0,
      {
        [_jN]: _aupi,
      },
    ],
    [
      0,
      {
        [_jN]: _aupwci,
      },
    ],
  ]
);
export var UpdateBackendConfigRequest = struct(
  n0,
  _UBCR,
  0,
  [_AI, _LAC],
  [
    [0, 1],
    [
      () => LoginAuthConfigReqObj,
      {
        [_jN]: _lAC,
      },
    ],
  ]
);
export var UpdateBackendConfigResponse = struct(
  n0,
  _UBCRp,
  0,
  [_AI, _BMAI, _E, _LAC],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _bMAI,
      },
    ],
    [
      0,
      {
        [_jN]: _e,
      },
    ],
    [
      () => LoginAuthConfigReqObj,
      {
        [_jN]: _lAC,
      },
    ],
  ]
);
export var UpdateBackendConfig = op(
  n0,
  _UBC,
  {
    [_h]: ["POST", "/backend/{AppId}/config/update", 200],
  },
  () => UpdateBackendConfigRequest,
  () => UpdateBackendConfigResponse
);
