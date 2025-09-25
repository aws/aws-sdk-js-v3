// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _h,
  _I,
  _QSu,
  _SBAWDWMG,
  _SBAWDWMGR,
  _SBAWDWMGRt,
  _SBDWDFMG,
  _SBDWDFMGR,
  _SBDWDFMGRt,
  _Ta,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var StartBulkAssociateWirelessDeviceWithMulticastGroupRequest = struct(
  n0,
  _SBAWDWMGR,
  0,
  [_I, _QSu, _Ta],
  [[0, 1], 0, () => TagList]
);
export var StartBulkAssociateWirelessDeviceWithMulticastGroupResponse = struct(n0, _SBAWDWMGRt, 0, [], []);
export var StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest = struct(
  n0,
  _SBDWDFMGR,
  0,
  [_I, _QSu, _Ta],
  [[0, 1], 0, () => TagList]
);
export var StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse = struct(n0, _SBDWDFMGRt, 0, [], []);
export var StartBulkAssociateWirelessDeviceWithMulticastGroup = op(
  n0,
  _SBAWDWMG,
  {
    [_h]: ["PATCH", "/multicast-groups/{Id}/bulk", 204],
  },
  () => StartBulkAssociateWirelessDeviceWithMulticastGroupRequest,
  () => StartBulkAssociateWirelessDeviceWithMulticastGroupResponse
);
export var StartBulkDisassociateWirelessDeviceFromMulticastGroup = op(
  n0,
  _SBDWDFMG,
  {
    [_h]: ["POST", "/multicast-groups/{Id}/bulk", 204],
  },
  () => StartBulkDisassociateWirelessDeviceFromMulticastGroupRequest,
  () => StartBulkDisassociateWirelessDeviceFromMulticastGroupResponse
);
