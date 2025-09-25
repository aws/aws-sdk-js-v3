// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { NotConfiguredException as __NotConfiguredException } from "../models/index";
import { _cl, _dAL, _dLL, _er, _GVLO, _GVLOR, _GVLORe, _h, _hE, _me, _NCE, _rA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetV2LoggingOptionsRequest = struct(n0, _GVLOR, 0, [], []);
export var GetV2LoggingOptionsResponse = struct(n0, _GVLORe, 0, [_rA, _dLL, _dAL], [0, 0, 2]);
export var NotConfiguredException = error(
  n0,
  _NCE,
  {
    [_er]: _cl,
    [_hE]: 404,
  },
  [_me],
  [0],

  __NotConfiguredException
);
export var GetV2LoggingOptions = op(
  n0,
  _GVLO,
  {
    [_h]: ["GET", "/v2LoggingOptions", 200],
  },
  () => GetV2LoggingOptionsRequest,
  () => GetV2LoggingOptionsResponse
);
