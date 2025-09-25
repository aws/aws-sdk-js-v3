// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  DeploymentIdRequiredException as __DeploymentIdRequiredException,
  InvalidDeploymentIdException as __InvalidDeploymentIdException,
} from "../models/index";
import { _c, _DIRE, _er, _IDIE, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeploymentIdRequiredException = error(
  n0,
  _DIRE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __DeploymentIdRequiredException
);
export var InvalidDeploymentIdException = error(
  n0,
  _IDIE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidDeploymentIdException
);
