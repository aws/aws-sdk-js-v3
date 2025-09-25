// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  DeploymentGroupNameRequiredException as __DeploymentGroupNameRequiredException,
  InvalidDeploymentGroupNameException as __InvalidDeploymentGroupNameException,
  InvalidInputException as __InvalidInputException,
} from "../models/index";
import { _c, _DGNRE, _er, _IDGNE, _IIE, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeploymentGroupNameRequiredException = error(
  n0,
  _DGNRE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DeploymentGroupNameRequiredException
);
export var InvalidDeploymentGroupNameException = error(
  n0,
  _IDGNE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidDeploymentGroupNameException
);
export var InvalidInputException = error(
  n0,
  _IIE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidInputException
);
