// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ChannelExistsForEDSException as __ChannelExistsForEDSException,
  EventDataStoreFederationEnabledException as __EventDataStoreFederationEnabledException,
  EventDataStoreTerminationProtectedException as __EventDataStoreTerminationProtectedException,
} from "../models/index";
import { _aQE, _c, _CEFEDSE, _DEDS, _DEDSR, _DEDSRe, _e, _EDS, _EDSFEE, _EDSTPE, _hE, _M, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ChannelExistsForEDSException = error(
  n0,
  _CEFEDSE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ChannelExistsForEDS`, 400],
  },
  [_M],
  [0],

  __ChannelExistsForEDSException
);
export var DeleteEventDataStoreRequest = struct(n0, _DEDSR, 0, [_EDS], [0]);
export var DeleteEventDataStoreResponse = struct(n0, _DEDSRe, 0, [], []);
export var EventDataStoreFederationEnabledException = error(
  n0,
  _EDSFEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`EventDataStoreFederationEnabled`, 400],
  },
  [_M],
  [0],

  __EventDataStoreFederationEnabledException
);
export var EventDataStoreTerminationProtectedException = error(
  n0,
  _EDSTPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`EventDataStoreTerminationProtectedException`, 400],
  },
  [_M],
  [0],

  __EventDataStoreTerminationProtectedException
);
export var DeleteEventDataStore = op(
  n0,
  _DEDS,
  0,
  () => DeleteEventDataStoreRequest,
  () => DeleteEventDataStoreResponse
);
