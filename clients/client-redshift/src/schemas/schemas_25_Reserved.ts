// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ReservedNodeExchangeNotFoundFault as __ReservedNodeExchangeNotFoundFault,
  ReservedNodeNotFoundFault as __ReservedNodeNotFoundFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _DRNES,
  _DRNESIM,
  _DRNESOM,
  _e,
  _hE,
  _M,
  _m,
  _MR,
  _RNENFF,
  _RNERI,
  _RNES,
  _RNESD,
  _RNESL,
  _RNI,
  _RNNFF,
  _xN,
  n0,
  ReservedNodeExchangeStatus,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeReservedNodeExchangeStatusInputMessage = struct(
  n0,
  _DRNESIM,
  0,
  [_RNI, _RNERI, _MR, _M],
  [0, 0, 1, 0]
);
export var DescribeReservedNodeExchangeStatusOutputMessage = struct(
  n0,
  _DRNESOM,
  0,
  [_RNESD, _M],
  [[() => ReservedNodeExchangeStatusList, 0], 0]
);
export var ReservedNodeExchangeNotFoundFault = error(
  n0,
  _RNENFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ReservedNodeExchangeNotFond`, 404],
  },
  [_m],
  [0],

  __ReservedNodeExchangeNotFoundFault
);
export var ReservedNodeNotFoundFault = error(
  n0,
  _RNNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ReservedNodeNotFound`, 404],
  },
  [_m],
  [0],

  __ReservedNodeNotFoundFault
);
export var ReservedNodeExchangeStatusList = list(n0, _RNESL, 0, [
  () => ReservedNodeExchangeStatus,
  {
    [_xN]: _RNES,
  },
]);
export var DescribeReservedNodeExchangeStatus = op(
  n0,
  _DRNES,
  0,
  () => DescribeReservedNodeExchangeStatusInputMessage,
  () => DescribeReservedNodeExchangeStatusOutputMessage
);
