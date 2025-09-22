// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ResourceUnavailableException as __ResourceUnavailableException,
  UnsupportedWorkspaceConfigurationException as __UnsupportedWorkspaceConfigurationException,
} from "../models/index";
import {
  _c,
  _CWI,
  _CWIR,
  _CWIRo,
  _D,
  _DR,
  _DTMCR,
  _DTS,
  _e,
  _II,
  _M,
  _m,
  _MA,
  _MAR,
  _MARo,
  _MWP,
  _MWPR,
  _MWPRo,
  _N,
  _RI,
  _RUE,
  _SII,
  _SRo,
  _T,
  _UWCE,
  _WI,
  _WPor,
  n0,
  TagList,
} from "./schemas_0";
import { WorkspaceProperties } from "./schemas_18_Workspace";

/* eslint no-var: 0 */

export var CopyWorkspaceImageRequest = struct(n0, _CWIR, 0, [_N, _D, _SII, _SRo, _T], [0, 0, 0, 0, () => TagList]);
export var CopyWorkspaceImageResult = struct(n0, _CWIRo, 0, [_II], [0]);
export var ModifyAccountRequest = struct(n0, _MAR, 0, [_DTS, _DTMCR], [0, 0]);
export var ModifyAccountResult = struct(n0, _MARo, 0, [_M], [0]);
export var ModifyWorkspacePropertiesRequest = struct(
  n0,
  _MWPR,
  0,
  [_WI, _WPor, _DR],
  [0, () => WorkspaceProperties, 0]
);
export var ModifyWorkspacePropertiesResult = struct(n0, _MWPRo, 0, [], []);
export var ResourceUnavailableException = error(
  n0,
  _RUE,
  {
    [_e]: _c,
  },
  [_m, _RI],
  [0, 0],

  __ResourceUnavailableException
);
export var UnsupportedWorkspaceConfigurationException = error(
  n0,
  _UWCE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __UnsupportedWorkspaceConfigurationException
);
export var CopyWorkspaceImage = op(
  n0,
  _CWI,
  0,
  () => CopyWorkspaceImageRequest,
  () => CopyWorkspaceImageResult
);
export var ModifyAccount = op(
  n0,
  _MA,
  0,
  () => ModifyAccountRequest,
  () => ModifyAccountResult
);
export var ModifyWorkspaceProperties = op(
  n0,
  _MWP,
  0,
  () => ModifyWorkspacePropertiesRequest,
  () => ModifyWorkspacePropertiesResult
);
