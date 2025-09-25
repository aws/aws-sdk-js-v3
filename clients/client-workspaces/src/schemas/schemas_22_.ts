// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _CTon,
  _GA,
  _GAFD,
  _ML,
  _Mo,
  _MSPod,
  _MSPRodif,
  _MSPRodify,
  _Pe,
  _PP,
  _RI,
  _SC,
  _SCt,
  _SEPP,
  _SPt,
  _St,
  _USs,
  _USse,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GlobalAcceleratorForDirectory = struct(n0, _GAFD, 0, [_Mo, _PP], [0, 0]);
export var ModifyStreamingPropertiesRequest = struct(n0, _MSPRodif, 0, [_RI, _SPt], [0, () => StreamingProperties]);
export var ModifyStreamingPropertiesResult = struct(n0, _MSPRodify, 0, [], []);
export var StorageConnector = struct(n0, _SC, 0, [_CTon, _St], [0, 0]);
export var StreamingProperties = struct(
  n0,
  _SPt,
  0,
  [_SEPP, _USs, _SCt, _GA],
  [0, () => UserSettings, () => StorageConnectors, () => GlobalAcceleratorForDirectory]
);
export var UserSetting = struct(n0, _USse, 0, [_Ac, _Pe, _ML], [0, 0, 1]);
export var StorageConnectors = list(n0, _SCt, 0, () => StorageConnector);
export var UserSettings = list(n0, _USs, 0, () => UserSetting);
export var ModifyStreamingProperties = op(
  n0,
  _MSPod,
  0,
  () => ModifyStreamingPropertiesRequest,
  () => ModifyStreamingPropertiesResult
);
