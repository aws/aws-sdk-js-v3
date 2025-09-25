// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  OrganizationsException as __OrganizationsException,
  ShareLimitExceededException as __ShareLimitExceededException,
} from "../models/index";
import {
  _c,
  _DI,
  _e,
  _I,
  _M,
  _N,
  _OE,
  _RI,
  _SDha,
  _SDI,
  _SDR,
  _SDRh,
  _SLEE,
  _SM,
  _SNh,
  _STh,
  _Ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Notes = sim(n0, _N, 0, 8);
export var OrganizationsException = error(
  n0,
  _OE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __OrganizationsException
);
export var ShareDirectoryRequest = struct(
  n0,
  _SDR,
  0,
  [_DI, _SNh, _STh, _SM],
  [0, [() => Notes, 0], () => ShareTarget, 0]
);
export var ShareDirectoryResult = struct(n0, _SDRh, 0, [_SDI], [0]);
export var ShareLimitExceededException = error(
  n0,
  _SLEE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __ShareLimitExceededException
);
export var ShareTarget = struct(n0, _STh, 0, [_I, _Ty], [0, 0]);
export var ShareDirectory = op(
  n0,
  _SDha,
  0,
  () => ShareDirectoryRequest,
  () => ShareDirectoryResult
);
