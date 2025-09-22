// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  ConnectorAuthenticationException as __ConnectorAuthenticationException,
  ConnectorServerException as __ConnectorServerException,
} from "../models/index";
import { _c, _CAE, _CSE, _e, _hE, _m, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConnectorAuthenticationException = error(
  n0,
  _CAE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_m],
  [0],

  __ConnectorAuthenticationException
);
export var ConnectorServerException = error(
  n0,
  _CSE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ConnectorServerException
);
