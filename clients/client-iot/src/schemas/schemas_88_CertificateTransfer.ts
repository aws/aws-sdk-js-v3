// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TransferAlreadyCompletedException as __TransferAlreadyCompletedException } from "../models/index";
import { _CCT, _CCTR, _cI, _cl, _er, _h, _hE, _me, _TACE, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelCertificateTransferRequest = struct(n0, _CCTR, 0, [_cI], [[0, 1]]);
export var TransferAlreadyCompletedException = error(
  n0,
  _TACE,
  {
    [_er]: _cl,
    [_hE]: 410,
  },
  [_me],
  [0],

  __TransferAlreadyCompletedException
);
export var CancelCertificateTransfer = op(
  n0,
  _CCT,
  {
    [_h]: ["PATCH", "/cancel-certificate-transfer/{certificateId}", 200],
  },
  () => CancelCertificateTransferRequest,
  () => Unit
);
