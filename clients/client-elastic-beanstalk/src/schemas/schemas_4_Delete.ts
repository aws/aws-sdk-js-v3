// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  OperationInProgressException as __OperationInProgressException,
  SourceBundleDeletionException as __SourceBundleDeletionException,
} from "../models/index";
import {
  _AN,
  _aQE,
  _c,
  _DA,
  _DAM,
  _DAV,
  _DAVM,
  _DCT,
  _DCTM,
  _DSB,
  _e,
  _hE,
  _m,
  _OIPE,
  _SBDE,
  _TEBF,
  _TN,
  _VL,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApplicationMessage = struct(n0, _DAM, 0, [_AN, _TEBF], [0, 2]);
export var DeleteApplicationVersionMessage = struct(n0, _DAVM, 0, [_AN, _VL, _DSB], [0, 0, 2]);
export var DeleteConfigurationTemplateMessage = struct(n0, _DCTM, 0, [_AN, _TN], [0, 0]);
export var OperationInProgressException = error(
  n0,
  _OIPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`OperationInProgressFailure`, 400],
  },
  [_m],
  [0],

  __OperationInProgressException
);
export var SourceBundleDeletionException = error(
  n0,
  _SBDE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SourceBundleDeletionFailure`, 400],
  },
  [_m],
  [0],

  __SourceBundleDeletionException
);
export var DeleteApplication = op(
  n0,
  _DA,
  0,
  () => DeleteApplicationMessage,
  () => Unit
);
export var DeleteApplicationVersion = op(
  n0,
  _DAV,
  0,
  () => DeleteApplicationVersionMessage,
  () => Unit
);
export var DeleteConfigurationTemplate = op(
  n0,
  _DCT,
  0,
  () => DeleteConfigurationTemplateMessage,
  () => Unit
);
