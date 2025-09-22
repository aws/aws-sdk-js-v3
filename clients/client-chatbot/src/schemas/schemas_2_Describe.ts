// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DescribeSlackUserIdentitiesException as __DescribeSlackUserIdentitiesException,
  DescribeSlackWorkspacesException as __DescribeSlackWorkspacesException,
} from "../models/index";
import {
  _AUI,
  _CCA,
  _DSUIe,
  _DSUIEe,
  _DSUIRes,
  _DSUIResc,
  _DSW,
  _DSWE,
  _DSWR,
  _DSWRe,
  _e,
  _h,
  _hE,
  _IRA,
  _M,
  _MR,
  _NTe,
  _S,
  _s,
  _SR,
  _STI,
  _STN,
  _SUI,
  _SUIL,
  _SUIl,
  _SUIla,
  _SW,
  _SWL,
  _SWl,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeSlackUserIdentitiesException = error(
  n0,
  _DSUIEe,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __DescribeSlackUserIdentitiesException
);
export var DescribeSlackUserIdentitiesRequest = struct(n0, _DSUIRes, 0, [_CCA, _NTe, _MR], [0, 0, 1]);
export var DescribeSlackUserIdentitiesResult = struct(
  n0,
  _DSUIResc,
  0,
  [_SUIl, _NTe],
  [() => SlackUserIdentitiesList, 0]
);
export var DescribeSlackWorkspacesException = error(
  n0,
  _DSWE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __DescribeSlackWorkspacesException
);
export var DescribeSlackWorkspacesRequest = struct(n0, _DSWR, 0, [_MR, _NTe], [1, 0]);
export var DescribeSlackWorkspacesResult = struct(n0, _DSWRe, 0, [_SW, _NTe], [() => SlackWorkspacesList, 0]);
export var SlackUserIdentity = struct(n0, _SUIla, 0, [_IRA, _CCA, _STI, _SUI, _AUI], [0, 0, 0, 0, 0]);
export var SlackWorkspace = struct(n0, _SWl, 0, [_STI, _STN, _S, _SR], [0, 0, 0, 0]);
export var SlackUserIdentitiesList = list(n0, _SUIL, 0, () => SlackUserIdentity);
export var SlackWorkspacesList = list(n0, _SWL, 0, () => SlackWorkspace);
export var DescribeSlackUserIdentities = op(
  n0,
  _DSUIe,
  {
    [_h]: ["POST", "/describe-slack-user-identities", 200],
  },
  () => DescribeSlackUserIdentitiesRequest,
  () => DescribeSlackUserIdentitiesResult
);
export var DescribeSlackWorkspaces = op(
  n0,
  _DSW,
  {
    [_h]: ["POST", "/describe-slack-workspaces", 200],
  },
  () => DescribeSlackWorkspacesRequest,
  () => DescribeSlackWorkspacesResult
);
