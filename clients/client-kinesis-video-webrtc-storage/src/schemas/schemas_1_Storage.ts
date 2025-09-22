// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ClientLimitExceededException as __ClientLimitExceededException,
  InvalidArgumentException as __InvalidArgumentException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import {
  _ADE,
  _c,
  _cA,
  _cI,
  _CLEE,
  _e,
  _h,
  _hE,
  _IAE,
  _JSS,
  _JSSAV,
  _JSSAVI,
  _JSSI,
  _m,
  _RNFE,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var ClientLimitExceededException = error(
  n0,
  _CLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ClientLimitExceededException
);
export var InvalidArgumentException = error(
  n0,
  _IAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidArgumentException
);
export var JoinStorageSessionAsViewerInput = struct(n0, _JSSAVI, 0, [_cA, _cI], [0, 0]);
export var JoinStorageSessionInput = struct(n0, _JSSI, 0, [_cA], [0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var JoinStorageSession = op(
  n0,
  _JSS,
  {
    [_h]: ["POST", "/joinStorageSession", 200],
  },
  () => JoinStorageSessionInput,
  () => Unit
);
export var JoinStorageSessionAsViewer = op(
  n0,
  _JSSAV,
  {
    [_h]: ["POST", "/joinStorageSessionAsViewer", 200],
  },
  () => JoinStorageSessionAsViewerInput,
  () => Unit
);
