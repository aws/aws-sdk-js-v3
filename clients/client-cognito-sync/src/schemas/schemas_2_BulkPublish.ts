// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  AlreadyStreamedException as __AlreadyStreamedException,
  DuplicateRequestException as __DuplicateRequestException,
} from "../models/index";
import { _aQE, _ASE, _BP, _BPR, _BPRu, _c, _DRE, _e, _h, _hE, _IPI, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AlreadyStreamedException = error(
  n0,
  _ASE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AlreadyStreamed`, 400],
  },
  [_m],
  [0],

  __AlreadyStreamedException
);
export var BulkPublishRequest = struct(n0, _BPR, 0, [_IPI], [[0, 1]]);
export var BulkPublishResponse = struct(n0, _BPRu, 0, [_IPI], [0]);
export var DuplicateRequestException = error(
  n0,
  _DRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DuplicateRequest`, 400],
  },
  [_m],
  [0],

  __DuplicateRequestException
);
export var BulkPublish = op(
  n0,
  _BP,
  {
    [_h]: ["POST", "/identitypools/{IdentityPoolId}/bulkpublish", 200],
  },
  () => BulkPublishRequest,
  () => BulkPublishResponse
);
