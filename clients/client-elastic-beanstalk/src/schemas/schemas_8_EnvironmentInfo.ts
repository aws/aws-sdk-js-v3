// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _EI,
  _EID,
  _EIDL,
  _EII,
  _EInv,
  _EN,
  _IT,
  _Me,
  _REI,
  _REIe,
  _REIM,
  _REIMe,
  _REIRM,
  _STa,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EnvironmentInfoDescription = struct(n0, _EID, 0, [_IT, _EII, _STa, _Me], [0, 0, 4, 0]);
export var RequestEnvironmentInfoMessage = struct(n0, _REIM, 0, [_EI, _EN, _IT], [0, 0, 0]);
export var RetrieveEnvironmentInfoMessage = struct(n0, _REIMe, 0, [_EI, _EN, _IT], [0, 0, 0]);
export var RetrieveEnvironmentInfoResultMessage = struct(
  n0,
  _REIRM,
  0,
  [_EInv],
  [() => EnvironmentInfoDescriptionList]
);
export var EnvironmentInfoDescriptionList = list(n0, _EIDL, 0, () => EnvironmentInfoDescription);
export var RequestEnvironmentInfo = op(
  n0,
  _REI,
  0,
  () => RequestEnvironmentInfoMessage,
  () => Unit
);
export var RetrieveEnvironmentInfo = op(
  n0,
  _REIe,
  0,
  () => RetrieveEnvironmentInfoMessage,
  () => RetrieveEnvironmentInfoResultMessage
);
