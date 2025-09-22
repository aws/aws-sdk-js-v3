// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TrackingOptionsDoesNotExistException as __TrackingOptionsDoesNotExistException } from "../models/index";
import { _aQE, _c, _CSN, _DCSTO, _DCSTOR, _DCSTORe, _e, _hE, _m, _TODNEE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConfigurationSetTrackingOptionsRequest = struct(n0, _DCSTOR, 0, [_CSN], [0]);
export var DeleteConfigurationSetTrackingOptionsResponse = struct(n0, _DCSTORe, 0, [], []);
export var TrackingOptionsDoesNotExistException = error(
  n0,
  _TODNEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TrackingOptionsDoesNotExistException`, 400],
  },
  [_CSN, _m],
  [0, 0],

  __TrackingOptionsDoesNotExistException
);
export var DeleteConfigurationSetTrackingOptions = op(
  n0,
  _DCSTO,
  0,
  () => DeleteConfigurationSetTrackingOptionsRequest,
  () => DeleteConfigurationSetTrackingOptionsResponse
);
