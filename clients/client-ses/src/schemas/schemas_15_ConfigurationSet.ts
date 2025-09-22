// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidTrackingOptionsException as __InvalidTrackingOptionsException,
  TrackingOptionsAlreadyExistsException as __TrackingOptionsAlreadyExistsException,
} from "../models/index";
import {
  _aQE,
  _c,
  _CCSTO,
  _CCSTOR,
  _CCSTORr,
  _CRD,
  _CSN,
  _e,
  _hE,
  _ITOE,
  _m,
  _TO,
  _TOAEE,
  _UCSTO,
  _UCSTOR,
  _UCSTORp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateConfigurationSetTrackingOptionsRequest = struct(
  n0,
  _CCSTOR,
  0,
  [_CSN, _TO],
  [0, () => TrackingOptions]
);
export var CreateConfigurationSetTrackingOptionsResponse = struct(n0, _CCSTORr, 0, [], []);
export var InvalidTrackingOptionsException = error(
  n0,
  _ITOE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidTrackingOptions`, 400],
  },
  [_m],
  [0],

  __InvalidTrackingOptionsException
);
export var TrackingOptions = struct(n0, _TO, 0, [_CRD], [0]);
export var TrackingOptionsAlreadyExistsException = error(
  n0,
  _TOAEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TrackingOptionsAlreadyExistsException`, 400],
  },
  [_CSN, _m],
  [0, 0],

  __TrackingOptionsAlreadyExistsException
);
export var UpdateConfigurationSetTrackingOptionsRequest = struct(
  n0,
  _UCSTOR,
  0,
  [_CSN, _TO],
  [0, () => TrackingOptions]
);
export var UpdateConfigurationSetTrackingOptionsResponse = struct(n0, _UCSTORp, 0, [], []);
export var CreateConfigurationSetTrackingOptions = op(
  n0,
  _CCSTO,
  0,
  () => CreateConfigurationSetTrackingOptionsRequest,
  () => CreateConfigurationSetTrackingOptionsResponse
);
export var UpdateConfigurationSetTrackingOptions = op(
  n0,
  _UCSTO,
  0,
  () => UpdateConfigurationSetTrackingOptionsRequest,
  () => UpdateConfigurationSetTrackingOptionsResponse
);
