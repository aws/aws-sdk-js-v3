// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _hEt, _hPI, _hPRHL, _ht, _hTt, _iN, _op, _UIMO, _UIMOR, _UIMORp, n0, Operation } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateInstanceMetadataOptionsRequest = struct(
  n0,
  _UIMOR,
  0,
  [_iN, _hTt, _hEt, _hPRHL, _hPI],
  [0, 0, 0, 1, 0]
);
export var UpdateInstanceMetadataOptionsResult = struct(n0, _UIMORp, 0, [_op], [() => Operation]);
export var UpdateInstanceMetadataOptions = op(
  n0,
  _UIMO,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/UpdateInstanceMetadataOptions", 200],
  },
  () => UpdateInstanceMetadataOptionsRequest,
  () => UpdateInstanceMetadataOptionsResult
);
