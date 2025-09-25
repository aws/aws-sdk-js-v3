// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aA,
  _aAI,
  _aR,
  _aRANp,
  _aV,
  _eSN,
  _h,
  _ide,
  _LAVRM,
  _LAVRMR,
  _LAVRMRi,
  _lRI,
  _lSN,
  _LUAVR,
  _LUAVRR,
  _LUAVRRi,
  _mR,
  _mT,
  _nT,
  _PRI,
  _pRI,
  _rGN,
  _rIeso,
  _RM,
  _rM,
  _RML,
  _rN,
  _rT,
  _t,
  _tSN,
  _UR,
  _uR,
  _URL,
  _uRS,
  n0,
} from "./schemas_0";
import { LogicalResourceId } from "./schemas_8_App";

/* eslint no-var: 0 */

export var ListAppVersionResourceMappingsRequest = struct(n0, _LAVRMR, 0, [_aA, _aV, _nT, _mR], [0, 0, 0, 1]);
export var ListAppVersionResourceMappingsResponse = struct(n0, _LAVRMRi, 0, [_rM, _nT], [() => ResourceMappingList, 0]);
export var ListUnsupportedAppVersionResourcesRequest = struct(
  n0,
  _LUAVRR,
  0,
  [_aA, _aV, _rIeso, _nT, _mR],
  [0, 0, 0, 0, 1]
);
export var ListUnsupportedAppVersionResourcesResponse = struct(
  n0,
  _LUAVRRi,
  0,
  [_uR, _rIeso, _nT],
  [() => UnsupportedResourceList, 0, 0]
);
export var PhysicalResourceId = struct(n0, _PRI, 0, [_ide, _t, _aR, _aAI], [0, 0, 0, 0]);
export var ResourceMapping = struct(
  n0,
  _RM,
  0,
  [_rN, _lSN, _aRANp, _rGN, _mT, _pRI, _tSN, _eSN],
  [0, 0, 0, 0, 0, () => PhysicalResourceId, 0, 0]
);
export var UnsupportedResource = struct(
  n0,
  _UR,
  0,
  [_lRI, _pRI, _rT, _uRS],
  [() => LogicalResourceId, () => PhysicalResourceId, 0, 0]
);
export var ResourceMappingList = list(n0, _RML, 0, () => ResourceMapping);
export var UnsupportedResourceList = list(n0, _URL, 0, () => UnsupportedResource);
export var ListAppVersionResourceMappings = op(
  n0,
  _LAVRM,
  {
    [_h]: ["POST", "/list-app-version-resource-mappings", 200],
  },
  () => ListAppVersionResourceMappingsRequest,
  () => ListAppVersionResourceMappingsResponse
);
export var ListUnsupportedAppVersionResources = op(
  n0,
  _LUAVR,
  {
    [_h]: ["POST", "/list-unsupported-app-version-resources", 200],
  },
  () => ListUnsupportedAppVersionResourcesRequest,
  () => ListUnsupportedAppVersionResourcesResponse
);
