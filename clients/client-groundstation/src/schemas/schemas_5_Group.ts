// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aCC,
  _AD,
  _aD,
  _aI,
  _aV,
  _cAa,
  _cT,
  _CV,
  _cV,
  _CVL,
  _dD,
  _DDi,
  _h,
  _iI,
  _iT,
  _pIA,
  _pIAr,
  _RA,
  _RAR,
  _RARe,
  _rCC,
  _t,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AgentDetails = struct(
  n0,
  _AD,
  0,
  [_aV, _iI, _iT, _rCC, _aCC, _cV],
  [0, 0, 0, 64 | 1, 64 | 1, () => ComponentVersionList]
);
export var ComponentVersion = struct(n0, _CV, 0, [_cT, _v], [0, 64 | 0]);
export var DiscoveryData = struct(n0, _DDi, 0, [_pIA, _pIAr, _cAa], [64 | 0, 64 | 0, 64 | 0]);
export var RegisterAgentRequest = struct(
  n0,
  _RAR,
  0,
  [_dD, _aD, _t],
  [() => DiscoveryData, () => AgentDetails, 128 | 0]
);
export var RegisterAgentResponse = struct(n0, _RARe, 0, [_aI], [0]);
export var AgentCpuCoresList = 64 | 1;

export var CapabilityArnList = 64 | 0;

export var ComponentVersionList = list(n0, _CVL, 0, () => ComponentVersion);
export var IpAddressList = 64 | 0;

export var VersionStringList = 64 | 0;

export var RegisterAgent = op(
  n0,
  _RA,
  {
    [_h]: ["POST", "/agent", 200],
  },
  () => RegisterAgentRequest,
  () => RegisterAgentResponse
);
