// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BDPN,
  _BDPNR,
  _BDPNRa,
  _DPNFVC,
  _DPNFVCG,
  _DPNFVCGR,
  _DPNFVCGRi,
  _DPNFVCR,
  _DPNFVCRi,
  _EC,
  _EMr,
  _EPNh,
  _h,
  _PNE,
  _PNEh,
  _PNEL,
  _PNI,
  _PNIh,
  _VCGI,
  _VCI,
  n0,
} from "./schemas_0";
import { SensitiveNonEmptyString } from "./schemas_30_Phone";
import { E164PhoneNumberList } from "./schemas_43_Phone";

/* eslint no-var: 0 */

export var BatchDeletePhoneNumberRequest = struct(n0, _BDPNR, 0, [_PNI], [64 | 0]);
export var BatchDeletePhoneNumberResponse = struct(n0, _BDPNRa, 0, [_PNE], [[() => PhoneNumberErrorList, 0]]);
export var DisassociatePhoneNumbersFromVoiceConnectorGroupRequest = struct(
  n0,
  _DPNFVCGR,
  0,
  [_VCGI, _EPNh],
  [
    [0, 1],
    [() => E164PhoneNumberList, 0],
  ]
);
export var DisassociatePhoneNumbersFromVoiceConnectorGroupResponse = struct(
  n0,
  _DPNFVCGRi,
  0,
  [_PNE],
  [[() => PhoneNumberErrorList, 0]]
);
export var DisassociatePhoneNumbersFromVoiceConnectorRequest = struct(
  n0,
  _DPNFVCR,
  0,
  [_VCI, _EPNh],
  [
    [0, 1],
    [() => E164PhoneNumberList, 0],
  ]
);
export var DisassociatePhoneNumbersFromVoiceConnectorResponse = struct(
  n0,
  _DPNFVCRi,
  0,
  [_PNE],
  [[() => PhoneNumberErrorList, 0]]
);
export var PhoneNumberError = struct(n0, _PNEh, 0, [_PNIh, _EC, _EMr], [[() => SensitiveNonEmptyString, 0], 0, 0]);
export var NonEmptyStringList = 64 | 0;

export var PhoneNumberErrorList = list(n0, _PNEL, 0, [() => PhoneNumberError, 0]);
export var BatchDeletePhoneNumber = op(
  n0,
  _BDPN,
  {
    [_h]: ["POST", "/phone-numbers?operation=batch-delete", 200],
  },
  () => BatchDeletePhoneNumberRequest,
  () => BatchDeletePhoneNumberResponse
);
export var DisassociatePhoneNumbersFromVoiceConnector = op(
  n0,
  _DPNFVC,
  {
    [_h]: ["POST", "/voice-connectors/{VoiceConnectorId}?operation=disassociate-phone-numbers", 200],
  },
  () => DisassociatePhoneNumbersFromVoiceConnectorRequest,
  () => DisassociatePhoneNumbersFromVoiceConnectorResponse
);
export var DisassociatePhoneNumbersFromVoiceConnectorGroup = op(
  n0,
  _DPNFVCG,
  {
    [_h]: ["POST", "/voice-connector-groups/{VoiceConnectorGroupId}?operation=disassociate-phone-numbers", 200],
  },
  () => DisassociatePhoneNumbersFromVoiceConnectorGroupRequest,
  () => DisassociatePhoneNumbersFromVoiceConnectorGroupResponse
);
