// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _APED,
  _APEDR,
  _APEDRs,
  _CN,
  _DECS,
  _DECSR,
  _DECSRe,
  _EA,
  _EC,
  _ECL,
  _PN,
  _UECS,
  _UECSR,
  _UECSRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateProactiveEngagementDetailsRequest = struct(n0, _APEDR, 0, [_ECL], [() => EmergencyContactList]);
export var AssociateProactiveEngagementDetailsResponse = struct(n0, _APEDRs, 0, [], []);
export var DescribeEmergencyContactSettingsRequest = struct(n0, _DECSR, 0, [], []);
export var DescribeEmergencyContactSettingsResponse = struct(n0, _DECSRe, 0, [_ECL], [() => EmergencyContactList]);
export var EmergencyContact = struct(n0, _EC, 0, [_EA, _PN, _CN], [0, 0, 0]);
export var UpdateEmergencyContactSettingsRequest = struct(n0, _UECSR, 0, [_ECL], [() => EmergencyContactList]);
export var UpdateEmergencyContactSettingsResponse = struct(n0, _UECSRp, 0, [], []);
export var EmergencyContactList = list(n0, _ECL, 0, () => EmergencyContact);
export var AssociateProactiveEngagementDetails = op(
  n0,
  _APED,
  0,
  () => AssociateProactiveEngagementDetailsRequest,
  () => AssociateProactiveEngagementDetailsResponse
);
export var DescribeEmergencyContactSettings = op(
  n0,
  _DECS,
  0,
  () => DescribeEmergencyContactSettingsRequest,
  () => DescribeEmergencyContactSettingsResponse
);
export var UpdateEmergencyContactSettings = op(
  n0,
  _UECS,
  0,
  () => UpdateEmergencyContactSettingsRequest,
  () => UpdateEmergencyContactSettingsResponse
);
