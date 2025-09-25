// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  NoSuchStreamingDistribution as __NoSuchStreamingDistribution,
  StreamingDistributionNotDisabled as __StreamingDistributionNotDisabled,
} from "../models/index";
import { _c, _DSD, _DSDR, _e, _h, _hE, _hH, _Id, _IM, _IM_, _M, _NSSD, _SDND, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteStreamingDistributionRequest = struct(
  n0,
  _DSDR,
  0,
  [_Id, _IM],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var NoSuchStreamingDistribution = error(
  n0,
  _NSSD,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __NoSuchStreamingDistribution
);
export var StreamingDistributionNotDisabled = error(
  n0,
  _SDND,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __StreamingDistributionNotDisabled
);
export var DeleteStreamingDistribution = op(
  n0,
  _DSD,
  {
    [_h]: ["DELETE", "/2020-05-31/streaming-distribution/{Id}", 204],
  },
  () => DeleteStreamingDistributionRequest,
  () => Unit
);
