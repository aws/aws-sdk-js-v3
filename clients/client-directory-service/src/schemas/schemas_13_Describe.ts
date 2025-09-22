// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DomainControllerLimitExceededException as __DomainControllerLimitExceededException } from "../models/index";
import { _c, _DCLEE, _DI, _DNe, _e, _M, _RI, _UNODC, _UNODCR, _UNODCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DomainControllerLimitExceededException = error(
  n0,
  _DCLEE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __DomainControllerLimitExceededException
);
export var UpdateNumberOfDomainControllersRequest = struct(n0, _UNODCR, 0, [_DI, _DNe], [0, 1]);
export var UpdateNumberOfDomainControllersResult = struct(n0, _UNODCRp, 0, [], []);
export var UpdateNumberOfDomainControllers = op(
  n0,
  _UNODC,
  0,
  () => UpdateNumberOfDomainControllersRequest,
  () => UpdateNumberOfDomainControllersResult
);
