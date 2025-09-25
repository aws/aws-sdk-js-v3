// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _aA,
  _aAI,
  _AC,
  _aC,
  _ACL,
  _aCp,
  _aI,
  _AIM,
  _aR,
  _aV,
  _cTl,
  _DAVAC,
  _DAVACe,
  _DAVACR,
  _DAVACRe,
  _DAVACRes,
  _DAVACResc,
  _DAVRel,
  _DAVRes,
  _DAVRR,
  _DAVRRe,
  _DAVRRes,
  _DAVRResc,
  _ex,
  _h,
  _id,
  _LAVAC,
  _LAVACR,
  _LAVACRi,
  _LAVRis,
  _LAVRR,
  _LAVRRi,
  _lRI,
  _mR,
  _n,
  _nT,
  _PR,
  _pR,
  _pRh,
  _pRI,
  _PRL,
  _pRN,
  _rIeso,
  _rN,
  _rT,
  _sTo,
  _t,
  _UAVAC,
  _UAVACR,
  _UAVACRp,
  n0,
} from "./schemas_0";
import { LogicalResourceId } from "./schemas_8_App";
import { PhysicalResourceId } from "./schemas_13_App";

/* eslint no-var: 0 */

export var AppComponent = struct(n0, _AC, 0, [_n, _t, _id, _aI], [0, 0, 0, map(n0, _AIM, 0, 0, 64 | 0)]);
export var DeleteAppVersionAppComponentRequest = struct(n0, _DAVACR, 0, [_aA, _id, _cTl], [0, 0, [0, 4]]);
export var DeleteAppVersionAppComponentResponse = struct(n0, _DAVACRe, 0, [_aA, _aV, _aCp], [0, 0, () => AppComponent]);
export var DeleteAppVersionResourceRequest = struct(
  n0,
  _DAVRR,
  0,
  [_aA, _rN, _lRI, _pRI, _aR, _aAI, _cTl],
  [0, 0, () => LogicalResourceId, 0, 0, 0, [0, 4]]
);
export var DeleteAppVersionResourceResponse = struct(n0, _DAVRRe, 0, [_aA, _aV, _pR], [0, 0, () => PhysicalResource]);
export var DescribeAppVersionAppComponentRequest = struct(n0, _DAVACRes, 0, [_aA, _aV, _id], [0, 0, 0]);
export var DescribeAppVersionAppComponentResponse = struct(
  n0,
  _DAVACResc,
  0,
  [_aA, _aV, _aCp],
  [0, 0, () => AppComponent]
);
export var DescribeAppVersionResourceRequest = struct(
  n0,
  _DAVRRes,
  0,
  [_aA, _aV, _rN, _lRI, _pRI, _aR, _aAI],
  [0, 0, 0, () => LogicalResourceId, 0, 0, 0]
);
export var DescribeAppVersionResourceResponse = struct(
  n0,
  _DAVRResc,
  0,
  [_aA, _aV, _pR],
  [0, 0, () => PhysicalResource]
);
export var ListAppVersionAppComponentsRequest = struct(n0, _LAVACR, 0, [_aA, _aV, _nT, _mR], [0, 0, 0, 1]);
export var ListAppVersionAppComponentsResponse = struct(
  n0,
  _LAVACRi,
  0,
  [_aA, _aV, _aC, _nT],
  [0, 0, () => AppComponentList, 0]
);
export var ListAppVersionResourcesRequest = struct(n0, _LAVRR, 0, [_aA, _aV, _rIeso, _nT, _mR], [0, 0, 0, 0, 1]);
export var ListAppVersionResourcesResponse = struct(
  n0,
  _LAVRRi,
  0,
  [_pRh, _rIeso, _nT],
  [() => PhysicalResourceList, 0, 0]
);
export var PhysicalResource = struct(
  n0,
  _PR,
  0,
  [_rN, _lRI, _pRI, _rT, _aC, _aI, _ex, _sTo, _pRN],
  [
    0,
    () => LogicalResourceId,
    () => PhysicalResourceId,
    0,
    () => AppComponentList,
    map(n0, _AIM, 0, 0, 64 | 0),
    2,
    0,
    0,
  ]
);
export var UpdateAppVersionAppComponentRequest = struct(
  n0,
  _UAVACR,
  0,
  [_aA, _id, _n, _t, _aI],
  [0, 0, 0, 0, map(n0, _AIM, 0, 0, 64 | 0)]
);
export var UpdateAppVersionAppComponentResponse = struct(n0, _UAVACRp, 0, [_aA, _aV, _aCp], [0, 0, () => AppComponent]);
export var AppComponentList = list(n0, _ACL, 0, () => AppComponent);
export var PhysicalResourceList = list(n0, _PRL, 0, () => PhysicalResource);
export var DeleteAppVersionAppComponent = op(
  n0,
  _DAVAC,
  {
    [_h]: ["POST", "/delete-app-version-app-component", 200],
  },
  () => DeleteAppVersionAppComponentRequest,
  () => DeleteAppVersionAppComponentResponse
);
export var DeleteAppVersionResource = op(
  n0,
  _DAVRel,
  {
    [_h]: ["POST", "/delete-app-version-resource", 200],
  },
  () => DeleteAppVersionResourceRequest,
  () => DeleteAppVersionResourceResponse
);
export var DescribeAppVersionAppComponent = op(
  n0,
  _DAVACe,
  {
    [_h]: ["POST", "/describe-app-version-app-component", 200],
  },
  () => DescribeAppVersionAppComponentRequest,
  () => DescribeAppVersionAppComponentResponse
);
export var DescribeAppVersionResource = op(
  n0,
  _DAVRes,
  {
    [_h]: ["POST", "/describe-app-version-resource", 200],
  },
  () => DescribeAppVersionResourceRequest,
  () => DescribeAppVersionResourceResponse
);
export var ListAppVersionAppComponents = op(
  n0,
  _LAVAC,
  {
    [_h]: ["POST", "/list-app-version-app-components", 200],
  },
  () => ListAppVersionAppComponentsRequest,
  () => ListAppVersionAppComponentsResponse
);
export var ListAppVersionResources = op(
  n0,
  _LAVRis,
  {
    [_h]: ["POST", "/list-app-version-resources", 200],
  },
  () => ListAppVersionResourcesRequest,
  () => ListAppVersionResourcesResponse
);
export var UpdateAppVersionAppComponent = op(
  n0,
  _UAVAC,
  {
    [_h]: ["POST", "/update-app-version-app-component", 200],
  },
  () => UpdateAppVersionAppComponentRequest,
  () => UpdateAppVersionAppComponentResponse
);
