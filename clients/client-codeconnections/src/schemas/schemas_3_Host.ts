// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ResourceUnavailableException as __ResourceUnavailableException,
  UnsupportedOperationException as __UnsupportedOperationException,
} from "../models/index";
import {
  _c,
  _CE,
  _CH,
  _CHI,
  _CHO,
  _DH,
  _DHI,
  _DHO,
  _e,
  _GH,
  _GHI,
  _GHO,
  _H,
  _HA,
  _hE,
  _HL,
  _Ho,
  _LH,
  _LHI,
  _LHO,
  _M,
  _MR,
  _N,
  _NT,
  _PE,
  _PT,
  _RUE,
  _S,
  _SGI,
  _SI,
  _SM,
  _T,
  _TC,
  _UH,
  _UHI,
  _UHO,
  _UOE,
  _VC,
  _VI,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_6_Create";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var CreateHostInput = struct(
  n0,
  _CHI,
  0,
  [_N, _PT, _PE, _VC, _T],
  [0, 0, 0, () => VpcConfiguration, () => TagList]
);
export var CreateHostOutput = struct(n0, _CHO, 0, [_HA, _T], [0, () => TagList]);
export var DeleteHostInput = struct(n0, _DHI, 0, [_HA], [0]);
export var DeleteHostOutput = struct(n0, _DHO, 0, [], []);
export var GetHostInput = struct(n0, _GHI, 0, [_HA], [0]);
export var GetHostOutput = struct(n0, _GHO, 0, [_N, _S, _PT, _PE, _VC], [0, 0, 0, 0, () => VpcConfiguration]);
export var Host = struct(n0, _H, 0, [_N, _HA, _PT, _PE, _VC, _S, _SM], [0, 0, 0, 0, () => VpcConfiguration, 0, 0]);
export var ListHostsInput = struct(n0, _LHI, 0, [_MR, _NT], [1, 0]);
export var ListHostsOutput = struct(n0, _LHO, 0, [_Ho, _NT], [() => HostList, 0]);
export var ResourceUnavailableException = error(
  n0,
  _RUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ResourceUnavailableException
);
export var UnsupportedOperationException = error(
  n0,
  _UOE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __UnsupportedOperationException
);
export var UpdateHostInput = struct(n0, _UHI, 0, [_HA, _PE, _VC], [0, 0, () => VpcConfiguration]);
export var UpdateHostOutput = struct(n0, _UHO, 0, [], []);
export var VpcConfiguration = struct(n0, _VC, 0, [_VI, _SI, _SGI, _TC], [0, 64 | 0, 64 | 0, 0]);
export var HostList = list(n0, _HL, 0, () => Host);
export var SecurityGroupIds = 64 | 0;

export var SubnetIds = 64 | 0;

export var CreateHost = op(
  n0,
  _CH,
  0,
  () => CreateHostInput,
  () => CreateHostOutput
);
export var DeleteHost = op(
  n0,
  _DH,
  0,
  () => DeleteHostInput,
  () => DeleteHostOutput
);
export var GetHost = op(
  n0,
  _GH,
  0,
  () => GetHostInput,
  () => GetHostOutput
);
export var ListHosts = op(
  n0,
  _LH,
  0,
  () => ListHostsInput,
  () => ListHostsOutput
);
export var UpdateHost = op(
  n0,
  _UH,
  0,
  () => UpdateHostInput,
  () => UpdateHostOutput
);
