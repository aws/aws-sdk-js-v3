// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidParameterCombinationException as __InvalidParameterCombinationException } from "../models/index";
import {
  _AE,
  _AEC,
  _AEc,
  _AEL,
  _AET,
  _c,
  _DTA,
  _DTCO,
  _DTI,
  _DTL,
  _DTO,
  _DTW,
  _DTWe,
  _DTWSTC,
  _DTZC,
  _e,
  _IFP,
  _IPCE,
  _m,
  _MWAP,
  _MWAPR,
  _MWAPRo,
  _RI,
  _VEI,
  _WAP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessEndpoint = struct(n0, _AE, 0, [_AET, _VEI], [0, 0]);
export var AccessEndpointConfig = struct(n0, _AEC, 0, [_AEc, _IFP], [() => AccessEndpointList, 64 | 0]);
export var InvalidParameterCombinationException = error(
  n0,
  _IPCE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidParameterCombinationException
);
export var ModifyWorkspaceAccessPropertiesRequest = struct(
  n0,
  _MWAPR,
  0,
  [_RI, _WAP],
  [0, () => WorkspaceAccessProperties]
);
export var ModifyWorkspaceAccessPropertiesResult = struct(n0, _MWAPRo, 0, [], []);
export var WorkspaceAccessProperties = struct(
  n0,
  _WAP,
  0,
  [_DTW, _DTO, _DTWe, _DTI, _DTA, _DTCO, _DTZC, _DTL, _DTWSTC, _AEC],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, () => AccessEndpointConfig]
);
export var AccessEndpointList = list(n0, _AEL, 0, () => AccessEndpoint);
export var InternetFallbackProtocolList = 64 | 0;

export var ModifyWorkspaceAccessProperties = op(
  n0,
  _MWAP,
  0,
  () => ModifyWorkspaceAccessPropertiesRequest,
  () => ModifyWorkspaceAccessPropertiesResult
);
