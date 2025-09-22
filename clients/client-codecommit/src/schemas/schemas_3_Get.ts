// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  BlobIdDoesNotExistException as __BlobIdDoesNotExistException,
  BlobIdRequiredException as __BlobIdRequiredException,
  FileTooLargeException as __FileTooLargeException,
  InvalidBlobIdException as __InvalidBlobIdException,
} from "../models/index";
import { _bI, _BIDNEE, _BIRE, _c, _con, _e, _FTLE, _GB, _GBI, _GBO, _IBIE, _m, _rN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BlobIdDoesNotExistException = error(
  n0,
  _BIDNEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __BlobIdDoesNotExistException
);
export var BlobIdRequiredException = error(
  n0,
  _BIRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __BlobIdRequiredException
);
export var FileTooLargeException = error(
  n0,
  _FTLE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __FileTooLargeException
);
export var GetBlobInput = struct(n0, _GBI, 0, [_rN, _bI], [0, 0]);
export var GetBlobOutput = struct(n0, _GBO, 0, [_con], [21]);
export var InvalidBlobIdException = error(
  n0,
  _IBIE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidBlobIdException
);
export var GetBlob = op(
  n0,
  _GB,
  0,
  () => GetBlobInput,
  () => GetBlobOutput
);
