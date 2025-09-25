// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _APNWVC,
  _APNWVCG,
  _APNWVCGR,
  _APNWVCGRs,
  _APNWVCR,
  _APNWVCRs,
  _CSR,
  _CSRR,
  _CSRRr,
  _D,
  _EPNh,
  _FAo,
  _h,
  _N,
  _PNE,
  _SR,
  _SRI,
  _TA,
  _TT,
  _TVr,
  _USR,
  _USRR,
  _USRRp,
  _VCGI,
  _VCI,
  n0,
} from "./schemas_0";
import { SipRule, SipRuleTargetApplicationList } from "./schemas_11_Sip";
import { PhoneNumberErrorList } from "./schemas_24_Phone";
import { E164PhoneNumberList } from "./schemas_43_Phone";

/* eslint no-var: 0 */

export var AssociatePhoneNumbersWithVoiceConnectorGroupRequest = struct(
  n0,
  _APNWVCGR,
  0,
  [_VCGI, _EPNh, _FAo],
  [[0, 1], [() => E164PhoneNumberList, 0], 2]
);
export var AssociatePhoneNumbersWithVoiceConnectorGroupResponse = struct(
  n0,
  _APNWVCGRs,
  0,
  [_PNE],
  [[() => PhoneNumberErrorList, 0]]
);
export var AssociatePhoneNumbersWithVoiceConnectorRequest = struct(
  n0,
  _APNWVCR,
  0,
  [_VCI, _EPNh, _FAo],
  [[0, 1], [() => E164PhoneNumberList, 0], 2]
);
export var AssociatePhoneNumbersWithVoiceConnectorResponse = struct(
  n0,
  _APNWVCRs,
  0,
  [_PNE],
  [[() => PhoneNumberErrorList, 0]]
);
export var CreateSipRuleRequest = struct(
  n0,
  _CSRR,
  0,
  [_N, _TT, _TVr, _D, _TA],
  [0, 0, 0, 2, () => SipRuleTargetApplicationList]
);
export var CreateSipRuleResponse = struct(n0, _CSRRr, 0, [_SR], [() => SipRule]);
export var UpdateSipRuleRequest = struct(
  n0,
  _USRR,
  0,
  [_SRI, _N, _D, _TA],
  [[0, 1], 0, 2, () => SipRuleTargetApplicationList]
);
export var UpdateSipRuleResponse = struct(n0, _USRRp, 0, [_SR], [() => SipRule]);
export var AssociatePhoneNumbersWithVoiceConnector = op(
  n0,
  _APNWVC,
  {
    [_h]: ["POST", "/voice-connectors/{VoiceConnectorId}?operation=associate-phone-numbers", 200],
  },
  () => AssociatePhoneNumbersWithVoiceConnectorRequest,
  () => AssociatePhoneNumbersWithVoiceConnectorResponse
);
export var AssociatePhoneNumbersWithVoiceConnectorGroup = op(
  n0,
  _APNWVCG,
  {
    [_h]: ["POST", "/voice-connector-groups/{VoiceConnectorGroupId}?operation=associate-phone-numbers", 200],
  },
  () => AssociatePhoneNumbersWithVoiceConnectorGroupRequest,
  () => AssociatePhoneNumbersWithVoiceConnectorGroupResponse
);
export var CreateSipRule = op(
  n0,
  _CSR,
  {
    [_h]: ["POST", "/sip-rules", 201],
  },
  () => CreateSipRuleRequest,
  () => CreateSipRuleResponse
);
export var UpdateSipRule = op(
  n0,
  _USR,
  {
    [_h]: ["PUT", "/sip-rules/{SipRuleId}", 202],
  },
  () => UpdateSipRuleRequest,
  () => UpdateSipRuleResponse
);
