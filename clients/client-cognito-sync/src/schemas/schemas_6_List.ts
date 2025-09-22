// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConcurrentModificationException as __ConcurrentModificationException } from "../models/index";
import { _aQE, _c, _CME, _CS, _e, _h, _hE, _IPI, _m, _PS, _SIPC, _SIPCR, _SIPCRe, n0 } from "./schemas_0";
import { CognitoStreams, PushSync } from "./schemas_5_PoolConfiguration";

/* eslint no-var: 0 */

export var ConcurrentModificationException = error(
  n0,
  _CME,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ConcurrentModification`, 400],
  },
  [_m],
  [0],

  __ConcurrentModificationException
);
export var SetIdentityPoolConfigurationRequest = struct(
  n0,
  _SIPCR,
  0,
  [_IPI, _PS, _CS],
  [[0, 1], () => PushSync, () => CognitoStreams]
);
export var SetIdentityPoolConfigurationResponse = struct(
  n0,
  _SIPCRe,
  0,
  [_IPI, _PS, _CS],
  [0, () => PushSync, () => CognitoStreams]
);
export var SetIdentityPoolConfiguration = op(
  n0,
  _SIPC,
  {
    [_h]: ["POST", "/identitypools/{IdentityPoolId}/configuration", 200],
  },
  () => SetIdentityPoolConfigurationRequest,
  () => SetIdentityPoolConfigurationResponse
);
